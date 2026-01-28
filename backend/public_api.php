<?php
session_start();


// Display errors on the screen
ini_set('display_errors', 1);

// Display startup errors
ini_set('display_startup_errors', 1);


error_reporting(E_ALL);

// Display errors on the screen
ini_set('display_errors', 1);

// Display startup errors
ini_set('display_startup_errors', 1);

// CORS: allow configurable origins (set ALLOWED_ORIGINS env, comma-separated)
// Default includes production panel host and local React dev server
$allowed = getenv('ALLOWED_ORIGINS') ?: 'https://panel.duotechsolutions.in,http://localhost:3001';
$allowed_origins = array_map('trim', explode(',', $allowed));
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin && in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Access-Control-Allow-Credentials: true');
} else {
    // Fallback to restrictive single origin for safety
    header("Access-Control-Allow-Origin: https://panel.duotechsolutions.in");
}
header("Vary: Origin");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include_once '../config/database.php';

// Parse the request
$request_method = $_SERVER['REQUEST_METHOD'];
$request_uri = $_SERVER['REQUEST_URI'];
$query_string = $_SERVER['QUERY_STRING'];

// Remove query string from URI
$clean_uri = str_replace('?' . $query_string, '', $request_uri);

// Get the endpoint from .htaccess rewrite or direct URL
if (isset($_GET['endpoint'])) {
    $endpoint = $_GET['endpoint'];
} else {
    // Clean up the URI
    $endpoint = str_replace('/api/public/', '', $clean_uri);
}

// Normalize the endpoint and split into non-empty parts
$endpoint = trim($endpoint, '/');
$endpoint_parts = array_values(array_filter(explode('/', $endpoint), function($p) { return $p !== ''; }));
$resource = $endpoint_parts[0] ?? '';
$id = $endpoint_parts[1] ?? null;

// Debug log after parsing to avoid undefined variable notices
error_log("API debug: endpoint='$endpoint' resource='$resource' id='" . var_export($id, true) . "' request_method='" . ($_SERVER['REQUEST_METHOD'] ?? '') . "' request_uri='" . ($_SERVER['REQUEST_URI'] ?? '') . "'");

// Database connection with defensive handling
try {
    if (!extension_loaded('pdo')) {
        sendError('PDO extension not installed', 500);
    }

    $database = new Database();
    $db = $database->getConnection();
} catch (Exception $e) {
    // Log the error for server-side debugging
    error_log('DB connection error: ' . $e->getMessage());
    sendError('Database connection failed: ' . $e->getMessage(), 500);
}

// Helper functions
function sendResponse($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit();
}

function sendError($message, $status = 404) {
    sendResponse(['error' => $message], $status);
}

