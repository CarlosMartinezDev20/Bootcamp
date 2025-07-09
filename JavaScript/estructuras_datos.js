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
let personita = new Persona("Carlos",20); //instancia de la clase Persona
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
class Programador extends Persona{
    constructor(nombreParam, edadParam, lenguajesParam){
        //seguir usando las propiedades del padre
        super(nombreParam, edadParam);
        this.lenguajesParam = lenguajesParam;

    }
    codear(){
        console.log("Estoy codeando");
    }

    //polimorfismo
    correr(){
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

