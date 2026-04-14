'use client'
import UserContextProvider from '@/UserContextProvider';
import React from 'react';

const Providers = ({ children }) => {
    return (
        <div>
            <UserContextProvider>
                {children}
            </UserContextProvider>
        </div>
    );
};

export default Providers;