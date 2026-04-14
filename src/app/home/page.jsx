import AllCard from '@/ui/allCard';
import React from 'react';
const HomePage = () => {
    return (
        <div className='bg-[#F8FAFC] pb-20'>
            <h1 className='pt-[80px] text-4xl text-center text-[#1F2937]'>Friends to keep close in your life</h1>
            <p className='text-[#64748B] text-xl mt-8 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br></br>
                relationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white flex mx-auto mt-8'>+ Add a Friend</button>
                <div className='container mx-auto'>
                    <AllCard></AllCard>
                </div>
        </div>
    );
};

export default HomePage;