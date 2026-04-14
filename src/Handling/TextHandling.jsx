'use client'
import { UserContext } from '@/UserContextProvider';
import React, { useContext } from 'react';
import { IoMdText } from 'react-icons/io';
// now i want to this button in timeline page and when i click this button then the user name will be added in timeline page like call handling. but i am not getting how to do that. can you please help me to do that. i am new in react and next js. i am using context api for state management. so please help me to do that. thank you.
const TextHandling = ({user}) => {
    const {fndDataText, setFndDataText} = useContext(UserContext);
         console.log(fndDataText, 'data in call handling')
    
        const handleTextNow = () => {
            console.log(user, 'user in call handling')
            setFndDataText([...fndDataText, user])
            console.log(fndDataText, 'fndDataText in call handling')
        }
    return (
        <button onClick={handleTextNow} className='btn py-15 bg-[#F8FAFC] w-[180px] flex flex-col border-none'>
            <span className='text-black text-2xl'><IoMdText /></span>
            <h1 className='mt-2 text-[#1F2937]'>Text</h1>
        </button>
    );
};

export default TextHandling;