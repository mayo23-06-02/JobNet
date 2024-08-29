import React from 'react'
import Loader from '../../../../assets/loaders/loader.svg'
import Image from 'next/image'
export default function Loader() {
  return (
    <div>
        <Image src={Loader} width={50} height={50} />
    </div>
  )
}
