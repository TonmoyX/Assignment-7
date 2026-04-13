import Image from 'next/image';
import React from 'react';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdText } from 'react-icons/io';
import { MdNotificationsPaused } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';

const UserDetails = async ({ params }) => {
    const { userId } = await params;
    // console.log(userId)
    const promise = await fetch('http://localhost:3000/data.json');
    const users = await promise.json();
    // console.log(users)

    const user = users.find(user => user.id == userId);
    // console.log(user);
    return (
        <div className='pt-20 bg-[#F8FAFC]'>
            {
                <div className='container max-w-[1110px] mx-auto grid grid-cols-3 gap-20 mb-20'>
                    <div className='col-span-1'>
                        <div className="card w-[350px] shadow-xl">
                            <figure className="px-10 pt-10">
                                <Image src={user.picture} alt={user.name} width={80} height={80} className='rounded-full'></Image>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{user.name}</h2>
                                {/* <p className='text-[#64748B]'>{user.days_since_contact}d ago</p> */}
                                {/* <p>{JSON.stringify(user.tags)}</p> */}
                                <p className={`${user.status == 'Almost Due' ? 'bg-[#EFAD44] text-white px-2 rounded-full' : user.status == 'Overdue' ? 'bg-[#EF4444] text-white px-2 rounded-full' : user.status == 'On Track' ? 'bg-[#244D3F] text-white px-2 rounded-full' : ''}`}>{user.status}</p>
                                <div className='flex gap-4'> {user.tags.slice(0, 2).map((fndTag, ind) => (<p key={ind} className='flex gap-1 bg-[#CBFADB] rounded-full px-2'>{fndTag}</p>))}</div>
                                <p className='text-[#64748B]'>{user.bio}</p>
                                <p className='text-[#64748B]'>Preferred: {user.email}</p>
                            </div>
                        </div>
                        <div className='card mt-4 w-[350px] shadow-xl'>
                            <h1 className='btn bg-white text-[#1F2937] border-none'><MdNotificationsPaused />
                                Snooze 2 Weeks</h1>
                        </div>
                        <div className='card mt-4 w-[350px] shadow-xl'>
                            <h1 className='btn bg-white text-[#1F2937] border-none'><FiArchive />
                                Archive</h1>
                        </div>
                        <div className='card mt-4 w-[350px] shadow-xl'>
                            <h1 className='btn bg-white text-[#EF4444] border-none'><RiDeleteBinLine/>
                                Delete</h1>
                        </div>
                    </div>


                    <div className='col-span-2'>
                        <div className='grid grid-cols-3 gap-14'>
                            <div className='card  shadow-xl text-center w-[200px] py-8'>
                             <h1 className='text-[#244D3F] text-2xl font-bold'>{user.days_since_contact}</h1>
                             <p className='text-[#64748B] mt-2'>Days Since Count</p>
                            </div>
                            <div className='card shadow-xl  text-center w-[200px] py-8'>
                             <h1 className='text-[#244D3F] text-2xl font-bold'>{user.goal}</h1>
                             <p className='text-[#64748B] mt-2'>Goal (Days)</p>
                            </div>
                            <div className='card shadow-xl text-center w-[200px] py-8'>
                             <h1 className='text-[#244D3F] text-2xl font-bold'>{user.next_due_date}</h1>
                             <p className='text-[#64748B] mt-2'>Next Due</p>
                            </div>
                    </div>



                    <div className='flex justify-between items-center rounded-xl bg-white  mt-8 pl-6 py-6'>
                        <div className=''>
                            <h1 className='text-[#244D3F]'>Relationship Goal</h1>
                            <h1 className='text-[#64748B] mt-2'>Connect every <span className='text-[#1F2937]'>{user.goal} days</span></h1>
                        </div>
                        <button  className='btn mr-10 bg-[#F8FAFC] text-[#1F2937] border-none '>Edit</button>
                    </div>



                    <div className='mt-8 pl-6 bg-white pb-6'>
                        <h1 className='text-[#244D3F] pt-6'>Quick Check-In</h1>
                        <div className='mt-6 grid grid-cols-3 gap-4'>
                            {/* <div className='btn bg-[#F8FAFC] w-60 py-4 text-center'>
                                <h1 className='flex mx-auto justify-center'><FiPhoneCall /></h1>
                                <h1 className='mt-2 text-[#1F2937]'>Call</h1>
                            </div> */}

                            <button className='btn py-15 bg-[#F8FAFC] w-[180px] flex flex-col border-none'>
                                <span className='text-black text-2xl'><FiPhoneCall /></span>
                                <h1 className='mt-2 text-[#1F2937]'>Call</h1>
                            </button>
                            <button className='btn py-15 bg-[#F8FAFC] w-[180px] flex flex-col border-none'>
                                <span className='text-black text-2xl'><IoMdText /></span>
                                <h1 className='mt-2 text-[#1F2937]'>Text</h1>
                            </button>
                            <button className='btn py-15 bg-[#F8FAFC] w-[180px] flex flex-col border-none'>
                                <span className='text-black text-2xl'><HiOutlineVideoCamera /></span>
                                <h1 className='mt-2 text-[#1F2937]'>Video</h1>
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            }
        </div>
    );
};

export default UserDetails; <h1>User Details</h1>