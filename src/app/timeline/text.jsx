import React, { useContext } from 'react';
import Image from 'next/image';
import text from '@/assets/text.png'
import { UserContext } from '@/UserContextProvider';
const TextCard = () => {
    const { fndDataText, setFndDataText } = useContext(UserContext);
    return (
        <div>
            {
                fndDataText.map((datatext, index) =>
                    <div key={index} className='bg-[#F8FAFC] p-5 rounded-lg mb-5 flex items-center gap-5'>
                        <Image src={text} alt={datatext.name} width={30} height={30} className='rounded-full' />
                        <div>
                            <h1 className='text-xl'><span className='text-2xl text-[#244D3F]'>Text</span> with {datatext.name}</h1>
                            <p className='text-gray-500'>
                                {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default TextCard;