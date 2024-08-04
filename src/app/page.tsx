"use client"
import React from 'react'
import Slider from "react-slick";
import styles from "@/app/styles/nav.module.css";
import Negocio from "@/app/components/Negocio"
import datosNegocio from "@/app/data_negocios/data_negocios_.json"
import Zoom from 'react-medium-image-zoom';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-medium-image-zoom/dist/styles.css';

export default function Home() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const datos_negocios_home = datos_originales_estatico.filter((dato) => dato.categoria === "Comida")
  const [datos_negocio, setDatosNegocio] = useState(datos_negocios_home)
  const [datos_negocioPopUp, setDatosNegocioPopUp] = useState(datos_negocios_home)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'; // Deshabilita el scroll
    } else {
      document.body.style.overflow = 'auto'; // Habilita el scroll
    }
    return () => {
      document.body.style.overflow = 'auto'; // Asegúrate de restaurar el estado al desmontar
    };
  }, [showModal]);



  const funcionFiltrado = (categoria: any) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
  };

  const handleImageClick = (index: any) => {
    const datosFiltradosPopUp = datos_originales_estatico.filter((dato) => dato.id === index);
    setDatosNegocioPopUp(datosFiltradosPopUp);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <>
      <article className={styles.nav_container}>
        <div className='h-[20%] mt-[10px]'>
          <p className='p-2 text-center'> Reunimos todos los negocios de la zona Micaela en Comas.
            Como Delivery de comida, Envio de Gas, Reparaciones del Hogar, Instalaciones Electricas , Melamines, etc.
          </p>
          {/* <p className='pl-4 pr-4 pb-4 text-center font-bold '> ¡Disfruta la comodidad de tener juntos tus negocios cercanos!  </p> */}
        </div>

      </article>

      {/* BOTONES DE CATEGORIAS */}
      <p className='font-semibold text-md ml-2 mt-[3px]'> Categorias:</p>
      <section className='ml-2 h-12 mb-2 flex  items-center overflow-x-auto space-x-2 '>
        <button
          className={` h-10 rounded-full text-center  ${categoriaSeleccionada === "Comida" ? 'bg-orange-600' : 'bg-blue-500'}`}
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
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Agua" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => funcionFiltrado("Agua")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Agua </p>
        </button>
        <button
          className={`h-10 rounded-full text-center ${categoriaSeleccionada === "Otros" ? 'bg-orange-600' : 'bg-blue-500'}`}
          onClick={() => funcionFiltrado("Otros")}
        >
          <p className='w-24 lg:w-[140px] font-semibold'> Otros </p>
        </button>
      </section>
      <div className={styles.negocios_container}>
        {datos_negocio.map((negocio) => (
          <Slider key={negocio.id} {...settings} className='w-[100%] mb-8 flex justify-center items-center'>
            {negocio.imagenes_negocio.map((imagen, index) => (
              <div key={index} onClick={() => handleImageClick(negocio.id)}>
                <Negocio key={index} alt={negocio.alt} foto_negocio_url={imagen} />
              </div>
            ))}
          </Slider>
        ))}
        {/* MODAL */}
        {showModal && (
           <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
           <div className="bg-white rounded-lg w-full max-w-screen-md h-[95%] flex flex-col overflow-hidden">
             <div className='flex justify-end p-2'>
               <button onClick={closeModal} className="font-bold text-xl text-red-500 px-2 py-1">
                 Cerrar
               </button>
             </div>
             <div className="flex-grow flex flex-col justify-center items-center overflow-hidden">
               {datos_negocioPopUp.map((negocio) => (
                 <Slider key={negocio.id} {...settings} className="w-full mb-8 flex justify-center items-center">
                   {negocio.imagenes_negocio.map((imagen, index) => (
                     <Zoom key={index}>
                       <Negocio alt={negocio.alt} foto_negocio_url={imagen} />
                     </Zoom>
                   ))}
                 </Slider>
               ))}
             </div>
             <div className="flex justify-center p-4 font-bold text-lg">
               {datos_negocioPopUp.map((negocio) => (
                 <a key={negocio.id} href={`https://wa.me/${negocio.telefono}?text=Hola Estoy interesado en ...`} target="_blank" rel="noopener noreferrer">
                   <button className="bg-green-500 text-white py-2 px-4 rounded">
                     WhatsApp
                   </button>
                 </a>
               ))}
             </div>
           </div>
         </div>
        )}
      </div>


    </>
  )
}
