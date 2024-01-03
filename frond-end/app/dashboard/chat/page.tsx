import Info, { DataProp } from '@/app/common/groupInfo/Info'
import Image from 'next/image'
import React from 'react'

const Chat = () => {
  const data = [
    {
      logo: '/avatar.png',
      class: 'Class History VII-A',
      title: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      mes: '2',
    },
    {
      logo: '/avatar.png',
      class: 'Class History VII-A',
      title: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      mes: '2',
    },
    {
      logo: '/avatar.png',
      class: 'Class History VII-A',
      title: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      mes: '2',
    },
  ]
  return (
    <>
      <div className='p-5 flex'>
        <div className='w-[507px] h-[1007px] bg-white rounded-l-2xl border-r-2 border-[#C1BBEB]'>
          <div className='flex flex-col gap-2 p-5'>
            <h1 className='p-2'>Messages</h1>
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
            <h5 className='p-3'>Groups</h5>
            {data.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Info
                logo={item.logo}
                class={item.class}
                title={item.title}
                time={item.time}
                mes={item.mes}
              />
            ))}
          </div>
        </div>
        <div className='w-[800px] h-[1007px] bg-white rounded-r-2xl'></div>
      </div>
    </>
  )
}

export default Chat
