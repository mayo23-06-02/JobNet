import React from 'react'
import LoaderImage from '../../../../assets/loaders/loader.svg'
import Image from 'next/image'
export default function Loader() {
  return (
    <div>
        <Image src={LoaderImage} width={50} height={50} />
    </div>
  )
}
