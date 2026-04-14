import React from 'react';
import Card from './card';
const AllCard = async () => {
    const friendPromise = await fetch('http://localhost:3000/data.json')
    const data = await friendPromise.json()
    return (
        <div className='mt-10 max-w-[1100px] container mx-auto'>

            <div className='grid grid-cols-4 gap-6 mb-10'>
                <div className='card shadow-xl py-8 text-center'>
                    <h1 className='text-xl font-bold text-[#244D3F]'>{data.length}</h1>
                    <h1 className='text-[#64748B]'>Total Friends</h1>
                </div>
                <div className='card shadow-xl py-8 text-center'>
                    <h1 className='text-xl font-bold text-[#244D3F]'>4</h1>
                    <h1 className='text-[#64748B]'>On Track</h1>
                </div>
                <div className='card shadow-xl py-8 text-center'>
                    <h1 className='text-xl font-bold text-[#244D3F]'>6</h1>
                    <h1 className='text-[#64748B]'>Need Attention</h1>
                </div>
                <div className='card shadow-xl py-8 text-center'>
                    <h1 className='text-xl font-bold text-[#244D3F]'>12</h1>
                    <h1 className='text-[#64748B]'>Interactions This Month</h1>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>Your Friends</h1>
            <Card data = {data}></Card>
        </div>
    );
};

export default AllCard;