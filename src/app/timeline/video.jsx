import Image from 'next/image';
import React from 'react';
import video from '@/assets/video.png'
import { UserContext } from '@/UserContextProvider';
import { useContext } from 'react';

const VideoCard = () => {
    const { fndDataVdo, setFndDataVdo } = useContext(UserContext);
    return (
        <div>
            {
                fndDataVdo.map((datavdo, index) =>
                    <div key={index} className='bg-[#F8FAFC] p-5 rounded-lg mb-5 flex items-center gap-5'>
                        <Image src={video} alt={datavdo.name} width={30} height={30} className='rounded-full' />
                        <div>
                            <h1 className='text-xl'><span className='text-2xl text-[#244D3F]'>Video</span> with {datavdo.name}</h1>
                            <p className='text-gray-500'>
                                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default VideoCard;