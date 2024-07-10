import styles from './subtitulo.module.css';

const Subtitulo = ({ texto }) => {
  return <h2 className={styles.subtitulo}>{texto}</h2>;
}

export default Subtitulo;
