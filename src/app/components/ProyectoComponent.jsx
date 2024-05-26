"use client"
import React from 'react'
import styles from "@/app/styles/proyecto.module.css";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const ProyectoComponent = ({ foto_negocio_url,alt }) => {

  return (
    <>
      <main className={styles.proyecto_container_container_real}>

            <Image
              src={foto_negocio_url}
              height={"100000"}
              width={"100000"}
              className={styles.proyecto_foto}
            />

      </main>
    </>
  )
}

export default ProyectoComponent