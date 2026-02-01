import React from 'react';
import { Outlet } from 'react-router';
import loginImg from '../assets/login.png';
import Logo from '../components/logo/Logo';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 py-6">
                
                <Logo />

                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-10">
                    
                    {/* form side */}
                    <div className="flex-1 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <Outlet />
                    </div>

                    {/* image side */}
                  <div className="flex-1 hidden lg:flex justify-center">
    <img 
        src={loginImg} 
        alt="Login Illustration" 
        className="max-w-lg w-full"
    />
</div>

                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
