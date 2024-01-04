import Button from '@/app/common/Button/button'
import Info, { DataProp } from '@/app/common/groupInfo/Info'
import Image from 'next/image'
import React from 'react'

const Chat = () => {
  const dataClass = [
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
  const dataUser = [
    {
      logo: '/avatar.png',
      class: 'Samantha William',
      title: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      mes: '2',
    },
    {
      logo: '/avatar.png',
      class: 'Tony Soap',
      title: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      mes: '2',
    },
    {
      logo: '/avatar.png',
      class: 'Karen Hope',
      title: 'Lorem ipsum dolor sit amet...',
      time: '12:45 PM',
      mes: '2',
    },
  ]
  return (
    <>
      <div className='p-5 flex'>
        <div className='w-[507px] h-[1007px] bg-white rounded-l-2xl border-r-2 border-[#C1BBEB]'>
          <div className='flex flex-col gap-1 p-5'>
            <h1 className='p-2 font-semibold leading-normal text-2xl text-[#303972]'>
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
            <h5 className='p-3 font-semibold leading-normal text-lg text-[#A098AE]'>
              Groups
            </h5>
            {dataClass.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <Info
                logo={item.logo}
                class={item.class}
                title={item.title}
                time={item.time}
                mes={item.mes}
              />
            ))}
            <h5 className='p-3 font-semibold leading-normal text-lg text-[#A098AE]'>
              Chats
            </h5>
            {dataUser.map((item) => (
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
          <Button title='View More' />
        </div>
        <div className='w-[800px] h-[1007px] bg-white rounded-r-2xl'>
          <div className='p-3 mt-3'>
            <div className='flex justify-between items-center p-2'>
              <div className='flex gap-3 items-center'>
                <Image
                  src={'/avatar.png'}
                  alt='logo'
                  width={60}
                  height={60}
                  className='rounded-full'
                />
                <div className='flex flex-col gap-1'>
                  <h1 className='font-bold text-2xl leading-normal text-[#303972]'>
                    Samantha WIlliam
                  </h1>
                  <div className='flex items-center gap-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'>
                      <circle cx='8' cy='8' r='8' fill='#4CBC9A' />
                    </svg>
                    <p className='font-normal text-lg leading-normal text-[#A098AE]'>
                      Online
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex gap-5 items-center'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'>
                    <path
                      d='M19.9997 8H3.99967C2.52691 8 1.33301 9.19391 1.33301 10.6667V21.3333C1.33301 22.8061 2.52691 24 3.99967 24H19.9997C21.4724 24 22.6663 22.8061 22.6663 21.3333V10.6667C22.6663 9.19391 21.4724 8 19.9997 8Z'
                      stroke='#A098AE'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M30.666 9.33325V22.6666L22.666 15.9999L30.666 9.33325Z'
                      stroke='#A098AE'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'>
                    <path
                      d='M12.0012 9.35986C11.6543 9.35986 11.3109 9.42818 10.9904 9.56091C10.67 9.69365 10.3788 9.88819 10.1335 10.1335C9.88829 10.3787 9.69374 10.6699 9.56101 10.9903C9.42828 11.3108 9.35996 11.6542 9.35996 12.0011C9.35996 12.3479 9.42828 12.6914 9.56101 13.0118C9.69374 13.3323 9.88829 13.6234 10.1335 13.8687C10.3788 14.1139 10.67 14.3085 10.9904 14.4412C11.3109 14.5739 11.6543 14.6423 12.0012 14.6423C12.7017 14.6421 13.3734 14.3637 13.8686 13.8682C14.3638 13.3728 14.6419 12.701 14.6418 12.0005C14.6416 11.3 14.3632 10.6282 13.8677 10.133C13.3723 9.63782 12.7004 9.3597 12 9.35986H12.0012ZM3.60116 9.35986C3.25431 9.35986 2.91086 9.42818 2.59042 9.56091C2.26997 9.69365 1.97881 9.88819 1.73355 10.1335C1.48829 10.3787 1.29374 10.6699 1.16101 10.9903C1.02828 11.3108 0.959961 11.6542 0.959961 12.0011C0.959961 12.3479 1.02828 12.6914 1.16101 13.0118C1.29374 13.3323 1.48829 13.6234 1.73355 13.8687C1.97881 14.1139 2.26997 14.3085 2.59042 14.4412C2.91086 14.5739 3.25431 14.6423 3.60116 14.6423C4.30165 14.6421 4.97339 14.3637 5.4686 13.8682C5.9638 13.3728 6.24192 12.701 6.24176 12.0005C6.2416 11.3 5.96318 10.6282 5.46775 10.133C4.97231 9.63782 4.30045 9.3597 3.59996 9.35986H3.60116ZM20.4012 9.35986C20.0543 9.35986 19.7109 9.42818 19.3904 9.56091C19.07 9.69365 18.7788 9.88819 18.5336 10.1335C18.2883 10.3787 18.0937 10.6699 17.961 10.9903C17.8283 11.3108 17.76 11.6542 17.76 12.0011C17.76 12.3479 17.8283 12.6914 17.961 13.0118C18.0937 13.3323 18.2883 13.6234 18.5336 13.8687C18.7788 14.1139 19.07 14.3085 19.3904 14.4412C19.7109 14.5739 20.0543 14.6423 20.4012 14.6423C21.1017 14.6421 21.7734 14.3637 22.2686 13.8682C22.7638 13.3728 23.0419 12.701 23.0418 12.0005C23.0416 11.3 22.7632 10.6282 22.2677 10.133C21.7723 9.63782 21.1005 9.3597 20.4 9.35986H20.4012Z'
                      fill='#A098AE'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-[1px] bg-[#C1BBEB]'></div>
          <div className='relative w-full p-6 overflow-y-auto h-[40rem]'>
            <ul className='space-y-2'>
              <li className='flex justify-start'>
                <div className='relative max-w-xl px-4 py-2 text-gray-700 rounded shadow'>
                  <div className='relative block group'>
                    <span className='group-hover:opacity-50 grou'>Hi</span>
                    <span className='absolute hidden text-[#C1BBEB]'>
                      12:45 PM
                    </span>
                  </div>
                </div>
              </li>
              <li className='flex justify-end'>
                <div className='relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow'>
                  <span className='block'>Hiiii</span>
                </div>
              </li>
              <li className='flex justify-end'>
                <div className='relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow'>
                  <span className='block'>how are you?</span>
                </div>
              </li>
              <li className='flex justify-start'>
                <div className='relative max-w-xl px-4 py-2 text-gray-700 rounded shadow'>
                  <span className='block'>
                    Im find thank you. How about you?
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className='mt-24'>
            <div className='flex items-center justify-between p-5 border-t border-gray-300'>
              <div className='bg-white p-3 rounded-full border-2 border-[#A098AE] flex justify-between gap-3 w-[901.241px] mt-5'>
                <input
                  type='text'
                  placeholder='Write message here'
                  className='bg-transparent text-black outline-none'
                />
                <div className='flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='43'
                    height='40'
                    viewBox='0 0 43 40'
                    fill='none'>
                    <path
                      d='M15.2443 34.2002C13.9569 34.1974 12.6993 33.8294 11.6298 33.1425C10.5603 32.4555 9.72696 31.4804 9.23471 30.3401C8.74246 29.1997 8.61338 27.9452 8.86374 26.7346C9.11411 25.5241 9.73271 24.4117 10.6416 23.5377L21.6985 12.9252C22.0623 12.5763 22.4943 12.2996 22.9697 12.1108C23.4451 11.9221 23.9546 11.8249 24.4692 11.8249C24.9838 11.8249 25.4933 11.9221 25.9687 12.1108C26.4441 12.2996 26.8761 12.5763 27.2399 12.9252C27.6038 13.274 27.8924 13.6881 28.0894 14.1439C28.2863 14.5996 28.3876 15.0881 28.3876 15.5814C28.3876 16.0747 28.2863 16.5632 28.0894 17.019C27.8924 17.4747 27.6038 17.8888 27.2399 18.2377L16.17 28.8377C16.0531 28.9685 15.9093 29.0748 15.7475 29.1498C15.5857 29.2248 15.4095 29.267 15.23 29.2737C15.0504 29.2803 14.8713 29.2513 14.704 29.1885C14.5367 29.1256 14.3847 29.0303 14.2577 28.9085C14.1306 28.7866 14.0312 28.641 13.9656 28.4806C13.9001 28.3202 13.8698 28.1485 13.8767 27.9763C13.8837 27.8042 13.9277 27.6353 14.0059 27.4802C14.0842 27.3251 14.195 27.1872 14.3315 27.0752L25.3884 16.4627C25.602 16.2235 25.7137 15.9159 25.701 15.6013C25.6883 15.2867 25.5523 14.9883 25.3201 14.7657C25.0878 14.5431 24.7766 14.4127 24.4484 14.4005C24.1203 14.3884 23.7994 14.4954 23.55 14.7002L12.48 25.3002C11.7452 26.0046 11.3323 26.9601 11.3323 27.9564C11.3323 28.9527 11.7452 29.9082 12.48 30.6127C13.2149 31.3171 14.2115 31.7129 15.2508 31.7129C16.29 31.7129 17.2867 31.3171 18.0215 30.6127L29.0784 20.0002C30.266 18.8214 30.9231 17.2426 30.9082 15.6039C30.8934 13.9652 30.2077 12.3976 28.999 11.2388C27.7902 10.08 26.1551 9.42268 24.4457 9.40844C22.7364 9.3942 21.0896 10.0242 19.86 11.1627L13.4058 17.4127C13.1615 17.6455 12.831 17.7761 12.4865 17.7761C12.1421 17.7761 11.8116 17.6455 11.5673 17.4127C11.4451 17.2965 11.3481 17.1582 11.2819 17.0059C11.2157 16.8536 11.1816 16.6902 11.1816 16.5252C11.1816 16.3601 11.2157 16.1968 11.2819 16.0444C11.3481 15.8921 11.4451 15.7539 11.5673 15.6377L18.0215 9.38765C19.7333 7.74663 22.0549 6.82471 24.4757 6.82471C26.8965 6.82471 29.2182 7.74663 30.9299 9.38765C32.6417 11.0287 33.6033 13.2544 33.6033 15.5752C33.6033 17.8959 32.6417 20.1216 30.9299 21.7627L19.86 32.3752C19.2534 32.9552 18.5336 33.4149 17.7416 33.7281C16.9496 34.0412 16.101 34.2016 15.2443 34.2002Z'
                      fill='#A098AE'
                    />
                  </svg>
                  <div
                    className='w-[135.603px] h-[40px] bg-[#4D44B5] rounded-full  flex cursor-pointer justify-center'
                    style={{ padding: '9px 19px' }}>
                    <div className='flex items-center gap-2'>
                      <p className='text-white'>Send</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='33'
                        height='32'
                        viewBox='0 0 33 32'
                        fill='none'>
                        <path
                          d='M4.52444 5.34375L4.96144 7.21875L6.90044 15.9998L4.96044 24.7808L4.52344 26.6558L6.30444 25.9378L28.3044 16.9378L30.5864 15.9998L28.3054 15.0618L6.30544 6.06175L4.52444 5.34375ZM7.30544 8.65575L22.8364 14.9998H8.71144L7.30544 8.65575ZM8.71144 16.9998H22.8364L7.30544 23.3438L8.71144 16.9998Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Chat