// API Routes
try {
    switch("$request_method $resource") {
        // ========== POSTS ENDPOINTS ==========
        case "GET posts":
            // Get all published posts with pagination
            $page = max(1, (int)($_GET['page'] ?? 1));
            $limit = (int)($_GET['limit'] ?? 10);
            if ($limit < 1) $limit = 10;
            if ($limit > 100) $limit = 100;
            $category = $_GET['category'] ?? null;
            $search = $_GET['search'] ?? null;

            $offset = max(0, ($page - 1) * $limit);

            $query = "SELECT 
                        p.*, 
                        u.full_name as author_name,
                        c.name as category_name,
                        c.slug as category_slug
                      FROM posts p
                      LEFT JOIN users u ON p.author_id = u.id
                      LEFT JOIN categories c ON p.category_id = c.id
                      WHERE p.status = 'published'";

            $params = [];

            if ($category) {
                $query .= " AND c.slug = :category";
                $params['category'] = $category;
            }

            if ($search) {
                $query .= " AND (p.title LIKE :search OR p.content LIKE :search OR p.excerpt LIKE :search)";
                $searchTerm = "%$search%";
                $params['search'] = $searchTerm;
            }

            $query .= " ORDER BY p.published_at DESC LIMIT $limit OFFSET $offset";

            $stmt = $db->prepare($query);
            $stmt->execute($params);
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Get total count for pagination
            $countQuery = "SELECT COUNT(*) as total FROM posts p
                          LEFT JOIN categories c ON p.category_id = c.id
                          WHERE p.status = 'published'";
            
            $countStmtParams = [];
            if ($category) {
                $countQuery .= " AND c.slug = :category";
                $countStmtParams['category'] = $category;
            }
            
            $countStmt = $db->prepare($countQuery);
            $countStmt->execute($countStmtParams);
            $total = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            sendResponse([
                'posts' => $posts,
                'pagination' => [
                    'current_page' => (int)$page,
                    'per_page' => (int)$limit,
                    'total' => (int)$total,
                    'total_pages' => ceil($total / $limit)
                ]
            ]);
            break;
            
        case "GET post":
            // Get single post by ID or slug
            $identifier = $id;
            
            if (is_numeric($identifier)) {
                $query = "SELECT 
                            p.*, 
                            u.full_name as author_name,
                            c.name as category_name,
                            c.slug as category_slug
                          FROM posts p
                          LEFT JOIN users u ON p.author_id = u.id
                          LEFT JOIN categories c ON p.category_id = c.id
                          WHERE p.id = ? AND p.status = 'published'";
            } else {
                $query = "SELECT 
                            p.*, 
                            u.full_name as author_name,
                            c.name as category_name,
                            c.slug as category_slug
                          FROM posts p
                          LEFT JOIN users u ON p.author_id = u.id
                          LEFT JOIN categories c ON p.category_id = c.id
                          WHERE p.slug = ? AND p.status = 'published'";
            }
            
            $stmt = $db->prepare($query);
            $stmt->execute([$identifier]);
            $post = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($post) {
                // Get related posts (same category, excluding current)
                $relatedQuery = "SELECT 
                                    p.id, p.title, p.slug, p.excerpt, 
                                    p.featured_image, p.published_at,
                                    u.full_name as author_name
                                 FROM posts p
                                 LEFT JOIN users u ON p.author_id = u.id
                                 WHERE p.category_id = ? 
                                 AND p.id != ? 
                                 AND p.status = 'published'
                                 ORDER BY p.published_at DESC
                                 LIMIT 3";
                
                $relatedStmt = $db->prepare($relatedQuery);
                $relatedStmt->execute([$post['category_id'], $post['id']]);
                $related_posts = $relatedStmt->fetchAll(PDO::FETCH_ASSOC);
                
                $post['related_posts'] = $related_posts;
                sendResponse($post);
            } else {
                sendError('Post not found');
            }
            break;
            
        case "GET posts/latest":
            // Get latest posts
            $limit = $_GET['limit'] ?? 5;
            
            $query = "SELECT 
                        p.id, p.title, p.slug, p.excerpt, 
                        p.featured_image, p.published_at,
                        u.full_name as author_name,
                        c.name as category_name,
                        c.slug as category_slug
                      FROM posts p
                      LEFT JOIN users u ON p.author_id = u.id
                      LEFT JOIN categories c ON p.category_id = c.id
                      WHERE p.status = 'published'
                      ORDER BY p.published_at DESC
                      LIMIT ?";
            
            $stmt = $db->prepare($query);
            $stmt->execute([(int)$limit]);
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            sendResponse($posts);
            break;
            
        case "GET posts/featured":
            // Get featured posts (you can add a 'is_featured' column to posts table)
            $query = "SELECT 
                        p.id, p.title, p.slug, p.excerpt, 
                        p.featured_image, p.published_at,
                        u.full_name as author_name,
                        c.name as category_name
                      FROM posts p
                      LEFT JOIN users u ON p.author_id = u.id
                      LEFT JOIN categories c ON p.category_id = c.id
                      WHERE p.status = 'published'
                      ORDER BY p.published_at DESC
                      LIMIT 3";
            
            $stmt = $db->prepare($query);
            $stmt->execute();
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            sendResponse($posts);
            break;
            
        // ========== CATEGORIES ENDPOINTS ==========
        case "GET categories":
            // Get all categories
            $query = "SELECT c.*, 
                        COUNT(p.id) as post_count
                      FROM categories c
                      LEFT JOIN posts p ON c.id = p.category_id AND p.status = 'published'
                      GROUP BY c.id
                      ORDER BY c.name";
            
            $stmt = $db->prepare($query);
            $stmt->execute();
            $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            sendResponse($categories);
            break;
            
        case "GET category":
            // Get single category by slug with its posts
            $slug = $id;
            $page = max(1, (int)($_GET['page'] ?? 1));
            $limit = (int)($_GET['limit'] ?? 10);
            if ($limit < 1) $limit = 10;
            if ($limit > 100) $limit = 100;
            $offset = max(0, ($page - 1) * $limit);
            
            // First get category info
            $catQuery = "SELECT * FROM categories WHERE slug = ?";
            $catStmt = $db->prepare($catQuery);
            $catStmt->execute([$slug]);
            $category = $catStmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$category) {
                sendError('Category not found');
            }
            
            // Get posts for this category
            $postsQuery = "SELECT 
                            p.*, 
                            u.full_name as author_name
                          FROM posts p
                          LEFT JOIN users u ON p.author_id = u.id
                          WHERE p.category_id = :category_id AND p.status = 'published'
                          ORDER BY p.published_at DESC
                          LIMIT $limit OFFSET $offset";
            
            $postsStmt = $db->prepare($postsQuery);
            $postsStmt->execute(['category_id' => $category['id']]);
            $posts = $postsStmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Get total posts count
            $countQuery = "SELECT COUNT(*) as total FROM posts 
                          WHERE category_id = ? AND status = 'published'";
            $countStmt = $db->prepare($countQuery);
            $countStmt->execute([$category['id']]);
            $total = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            $category['posts'] = $posts;
            $category['pagination'] = [
                'current_page' => (int)$page,
                'per_page' => (int)$limit,
                'total' => (int)$total,
                'total_pages' => ceil($total / $limit)
            ];
            
            sendResponse($category);
            break;
            
        // ========== SEARCH ENDPOINT ==========
        case "GET search":
            $query = $_GET['q'] ?? '';
            $page = max(1, (int)($_GET['page'] ?? 1));
            $limit = (int)($_GET['limit'] ?? 10);
            if ($limit < 1) $limit = 10;
            if ($limit > 100) $limit = 100;
            $offset = max(0, ($page - 1) * $limit);
            
            if (strlen($query) < 2) {
                sendResponse([
                    'results' => [],
                    'query' => $query,
                    'pagination' => [
                        'current_page' => 1,
                        'per_page' => (int)$limit,
                        'total' => 0,
                        'total_pages' => 0
                    ]
                ]);
            }
            
            $searchQuery = "SELECT 
                            p.*, 
                            u.full_name as author_name,
                            c.name as category_name,
                            c.slug as category_slug
                          FROM posts p
                          LEFT JOIN users u ON p.author_id = u.id
                          LEFT JOIN categories c ON p.category_id = c.id
                          WHERE p.status = 'published'
                          AND (p.title LIKE :search OR p.content LIKE :search OR p.excerpt LIKE :search)
                          ORDER BY p.published_at DESC
                          LIMIT $limit OFFSET $offset";
            
            $searchTerm = "%$query%";
            $stmt = $db->prepare($searchQuery);
            $stmt->execute(['search' => $searchTerm]);
            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Get total count
            $countQuery = "SELECT COUNT(*) as total FROM posts 
                          WHERE status = 'published'
                          AND (title LIKE :search OR content LIKE :search OR excerpt LIKE :search)";
            $countStmt = $db->prepare($countQuery);
            $countStmt->execute(['search' => $searchTerm]);
            $total = $countStmt->fetch(PDO::FETCH_ASSOC)['total'];
            
            sendResponse([
                'results' => $results,
                'query' => $query,
                'pagination' => [
                    'current_page' => (int)$page,
                    'per_page' => (int)$limit,
                    'total' => (int)$total,
                    'total_pages' => ceil($total / $limit)
                ]
            ]);
            break;
            
        // ========== SITEMAP ==========
        case "GET sitemap":
            // Get all published posts for sitemap
            $query = "SELECT slug, updated_at FROM posts 
                      WHERE status = 'published' 
                      ORDER BY published_at DESC";
            
            $stmt = $db->prepare($query);
            $stmt->execute();
            $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
            
            // Get all categories
            $catQuery = "SELECT slug FROM categories";
            $catStmt = $db->prepare($catQuery);
            $catStmt->execute();
            $categories = $catStmt->fetchAll(PDO::FETCH_ASSOC);
            
            sendResponse([
                'posts' => $posts,
                'categories' => $categories,
                'base_url' => (getenv('SITE_URL') ?: 'https://panel.duotechsolutions.in/') // Configurable via .env
            ]);
            break;
            
        // ========== HEALTH CHECK ==========
        case "GET health":
            sendResponse([
                'status' => 'ok',
                'timestamp' => date('Y-m-d H:i:s'),
                'service' => 'Duotech Blog API'
            ]);
            break;
            
        default:
            sendError('Endpoint not found', 404);
            break;
    }
} catch (Exception $e) {
    sendError('Server error: ' . $e->getMessage(), 500);
}
?>

