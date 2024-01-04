'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'
import TableStudent from './nav/tableStudents'
import Navbar from '@/app/ui/nav/navbar'
import Link from 'next/link'

const Student = () => {
  const pathName = usePathname()
  return (
    <>
      <div className='flex justify-between p-5'>
        <div className='flex items-center gap-3 bg-white p-3 rounded-xl'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'>
            <path
              d='M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z'
              fill='#4D44B5'
            />
          </svg>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent text-black outline-none'
          />
        </div>
        <div className='flex justify-center items-center gap-3'>
          <div className='flex w-52 h-16 justify-center items-center gap-3 border-[#4D44B5] border-2 rounded-full'>
            <button className='text-[#4D44B5]'>Newest</button>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='32'
              viewBox='0 0 33 32'
              fill='none'
              className='cursor-pointer'>
              <path
                d='M26.6759 11.488L17.2359 21.952C16.8519 22.4 16.1479 22.4 15.7639 21.952L6.3239 11.488C5.7159 10.816 6.1639 9.72798 7.0599 9.72798L25.9399 9.72798C26.8359 9.72798 27.2839 10.816 26.6759 11.488Z'
                fill='#4D44B5'
              />
            </svg>
          </div>
          <div className='flex w-52 h-16 justify-center items-center gap-3 bg-[#4D44B5] border-none rounded-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='17'
              height='17'
              viewBox='0 0 17 17'
              fill='none'
              className='cursor-pointer'>
              <path
                d='M6.34703 10.6647H0.382324V6.42941H6.34703V0.5H10.5823V6.42941H16.6176V10.6647H10.5823V16.6647H6.34703V10.6647Z'
                fill='white'
              />
            </svg>
            <Link href='/dashboard/student/addStudent'>
              <button className='text-white'>New Student</button>
            </Link>
          </div>
        </div>
      </div>
      <TableStudent />
    </>
  )
}

export default Student
