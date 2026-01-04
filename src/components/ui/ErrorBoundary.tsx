import React from 'react';
import MainLayout from '../layout/MainLayout';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: Error }> {
  state = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <MainLayout>
          <div className="min-h-screen flex items-center justify-center" role="alert">
            <p className="text-xl text-gray-600 dark:text-gray-300">Something went wrong. Please try again later.</p>
          </div>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
