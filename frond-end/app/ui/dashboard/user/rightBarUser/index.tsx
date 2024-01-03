import React from 'react'
import Image from 'next/image'

const RightBarUser = () => {
  return (
    <>
      <div className='flex justify-between'>
        <div
          className='rounded-full bg-white flex justify-center items-center'
          style={{ width: 60, height: 60 }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            className='cursor-pointer'>
            <path
              d='M25.3677 18.9391V9.86768C25.3677 4.70215 21.1655 0.5 16 0.5C10.8345 0.5 6.63232 4.70215 6.63232 9.86768V18.9397C4.96704 19.4224 3.73828 20.9544 3.73828 22.8374C3.73828 25.0386 5.5293 26.8296 7.73096 26.8296H11.377V26.877C11.377 29.4263 13.4507 31.5 16 31.5C18.5493 31.5 20.6231 29.4263 20.6231 26.8769V26.8296H24.2691C26.4707 26.8296 28.2617 25.0386 28.2617 22.7583C28.2617 20.9406 27.033 19.4198 25.3677 18.9391ZM9.63232 9.86768C9.63232 6.35645 12.4888 3.5 16 3.5C19.5112 3.5 22.3677 6.35645 22.3677 9.86768V18.7661H9.63232V9.86768ZM17.6231 26.8769C17.6231 27.772 16.895 28.5 16 28.5C15.105 28.5 14.377 27.772 14.377 26.8769V26.8296H17.623V26.8769H17.6231ZM24.269 23.8296H7.73096C7.1836 23.8296 6.73828 23.3843 6.73828 22.7583C6.73828 22.2114 7.18359 21.7661 7.73096 21.7661H24.2691C24.8164 21.7661 25.2617 22.2114 25.2617 22.8374C25.2617 23.3843 24.8164 23.8296 24.269 23.8296Z'
              fill='#A098AE'
            />
          </svg>
        </div>
        <div className='w-14 h-14 rounded-full bg-white flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            className='cursor-pointer'>
            <path
              d='M12.2629 2.66667L11.4166 6.46615C10.9352 6.69779 10.4751 6.96458 10.0338 7.26563L6.32023 6.09636L2.58325 12.5703L5.39836 15.1484C5.28837 15.9648 5.33819 16.3672 5.39836 16.8516L2.58325 19.4297L6.32023 25.9037L10.0338 24.7344C10.4751 25.0354 10.9352 25.3022 11.4166 25.5339L12.2629 29.3333H19.7369L20.5833 25.5339C21.0646 25.3022 21.5248 25.0354 21.9661 24.7344L25.6796 25.9037L29.4166 19.4297L26.6015 16.8516C26.6245 16.5682 26.6663 16.2845 26.6666 16C26.6677 15.7069 26.6215 15.4108 26.6015 15.1484L29.4166 12.5703L25.6796 6.09636L21.9661 7.26563C21.5248 6.96458 21.0646 6.69779 20.5833 6.46615L19.7369 2.66667H12.2629ZM14.4036 5.33334H17.5963L18.2551 8.29167L18.9166 8.55209C19.6648 8.84512 20.3643 9.24846 20.9921 9.75001L21.5494 10.1927L24.44 9.28386L26.0364 12.0495L23.802 14.099L23.9088 14.8021C24.0344 15.5797 24.01 16.4746 23.9088 17.1979L23.802 17.901L26.0364 19.9505L24.44 22.7162L21.5494 21.8073L20.9921 22.25C20.3643 22.7516 19.6648 23.1549 18.9166 23.4479L18.2551 23.7083L17.5963 26.6667H14.4036L13.7447 23.7083L13.0833 23.4479C12.335 23.1549 11.6356 22.7516 11.0077 22.25L10.4504 21.8073L7.55981 22.7162L5.96346 19.9505L8.19783 17.901L8.09106 17.1979C7.96083 16.4046 7.98083 15.4967 8.09106 14.8021L8.19783 14.099L5.96346 12.0495L7.55981 9.28386L10.4504 10.1927L11.0077 9.75001C11.6356 9.24846 12.335 8.84512 13.0833 8.55209L13.7447 8.29167L14.4036 5.33334ZM15.9999 10.6667C13.0702 10.6667 10.6666 13.0703 10.6666 16C10.6666 18.9297 13.0702 21.3333 15.9999 21.3333C18.9296 21.3333 21.3333 18.9297 21.3333 16C21.3333 13.0703 18.9296 10.6667 15.9999 10.6667ZM15.9999 13.3333C17.4885 13.3333 18.6666 14.5115 18.6666 16C18.6666 17.4886 17.4885 18.6667 15.9999 18.6667C14.5114 18.6667 13.3333 17.4886 13.3333 16C13.3333 14.5115 14.5114 13.3333 15.9999 13.3333Z'
              fill='#A098AE'
            />
          </svg>
        </div>
        <div className='flex gap-5 items-center'>
          <div className='flex flex-col'>
            <h1 className='text-[#303972] text-sm font-semibold leading-normal'>
              Nobita Kun
            </h1>
            <h6 className='text-[#A098AE] text-sm font-normal leading-normal'>
              Admin
            </h6>
          </div>
          <Image
            src={'/avatar.png'}
            alt='logo'
            width={60}
            height={60}
            className='rounded-full cursor-pointer'
          />
        </div>
      </div>
      <div className='w-[386px] h-[400px] bg-[#4D44B5] rounded-2xl mt-10 ml-2 text-[white] p-5'>
        <div className='flex justify-between p-5'>
          <div className='flex flex-col gap-3'>
            <p className='font-normal text-lg leading-normal'>Your Plan</p>
            <h1 className='font-bold text-4xl leading-normal'>Free</h1>
          </div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M12.0012 9.36011C11.6543 9.36011 11.3109 9.42842 10.9904 9.56116C10.67 9.69389 10.3788 9.88844 10.1335 10.1337C9.88829 10.379 9.69374 10.6701 9.56101 10.9906C9.42828 11.311 9.35996 11.6545 9.35996 12.0013C9.35996 12.3482 9.42828 12.6916 9.56101 13.0121C9.69374 13.3325 9.88829 13.6237 10.1335 13.8689C10.3788 14.1142 10.67 14.3087 10.9904 14.4415C11.3109 14.5742 11.6543 14.6425 12.0012 14.6425C12.7017 14.6423 13.3734 14.3639 13.8686 13.8685C14.3638 13.3731 14.6419 12.7012 14.6418 12.0007C14.6416 11.3002 14.3632 10.6285 13.8677 10.1333C13.3723 9.63806 12.7004 9.35995 12 9.36011H12.0012ZM3.60116 9.36011C3.25431 9.36011 2.91086 9.42842 2.59042 9.56116C2.26997 9.69389 1.97881 9.88844 1.73355 10.1337C1.48829 10.379 1.29374 10.6701 1.16101 10.9906C1.02828 11.311 0.959961 11.6545 0.959961 12.0013C0.959961 12.3482 1.02828 12.6916 1.16101 13.0121C1.29374 13.3325 1.48829 13.6237 1.73355 13.8689C1.97881 14.1142 2.26997 14.3087 2.59042 14.4415C2.91086 14.5742 3.25431 14.6425 3.60116 14.6425C4.30165 14.6423 4.97339 14.3639 5.4686 13.8685C5.9638 13.3731 6.24192 12.7012 6.24176 12.0007C6.2416 11.3002 5.96318 10.6285 5.46775 10.1333C4.97231 9.63806 4.30045 9.35995 3.59996 9.36011H3.60116ZM20.4012 9.36011C20.0543 9.36011 19.7109 9.42842 19.3904 9.56116C19.07 9.69389 18.7788 9.88844 18.5336 10.1337C18.2883 10.379 18.0937 10.6701 17.961 10.9906C17.8283 11.311 17.76 11.6545 17.76 12.0013C17.76 12.3482 17.8283 12.6916 17.961 13.0121C18.0937 13.3325 18.2883 13.6237 18.5336 13.8689C18.7788 14.1142 19.07 14.3087 19.3904 14.4415C19.7109 14.5742 20.0543 14.6425 20.4012 14.6425C21.1017 14.6423 21.7734 14.3639 22.2686 13.8685C22.7638 13.3731 23.0419 12.7012 23.0418 12.0007C23.0416 11.3002 22.7632 10.6285 22.2677 10.1333C21.7723 9.63806 21.1005 9.35995 20.4 9.36011H20.4012Z'
              fill='white'
            />
          </svg>
        </div>
        <div className='p-5'>
          <div className='flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='9'
              height='9'
              viewBox='0 0 9 9'
              fill='none'>
              <circle cx='4.5' cy='4.5' r='4.5' fill='white' />
            </svg>
            <h1 className='font-semibold'>50 GB Storage</h1>
          </div>
          <div className='flex items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='9'
              height='9'
              viewBox='0 0 9 9'
              fill='none'>
              <circle cx='4.5' cy='4.5' r='4.5' fill='white' />
            </svg>
            <h1 className='font-semibold'>Limited Features</h1>
          </div>
        </div>
        <div className='p-5'>
          <p>Upgrade to Premium Plan to get more Features & Storage memory</p>
          <div
            className='inline-flex items-center bg-[#FFFFFF] text-[#303972] rounded-full p-5 mt-5'
            style={{ padding: ' 8px 24px' }}>
            Upgrade Plan
          </div>
        </div>
        <div className='mt-10 w-full'>
          <p className='text-[#303972] p-4 font-bold text-2xl leading-normal'>
            Lastest Activity
          </p>
          <div className='p-3 inline-flex gap-8 w-full'>
            <div className='w-20 h-10 bg-[#C1BBEB] rounded-full'></div>
            <div className='flex flex-col'>
              <h1 className='text-[#303972]'>
                <span className='text-[#303972] font-bold text-sm'>
                  Karen Hope
                </span>{' '}
                moved task “
                <span className='text-[#FB7D5B]'>User Research</span>“ from{' '}
                <span className='text-[#303972] font-bold text-sm'>
                  On Progress
                </span>{' '}
                to{' '}
                <span className='text-[#303972] font-bold text-sm'>Done</span>
              </h1>
              <p className='text-[#A098AE]'>2 March 2021, 13:45 PM</p>
            </div>
          </div>
          <div className='w-[0px] h-[350px] border-2 border-[#C1BBEB] relative bottom-[75px] left-[28.5px]'></div>
          <div className='p-3 inline-flex gap-8 w-full relative bottom-[350px]'>
            <div className='w-20 h-10 bg-[#C1BBEB] rounded-full'></div>
            <div className='flex flex-col'>
              <h1 className='text-[#FB7D5B]'>
                Karen Hope moved task “User Research“ from On Progress to Done
              </h1>
              <p className='text-[#A098AE]'>2 March 2021, 13:45 PM</p>
            </div>
          </div>
          <div className='p-3 inline-flex gap-8 w-full relative bottom-[350px]'>
            <div className='w-20 h-10 bg-[#C1BBEB] rounded-full'></div>
            <div className='flex flex-col'>
              <h1 className='text-[#FB7D5B]'>
                Karen Hope moved task “User Research“ from On Progress to Done
              </h1>
              <p className='text-[#A098AE]'>2 March 2021, 13:45 PM</p>
            </div>
          </div>
          <div className='p-3 inline-flex gap-8 w-full relative bottom-[350px]'>
            <div className='w-20 h-10 bg-[#C1BBEB] rounded-full'></div>
            <div className='flex flex-col'>
              <h1 className='text-[#FB7D5B]'>
                Karen Hope moved task “User Research“ from On Progress to Done
              </h1>
              <p className='text-[#A098AE]'>2 March 2021, 13:45 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightBarUser
