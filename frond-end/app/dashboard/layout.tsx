'use client'
import React from 'react'
import Sidebar from '../ui/sidebar/Sidebar'
import RightBar from '../ui/rightbar/RightBar'
import { usePathname } from 'next/navigation'
import Navbar from '../ui/nav/navbar'
import RightBarUser from '../ui/dashboard/user/rightBarUser'

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname()

  const student = pathName.split('/').pop() === 'student' ? false : true
  const teachers = pathName.split('/').pop() === 'teachers' ? false : true
  const event = pathName.split('/').pop() === 'event' ? false : true
  const finance = pathName.split('/').pop() === 'finance' ? false : true
  const food = pathName.split('/').pop() === 'food' ? false : true
  const user = pathName.split('/').pop() === 'user' ? false : true
  const chat = pathName.split('/').pop() === 'chat' ? false : true
  const studentInfo =
    pathName.split('/').pop() === 'studentInfo123456789' ? false : true

  console.log('studentInfo', studentInfo)

  console.log('teachers', teachers)
  console.log('student', student)

  return (
    <div className='flex'>
      <div
        className='p-5 min-h-screen bg-[#4D44B5] w-[22]'
        style={
          student &&
          teachers &&
          event &&
          finance &&
          food &&
          studentInfo &&
          user &&
          chat
            ? { flex: 1 }
            : { flex: 0 }
        }>
        <Sidebar />
      </div>
      <div className='p-5 bg-[#F3F4FF]' style={{ flex: 1 }}>
        {(!student ||
          !teachers ||
          !event ||
          !finance ||
          !food ||
          !studentInfo ||
          user ||
          !chat) && <Navbar />}
        {children}
      </div>
      <div>
        {student &&
        teachers &&
        event &&
        finance &&
        food &&
        studentInfo &&
        user &&
        chat ? (
          <div
            className='p-5 min-h-screen bg-slate-50'
            style={{
              width: '395px',
              flex: 4,
            }}>
            <RightBar />
          </div>
        ) : (
          ''
        )}
        {student &&
        teachers &&
        event &&
        finance &&
        food &&
        studentInfo &&
        !user ? (
          <div
            className='p-5 h-screen bg-slate-50 w-auto'
            style={{
              flex: 4,
            }}>
            <RightBarUser />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
