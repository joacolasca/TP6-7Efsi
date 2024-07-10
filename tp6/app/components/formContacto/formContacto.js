'use client'
import Formulario from '../Formulario';
import styles from './formContacto.module.css';
import { useState } from 'react';

const FormContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API.
    console.log('Datos del formulario:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Formulario nombre="nombre" tipo="text" handleChange={handleChange} />
      <Formulario nombre="email" tipo="email" handleChange={handleChange} />
      <Formulario nombre="mensaje" tipo="textarea" handleChange={handleChange} />
      <button type="submit" className={styles.button}>Enviar</button>
    </form>
  );
};

export default FormContacto;
