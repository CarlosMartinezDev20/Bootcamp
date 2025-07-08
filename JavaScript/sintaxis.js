// Impresiones en consola
console.log("Hola Mundo");

// Declaración de variables
let nombre = "Carlos";       // `let` es la forma recomendada para declarar variables
const sigla = "CR";          // `const` se usa cuando la variable no cambiará


//constante
const numero = 3.1416;          // Declaración de una constante
console.log(numero);

// Concatenación/ suma de algo a un string 
console.log("Hola " + nombre);

console.log("5" + 5);

// También se puede usar template literals (más moderno y legible)
console.log(`Hola ${nombre}`);

//cambiar los tipos de variables
//Parse
let cinco = parseInt("5");
console.log(cinco + 5); // Convierte a entero

//operadores matematicos
let suma = 5 + 3;          // Suma
let resta = 5 - 3;         // Resta
let multiplicacion = 5 * 3; // Multiplicación
let division = 10 / 2;      // División
let residuo = 10 % 2;         // Módulo (residuo de la división)

//operadores logicos
//OR || AND && NOT !


//Operadores de comparación
//igualdad desigualdad
let igualdad = "5" == 5;
console.log(igualdad); // true, porque compara el valo
let igualdadEstricta = "5" === 5; // tipo de dato y valor
console.log(igualdadEstricta);

let desigualdad = "5" != 5;
console.log(desigualdad);
let desigualdadEstricta = "5" !== 5; // tipo de dato y valor
console.log(desigualdadEstricta);

//Operadores de comparación
let mayorQue = 5 > 3;         // Mayor que
let menorQue = 5 < 3;         // Menor que
let mayorOIgualQue = 5 >= 3;  // Mayor o igual que
let menorOIgualQue = 5 <= 3;  // Menor o igual que


//estructura de control o condiciones
if (false) {
    console.log("Esto no se ejecuta");
}

//swich
switch (opcion) {
    case 1:
        console.log("Opción 1 seleccionada");
        break;
    case 2:
        console.log("Opción 2 seleccionada");
        break;
    default:
        console.log("Opción no válida");
        break;
}


//Ternario/renderizado condicional/setear una clase/dark mode
condicion ? "casotrue" : "casofalse"

//estructuras repetitivas o bucles
while (contador < 5 && contador > 0) {
    console.log(contador);
    contador++;
}

contador = 0;
do {
    console.log(contador);
    contador++;
} while (contador < 5 && contador > 0);

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//funciones
function saludar() {
    console.log("Hola desde una función");
}

//Funciones anonimas
const funcioncita = function () { console.log("Hola desde una función anónima"); };

funcioncita(); // Llamada a la función anónima

//fat arrow functions / funciones flecha mas utilizada
const funcionFlecha = () => {
    console.log("Hola desde una función flecha");
};

funcionFlecha(); // Llamada a la función flecha