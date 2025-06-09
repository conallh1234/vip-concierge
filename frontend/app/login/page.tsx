'use client';

import LoginForm from '@/components/LoginForm';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/app/redux'; // Adjust the path if necessary


export default function LoginPage() { 
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token); // Access the auth token from the Redux store
    const userRole = useAppSelector((state) => state.auth.user?.role); // Access the user's role from the Redux store

    useEffect(() => {
      if (token) {
        // Redirect based on user role
        if (userRole === 'admin') {
          router.push('/admin'); // Redirect to the admin panel
        } else {
          router.push('/dashboard'); // Redirect to the user dashboard
        }
      }
    }, [token, userRole, router]);

    return (
      <div className="min-h-screen flex flex-col justify-center light"> {/* Force light mode */}
        <div className="max-w-md w-full mx-auto">
          <div className='text-center font-medium text-xl'>StudentHub</div>
          <div className='text-3xl font-bold text-gray-500 mt-2 text-center'>Login Page</div>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-slate-400">
          <LoginForm />       
        </div>
      </div>
    );
}
