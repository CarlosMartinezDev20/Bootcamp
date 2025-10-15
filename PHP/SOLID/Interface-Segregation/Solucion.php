<?php

/*Principio de segregacion de interfaces--> si nosotros tenemos una interfaz
demasiado generica es mejor dividirla en interfaces mas especificas*/

interface Avep
{
    function volar();
    function comer();
    function caminar();
    function picar();
}



class Pinguino implements Avep{

    function volar(){
        return new Exception("No puedo volar pa");
    }
    function comer(){

    }

    function caminar(){

    }

    function picar(){
        
    }

}