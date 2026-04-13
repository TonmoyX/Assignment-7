'use client'
import React from 'react';
import Link from 'next/link';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const link = (
        <>
            <li><Link href={'/'} className={`${pathname == '/' ? 'bg-[#244D3F] text-white' : ''}`}><IoHomeOutline />
                Home</Link></li>
            <li><Link href={'/timeline'} className={`${pathname == '/timeline' ? 'bg-[#244D3F] text-white' : ''}`}><IoTimeOutline />
                Timeline</Link></li>
            <li><Link href={'/stats'} className={`${pathname == '/stats' ? 'bg-[#244D3F] text-white' : ''}`}><ImStatsDots />
                Stats</Link></li>
        </>
    )
    return (
        <div className=''>
            <div className="navbar mx-auto border-b-1 border-gray-100 px-20">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            { link  }
                        </ul>
                    </div>
                    <a className="font-bold text-2xl">Keen<span className='text-[#244D3F]'>Keeper</span></a>
                </div>
                <div className="navbar-end hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {link}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;