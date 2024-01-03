import React from 'react'
import Image from 'next/image'

export interface DataProp {
  group?: string
  logo: string
  class: string
  title: string
  time: string
  mes: string
}
const Info = (prop: DataProp) => {
  return (
    <>
      <div className='flex justify-between p-3'>
        <div className='flex items-center gap-3'>
          <Image
            src={prop.logo}
            alt='logo'
            width={60}
            height={60}
            className='rounded-full'
          />
          <div className='flex flex-col gap-2'>
            <h1>{prop.class}</h1>
            <p>{prop.title}</p>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <p>{prop.time}</p>
          <div className='flex justify-end'>
            <h1>{prop.mes}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info
