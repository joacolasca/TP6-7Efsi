'use client'
import styles from './formulario.module.css';

const Formulario = ({ nombre, tipo, handleChange }) => {
  return (
    <>
      <label className={styles.label}>{nombre}</label>
      {tipo !== 'textarea' ? (
        <input
          type={tipo}
          name={nombre}
          className={`${styles.uFullWidth} ${tipo === 'date' ? styles.inputDate : tipo === 'time' ? styles.inputTime : ''}`}
          placeholder={nombre}
          onChange={handleChange}
        />
      ) : (
        <textarea name={nombre} className={styles.uFullWidth} onChange={handleChange}></textarea>
      )}
    </>
  );
};

export default Formulario;
