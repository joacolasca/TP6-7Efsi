import Formulario from '../Formulario';
import Boton from '../Boton';
import { useState } from 'react';

const FormSubmit = (props) => {
  const agregarCita = (e) => {
    e.preventDefault();
    if (window.confirm('¿Estás seguro de que deseas crear esta cita?')) {
      props.setCitas([
        ...props.citas,
        {
          nombreMascota: e.target.NombreMascota.value,
          nombreDueño: e.target.NombreDueño.value,
          fecha: e.target.Fecha.value,
          hora: e.target.Hora.value,
          sintomas: e.target.Sintomas.value,
        },
      ]);
    }
  };

  return (
    <form onSubmit={agregarCita}>
      <Formulario nombre="NombreMascota" tipo="text" />
      <Formulario nombre="NombreDueño" tipo="text" />
      <Formulario nombre="Fecha" tipo="date" />
      <Formulario nombre="Hora" tipo="time" />
      <Formulario nombre="Sintomas" tipo="textarea" placeholder="" />
      <Boton className="u-full-width button-primary" titulo="AGREGAR CITA" tipo="submit" />
    </form>
  );
};

export default FormSubmit;
