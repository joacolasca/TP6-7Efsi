"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from 'react';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import Formulario from './components/Formulario';
import Cita from './components/Cita';
import Boton from './components/Boton';
import FormSubmit from './components/FormSubmit';
import Link from 'next/link';

export default function Home() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <div className={styles.tituloConLink}>
        <Titulo texto="BIENVENIDOS, SAQUE SU CITA" />
        <Link href="/reservas" className={styles.linkBonito}>Aquí</Link>
      </div>
    </>
  );
}
