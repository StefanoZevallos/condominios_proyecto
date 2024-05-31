"use client"
import React from 'react'
import styles from "@/app/styles/nav.module.css";
import ProyectoComponent from "@/app/components/ProyectoComponent"
import Link from 'next/link';
import { useState,useEffect } from 'react';


export default function Home() {
  const datosNegocio = {
    data_negocios: [
      {
        id: 1,
        categoria: "Comida",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1707510722/condominios/ih6judbecgxpceb7ki2n.jpg",
        alt: "negocio_comida"
      },
      {
        id: 2,
        categoria: "Comida",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1717192406/condominios/ofzbaiqer5mljctlpwnb.jpg",
        alt: "negocio_comida"
      },
      {
        id: 3,
        categoria: "Gas",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716592510/condominios/dhcitxz6ofbnl3deuhxu.jpg",
        alt: "negocio_gas"
      },
      {
        id: 4,
        categoria: "Gas",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716762635/condominios/j89yitbjjqrkmiujdllb.jpg",
        alt: "negocio_gas"
      },
      {
        id: 5,
        categoria: "Hogar",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716762635/condominios/zizmukiyxs4enqq2m3hm.jpg",
        alt: "negocio_gas"
      },
      {
        id: 6,
        categoria: "Hogar",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716762635/condominios/rtsyz5xahkpdsspiitgc.jpg",
        alt: "negocio_gas"
      },
      {
        id: 7,
        categoria: "Hogar",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716762635/condominios/qhsqtuqabrn0mqakmljk.jpg",
        alt: "negocio_gas"
      },
      {
        id: 8,
        categoria: "Hogar",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716762635/condominios/y9vuqkviz3wpntmzhwmm.jpg",
        alt: "negocio_gas"
      },
      {
        id: 9,
        categoria: "Hogar",
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1716762635/condominios/rb9iupe9ti8dex9y4v3f.jpg",
        alt: "negocio_gas"
      },
    ]
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const datos_negocios_home = datos_originales_estatico.filter((dato)=>dato.categoria==="Comida")
  const [datos_negocio , setDatosNegocio] = useState(datos_negocios_home)

  const funcionFiltrado = (categoria:any) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
  };

  return (
    <>
       <article className={styles.nav_container}>
        <div className='h-[15%] mt-[10px]'>
        <p className='p-2 text-center'> Esta pagina web reune todos los negocios del 
        condominio las praderas como servicios de costura, entre otros, asi como
        negocios de envio de gas y comida y servicios para el Hogar.
        </p>
        </div>
      </article> 
      {/* BOTONES DE CATEGORIAS */}
      <section className='h-12 mb-2 flex items-center justify-center'>
      <button
        className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Comida" ? 'bg-orange-600' : 'bg-blue-500'}`}
        onClick={() => funcionFiltrado("Comida")}
      >
        <p className='w-24 lg:w-[140px] font-semibold'> Comida </p>
      </button>
      <button
        className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Gas" ? 'bg-orange-600' : 'bg-blue-500'}`}
        onClick={() => funcionFiltrado("Gas")}
      >
        <p className='w-24 lg:w-[140px] font-semibold'> Gas </p>
      </button>
      <button
        className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Hogar" ? 'bg-orange-600' : 'bg-blue-500'}`}
        onClick={() => funcionFiltrado("Hogar")}
      >
        <p className='w-24 lg:w-[140px] font-semibold'> Hogar </p>
      </button>
    </section>
      <main className={styles.negocios_container}>
      {datos_negocio.map((dato) => (
          <ProyectoComponent
            alt={dato.alt}
            key={dato.id}
            foto_negocio_url={dato.imagen_negocio}
          />
        ))}
      </main>
    </>
  )
}
