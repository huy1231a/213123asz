import FormInput1 from '@/app/ui/addTeacherLayout/formInput1'
import FormInput2 from '@/app/ui/addTeacherLayout/formInput2'
import React from 'react'

const AddNewTeacher = () => {
  return (
    <>
      <FormInput1 />
      <FormInput2 />
      <div className='flex justify-end'>
        <div className='mt-6 inline-flex items-center justify-center gap-4'>
          <div
            className='bg-transparent border-2 border-[#4D44B5] rounded-full cursor-pointer'
            style={{ padding: '10px 24px' }}>
            <span className='text-[#4D44B5]'>Save as Draft</span>
          </div>
          <div
            className='bg-[#4D44B5] h-12 border-none rounded-full cursor-pointer '
            style={{ padding: '10px 24px' }}>
            <span className='text-[white] flex items-center justify-center'>
              Submit
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddNewTeacher
