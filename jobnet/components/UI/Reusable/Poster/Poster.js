import React from 'react'
import Poster01 from  '../../../../assets/Images/P01.jpg'
import Image from 'next/image'

export default function Poster() {
  return (
    <div className='py-7 px-4 lg:px-0'>
        <Image src={Poster01} width={1280} height={500} className='rounded-lg lg:rounded-xl' />
    </div>
  )
}
