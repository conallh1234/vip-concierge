'use client';

import RegisterForm from '@/components/forms/RegisterForm';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/app/redux';
import { Crown, Gem } from 'lucide-react';

export default function RegisterPage() { 
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
      if (token) {
        router.push('/dashboard');
      }
    }, [token, router]);

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-50 to-champagne-100 dark:from-gray-900 dark:to-gray-800 p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown className="h-8 w-8 text-gold-500" />
              <h1 className="text-3xl font-playfair-display font-bold text-gold-600 dark:text-gold-400 tracking-wide">
                VIPConcierge
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Gem className="h-5 w-5 text-gold-400" />
              <p className="text-gray-600 dark:text-gray-300 font-medium tracking-wide text-sm uppercase">
                Exclusive Membership Registration
              </p>
              <Gem className="h-5 w-5 text-gold-400" />
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600"></div>
            <div className="p-8">
              <RegisterForm />
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>By registering, you agree to our{' '}
              <a 
                href="/terms" 
                className="text-gold-600 dark:text-gold-400 hover:underline"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a 
                href="/privacy" 
                className="text-gold-600 dark:text-gold-400 hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    );
}