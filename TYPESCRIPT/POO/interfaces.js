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
/* Ejemplo de uso de interface en POO*/
var Animal = /** @class */ (function () {
    function Animal(nombreParam, especieParam) {
        this.nombre = nombreParam;
        this.especie = especieParam;
    }
    Animal.prototype.comer = function () {
        return "estoy comiendo";
    };
    Animal.prototype.getAnimal = function () {
        return this;
    };
    return Animal;
}());
var animal1 = new Animal("Perro", "Canino");
console.log(animal1.getAnimal());
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(nombreParam, especieParam, razaParam, colorParam) {
        var _this = _super.call(this, nombreParam, especieParam) || this;
        _this.raza = razaParam;
        _this.color = colorParam;
        return _this;
    }
    Gato.prototype.hacerSonido = function () {
        return "miau miau";
    };
    return Gato;
}(Animal));
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombreParam, especieParam, razaParam, colorParam) {
        var _this = _super.call(this, nombreParam, especieParam) || this;
        _this.raza = razaParam;
        _this.color = colorParam;
        return _this;
    }
    Perro.prototype.hacerSonido = function () {
        return "guau guau";
    };
    return Perro;
}(Animal));
