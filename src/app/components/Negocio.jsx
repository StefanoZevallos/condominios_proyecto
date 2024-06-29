"use client"
import React from 'react'
import styles from "@/app/styles/negocio.module.css";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const Negocio = ({ foto_negocio_url,alt }) => {

  return (
    <>
     

            <Image
              src={foto_negocio_url}
              height={"100000"}
              width={"100000"}
              className={styles.negocio_foto}
            />

 
    </>
  )
}

export default Negocio