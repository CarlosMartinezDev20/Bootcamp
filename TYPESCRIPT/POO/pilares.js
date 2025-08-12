//paradigma -> modelo de programacion
//se basa en objetos y clases para organizar y estructurar el código
/*
    POO-> es una formas de ver y pensar el codigoylas soluciones de implementaciones de software
    vamos a implementar moldes para poder estandarizar las cosas-> clases
    utilizar los moldes para crear funcionalidad en nuestra app-> objetos
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* -Pilares de la POO:
    1. Abstracción: nos da metodos para acceder a informacion limitada
    2. Encapsulamiento: limitar el acceso a la informacion
    *Mpdificadores de acceso: public, private, protected, default(public por defecto)
    3. Herencia-> Obtener las caracteristicas y comportamientos de una clase padre
    4. Polimorfismo-> Permite que una clase hija pueda tener metodos con el mismo nombre que la clase padre, pero con diferente funcionalidad
*/
var Animal = /** @class */ (function () {
    //constructor -> metodo especial que se ejecuta cuando se crea un objeto
    function Animal(especieParam, edadParam, generoParam, colorParam) {
        this.especie = especieParam;
        this.edad = edadParam;
        this.genero = generoParam;
        this.color = colorParam;
    }
    //Metodos -> acciones que puede realizar la clase -> comportamiento
    Animal.prototype.comer = function () {
        return "El ".concat(this.especie, " est\u00E1 comiendo.");
    };
    //getters y setters -> metodos para acceder a los atributos privados
    Animal.prototype.getEdad = function () {
        return this.edad;
    };
    Animal.prototype.setEdad = function (edadParam) {
        this.edad = edadParam;
    };
    //Abstracción
    Animal.prototype.aumentarEdad = function () {
        this.edad += 1;
    };
    return Animal;
}());
var animalito = new Animal("Perro", 5, "Macho", "Marrón");
//accedemos a un atributo del objeto instanciado(creado en base) de una clase
console.log(animalito.especie);
console.log(animalito.getEdad());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(especieParam, edadParam, generoParam, colorParam, razaParam, nombreParam) {
        //traemos la funcionalidad del constructor de la clase padre
        //super() -> llama al constructor de la clase padre-se pueden llamar metodos de la clase padre
        var _this = _super.call(this, especieParam, edadParam, generoParam, colorParam) || this;
        _this.raza = razaParam;
        _this.nombre = nombreParam;
        return _this;
    }
    Perro.prototype.ladrar = function () {
        return "Guau! Guau!";
    };
    //polimorfismo -> redefinir un metodo de la clase padre
    Perro.prototype.aumentarEdad = function () {
        this.setEdad(this.getEdad() + 7);
    };
    return Perro;
}(Animal));
var perrito = new Perro("Perro", 3, "Macho", "Amarillo", "Labrador", "Rex");
