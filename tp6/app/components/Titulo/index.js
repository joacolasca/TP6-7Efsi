import styles from './titulo.module.css';

const Titulo = ({ texto }) => {
  return <h1 className={styles.titulo}>{texto}</h1>;
}

export default Titulo;
