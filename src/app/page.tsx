"use client"
import React from 'react'
import Slider from "react-slick";
import styles from "@/app/styles/nav.module.css";
import ProyectoComponent from "@/app/components/ProyectoComponent"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  const datosNegocio = {
    data_negocios: [
      {
        id: 1,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1717192406/condominios/ofzbaiqer5mljctlpwnb.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719545884/condominios/gc1bs91ahdkxnng74cz3.jpg"
        ],
        alt: "negocio_comida"
      },
      {
        id: 1,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1707510722/condominios/ih6judbecgxpceb7ki2n.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1717192406/condominios/ofzbaiqer5mljctlpwnb.jpg"
        ],
        alt: "negocio_comida"
      },
      {
        id: 1,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1707510722/condominios/ih6judbecgxpceb7ki2n.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1717192406/condominios/ofzbaiqer5mljctlpwnb.jpg"
        ],
        alt: "negocio_comida"
      },
    ]
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const datos_negocios_home = datos_originales_estatico.filter((dato) => dato.categoria === "Comida")
  const [datos_negocio, setDatosNegocio] = useState(datos_negocios_home)

  const funcionFiltrado = (categoria: any) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
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
    {/* div de abjo tiene negocios_container como clase se borro */}
      <div>
        {datosNegocio.data_negocios.map((negocio) => (
            <Slider key={negocio.id} {...settings} className='w-full h-[400px] mb-8 mt-8 flex justify-center items-center'>
              {negocio.imagenes_negocio.map((imagen, index) => (
                  <ProyectoComponent key={index} alt={negocio.alt} foto_negocio_url={imagen} />
              ))}
            </Slider>
        ))}
      </div>

    </>
  )
}
