//Diferencias entre js y ts
/* JS
-flexible
-facil de aprender
-forma de programar sea a través de funciones
-web -> navegadpr(interpretado)

*/
/*TS
-tipado duro
-POO
-dificil de aprender
-compilado(TSC) -> reducir el codio de ts a js
*/
//declaración de variables
//datos primitivos
var nombre = "Juan";
var edad = 30;
var esEstudiante = true;
var vacio = null;
console.log(edad);
//tipos de datos que NO USAREMOS
var nose = "cualquier cosa";
var noDefinido = undefined;
//funciones
function saludar(nombre) {
    return "Hola, ".concat(nombre);
}
saludar(nombre);
console.log(saludar(nombre));
//estructuras de datos
//Array dos datos
var array = [1, 2, 3, 4, 5];
array = ["as"];
//array
var numeros = [1, 2, 3, 4, 5];
//tupla
var tupla = ["Juan", 30];
//podemos llegar a tener 2 tipos de datos
var variable = "Hola";
variable = 42; // Ahora es un número
var programador = {
    nombre: "Juan",
    edad: 30,
    lenguajes: ["JavaScript", "TypeScript"]
};
var fsj30 = [
    {
        nombre: "Juan",
        edad: 30,
        lenguajes: ["JavaScript", "TypeScript"]
    }
];
