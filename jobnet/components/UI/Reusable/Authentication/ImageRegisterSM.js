import React from 'react'
import ImagePoster from '../../../../assets/Images/Register.png'
import Image from 'next/image'


export default function ImageRegisterSM() {
    return (
        <div className='relative'>
            <div className='absolute top-16
             flex-col text-white  w-full flex items-center justify-center'>
                <div>
                    <p className='font-bold text-2xl'>Welcome!</p>
                </div>
                <div className='flex space-y-2 flex-col items-center'>
                <p className='text-center text-sm px-6'>JobNet exists-to connect you with reliable, vetted professionals  for all your home  service needs, instantly and effortlessly.</p>
            </div>
            </div>
            <Image src={ImagePoster} width={700} height={500} className='lg:hidden' />
        </div>
    )
}
