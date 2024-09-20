"use client"
import Image from 'next/image'
import React from 'react'
import CardImage from '../../../assets/Images/Card.jpg'
import { BiSolidStar, BiStar } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies';


export default function Card({ name, surname, bio, email, rating, experience, rateCharge, profilePicture }) {

    const router = useRouter();
    const cookies = useCookies();


    const handleCardClick = () => {
        cookies.set('userEmail', email);
        router.push("../../../worker");
    }

    return (
        <div className='lg:px-2 px-1 space-y-2 cursor-pointer hover:scale-105 ease-in-out duration-300' onClick={handleCardClick} >
            <div className='relative flex flex-col'>
                <Image src={profilePicture} width={400} height={200} className='  bottom-0 right-0 rounded-t-lg' />
                <span className='absolute top-0 right-0 p-2 text-xs space-x-2  text-white text-shadow-sm rounded-full flex items-center'><BiSolidStar /> 4.5 </span>
                <div className='border border-t-0 px-4 py-4 rounded-b-lg space-y-2'>
                    <div className='grid grid-cols-7 '>
                        <div className='col-span-5'>
                            <div className='font-semibold text-sm line-clamp-1'>
                                <p>{name} {surname}</p>
                            </div>
                            <p className='text-[10px] text-gray-500'>{experience} years of experience</p>
                        </div>
                        <div className='flex justify-end col-span-2  font-bold'>

                            <div className='flex space-x-1 items-end flex-col'>
                                <p className='text-green-500 font-bold'>E{rateCharge}</p>
                                <p className='text-[8px] font-light text-gray-500'>p/hr</p>
                            </div>
                        </div>
                    </div>
                    <div className='line-clamp-3 text-xs text-gray-500'>
                        <p>{bio}</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
