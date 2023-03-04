import styled from "./SearchBar.module.css"


export default function SearchBar(props) {
   return (
      <div >
          <input type= {2} className={styled.border}/>
      <button onClick={props} className={styled.btn}>Agregar</button> 
      </div>
   );
}

