'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext, useState } from 'react';
// import call from '@/assets/call.png'
// import Image from 'next/image';
import TextCard from './text';
import VideoCard from './video';
import { BiError } from 'react-icons/bi';
import CallData from './call';
const TimelinePage = () => {
    const { fndData, setFndData } = useContext(UserContext);
    console.log(fndData, setFndData, 'data in timeline page')
    const [isActive, setIsActive] = useState('call');
    if (fndData.length === 0) {
        return (
            <div className='max-w-[1100px] mx-auto mt-8 pb-35'>
                <h1 className='text-2xl font-bold mb-5'>Timeline </h1>
                <p><BiError className='text-6xl text-gray-500 mx-auto mt-50' /></p>
                <p className='text-gray-500 font-bold text-6xl text-center mt-[5]'>Empty Timeline....!!!</p>
            </div>
        );
    }
    // Filter timeline ⬇️
    return (
        <div className='lg:max-w-[1100px] mx-auto mt-8'>
            <h1 className='text-2xl font-bold mb-5'>Timeline </h1>
            <div className="dropdown bg-white dropdown-start mb-4">
                <div tabIndex={0} role="button" className="btn m-1 w-50 border-1 border-gray-200 bg-white text-[#64748B] ">{isActive === 'call' ? 'Filter timeline ⬇️' : isActive === 'text' ? 'Text ⬇️' : isActive === 'video' ? 'Video Call ⬇️' : ''}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 space-y-1 shadow-sm">
                    <li><button onClick={() => setIsActive('call')} className={`btn border-none ${isActive === 'call' ? 'bg-[#244D3F] text-white' : 'bg-white text-black'}`}>Call</button></li>
                    <li><button onClick={() => setIsActive('text')} className={`btn border-none ${isActive === 'text' ? 'bg-[#244D3F] text-white' : 'bg-white text-black'}`}>Text</button></li>
                    <li><button onClick={() => setIsActive('video')} className={`btn border-none ${isActive === 'video' ? 'bg-[#244D3F] text-white' : 'bg-white text-black'}`}>Video Call</button></li>
                </ul>
            </div>
            {
                isActive === 'text' && (
                    <>
                        <TextCard />
                        <CallData />
                        <VideoCard />
                    </>
                )
            }
            {
                isActive === 'video' && (
                    <>
                        <VideoCard />
                        <CallData />
                        <TextCard />
                    </>
                )
            }
            {
                isActive === 'call' && (
                    <div>
                        <CallData />
                        <TextCard />
                        <VideoCard />
                    </div>
                )}
        </div>
    );
};

export default TimelinePage;