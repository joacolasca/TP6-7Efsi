import formulario from "./formulario.module.css";
const Formulario = ({ nombre, tipo }) => {
    if (tipo !== "textarea") {
        return (
            <>
                <label>{nombre}</label>
                <input type={tipo} name={nombre} className="u-full-width" placeholder={nombre} ></input>
            </>
        );
    }
    else {
        return (
            <>
                <label>{nombre}</label>
                <textarea name={nombre} className="u-full-width"></textarea>
            </>
        );
    }
}
export default Formulario;