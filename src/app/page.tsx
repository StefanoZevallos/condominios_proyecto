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
        imagen_negocio: "https://res.cloudinary.com/dqpijrvsq/image/upload/v1707511331/condominios/lmbuv20aoaswisty9s3d.jpg",
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
  
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const negocios_home = datos_originales_estatico.filter((dato)=>dato.categoria==="Comida")
  const [datos_negocio , setDatosNegocio] = useState(negocios_home)

  const funcionFiltrado = (categoria:any) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    console.log(datos_negocio); 
  };

  return (
    <>
      {/* <article className={styles.nav_container}>
        <div className='h-[15%] mt-[10px]'>
        <p className=' text-center'> Está página es un recopilatorio de todos los negocios del condominio las Praderas ,
        que hacen el servicio de delivery. Incluye servicio de Gas , Comida , Cortinas , Delivery Tiendas.
        </p>
        <b> ¡POR AHORA SOLO NEGOCIOS DE COMIDA!</b>
        </div>
      </article> */}
      {/* BOTONES DE CATEGORIAS */}
      <section className='h-12 mb-2 flex items-center justify-center'>
      <button className='h-10 bg-orange-600 rounded-full text-center mr-2 '  onClick={() => funcionFiltrado("Comida")}> 
        <p className='w-24 lg:w-[140px] font-semibold' > Comida </p>
      </button>
      <button className='h-10 bg-blue-500 rounded-full text-center mr-2'  onClick={() => funcionFiltrado("Gas")}> 
        <p className='w-24 lg:w-[140px] font-semibold' > Gas </p>
      </button>
      <button className='h-10 bg-blue-500 rounded-full text-center' onClick={() => funcionFiltrado("Hogar")}>
        <p className='w-24 lg:w-[140px] font-semibold' > Hogar </p>
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
