import { HeaderOne } from '@/app/common/Header/h1'
import React from 'react'

const FormInput2 = () => {
  return (
    <>
      <div className='w-[1475px h-[60px] bg-[#4D44B5] rounded-t-2xl mt-5'>
        <h1 className='p-3 ml-4 font-bold text-2xl leading-normal text-white'>
          Education
        </h1>
      </div>
      <div className='w-[1475px h-[300px] bg-[white] rounded-b-2xl '>
        <div className='p-3 flex gap-8'>
          <div className='flex flex-col gap-5 p-3'>
            <div className='flex flex-col gap-3'>
              <HeaderOne title='First Name *' />
              <input
                className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[577px]'
                type='text'
                name='name'
                placeholder='Samantha'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <HeaderOne title='Date & Place of Birth *' />
              <div className='flex gap-6'>
                <input
                  className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[276.5px]'
                  type='text'
                  name='name'
                  placeholder='24 Februari 1997'
                />
                <input
                  className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[276.5px]'
                  type='text'
                  name='name'
                  placeholder='24 Februari 1997'
                />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5 p-3'>
            <div className='flex flex-col gap-3'>
              <HeaderOne title='Last Name *' />
              <input
                className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[577px]'
                type='text'
                name='name'
                placeholder='Samantha'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <HeaderOne title=' Parent Name *' />
              <input
                className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[577px]'
                type='text'
                name='name'
                placeholder='Samantha'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormInput2
