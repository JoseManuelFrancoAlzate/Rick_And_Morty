import styled from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styled.container}>
      <button className={styled.boton} onClick={()=>alert("Cerrar")}>AREPA GALACTICA</button>
       <h2 className={styled.letra}>{props.name}</h2>
         <h2 className={styled.letra}>{props.species}</h2>
         <h2  className={styled.letra}>{props.gender}</h2> 
         <img  src={props.image} alt="" /> 
      </div>
   );
}
