import React from 'react'
import Image from 'next/image'
import Button from '@/app/common/Button/button'

const UserInfo = () => {
  const dataInfo = [
    {
      img: '/avatar.png',
      name: 'Samantha William',
      class: 'Class VII A',
      message: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z'
            fill='#A098AE'
          />
        </svg>
      ),
    },
    {
      img: '/avatar.png',
      name: 'Samantha William',
      class: 'Class VII A',
      message: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      chose: 'false',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z'
            fill='#A098AE'
          />
        </svg>
      ),
    },
    {
      img: '/avatar.png',
      name: 'Samantha William',
      message: 'Hi',
      class: 'Class VII A',
      time: '11:26 PM',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z'
            fill='#A098AE'
          />
        </svg>
      ),
    },
    {
      img: '/avatar.png',
      name: 'Samantha William',
      message: 'Xin Chao Anh em',
      time: '11:26 PM',
      class: 'Class VII A',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z'
            fill='#A098AE'
          />
        </svg>
      ),
    },
    {
      img: '/avatar.png',
      name: 'Samantha William',
      message: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      class: 'Class VII A',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z'
            fill='#A098AE'
          />
        </svg>
      ),
    },
  ]
  return (
    <>
      <div className='p-3'>
        <div className='flex gap-10'>
          <div className='w-[460px] h-[773px] rounded-2xl bg-white p-6 flex flex-col gap-3'>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-1'>
                <h1 className='font-bold leading-normal text-2xl text-[#4D44B5]'>
                  Contacts
                </h1>
                <p className='font-normal leading-normal text-base text-[#A098AE]'>
                  You have{' '}
                  <span className='font-bold leading-normal text-base text-[#4D44B5]'>
                    741
                  </span>{' '}
                  contacts
                </p>
              </div>
              <div className='w-14 h-14 bg-[#4D44B5] rounded-full flex justify-center items-center cursor-pointer'>
                <p className='text-white text-3xl font-bold'>+</p>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-white p-3 rounded-full border-2 border-[#A098AE] mt-6'>
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
            {dataInfo.map((item) => (
              <>
                <div className='flex justify-between mt-4 p-2'>
                  <div className='flex gap-3'>
                    <Image
                      src={item.img}
                      alt='icon'
                      width={49}
                      height={49}
                      className='rounded-full'
                    />
                    <div className='space-x-0 flex flex-col gap-1'>
                      <h1 className='text-sm font-semibold text-[#303972]'>
                        {item.name}
                      </h1>
                      <p className='text-sm font-normal text-[#A098AE]'>
                        {item.class}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-12 h-12 ${
                      item.chose === 'false' ? 'bg-[#4D44B5] border-none' : ''
                    } border-[#A098AE] rounded-full border-2 flex justify-center items-center`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      className='cursor-pointer'>
                      <path
                        d='M20 4.00011H4C3.20435 4.00011 2.44129 4.31619 1.87868 4.87879C1.31607 5.4414 1 6.20446 1 7.00011V17.0001C1 17.7958 1.31607 18.5588 1.87868 19.1214C2.44129 19.684 3.20435 20.0001 4 20.0001H20C20.7956 20.0001 21.5587 19.684 22.1213 19.1214C22.6839 18.5588 23 17.7958 23 17.0001V7.00011C23 6.20446 22.6839 5.4414 22.1213 4.87879C21.5587 4.31619 20.7956 4.00011 20 4.00011ZM21 16.7501L16.1 12.3501L21 8.92011V16.7501ZM3 8.92011L7.9 12.3501L3 16.7501V8.92011ZM9.58 13.5301L11.43 14.8201C11.5974 14.9362 11.7963 14.9985 12 14.9985C12.2037 14.9985 12.4026 14.9362 12.57 14.8201L14.42 13.5301L19.42 18.0001H4.6L9.58 13.5301ZM4 6.00011H20C20.1857 6.0016 20.3673 6.05478 20.5245 6.15369C20.6817 6.2526 20.8083 6.39333 20.89 6.56011L12 12.7801L3.11 6.56011C3.19171 6.39333 3.31826 6.2526 3.47545 6.15369C3.63265 6.05478 3.81428 6.0016 4 6.00011Z'
                        fill={`${item.chose === 'false' ? 'white' : '#A098AE'}`}
                      />
                    </svg>
                  </div>
                </div>
              </>
            ))}
            <Button title='View More' />
          </div>
          <div className='w-[507px] h-[773px] rounded-2xl bg-white'>
            <div className='p-6 flex flex-col gap-4'>
              <h1 className='font-bold leading-normal text-2xl text-[#4D44B5]'>
                Messages
              </h1>
              <div className='flex items-center gap-3 bg-white p-3 rounded-full border-2 border-[#A098AE] mt-6'>
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
              {dataInfo.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <div className='flex justify-between p-3'>
                  <div className='flex gap-3'>
                    <Image
                      src={item.img}
                      alt='icon'
                      width={49}
                      height={49}
                      className='rounded-full'
                    />
                    <div className='flex flex-col gap-3'>
                      <h1 className='text-sm font-semibold text-[#303972]'>
                        {item.name}
                      </h1>
                      <p className='text-sm font-normal text-[#A098AE]'>
                        {item.message}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-sm font-normal text-[#A098AE]'>
                      {item.time}
                    </h1>
                    <div className='flex justify-end'>
                      <p className='w-6 h-6 bg-[#FB7D5B] rounded-full text-white text-center'>
                        2
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <Button title='View More' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserInfo
