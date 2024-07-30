"use client"
import React from 'react'
import Slider from "react-slick";
import styles from "@/app/styles/nav.module.css";
import Negocio from "@/app/components/Negocio"
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
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1721096393/condominios/ccnvwfuxlyl7by68piyp.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719545884/condominios/gc1bs91ahdkxnng74cz3.jpg"
        ],
        alt: "negocio_machis"
      },
      {
        id: 2,
        categoria: "Agua",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695346/condominios/db0jiz5grjh0ubhdgxpa.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695346/condominios/mariq6nftyx9myhnqtyh.jpg"
        ],
        alt: "negocio_agua"
      },
      {
        id: 3,
        categoria: "Agua",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695346/condominios/fncgs30llmtkghwm7ely.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695346/condominios/fqjxktteks7wqrksyevy.jpg"
        ],
        alt: "negocio_agua"
      },
      {
        id: 4,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695346/condominios/lc3mxb0dwvwhgerawnth.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695347/condominios/ce6ywhukoiigwtyw7n3u.jpg"
        ],
        alt: "negocio_comida"
      },
      {
        id: 6,
        categoria: "Hogar",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695347/condominios/vjk0ecb6jrlpv0tqbkgc.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695348/condominios/eot699ksdu46yvapg7vb.jpg"
        ],
        alt: "negocio_cama_spazzio"
      },
      {
        id: 7,
        categoria: "Hogar",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695347/condominios/p3ohgukdr210peg7gzxg.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695347/condominios/fcjhzkpc5entnfs9pczp.jpg"
        ],
        alt: "negocio_cortinas"
      },
      {
        id: 8,
        categoria: "Gas",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695366/condominios/qdlvanvnvoakj85mmupr.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695388/condominios/ebnjd11tdyasoqj231mp.jpg"
        ],
        alt: "negocio_gas"
      },
      {
        id: 9,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695417/condominios/eg4jq7lei5tglrmnixnu.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695417/condominios/lnnnifrdt4ktvn33llc7.jpg"
        ],
        alt: "negocio_comida_burger_dotti"
      },
      {
        id: 10,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695418/condominios/yvh0wrtqzuyn8mpeu4wd.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695418/condominios/f2q1wfy8jlkqnkixvl9p.jpg"
        ],
        alt: "negocio_comida_finas_brasas"
      },
      {
        id: 11,
        categoria: "Hogar",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695417/condominios/ktgzvkinq1wmu3xsmspm.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695417/condominios/ktgzvkinq1wmu3xsmspm.jpg"
        ],
        alt: "negocio_electrodomesticos"
      },
      {
        id: 12,
        categoria: "Gas",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695418/condominios/tjx0ruxu5qbvfyxpcroq.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695419/condominios/byxf9zvooh2uff8tjg9f.jpg"
        ],
        alt: "negocio_gas"
      },
      {
        id: 13,
        categoria: "Hogar",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695419/condominios/sbcoailkszhqpi2uenco.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695419/condominios/igwupi8alrzay3f6k9p0.jpg"
        ],
        alt: "negocio_melamine"
      },
      {
        id: 14,
        categoria: "Comida",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695419/condominios/ygqqsdomtf2vn0xekh7r.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695420/condominios/y2hsxltor7k6mkdeeq75.jpg"
        ],
        alt: "negocio_comida"
      },
      {
        id: 15,
        categoria: "Hogar",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695420/condominios/wms2fmtsbt8azfejyk66.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695420/condominios/gdvhevbsz4d1qptvkakq.jpg"
        ],
        alt: "negocio_brau_lions"
      },
      {
        id: 16,
        categoria: "Hogar",
        imagenes_negocio: [
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695420/condominios/vqxwyupyyyjy9g4lznjf.jpg",
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1719695420/condominios/l2xgxliuivooxmmtqnr7.jpg"
        ],
        alt: "negocio_the_new_home"
      },
    ]
  };

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const datos_negocios_home = datos_originales_estatico.filter((dato) => dato.categoria === "Comida")
  const [datos_negocio, setDatosNegocio] = useState(datos_negocios_home)
  const [showModal, setShowModal] = useState(false);
  const [selectedNegocio, setSelectedNegocio] = useState(null);

  const funcionFiltrado = (categoria: any) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
  };

  const handleImageClick = () => {
    // setSelectedNegocio(negocio);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedNegocio(null);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
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
      </section> 
    {/* div de abjo tiene negocios_container como clase se borro */}
      <div className={styles.negocios_container}>
        {datos_negocio.map((negocio) => (
            <Slider  key={negocio.id} {...settings}  className='w-[100%] mb-8 flex justify-center items-center'>
              {negocio.imagenes_negocio.map((imagen, index) => (
                <div  key={index} onClick={() => handleImageClick()}>
                  <Negocio   key={index} alt={negocio.alt} foto_negocio_url={imagen} />
                  </div>
              ))}
            </Slider>
        ))}
        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-4 rounded max-w-lg h-[90%] w-full">
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-500">Cerrar</button>
              <div className="text-center">
                <h2 className="text-2xl mb-4"></h2>
                <p className="mb-4"></p>
                {/* Simulación de una imagen con fondo rojo */}
                <div className="bg-red-500 h-48 mb-4 flex justify-center items-center text-white">
                  Imagen del Negocio
                </div>
                {/* Botón de WhatsApp */}
                <a href={`https://wa.me/?text=Estoy interesado en:`} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 text-white py-2 px-4 rounded">WhatsApp</button>
                </a>
              </div>
      
          </div>
        </div>
      )}
      </div>
      

    </>
  )
}
