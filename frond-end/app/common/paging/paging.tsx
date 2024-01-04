import React from 'react'

const Paging = () => {
  return (
    <>
      <div className='flex justify-between p-3 items-center'>
        <h5 className='font-normal leading-normal text-sm text-[#A098AE]'>
          Showing <span className='text-[#363B64]'>1-5</span> from{' '}
          <span className=' text-[#363B64]'>100</span> data
        </h5>
        <div className='flex gap-3 justify-center items-center cursor-pointer'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='33'
              viewBox='0 0 32 33'
              fill='none'>
              <path
                d='M20.512 26.676L10.048 17.236C9.60003 16.852 9.60003 16.148 10.048 15.764L20.512 6.32403C21.184 5.71603 22.272 6.16403 22.272 7.06003L22.272 25.94C22.272 26.836 21.184 27.284 20.512 26.676Z'
                fill='#A098AE'
              />
            </svg>
          </div>
          <div className='w-12 h-12 bg-[#4D44B5] rounded-full flex justify-center items-center text-white'>
            1
          </div>
          <div className='w-12 h-12 border-[#A098AE] border-2 rounded-full flex justify-center items-center text-[#A098AE]'>
            2
          </div>
          <div className='w-12 h-12 border-[#A098AE] border-2 rounded-full flex justify-center items-center text-[#A098AE]'>
            3
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='33'
              viewBox='0 0 32 33'
              fill='none'>
              <path
                d='M11.488 6.32397L21.952 15.764C22.4 16.148 22.4 16.852 21.952 17.236L11.488 26.676C10.816 27.284 9.72803 26.836 9.72803 25.94L9.72803 7.05997C9.72803 6.16397 10.816 5.71597 11.488 6.32397Z'
                fill='#A098AE'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default Paging
