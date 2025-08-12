/* Ejemplo de uso de interface en POO*/
class Animal {
    //atributos privados
    private nombre: string;
    private especie: string;

    constructor(nombreParam: string, especieParam: string) {
        this.nombre = nombreParam;
        this.especie = especieParam;
    }

    comer(): string {
        return "estoy comiendo";
    }
    getAnimal(): Animal {
        return this;
    }
}
let animal1: Animal = new Animal("Perro", "Canino");
console.log(animal1.getAnimal());

class Gato extends Animal implements IAnimal {
    raza: string;
    color: string;

    constructor(nombreParam: string, especieParam: string, razaParam: string, colorParam: string) {
        super(nombreParam, especieParam);
        this.raza = razaParam;
        this.color = colorParam;
    }

    hacerSonido(): string {
        return "miau miau";
    }
}

//Implements le avisa a JS y TS que la clase Perro obligatoriamente tiene que tiene que tener lo que declara la interfaz
class Perro extends Animal implements IAnimal {
    raza: string;
    color: string;

    constructor(nombreParam: string, especieParam: string, razaParam: string, colorParam: string) {
        super(nombreParam, especieParam);
        this.raza = razaParam;
        this.color = colorParam;
    }

    hacerSonido(): string {
        return "guau guau";
    }

}

interface IAnimal {
    //los atributos tienen que quedar públicos
    raza: string;
    color: string;

    hacerSonido(): string;
}