'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { toast } from 'react-toastify';
// import { GiConsoleController } from 'react-icons/gi';

const CallHandling = ({ user }) => {

    const { fndData, setFndData } = useContext(UserContext);
    //  console.log(fndData, 'data in call handling')

    const handleCallNow = () => {
        // console.log(user, 'user in call handling')
        setFndData([...fndData, user])
        toast.success(`Call with ${user.name}`)
        // console.log(fndData, 'fndData in call handling')
    }
    return (
        <button onClick={handleCallNow} className='btn py-15 bg-[#F8FAFC] w-[180px] flex flex-col border-none'>
            <span className='text-black text-2xl'><FiPhoneCall /></span>
            <h1 className='mt-2 text-[#1F2937]'>Call</h1>
        </button>
    );
};

export default CallHandling;