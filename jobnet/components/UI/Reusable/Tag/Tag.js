import React from 'react'

export default function Tag({icon, name}) {
  return (
    <div className='py-6 '>
        <div className='flex space-x-2 items-center bg-gray-100 flex-nowrap py-1 px-4 rounded-full '>
            <p className='text-gray-700'>{icon}</p>
            <label>{name}</label>
        </div>
    </div>
  )
}
