import React from 'react'

interface BtnProp {
  title: string
}

const Button = (btnProp: BtnProp) => {
  return (
    <div className='flex items-center justify-center mt-6'>
      <button className='w-80 h-16 flex-shrink-0 bg-[#4D44B51A] rounded-full'>
        <p className='text-[#4D44B5] text-lg font-semibold font-'>
          {btnProp.title}
        </p>
      </button>
    </div>
  )
}

export default Button
