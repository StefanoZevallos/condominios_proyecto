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
          "https://res.cloudinary.com/dqpijrvsq/image/upload/v1717192406/condominios/ofzbaiqer5mljctlpwnb.jpg",
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

  const funcionFiltrado = (categoria: any) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
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
        <div className='h-[15%] mt-[10px]'>
          <p className='p-2 text-center'> Esta pagina web reune todos los negocios del
            condominio las praderas como servicios de costura, entre otros, asi como
            negocios de envio de gas y comida y servicios para el Hogar.
          </p>
        </div>
      </article>
      {/* BOTONES DE CATEGORIAS */}
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
      <div className='w-[100%] flex flex-col items-center'>
        {datos_negocio.map((negocio) => (
            <Slider key={negocio.id} {...settings} className='w-[95%] mb-8 flex justify-center items-center'>
              {negocio.imagenes_negocio.map((imagen, index) => (
                  <Negocio key={index} alt={negocio.alt} foto_negocio_url={imagen} />
              ))}
            </Slider>
        ))}
      </div>

    </>
  )
}
