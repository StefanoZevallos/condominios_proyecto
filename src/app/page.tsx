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
import Image from 'next/image';

export default function Home() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Comida");
  const [subCategoriaSeleccionada, setSubCategoriaSeleccionada] = useState("Todos")
  const [datos_originales_estatico] = useState(datosNegocio.data_negocios);
  const datos_negocios_home = datos_originales_estatico.filter((dato) => dato.categoria === "Comida")
  const [datos_negocio, setDatosNegocio] = useState(datos_negocios_home)
  const [datos_negocioPopUp, setDatosNegocioPopUp] = useState(datos_negocios_home)
  const [showModal, setShowModal] = useState(false);
  const [subCategoria, setSubCategoria] = useState(true)



  const subcategoria = {
    Comida: [
      "Alitas", "Pollo a la Brasa", "Hamburguesas", "Snacks", "Marino"]
    ,
    Hogar: [
      "Servicios Generales", "Decoracion del Hogar", "Seguridad", "Mudanza"]
  }

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

  const funcionFiltrado = (categoria: string) => {
    const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoria);
    setDatosNegocio(datosFiltrados)
    setCategoriaSeleccionada(categoria);
  };

  const handleImageClick = (index: any) => {
    const datosFiltradosPopUp = datos_originales_estatico.filter((dato) => dato.id === index);
    setDatosNegocioPopUp(datosFiltradosPopUp);
    setShowModal(true);
  };

  const clickSubcategoria = (subcategoria: any) => {
    if (subcategoria === "Todos") {
      const datosFiltrados = datos_originales_estatico.filter((dato) => dato.categoria === categoriaSeleccionada);
      setDatosNegocio(datosFiltrados)
    } else {
      const datosSubcategoria = datos_originales_estatico.filter((dato) => dato.subcategoria === subcategoria);
      setDatosNegocio(datosSubcategoria);
    }
    setSubCategoriaSeleccionada(subcategoria);
  }

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
        <div className='h-[50%] mt-[10px] '>
          <p className='p-2 text-center'> Reunimos todos los negocios de tu Condominio.
            Como Delivery de comida , tiendas , servicios personales , alquieres , etc.
          </p>
          <p className='text-center font-bold p-2'> TORRES LAS PRADERAS </p>
          <Image
            src={"https://res.cloudinary.com/dqpijrvsq/image/upload/v1725126953/condominios/wizlcolopbq0p2zvhhlx.jpg"}
            height={"100000"}
            width={"100000"}
            className="h-[350px] p-2 border-x rounded-xs"
          />
        </div>
      </article>
      <div className="flex justify-center my-4">
  <button className="bg-yellow-500 hover:bg-green-600 text-white font-semibold text-sm py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
    PÍDELO AQUÍ
  </button>
</div>
      <article className="flex gap-4 p-4 justify-center">
        <div className="flex-1 bg-cyan-100 p-6 rounded-xl text-center">
          Caja 1
        </div>
        <div className="flex-1 bg-orange-100 p-6 rounded-xl text-center">
          Caja 2
        </div>
        <div className="flex-1 bg-green-100 p-6 rounded-xl text-center">
          Caja 3
        </div>
        <div className="flex-1 bg-purple-100 p-6 rounded-xl text-center">
          Caja 4
        </div>
      </article>
      <div className="flex justify-center my-4">
  <button className="bg-yellow-500 hover:bg-green-600 text-white font-semibold text-sm py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
    PÍDELO AQUÍ
  </button>
</div>
    </>
  )
}