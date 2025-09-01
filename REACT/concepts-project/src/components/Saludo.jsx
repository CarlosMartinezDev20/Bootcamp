//crear nuestro primer componente
//Props-> son las propiedades que le pasamos a un componente
//Componente-> es una funcion que retorna un JSX
import { useState } from 'react';
import { Chauchis } from './Chauchis.jsx';

function Saludo({nombre, apellido}) {
    //el reemplazo de las variables para  manipular datos en react
    //El estado-> Hook-> funciones prehechas que nos permiten manipular el estado de un componente
    //useState-> Hook que nos permite crear un estado dentro de un componente
    //useEffect-> Hook que nos permite ejecutar efectos secundarios en un componente
    //useContext-> Hook que nos permite acceder al contexto de una aplicacion
    //useReducer-> Hook que nos permite manejar el estado de una aplicacion de manera mas compleja
    const[nombreCurso, setNombreCurso] = useState("FSJ30");

    return (
        <>
            <h1>Hola, {nombre} {apellido}</h1>
            <h2>Curso: {nombreCurso}</h2>
            <button onClick={() => setNombreCurso("Java30")}>Magia</button>
            <button onClick={() => setNombreCurso("FSJ30")}>Regresar</button>
            <br />
            <Chauchis nombre={nombre} curso={nombreCurso}/>
        </>
    );
}
export default Saludo