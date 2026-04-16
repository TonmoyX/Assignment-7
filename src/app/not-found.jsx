import Link from 'next/link';
import React from 'react';
import { BiError } from 'react-icons/bi';
import { IoHomeOutline } from 'react-icons/io5';

const NotFound = () => {
    return (
        <div className='container mx-auto justify-center mt-50 pb-20'>
            <h1 className='flex mx-auto justify-center'><BiError className='text-6xl md:text-8xl' /></h1>
            <h1 className='text-center text-6xl mt-4'><span className='text-8xl'>404 </span>Page not found</h1>
            <Link href={'/'}><button className='flex mx-auto btn bg-[#1F2937] text-white mt-20 rounded-xl'><IoHomeOutline /> Back To Home</button></Link>
        </div>
    );
};

export default NotFound;