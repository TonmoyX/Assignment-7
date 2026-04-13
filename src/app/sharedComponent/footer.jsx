import Image from 'next/image';
import React from 'react';
import instagram from '@/assets/instagram.png'
import facebook from '@/assets/facebook.png'
import x from '@/assets/twitter.png'
const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-[80px]'>
            <div className='max-w-[1100px] container mx-auto'>
            <h1 className='text-4xl text-center font-bold text-white'>KeenKeeper</h1>
            <p className='text-white text-center mt-[8]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-center text-white mt-[8]'>Social Links</p>
            <div className='flex mx-auto gap-4 justify-center items-center mt-3 border-b-1 border-gray-500 pb-20'>
                <Image src={instagram} alt='facebook' width={30} height={30}></Image>
                <Image src={facebook} alt='facebook' width={30} height={30}></Image>
                <Image src={x} alt='facebook' width={30} height={30}></Image>
            </div>
            <div className='flex justify-between text-[#FAFAFA] pt-5 pb-5'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                  <div className='flex gap-6'>
                <p>Privacy Policy</p>
                <p>Terms of service</p>
                <p>Cookies</p>
            </div>   
            </div >
            
            </div>
        </div>
    );
};

export default Footer;