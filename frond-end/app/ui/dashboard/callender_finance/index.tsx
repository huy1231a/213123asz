import React from 'react'
import { Calender } from './callender'
import Finance from './finance'

const CalenderAndFinace = () => {
  return (
    <div className='flex gap-10 mt-5'>
        <Calender />
        <Finance />
    </div>
  )
}

export default CalenderAndFinace