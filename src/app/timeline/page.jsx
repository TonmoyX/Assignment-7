'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext } from 'react';
import call from '@/assets/call.png'
import Image from 'next/image';
import TextCard from './text';
import VideoCard from './video';
import { BiError } from 'react-icons/bi';
const TimelinePage = () => {
    const {fndData, setFndData} = useContext(UserContext);
    // console.log(fndData, 'data in timeline page')
    if(fndData.length === 0){
        return (
            <div className='max-w-[1100px] mx-auto mt-8 pb-35'>
                <h1 className='text-2xl font-bold mb-5'>Timeline </h1>
                <p><BiError className='text-6xl text-gray-500 mx-auto mt-6'/></p>
                <p className='text-gray-500 font-bold text-6xl text-center mt-[5]'>Empty Timeline....!!!</p>
            </div>
        );
    }
    return (
        <div className='max-w-[1100px] mx-auto mt-8'>
            <h1 className='text-2xl font-bold mb-5'>Timeline </h1>
            {
                fndData.map((data, index) => 
                <div key={index} className='bg-[#F8FAFC] p-5 rounded-lg mb-5 flex items-center gap-5'>
                    <Image src={call} alt={data.name} width={30} height={30} className='rounded-full' />
                    <div>
                        <h1 className='text-xl'><span className='text-2xl text-[#244D3F]'>Call</span> with {data.name}</h1>
                        <p className='text-gray-500'>
                     {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                     </p>
                    </div>
                </div>)
               
            }
             <TextCard/>
             <VideoCard/>
        </div>
    );
};

export default TimelinePage;