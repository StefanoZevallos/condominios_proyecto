"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import styles from "@/app/styles/nav.module.css";
import Negocio from "@/app/components/Negocio"

const TorrePraderas = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  return (
    <>
      <p className='text-center font-bold p-2'> TORRE LAS PRADERAS</p>
      <Image
        src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1725126953/condominios/wizlcolopbq0p2zvhhlx.jpg"}
        height={"100000"}
        width={"100000"}
        className="h-[250px]"
      />
      <p className='text-center p-2'>Encuentra los negocios de Torre Las Praderas, como tiendas , servicios del hogar , restaurantes , etc.
      </p>
      <p className='font-semibold text-md ml-2 mt-[3px]'> Categorias:</p>
      <section className='ml-2 h-12 mb-2 flex  items-center overflow-x-auto space-x-2 '>
        <button
          className={` h-10 rounded-full text-center  ${categoriaSeleccionada === "Comida" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => funcionFiltrado("Comida")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Tiendas </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Gas" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => funcionFiltrado("Gas")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Comida </p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Hogar" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => funcionFiltrado("Hogar")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Hogar </p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Otros" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => funcionFiltrado("Otros")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Otros </p>
        </button>
      </section>


    </>
  )
}

export default TorrePraderas