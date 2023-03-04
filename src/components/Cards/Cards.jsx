import Card from '../Card/Card';
import styled from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return <div className={styled.CardContainer}>
      
{characters.map((valor,posicion)=>{

return(
<div>
<Card 
id = {posicion}
name={valor.name}
species={valor.species}
 gender={valor.gender}
image={valor.image}
onClose={() => window.alert('Emulamos que se cierra la card')}
/>
</div>
) 

})}


   </div>;
}
