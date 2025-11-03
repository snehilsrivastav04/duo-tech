export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  status?: 'active' | 'inactive';
  price?: number;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  status?: 'active' | 'inactive';
  price?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  name: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  serviceId?: string;
  productId?: string;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  amount: number;
  createdAt: Date;
}

export interface Ticket {
  id: string;
  userId: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceSubscription {
  id: string;
  userId: string;
  serviceId: string;
  status: 'active' | 'suspended' | 'cancelled';
  startDate: Date;
  endDate?: Date;
  billingCycle: 'monthly' | 'yearly';
  amount: number;
}

export interface AdminStats {
  totalUsers: number;
  totalOrders: number;
  activeServices: number;
  totalRevenue: number;
}