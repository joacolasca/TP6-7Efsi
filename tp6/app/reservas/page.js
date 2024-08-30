'use client'
import { useState } from 'react';
import Subtitulo from "../components/Subtitulo";
import FormSubmit from "../components/FormSubmit";
import Cita from '../components/Cita';
export default function reservas(){
    const [citas, setCitas] = useState([]);
    return(<>
        <Subtitulo texto = "CREAR MI CITA"/>
        <FormSubmit citas = { citas } setCitas = {setCitas} />
        {citas.map((cita, index) => {
                      return <div> <Cita mascota= {cita.nombreMascota} dueño={cita.nombreDueño} fecha={cita.fecha} hora={cita.hora} sintomas= {cita.sintomas} citas ={citas} setCitas = {setCitas} objCita = {cita}/></div>
        }   )   }
    </>);
  

}