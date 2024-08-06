import React from 'react'

import Link from 'next/link'
import  Image  from 'next/image'

const Header = () => {
  return (
    <>
      <header className='bg-red-500 h-20 flex  items-center  w-full'>
      <div className='text-md font-bold cursor-pointer text-white'>
         <Link href={"/"}>
          <p className='ml-4'>Negocios </p>
          <p className='ml-4'>Micaela </p>
         </Link> 
        </div>
        <div className='ml-2 w-[32px]'>
      <Image className='cursor-pointer'
        src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1717192579/condominios/nrx5hqepfvoqeh1gazas.png"
        alt="Descripción de la imagen"
        width={1000}
        height={1000}
      />
    </div>

      </header>
    </>


  )
}

export default Header