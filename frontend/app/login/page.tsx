'use client';

import LoginForm from '@/components/LoginForm';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/app/redux';
import { Crown } from 'lucide-react';

export default function LoginPage() { 
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);
    const userRole = useAppSelector((state) => state.auth.user?.role);

    useEffect(() => {
      if (token) {
        if (userRole === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      }
    }, [token, userRole, router]);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-50 to-champagne-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="h-8 w-8 text-gold-500" />
              <h1 className="text-3xl font-playfair-display font-bold text-gold-600 dark:text-gold-400 tracking-wide">
                VIPConcierge
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 font-medium tracking-wide text-sm uppercase">
              Exclusive Member Access
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-gold-400 to-gold-600"></div>
            <div className="p-8">
              <LoginForm />
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Don't have an account?{' '}
              <a 
                href="/register" 
                className="text-gold-600 dark:text-gold-400 hover:underline font-medium"
              >
                Request Access
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}