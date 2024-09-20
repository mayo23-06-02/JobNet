'use client'
import React from 'react'
import Logo from '../UI/Reusable/Logo/Logo'
import Button from '../UI/Button/Button'
import { BiMenu } from 'react-icons/bi'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

export default function MainHeader() {
    const router = useRouter()
    return (
        <div className=' lg:px-16 py-4 lg:py-8 px-6 flex justify-between lg:justify-center w-full bg-white shadow-sm'>
            <div className='max-w-[1280px] w-full flex items-center justify-between'>
                <div className=''>
                    <Logo />
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex space-x-8'>
                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>How it works?</p>
                        </li>
                        <Link href={'../../'}>

                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>About Us</p>
                        </li>
                        </Link>
                            <li onClick={()=>{
                                router.push('../../search')
                                setCookie("query"," ")
                            }} className='cursor-pointer font-bold hover:underline'>
                                <p>Search</p>
                            </li>
                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>Contact Us</p>
                        </li>
                    </ul>
                </div>
                <div className='w-48 hidden lg:block'>
                    <Button label={'Log Out'} />
                </div>
                <div className='lg:hidden'>
                    <BiMenu className='text-3xl active:scale-105 text-[#0E1230]' />
                </div>
            </div>
        </div>
    )
}
