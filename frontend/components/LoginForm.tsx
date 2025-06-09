"use client";

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../state/authSlice'; // Import the setCredentials action
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '../state/api';
import { GraduationCap } from 'lucide-react';
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
        // Make a POST request to the login endpoint
        // Use login mutation which performs POST request to endpoint.
        //const userData = await login({email, password}).unwrap();
        //console.log('Login Successful: ', response)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
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

    } catch (err : any) {
        console.error('Login error:', err);
        if (err.data) {
            // If the error has a response body
            console.error('Error details:', err.data);
        } else if (err.message) {
            // If it's a JavaScript error
            console.error('Error message:', err.message);
        } else {
            console.error('An unknown error occurred');
        }
    }
  };

  return (
    <form onSubmit={handleLogin} className='space-y-6'>
        <h1 className="text-2xl mb-4">Login</h1>
        <div>
        <label htmlFor='email'>Email</label>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-slate-400 rounded mt-1"
            required
            />
        </div>
        <div>
        <label htmlFor='password'>Password</label>
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-slate-400 rounded mt-1"
            required
            />
        </div>
            {error && <p className="text-red-500 mb-4">Error!</p>}
        <div>
            <button className='w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm' type='submit'>Login</button>
        </div>
    </form>
  );
}
