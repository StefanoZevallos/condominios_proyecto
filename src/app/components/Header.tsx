"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const [isCondominiosOpen, setIsCondominiosOpen] = useState(false)

  const cerrarCondominios = () => {
   setIsCondominiosOpen(prevState => !prevState)
  };


  return (
    <>
      <header className="bg-red-500 h-20 flex items-center justify-between w-full">
       
          <Link href="/" className="font-bold cursor-pointer text-white flex ">

          <div>
            <p className="ml-4">
              Negocios 
            </p>
            <p className="ml-4">
              Micaela 
            </p>
            </div>

            <Image
                className="ml-4 cursor-pointer inline-block"
                src="https://res.cloudinary.com/dqpijrvsq/image/upload/v1744924105/condominios/logo/eplzbcuyazcm92rbtbcz.jpg"
                alt="Descripción de la imagen"
                width={50}
                height={50}
              />

          </Link>


        <div className="mr-2"  onClick={() => cerrarCondominios()}>
          <button className="bg-blue-600 text-white font-bold p-2 rounded">
            Condominios
          </button>
        </div> 
      </header>
      {isCondominiosOpen && (
        <div className="absolute top-20  bg-white shadow-md rounded-lg w-[100%] ">
          <ul className="flex flex-col p-4">
            <li className=" hover:bg-gray-200 rounded font-bold">
              <p>Comas</p>
            </li>
            <li className=" hover:bg-gray-200 rounded text-blue-600"  onClick={() => cerrarCondominios()}>
              <Link href="/torre-las-praderas">Condominio Las Praderas</Link>
            </li>
            <li className=" hover:bg-gray-200 rounded text-blue-600"  onClick={() => cerrarCondominios()}>
              <Link href="/torre-los-girasoles">Condominio Los Girasoles</Link>
            </li>
            <li className=" hover:bg-gray-200 rounded text-blue-600"  onClick={() => cerrarCondominios()}>
              <Link href="/torres-del-campo">Condominio Torres Del Campo</Link>
            </li>
            {/* <li className=" hover:bg-gray-200 rounded text-blue-600">
              <Link href="/condominio3">Condominio Los Girasoles</Link>
            </li>
            <li className=" hover:bg-gray-200 rounded text-blue-600">
              <Link href="/condominio4">Condominio Torres del Campo</Link>
            </li>
            Añade más opciones según sea necesario */}
          </ul>
        </div>
      )}


    </>


  )
}

export default Header