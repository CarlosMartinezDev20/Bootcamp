console.log("Hola mundo");

//obtenemos un elemento del frontend html
let elementoDOM = document.getElementById('texto');
console.log(elementoDOM);

let contenidoDOM = document.querySelector('#contenido');
console.log(contenidoDOM);

const botoncito = document.querySelector('#btn');
const btnArray = document.querySelector('#btnArray');

//propiedades de los elementos
//innerHTML: devuelve el contenido HTML de un elemento
//innerText: devuelve el contenido de texto de un elemento
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>chau</h2>";
contenidoDOM.innerHTML = "<h1>texto inyectado</h1>";

//metodos de los elementos
botoncito.addEventListener('click', () => {
    alert('Nooo xd');
    console.log('funciono el boton');

    let dato = prompt('Ingrese su nombre:');
    console.log(`Hola ${dato}, bienvenido!`);

    elementoDOM.style.color = 'red'; //cambiamos el color del texto
});

//metodo de js
//almacenar datos en local para el usuario
let arraycito = [1, 2, 3, 4, 5];
console.log(arraycito);

//localStorage --> almacena datos local en el navegador del usuario
//localStorage --> esta diseñado paera guardar objetos

/* 
El método JSON.stringify sirve para convertir un objeto o array de JavaScript 
en una cadena de texto (string) con formato JSON.
*/
localStorage.setItem('arraycito', JSON.stringify(arraycito));//convertimos el array a string //ejecutar splamente cuando arrancamos o el array vacio cuando hay datos ya no  tendria que ejrcutarse

let datita = (localStorage.getItem('arraycito'));//obtenemos el string del localStorage
console.log(datita); //esto es un string

let datitaArray = JSON.parse(datita); //convertimos el string a array
console.log(datitaArray);

btnArray.addEventListener('click', () => {
    console.log('funciono el boton de array');
    arraycito.push(6);
    console.log(arraycito);

    localStorage.setItem('arraycito', JSON.stringify(arraycito));//convertimos el array a string
    console.log(localStorage.getItem('arraycito'));
});