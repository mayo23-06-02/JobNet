import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Tag({icon, name}) {
  const router = useRouter()
  return (
    <div className='py-6 lg: px-1 ' onClick={()=>{
      setCookie("query",name)
      router.push('../../search')
    }}>
        <div className='flex justify-center space-x-2 items-center cursor-pointer hover:scale-105 hover:bg-gray-200 bg-gray-100 flexno  flex-nowrap py-1 px-4 rounded-full '>

            <p className='text-gray-700 line-clamp-1 text-nowrap'>{icon}</p>
            <label>{name}</label>
        </div>
    </div>
  )
}
