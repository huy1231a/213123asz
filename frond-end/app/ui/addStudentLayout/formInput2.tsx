import { HeaderOne } from '@/app/common/Header/h1'
import React from 'react'

const FormInput2 = () => {
  return (
    <>
      <div className='w-[1475px h-[60px] bg-[#4D44B5] rounded-t-2xl mt-5'>
        <h1 className='p-3 ml-4 font-bold text-2xl leading-normal text-white'>
          Parent Details
        </h1>
      </div>
      <div className='w-[1475px h-[640px] bg-[white] rounded-b-2xl '>
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
              <HeaderOne title='Email *' />
              <input
                className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[577px]'
                type='email'
                name='name'
                placeholder='william@mail.com'
              />
            </div>
            <div className='flex flex-col gap-3'>
              <HeaderOne title='Address *' />
              <textarea
                className='placeholder:text-gray-500 pt-[20px] pl-[16px] focus:outline-none border border-[#C1BBEB] rounded-xl h-[175px] w-[577px]'
                id=''
                cols={30}
                rows={10}
                placeholder='Where do you live'></textarea>
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
            <div className='flex flex-col gap-3'>
              <HeaderOne title='Payments *' />
              <div className='flex gap-3'>
                <div className='flex gap-3'>
                  <span className='font-normal leading-normal text-sm text-[#A098AE]'>
                    Cash
                  </span>
                  <input
                    className='w-5 h-5 bg-[#4D44B5] checked:bg-emerald-400'
                    type='radio'
                    name='radio'
                  />
                </div>
                <div className='flex gap-3'>
                  <span className='font-normal leading-normal text-sm text-[#A098AE] '>
                    Debit
                  </span>
                  <input
                    className='w-5 h-5 bg-[#4D44B5]'
                    type='radio'
                    name='radio'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormInput2
