import React from 'react'

import Link from 'next/link'
import  Image  from 'next/image'

const Header = () => {
  return (
    <>
      <header className='bg-red-600 h-20 flex  items-center justify-between w-full'>
      <div className=' font-bold cursor-pointer text-white'>
         <Link href={"/"}>
          <p className='ml-4'>Negocios </p>
          <p className='ml-4'>Condominios </p>
         </Link> 
        </div>
        {/* <div className='ml-[60px] w-[80px]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[45px] h-[45px]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        </div> */}

      </header>
    </>


  )
}

export default Header