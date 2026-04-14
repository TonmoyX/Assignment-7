'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RiseLoader } from 'react-spinners';

const Card = ({ data }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (data?.length > 0) {
            setLoading(false);
        }
    }, [data, setLoading]);

    if (loading) {
       return (
        <div className='flex justify-center items-center h-64'>
            <p className='text-gray-500 text-xl'><RiseLoader /></p>
        </div>
       )
    }

    return (
        <div className='container mx-auto grid grid-cols-4 gap-6 mt-8'>
            {
                
                data.map((fndData) => {
                    return (
                        <Link key={fndData.id} href={`/home/${fndData.id}`}>
                            <div>
                                <div className="card w-[259px] shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <Image src={fndData.picture} alt={fndData.name} width={80} height={80} className='rounded-full' />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{fndData.name}</h2>
                                        <p className='text-[#64748B]'>{fndData.days_since_contact}d ago</p>
                                        <div className='flex gap-4'>
                                            {fndData.tags.slice(0, 2).map((fndTag, ind) => (
                                                <p key={ind} className='flex gap-1 bg-[#CBFADB] rounded-full px-2'>{fndTag}</p>
                                            ))}
                                        </div>
                                        <p className={`${fndData.status == 'Almost Due' ? 'bg-[#EFAD44] text-white px-2 rounded-full' : fndData.status == 'Overdue' ? 'bg-[#EF4444] text-white px-2 rounded-full' : fndData.status == 'On Track' ? 'bg-[#244D3F] text-white px-2 rounded-full' : ''}`}>
                                            {fndData.status}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Card;