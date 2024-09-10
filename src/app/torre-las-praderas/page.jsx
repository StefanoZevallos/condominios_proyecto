"use client"
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-medium-image-zoom/dist/styles.css';
import styles from "@/app/styles/nav.module.css";
import React from 'react'
import { useState } from 'react';
import Negocio from "@/app/components/Negocio"
import datosNegocioTorrePraderas from "@/app/data_negocios/data_torre_praderas_.json"

const TorrePraderas = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocioTorrePraderas.data_negocios);
  
  const [datos_negocio_torres_praderas,setDatosNegocioPraderas] = useState(datosNegocioTorrePraderas.data_negocios)

  const filtradoCategorias = (categoria) => {
    const datosFiltradosCategorias = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocioPraderas(datosFiltradosCategorias)
    setCategoriaSeleccionada(categoria);
  };

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
          onClick={() => filtradoCategorias("Comida")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Comida </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Licores" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Licores")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Licores </p>
        </button>
        <button
          className={`h-10 rounded-full text-center mr-2 ${categoriaSeleccionada === "Masajes" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Masajes")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Masajes </p>
        </button>
      </section>
      
      <div className={styles.negocios_container}>
      {datos_negocio_torres_praderas.map((negocio) => (
          <Slider key={negocio.id} {...settings} className='w-[100%] mb-8 flex justify-center items-center'>
            {negocio.imagenes_negocio.map((imagen, index) => (
              <div key={index} onClick={() => handleImageClick(negocio.id)}>
                <Negocio key={index} alt={negocio.alt} foto_negocio_url={imagen} />
              </div>
            ))}
          </Slider>
        ))}
        </div>

    </>
  )
}

export default TorrePraderas