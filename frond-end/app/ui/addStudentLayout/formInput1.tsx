import { HeaderOne } from '@/app/common/Header/h1'
import React from 'react'

const FormInput1 = () => {
  return (
    <>
      <div className='w-[1475px h-[60px] bg-[#4D44B5] rounded-t-2xl'>
        <h1 className='p-3 ml-4 font-bold text-2xl leading-normal text-white'>
          Student Details
        </h1>
      </div>
      <div className='w-[1475px h-[640px] bg-[white] rounded-b-2xl '>
        <div className='p-3 flex gap-8'>
          <div className='flex flex-col p-3 gap-3'>
            <HeaderOne title='Photo *' />
            <div className='w-44 h-44'>
              <div className=''>
                <label className='flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'>
                  <span className='flex items-center justify-center space-x-2'>
                    <span className='font-medium text-[#A098AE] text-center'>
                      Drag and drop or click here to select file
                    </span>
                  </span>
                  <input type='file' name='file_upload' className='hidden' />
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
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
          <div className='flex flex-col gap-5'>
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
              <HeaderOne title='Phone *' />
              <input
                className='placeholder:text-gray-500 pl-[14px] focus:outline-none border border-[#C1BBEB] rounded-xl h-12 w-[577px]'
                type='text'
                name='name'
                placeholder='0839533881'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormInput1
