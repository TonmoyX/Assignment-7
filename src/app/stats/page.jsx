'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const StatsPage = () => {

    const { fndData, fndDataText, fndDataVdo } = useContext(UserContext)

    const data = [
        { name: 'Call', value: fndData.length, fill: '#0088FE' },
        { name: 'Text', value: fndDataText.length, fill: '#00C49F' },
        { name: 'Video Call', value: fndDataVdo.length, fill: '#FFBB28' },
    ];
    return (
        <div className='lg:max-w-[1100px] flex flex-col mx-auto justify-center'>
            <h1 className='text-3xl text-[#1F2937] font-bold mb-4 mt-5'>Friendship Analytics</h1>
            <div className='border-1 border-gray-200 mb-10'>
                <h1 className='text-xl p-4'>By Interaction Type</h1>
                <PieChart className='flex mx-auto justify-center' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    {/* <RechartsDevtools /> */}
                    <Legend></Legend>
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;