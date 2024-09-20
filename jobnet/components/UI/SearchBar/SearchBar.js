import React from 'react'
import SP from '../../../assets/Images/SP.png'
import SP_SM from '../../../assets/Images/SP-SM.png'

import Image from 'next/image'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
    return (
        <div className='py-6 relative flex items-center justify-center'>

            <Image src={SP} width={1250} height={300} className='hidden lg:inline' />
            <Image src={SP_SM} width={800} height={300} className='lg:hidden' />

            <span className='absolute space-y-2 lg:space-y-6 w-full px-6 flex-col flex items-center'>
                <p className='font-bold text-xl lg:text-4xl'>Search for local resources</p>
                <div className='flex w-full items-center justify-center lg:max-w-2xl relative'>
                    <input placeholder='Search here' className=' w-full   border border-black/10 placeholder:text-black  lg:rounded-xl rounded-full h-10 text-sm lg:h-14 py-2 px-4' />
                    <div className='absolute right-4'>
                        <BiSearch />
                    </div>
                </div>

            </span>
        </div>
    )
}
