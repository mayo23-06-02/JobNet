import React from 'react'
import ImagePoster from '../../../../assets/Images/LoginSM2.png'
import Image from 'next/image'


export default function ImageAuthSM() {
    return (
        <div className='relative'>
            <div className='absolute top-16
             flex-col text-white  w-full flex items-center justify-center'>
                <div>
                    <p className='font-bold text-2xl'>Welcome back!</p>
                </div>
                <div className='flex space-y-2 flex-col items-center'>
            </div>
            </div>
            <Image src={ImagePoster} width={700} height={500} className='lg:hidden' />
        </div>
    )
}
