"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../state/authSlice';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '../state/api';
import { Lock, Mail } from 'lucide-react';
import { useAppSelector } from '../app/redux';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const [login, { isLoading, error }] = useLoginMutation();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Attempting to login...');
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });
            
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const userData = await response.json();
            console.log('Login Successful:', userData);

            dispatch(setCredentials(userData));
            router.push('/');

        } catch (err: any) {
            console.error('Login error:', err);
            if (err.data) {
                console.error('Error details:', err.data);
            } else if (err.message) {
                console.error('Error message:', err.message);
            } else {
                console.error('An unknown error occurred');
            }
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-playfair-display font-bold text-center text-gold-500 dark:text-gold-400 mb-8">
                VIP Concierge Access
            </h1>
            
            <div className="space-y-6">
                <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                            required
                        />
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 dark:bg-gray-800 dark:text-white transition-all duration-200"
                            required
                        />
                    </div>
                </div>

                {error && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-lg text-sm">
                        Invalid credentials. Please try again.
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Authenticating...
                        </>
                    ) : (
                        "Access Your Account"
                    )}
                </button>

                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <a href="/forgot-password" className="text-gold-600 dark:text-gold-400 hover:underline">
                        Forgot your password?
                    </a>
                </div>
            </div>
        </form>
    );
}