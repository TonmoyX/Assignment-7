import React from 'react';
import { BiError } from 'react-icons/bi';

const NotFound = () => {
    return (
        <div className='container mx-auto justify-center mt-50 pb-20'>
            <h1 className='flex mx-auto justify-center'><BiError className='text-6xl md:text-8xl' /></h1>
            <h1 className='text-center text-6xl mt-4'>Page not found</h1>
        </div>
    );
};

export default NotFound;