import styles from "./boton.module.css";

const Boton = ({ titulo, tipo = '', className = "", deleteCita }) => {
    let buttonClass = className;

    if (titulo === "AGREGAR CITA") {
        buttonClass = styles.agregarCita;
    } else if (titulo === "ELIMINAR") {
        buttonClass = styles.eliminarCita;
    }

    if (tipo === "submit") {
        return <button className={`${styles.button} ${buttonClass}`} type={tipo}>{titulo}</button>;
    } else {
        return <button onClick={deleteCita} className={`${styles.button} ${buttonClass}`}>{titulo}</button>;
    }
}

export default Boton;
