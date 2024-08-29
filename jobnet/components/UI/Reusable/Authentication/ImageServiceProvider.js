import React from 'react'
import Image from 'next/image'
import ImagePoster from '../../../../assets/Images/RegisterUser.png'

export default function ImageServiceProvider() {
    return (
        <div className='relative'>
            <Image src={ImagePoster} width={700} height={500} className='-translate-y-2' />
            <span className='absolute flex items-center flex-col text-white top-[10%] justify-center w-full'>
                <div className='flex flex-col items-center max-w-lg  space-y-6'>
                    <div>
                        <p className='font-bold text-4xl'>Are you a service provider?</p>
                    </div>
                    <div className='flex space-y-2 flex-col items-center'>
                        <p className='text-center max-w-sm'>Join our trusted network of service provider and get certified today!</p>
                    </div>
                </div>
            </span>
        </div>
    )
}
