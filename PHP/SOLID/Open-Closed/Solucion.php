<?php

/* 
 Principio de abierto/cerrado -> Las clases, componentes, etc deben estar abiertas para su extension pero cerradas para su modificacion
*/
class ConductorAutomovil
{
    function acelerar(Challenger $auto)
    {
        $auto->aumentarVelocidad();
    }
}
class Auto
{
    function aumentarVelocidad()
    {
        echo " estoy acelerando";
    }
}


class Challenger extends Auto
{
    function aumentarVelocidad()
    {
        echo " estoy acelerando";
    }
}

class Mercedes extends Auto
{
    function aumentarVelocidad()
    {
        echo "estoy acelerando mas fuerte";
    }
}

$vehiculoHumilde = new Challenger();
$otroVehiculoHumilde = new Mercedes();
$schuma = new ConductorAutomovil();
$schuma->acelerar($vehiculoHumilde);
