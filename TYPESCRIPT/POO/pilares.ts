//paradigma -> modelo de programacion
//se basa en objetos y clases para organizar y estructurar el código
/*
    POO-> es una formas de ver y pensar el codigoylas soluciones de implementaciones de software
    vamos a implementar moldes para poder estandarizar las cosas-> clases
    utilizar los moldes para crear funcionalidad en nuestra app-> objetos
*/


/* -Pilares de la POO:
    1. Abstracción: nos da metodos para acceder a informacion limitada
    2. Encapsulamiento: limitar el acceso a la informacion
    *Mpdificadores de acceso: public, private, protected, default(public por defecto)
    3. Herencia-> Obtener las caracteristicas y comportamientos de una clase padre
    4. Polimorfismo-> Permite que una clase hija pueda tener metodos con el mismo nombre que la clase padre, pero con diferente funcionalidad
*/

class Animal {
    //atributos y propiedades -> carecteristicas de la clase
    public especie: string;
    private edad: number;
    genero: string;
    color: string;

    //constructor -> metodo especial que se ejecuta cuando se crea un objeto
    constructor(especieParam: string, edadParam: number, generoParam: string, colorParam: string) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam
        this.color = colorParam;
    }

    //Metodos -> acciones que puede realizar la clase -> comportamiento
    comer(): string {
        return `El ${this.especie} está comiendo.`;
    }
    //getters y setters -> metodos para acceder a los atributos privados
    getEdad(): number {
        return this.edad;
    }
    setEdad(edadParam: number) {
        this.edad = edadParam;
    }
    //Abstracción
    aumentarEdad() {
        this.edad += 1;
    }

}
const animalito = new Animal("Perro", 5, "Macho", "Marrón");
//accedemos a un atributo del objeto instanciado(creado en base) de una clase
console.log(animalito.especie);
console.log(animalito.getEdad());

class Perro extends Animal {
    private raza: string;
    private nombre: string;

    constructor(especieParam: string, edadParam: number, generoParam: string, colorParam: string, razaParam: string, nombreParam: string) {
        //traemos la funcionalidad del constructor de la clase padre
        //super() -> llama al constructor de la clase padre-se pueden llamar metodos de la clase padre
        super(especieParam, edadParam, generoParam, colorParam);
        this.raza = razaParam;
        this.nombre = nombreParam;
    }
    ladrar(): string {
        return "Guau! Guau!";
    }

    //polimorfismo -> redefinir un metodo de la clase padre
    aumentarEdad(): void {
        this.setEdad(this.getEdad() + 7);
    }
}
const perrito = new Perro("Perro", 3, "Macho", "Amarillo", "Labrador", "Rex");

//tipo personalizado
//tipo-> es una forma de definir un tipo de dato personalizado en TypeScript
type User = {
    nombre: string;
    email: string;
    password: string;
    rol: string;
}

let usuarito : User = {
    nombre: "Juan",
    email: "juan@gmail.com",
    password: "123456",
    rol: "admin"
}
//interfaz -> define un contrato que una clase debe cumplir
//diferencia enrtre esto y una clase es que la interfaz no tiene constructor

interface IUser {
    name: string;
    email: string;
    password: string;
    role: string;

    login(): string; //metodo que debe implementar la clase que implemente esta interfaz
}

let usuarito2: IUser = {
    name: "Ana",
    email: "Ana@gmail.com",
    password: "123456",
    role: "user",

    login(): string {
        return "me loguee";
    }
}

/* Ejemplo de uso de interface en POO*/


