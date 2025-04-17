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
import datosNegocioTorreGirasoles from "@/app/data_negocios/data_torres_del_campo.json"

const TorresDelCampo = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocioTorreGirasoles.data_negocios);

  const [datos_negocio_torres_girasoles, setDatosNegocioPraderas] = useState(datos_originales_estatico.filter((dato) => dato.categoria === "Comida"))

  const filtradoCategorias = (categoria) => {
    const datosFiltradosCategorias = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocioPraderas(datosFiltradosCategorias)
    setCategoriaSeleccionada(categoria);

  };

  return (
    <>
      <p className='text-center font-bold '> TORRES DEL CAMPO</p>
      <Image
        src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1731187520/condominios/torres-del-campo/q2fsc7m2ufshuxxhi8ej.jpg"}
        height={"100000"}
        width={"100000"}
        className="h-[250px]"
      />
      <p className='text-center p-4'>Encuentra los negocios de Torres Del Campo, como tiendas , servicios del hogar , restaurantes , etc.
      </p>
      <section className='ml-2 h-auto mb-2 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:overflow-x-auto sm:space-x-2'>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Comida" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Comida")}
        >
          <p className='w-full font-semibold'>Comida</p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "MiniMarket" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("MiniMarket")}
        >
          <p className='w-full font-semibold'>MiniMarket</p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Servicios Generales" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Servicios Generales")}
        >
          <p className='w-full font-semibold'>Servicios Generales</p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Ferreteria" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Ferreteria")}
        >
          <p className='w-full font-semibold'>Ferreteria</p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Impresiones" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Impresiones")}
        >
          <p className='w-full font-semibold'>Impresiones</p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Costura" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => filtradoCategorias("Costura")}
        >
          <p className='w-full font-semibold'>Costura</p>
        </button>
      </section>

      <div className={styles.negocios_container}>
        {datos_negocio_torres_girasoles.map((negocio) => (
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

export default TorresDelCampo