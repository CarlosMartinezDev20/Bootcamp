<?php
//principio de sustitucion de liskov --> podemos reemplzar la clas hija con la clase padre sin que se rompa

class Persona{
    function comer(){

    }

    function dormir(){

    }

    function respirar(){

    }
    function hablar(){

    }
    function caminar(){

    }
    
}

class Programador extends Persona{

}

class Bebe extends Persona{
    function hablar (){}
}