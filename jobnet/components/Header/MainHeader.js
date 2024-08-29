import React from 'react'
import Logo from '../UI/Reusable/Logo/Logo'
import Button from '../UI/Button/Button'

export default function MainHeader() {
    return (
        <div className=' px-16 py-4 flex justify-center w-full bg-white shadow-sm'>
            <div className='max-w-[1280px] w-full flex items-center justify-between'>
                <div>
                    <Logo />
                </div>
                <div>
                    <ul className='flex space-x-8'>
                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>How it works?</p>
                        </li>
                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>About Us</p>
                        </li>
                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>Search</p>
                        </li>
                        <li className='cursor-pointer font-bold hover:underline'>
                            <p>Contact Us</p>
                        </li>
                    </ul>
                </div>
                <div className='w-48'>
                    <Button label={'Log Out'} />
                </div>
            </div>
        </div>
    )
}
