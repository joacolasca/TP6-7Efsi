import { useEffect } from 'react';
import Formulario from '../Formulario';
import Boton from '../Boton';
import styles from './formSubmit.module.css'; 

const FormSubmit = (props) => {

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      props.setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  const agregarCita = (e) => {
    e.preventDefault();
    if (window.confirm('¿Estás seguro de que deseas crear esta cita?')) {
      const nuevasCitas = [
        ...props.citas,
        {
          nombreMascota: e.target.NombreMascota.value,
          nombreDueño: e.target.NombreDueño.value,
          fecha: e.target.Fecha.value,
          hora: e.target.Hora.value,
          sintomas: e.target.Sintomas.value,
        },
      ];

      props.setCitas(nuevasCitas);
      localStorage.setItem('citas', JSON.stringify(nuevasCitas));
    }
  };

  return (
    <form onSubmit={agregarCita} className={styles.form}>
      <Formulario nombre="NombreMascota" tipo="text" className={styles.input} />
      <Formulario nombre="NombreDueño" tipo="text" className={styles.input} />
      <Formulario nombre="Fecha" tipo="date" className={styles.input} />
      <Formulario nombre="Hora" tipo="time" className={styles.input} />
      <Formulario nombre="Sintomas" tipo="textarea" placeholder="" className={styles.textarea} />
      <Boton className={styles.button} titulo="AGREGAR CITA" tipo="submit" />
    </form>
  );
};

export default FormSubmit;
