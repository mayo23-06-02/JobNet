import React from 'react'
import Poster01 from  '../../../../assets/Images/P012.jpg'
import Image from 'next/image'

export default function Poster02() {
  return (
    <div className='py-7 px-4 lg:px-0'>
        <Image src={Poster01} width={1280} height={500} className='rounded-lg lg:rounded-xl' />
    </div>
  )
}
