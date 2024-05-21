import Fotterlogin from '@/components/Fotterlogin'
import Loginform from '@/components/Loginform'
import Topbarlogin from '@/components/Topbarlogin'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col justify-between align-middle content-center items-center h-screen'>
        <Topbarlogin/>
        <Loginform/>
        <Fotterlogin/>
    </div>
  )
}

export default page