import Card from './Card';

export default function Cards(props) {
   // [{},{},{},{},{}]
   // pj = "personajes"
   console.log("cards",props.characters);
   return <div>
      {props.characters.map((pj) => {
         return <Card 
         key = {pj.id}
         name = {pj.name}
         status={pj.status}
         species = {pj.species}
         onclose ={() => window.alert("Emulamos")}
         gender = {pj.gender}
         image = {pj.image}
         origin ={pj.origin.name}
     />
      })}
    </div>
};
