import React from 'react'
import Categories from './Categories'
import Poster from '../../Reusable/Poster/Poster'
import SearchBar from '../../SearchBar/SearchBar'
import Cleaners from '../../FeedSlider/Cleaners'
import Poster02 from '../../Reusable/Poster/Poster02'
import BrickMason from '../../FeedSlider/BrickMason'
import Drivers from '../../FeedSlider/Drivers'
import Mechanic from '../../FeedSlider/Mechanic'

export default function HomeMain() {
  return (
    <div className=' space-y-8 lg:px-6'>
      <div className='px-4'>
        <Categories />
      </div>
      <Poster02 />
      <SearchBar />
      <Cleaners />
      <Poster />
      <BrickMason />
      <Drivers />
      <Mechanic />
    </div>
  )
}
