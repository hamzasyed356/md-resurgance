import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/images/logo.png'
import NustLogo from '../../assets/images/nust-logo.png'


const Topbarlogin = () => {
  return (
    <div className='flex justify-between align-middle content-center text-center w-full px-20 py-2 my-1 border-b-2'>
    <Image src={NustLogo} alt={''} className='w-20 h-20'/>
    <h1 className='font-semibold text-xl py-6'>NUST - Resurgance - MD</h1>
    <Image src={Logo} alt={''} className='w-20 h-20'/>
  </div>
  )
}

export default Topbarlogin