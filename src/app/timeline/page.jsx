'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext } from 'react';
import call from '@/assets/call.png'
import Image from 'next/image';
import TextCard from './text';
import VideoCard from './video';
const TimelinePage = () => {
    const {fndData, setFndData} = useContext(UserContext);
    // console.log(fndData, 'data in timeline page')
    return (
        <div className='max-w-[1100px] mx-auto mt-8'>
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