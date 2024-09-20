"use client"
import React, { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import Image from 'next/image';
import { BiBriefcase, BiEnvelope, BiLocationPlus, BiMessage, BiPhone, BiSolidStar, BiStar, BiTrophy } from 'react-icons/bi';
import { TbLocation } from 'react-icons/tb';
import Button from '../UI/Button/Button';

import P01 from '../../assets/Images/1_1.jpg'
import P02 from '../../assets/Images/2_2.jpg'
import P03 from '../../assets/Images/3_3.jpg'
import P04 from '../../assets/Images/4_4.jpg'
import P05 from '../../assets/Images/5_5.jpg'
import P06 from '../../assets/Images/6_6.jpg'


export default function WorkerMain() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const cookies = useCookies();
    const userEmail = cookies.get('userEmail');

    const pictures = [P01, P02, P03, P04, P05, P06];
    function randomPicture() {
        const randomIndex = Math.floor(Math.random() * pictures.length);
        return pictures[randomIndex];
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/auth');
                const data = await res.json();
                setUsers(data);

                const selectedUser = data.find(
                    (user) => user.email === userEmail
                );

                setUser(selectedUser);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userEmail]);

    console.log(user);


    return (
        <div className='flex flex-col pt-8 lg:pt-16 px-4 lg:px-0 space-y-8'>
            <div className='flex items-center space-x-4 '>
                <div>
                    <Image src={randomPicture()} width={100} height={200} className='rounded-full hidden lg:inline' />
                    <Image src={randomPicture()} width={60} height={200} className='rounded-full lg:hidden' />

                </div>
                <div className=''>
                    <div className='flex font-bold lg:text-3xl text-lg text-black space-x-2'>
                        <p>{user?.name}</p>
                        <p>{user?.surname}</p>
                    </div>
                    <div className='flex items-center space-x-2 text-xs'>
                        <p className='text-gray-500'>{user?.jobCategory} </p>
                        <div className='bg-gray-400 w-0.5 h-2' />
                        <p className='text-gray-500'>{user?.yearsOfExperience} years of experience</p>
                    </div>
                </div>
            </div>
            <div className='flex lg:flex-row flex-col justify-between space-y-8 lg:space-y-0 lg:space-x-6'>
                <div className='lg:max-w-[35vw] space-y-6'>
                    <div>
                        <ul className='flex items-center space-x-2'>
                            <li  >
                                <div className='flex lg:max-w-32 justify-center rounded-full lg:text-sm text-xs   items-center space-x-2 border border-black/30 py-1 px-4'>
                                    <BiBriefcase />
                                    <p>About</p>
                                </div>
                            </li>
                          
                        </ul>
                    </div>
                    <div className='flex flex-col lg:max-w-[40vw] space-y-2'>
                        <p className='font-bold lg:text-xl'>Short Bio</p>
                        <p className='text-sm text-black/80'>{user?.shortBio}</p>
                    </div>
                    <div className='space-y-3'>
                        <p className='font-bold lg:text-xl'>Service Offered</p>
                        <div>
                            <ul className='text-sm  text-black/80 space-y-2'>
                                <li className=' space-y-1'>
                                    <p className='font-bold'>{user?.servicesOffered[0].service_name}</p>
                                    <p>{user?.servicesOffered[0].description}</p>
                                </li>
                                <li className=' space-y-1'>
                                    <p className='font-bold'>{user?.servicesOffered[1].service_name}</p>
                                    <p>{user?.servicesOffered[1].description}</p>
                                </li>
                                <li className=' space-y-1'>
                                    <p className='font-bold'>{user?.servicesOffered[2].service_name}</p>
                                    <p>{user?.servicesOffered[2].description}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:max-w-[30vw] space-y-4'>
                    <div className='bg-[#EEE9E9] bg-opacity-60 rounded-xl w-full px-6 py-8 space-y-5'>
                        <div>
                            <p className='font-bold text-2xl lg:text-3xl'>E{user?.rateChargePerHour} /hour</p>
                            <p className='font-thin'>Avg. Price</p>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='border p-2 h-10 w-10 flex items-center justify-center border-black/20 rounded-full'>
                                <BiPhone />
                            </div>
                            <div className='-space-y-1'>
                                <p>{user?.phoneNumber}</p>
                                <p className='text-xs text-black/50'>Phone Number</p>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='border p-2 h-10 w-10 flex items-center justify-center border-black/20 rounded-full'>
                                <BiEnvelope />
                            </div>
                            <div className='-space-y-1'>
                                <p>{user?.email}</p>
                                <p className='text-xs text-black/50'>Email Address</p>
                            </div>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='border p-2 h-10 w-10 flex items-center justify-center border-black/20 rounded-full'>
                                <BiLocationPlus />
                            </div>
                            <div className='-space-y-1'>
                                <p>{user?.location}</p>
                                <p className='text-xs text-black/50'>Location</p>
                            </div>
                        </div>
                    </div>
                    <div className=' rounded-xl w-full px-6 py-8 space-y-5'>
                        <div>
                            <p className='font-bold lg:text-xl '>Client Reviews</p>
                        </div>
                        <div className='flex items-start space-x-6'>
                            <div className='flex items-center space-x-1'>
                                <BiSolidStar className='text-2xl text-green-600' />
                                <p>{user?.clientReviews[0].rating}</p>
                            </div>
                            <p className='text-sm text-black/80'>"{user?.clientReviews[0].review}"</p>
                        </div>
                        <div className='flex items-start space-x-6'>
                            <div className='flex items-center space-x-1'>
                                <BiSolidStar className='text-2xl text-green-600' />
                                <p>{user?.clientReviews[1].rating}</p>
                            </div>
                            <p className='text-sm text-black/80'>"{user?.clientReviews[1].review}"</p>
                        </div>
                        <div className='flex items-start space-x-6'>
                            <div className='flex items-center space-x-1'>
                                <BiSolidStar className='text-2xl text-green-600' />
                                <p>{user?.clientReviews[0].rating}</p>
                            </div>
                            <p className='text-sm text-black/80'>"{user?.clientReviews[0].review}"</p>
                        </div>
                    </div>
                    <div className='pb-16 lg:hidden'>
                        <Button label={"Call Now"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
