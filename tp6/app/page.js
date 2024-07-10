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

export default function Home() {
  const [citas, setCitas] = useState([]);
    return(
        <>
          <Titulo texto="BIENVENIDOS, SAQUE SU CITA" />
    
        </>
    );
}
