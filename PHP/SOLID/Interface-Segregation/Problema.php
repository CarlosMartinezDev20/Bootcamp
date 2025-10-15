<?php

/*Principio de segregacion de interfaces--> si nosotros tenemos una interfaz
demasiado generica es mejor dividirla en interfaces mas especificas*/

interface Ave
{
    function comer();
    function caminar();
    function picar();
}

interface AveVoladora{
    function volar();
}

class Pinguino implements Ave{
    function comer(){

    }

    function caminar(){

    }

    function picar(){
        
    }

}