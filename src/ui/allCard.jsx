import React from 'react';
import Card from './card';

const AllCard = async () => {
    const friendPromise = await fetch('http://localhost:3000/data.json')
    const data = await friendPromise.json()
    return (
        <div className='mt-20 max-w-[1100px] container mx-auto'>
            <h1 className='text-3xl font-bold'>Your Friends</h1>
            <Card data = {data}></Card>
        </div>
    );
};

export default AllCard;