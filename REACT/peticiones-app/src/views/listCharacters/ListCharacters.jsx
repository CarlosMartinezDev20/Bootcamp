//rafc -> snippet para crear el componente funcional con flecha
import { useContext, useEffect, useState } from "react";
import { CardCharacter } from "../../components/CardCharacter";
import { FavoritesContext } from "../../contexts/FavoritesContext";

/* 
1- https://rickandmortyapi.com/api/character
2- https://thesimpsonsapi.com/api/characters
3- https://pokeapi.co/api/v2/pokemon
*/

export  const ListCharacters = () => {
    //Siempre que yo necesite una CAJA para GUARDAR ALGO voy a hacer un ESTADO
    const [listPjs, setListPjs] = useState([])

    // Utilizamos el useContext -> Hook para utilizar un contexto previamente creado
    // Sintaxis para cuando tenemos 1 SOLO VALOR EN EL CONTEXTO
    //const valorContexto =  useContext(FavoritesContext)
    //console.log(valorContexto);
    const {favorites,setFavorites} = useContext(FavoritesContext)
    //console.log(favorites);
    
      // Las funciones adentro de un componente declarenlas con camelCase
  const peticionApi  = () => {
    //Peticion a una API
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        //Necesito sacar esa data de aca adentro
        setListPjs(data.results)
    })
    .catch(error => console.error(error))
  }
  
 // console.log(listPjs);
  

  //async function peticionApiAA(){}
  /*
  const  peticionApiAA = async () => {
    //Bloque de manejo de errores
    try{
    //Reemplazo al primer .then
    let response = await fetch('https://rickandmortyapi.com/api/character');
    //console.log(response);
    //Reemplazo para el segundo .then
    let data = await response.json();
    console.log(data);
    }catch(error) {
      console.error(error)
    }
  }*/

  //useEffect -> Cuando necesito cargar datos apenas se vaya a montar el componente

  useEffect( () => {
    
    peticionApi()

  },[] )

  return (
    <div className="row">
    {/* Recorrer el array para mostrar los datos -> Mapear los datos para pintarlos */}
    
    {listPjs.map( (character) => { 
     return <section key={character.id} className="col-md-3 col-sm-12"> 
        <CardCharacter 
          id={character.id}
          name={character.name}
          image={character.image}
          status={character.status}
          listFavorites={favorites}
          changeFavorites={setFavorites}
        />
     </section>

    })}
    </div>
  )
}
