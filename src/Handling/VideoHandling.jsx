'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext } from 'react';
import { HiOutlineVideoCamera } from 'react-icons/hi';

const VideoHandling = ({user}) => {
    const {fndDataVdo, setFndDataVdo} = useContext(UserContext);
    const handleVideoNow = () => {
        setFndDataVdo([...fndDataVdo, user])
    }
    return (
        <button onClick={handleVideoNow} className='btn py-15 bg-[#F8FAFC] w-[180px] flex flex-col border-none'>
            <span className='text-black text-2xl'><HiOutlineVideoCamera /></span>
            <h1 className='mt-2 text-[#1F2937]'>Video</h1>
        </button>
    );
};

export default VideoHandling;