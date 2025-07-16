//estructuras de datos

//datos primitivos --> String, integer, float, boolean, null
//undefined --> es vacio para el sistema
//null --> es vacio para el programador en algun momento sera algo
let vacio = null;
console.log(vacio); //undefined

vacio = "string es estandar";
console.log(vacio);

//objetos 
//objetos literales
//ejemplo formulario con datos de usuario
let persona = {
    nombre: "Carlos",
    edad: 25,
    saludar: function () {
        console.log("Hola, soy " + this.nombre);
    }
};

let auto = {
    marca: "Toyota",
    modelo: "Corolla"
};

//mostrar caracteristicas de persona
console.log(persona.nombre);


//POO --> programacion orientada a objetos
//forma de escribir el codigo --> reutilizable--> mejor codigo

//Clases y objetos
//Clase es un molde para crear objetos
//Objeto es una instancia de una clase -> creamos algo en base a 

class Persona {
    //caracteristicas --> atributos/propiedades
    //constructor --> metodo especial que se ejecuta al crear un objeto
    constructor(nombreParam, edadParam) {
        //this hace referencia al objeto que se esta creando
        this.nombre = nombreParam;
        this.edad = edadParam;
    }
    //metodos --> funciones dentro de una clase
    correr() {
        console.log(this.nombre + " esta corriendo");
    }
}
let personita = new Persona("Carlos", 20); //instancia de la clase Persona
let personita2 = new Persona("Ana", 30); //otra instancia de la clase Persona
console.log(personita);
console.log(personita2);

personita.correr(); //llamamos al metodo correr del objeto personita

//PILARES DE POO 
//Existen para asegurar que el codigo sea seguro, flexible y escalable
//4 pilares
//pilares que si se pueden usar en js
//Herencia --> es una clase hija de otra copia el comportamiento de la clase padre
//Polimorfismo --> Cambiar el comportamiento de un metodo del padre en la clase hija

//Herencia palabra reservada extend
class Programador extends Persona {
    constructor(nombreParam, edadParam, lenguajesParam) {
        //seguir usando las propiedades del padre
        super(nombreParam, edadParam);
        this.lenguajesParam = lenguajesParam;

    }
    codear() {
        console.log("Estoy codeando");
    }

    //polimorfismo
    correr() {
        // super.correr();
        console.log("No corro tan rapido pero puedo trotar");
    }

}

//crear un programador
let programador = new Programador("Carlos", 20, "Javascript");
console.log(programador);
programador.correr();


//PILARES QUE NO SE PUEDEN UTILIZAR EN JAVASCRIPT
//Encapsulamiento --> Limitar el acceso a la informacion de una clase -> modificadores de acceso: public, protected y private
//Abstraccion --> Nos da herramientas o metodos para acceder a informacion encapsulada getters y setters

//Arrays --> Estructura de datos que permite almacenar varios valores en una sola variable
//Array indexado --> ordena el indice 0 en adelante
let arraysito = [1, 2, 3, 4, 5];

console.log(arraysito);

//Array asociativo --> no ordena el indice, se accede por clave
let arrayAsociativo = {
    "nombre": "Carlos",
    "edad": 25,
    "lenguajes": ["JavaScript", "Python", "Java"]
};

console.log(arrayAsociativo["nombre"]); //accedemos al valor de la clave nombre

//Array multidimensional --> array dentro de otro array
//creamos un array de varias dimensiones, array dentro de otro array
let arraycitoMulti = [[1, 2], [{ nombre: "Carlos" }]];
console.log(arraycitoMulti);

//Accedemos a la pocision 0 primera
let cajaDeIndiceCero = arraycitoMulti[0];
console.log(cajaDeIndiceCero[1]);

//Accedemos a la pocision 1 
let cajaDeIndiceUno = arraycitoMulti[1];
//accedemos al objeto dentro del array
console.log(cajaDeIndiceUno[0]);

//Estos muestran el nombre
console.log(cajaDeIndiceUno[0].nombre); //accedemos al valor de la clave nombre del objeto dentro del array
console.log(arraycitoMulti[1][0].nombre); //accedemos al valor de la clave nombre del objeto dentro del array

//metodos de arrays
//Recorrer un array 
// let nombres = ["Carlos", "Ana", "Pedro", "Maria"];

//forEach --> recorre el array y nos deja utilizar la posicion y el indice del array
//callback --> funcion que se ejecuta dentro de otra funcion
nombres.forEach((value, index) => {
    console.log(value);
    console.log(index);
})

let nombresAlReves = nombres.reverse(); //invierte el orden del array
nombresAlReves.forEach((value, index) => {
    console.log(value);
    console.log(index);
})

//Foreach que recibe un array
let arrayNum = [1, 2, 3, 4, 5];

arrayNum.forEach((value, index, array) => {
    arrayNum.pop(); //elimina el ultimo elemento del array
    console.log(array);
})
// for (let nombre of nombres) {
//     console.log(nombre);
// }

//Metodos utiles
//Map --> Recorre el array y nos retorna algo por cada posicion --> transformar valores
let nombres = ["Carlos", "Ana", "Pedro", "Maria"];
const nombresMayus = nombres.map((value) => {
    //funcion flecha al poner llaves tenemos que retornar el valor
    //si no ponemos llaves, se retorna automaticamente el valor de la funcion flecha

    value.toUpperCase(); //transforma el valor a mayusculas
    return value.toUpperCase(); //retorna el valor transformado
})
console.log(nombresMayus);

let numeros = [1, 2, 3, 4, 5];
let numeritosPorDos = numeros.map((value) => {
    return value * 2; //multiplica cada valor por 2
})
console.log(numeritosPorDos); // [2, 4, 6, 8, 10]

//Filter --> Filtra la informacion de un array y nos retorna un nuevo array con los valores que cumplen una condicion
const usuarios = [{
    nombre: "Carlos",
    edad: 20
},
{
    nombre: "Ana",
    edad: 22
},
{
    nombre: "Pedro",
    edad: 19
},
{
    nombre: "Maria",
    edad: 25
}];

const mayoresDe21 = usuarios.filter((usuario) => {
    return usuario.edad > 21 ; //filtra los usuarios mayores de 21 años
});
console.log(mayoresDe21); 

//Find --> Busca un valor en un array y nos retorna el primer valor que cumple la condicion
const usuarioCarlos= usuarios.find((usuario) => {
    return usuario.nombre === "Carlos"; //busca el usuario con nombre Ana
});
console.log(usuarioCarlos); 

//METODOS OBLIGATORIOS
let array = [];
//Agregar datos al array
//AL FINAL
array.push(2); //Agregar un elemento al final del array

//PRIMERA POSICION
array.unshift(1); //Agregar un elemento al inicio del array
//Eliminar datos del array
array.pop(); //Eliminar el ultimo elemento del array

array.shift(); //Eliminar el primer elemento del array  

console.log(array);

//Obtener el largo del array
let largo = array.length; //Obtener la cantidad de elementos del array
console.log(array.length); //Muestra la cantidad de elementos del array

//Strings
console.log("Hola".length); //Muestra la cantidad de caracteres de la cadena de texto "Hola"

//metodo para eliminar espacios al inicio y al final de un string
let sinEspacios = " Hola Mundo ".trim(); //Elimina los espacios al inicio y al final de la cadena de texto"
console.log(sinEspacios); 
console.log(sinEspacios.length);