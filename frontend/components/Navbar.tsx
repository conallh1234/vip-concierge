"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode, setIsSidebarCollapsed } from '@/state';
import { Bell, Menu, Moon, Settings, Sun } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { logout } from '@/state/authSlice';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed);
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    const [isSettingsOpen, setSettingsOpen] = useState(false);
    const settingsRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const toggleSidebar = () => {
        dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
    };

    const toggleDarkMode = () => {
        dispatch(setIsDarkMode(!isDarkMode));
    };

    const toggleSettingsMenu = () => {
        setSettingsOpen(!isSettingsOpen);
    };

    // Close the menu if clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
                setSettingsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
        console.log('User logged out');
    };

    return (
        <div className='flex justify-between items-center w-full mb-7 px-3'>
            {/* LEFT SIDE */}
            <div className="flex justify-between items-center gap-5">
                <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
                    <Menu className='w-4 h-4' />
                </button>
                <div className="relative">
                    <input 
                        type="search" 
                        placeholder='Start typing to search students & courses' 
                        className='pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500' 
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Bell className='text-gray-500' size={20} />
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-between items-center gap-5">
                <div className="hidden md:flex justify-between items-center gap-5">
                    <div>
                        <button onClick={toggleDarkMode}>
                            {isDarkMode ? (
                                <Sun className='cursor-pointer text-gray-500' />
                            ) : (
                                <Moon className='cursor-pointer text-gray-500' />
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <Bell className='cursor-pointer text-gray-500' size={24} />
                        <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                            3
                        </span>
                    </div>
                    <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3' />
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className='w-9 h-9'>image</div>
                        <span className='font-semibold'>User</span>
                    </div>
                </div>

                {/* Settings Icon */}
                <div className="relative">
                    <button onClick={toggleSettingsMenu}>
                        <Settings className='cursor-pointer text-gray-500' size={24} />
                    </button>
                    {/* Context Menu */}
                    {isSettingsOpen && (
                        <div
                        ref={settingsRef}
                        className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                    >
                        <Link href="/settings/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Profile
                        </Link>
                        <Link href="/settings/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            Account
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
