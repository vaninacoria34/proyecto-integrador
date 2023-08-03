import Card from "./Card";
import Cards from "./Cards";

export default function SearchBar(props) {
   return (
      <div>
          <input type='search' />
         <button onClick={props.onSearch}>Agregar</button> 
      </div>
   );
}
