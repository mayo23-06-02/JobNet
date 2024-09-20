import React from 'react'
import LogoPNG from '../../../../assets/Logos/Logo.png'
import Image from 'next/image'
export default function Logo() {
  return (
    <div>
        <Image src={LogoPNG} width={100} height={50} className={`lg:hidden `} />
        <Image src={LogoPNG} width={200} height={150} className={`hidden lg:inline`} />
    </div>
  )
}
