import boton from "./boton.module.css";
const Boton = ({titulo, tipo = '', className = "", deleteCita})=>{
    
   if(tipo === "submit")
   {
        return <button className = {className} type={tipo}>{titulo}</button>;
   }
   else {
        return <button onClick={deleteCita} className = {className}>{titulo}</button>
   }
}
export default Boton;