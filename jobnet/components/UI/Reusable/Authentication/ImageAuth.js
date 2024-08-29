import React from 'react'
import Image from 'next/image'
import ImagePoster from '../../../../assets/Images/Login.png'
export default function ImageAuth() {
    return (
        <div className='relative'>
            <Image src={ImagePoster} width={700} height={500} className='-translate-y-2' />
            <span className='absolute flex items-center flex-col text-white top-[20%] justify-center w-full'>
                <div className='flex flex-col items-center max-w-lg  space-y-6'>
                    <div>
                        <p className='font-bold text-4xl'>Welcome back!</p>
                    </div>
                    <div className='flex space-y-2 flex-col items-center'>
                        <p className='text-xl font-bold'>Please sign in to your Jobnet account
                        </p>
                        <p className='text-center'>JobNet exists-to connect you with reliable, vetted professionals  for all your home  service needs, instantly and effortlessly.</p>
                    </div>
                </div>
            </span>
        </div>
    )
}
