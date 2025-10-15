<?php
//principio de sustitucion de liskov --> podemos reemplzar la clas hija con la clase padre sin que se rompa

class Persona
{
    function comer() {}

    function dormir() {}

    function respirar() {}
}

interface IPersonaHablante
{
    function hablar();
}

interface ICaminante
{
    function caminar();
}

class Programador extends Persona implements IPersonaHablante, ICaminante
{
    function hablar() {}

    function caminar() {}
}

class Bebe extends Persona {}
