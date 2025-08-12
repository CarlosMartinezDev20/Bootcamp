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
let nombre: string = "Juan";
let edad: number = 30;
let esEstudiante: boolean = true;
let vacio: null = null;

console.log(edad);

//tipos de datos que NO USAREMOS
let nose:any = "cualquier cosa";
let noDefinido: undefined = undefined;

//funciones
function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}
saludar(nombre);
console.log(saludar(nombre));

//estructuras de datos
//Array dos datos
let array : number[] | string[] = [1, 2, 3, 4, 5];
array = ["as"];
//array
let numeros: number[] = [1, 2, 3, 4, 5];
//tupla
let tupla: [string, number] = ["Juan", 30];


//podemos llegar a tener 2 tipos de datos
let variable: string | number = "Hola";
variable = 42; // Ahora es un número

type programador ={
    nombre: string;
    edad: number;
    lenguajes: string[];
}

let programador: programador = {
    nombre: "Juan",
    edad: 30,
    lenguajes: ["JavaScript", "TypeScript"]
};

let fsj30: programador[] = [
    {
        nombre: "Juan",
        edad: 30,
        lenguajes: ["JavaScript", "TypeScript"]
    }
];