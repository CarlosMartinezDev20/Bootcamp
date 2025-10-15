<?php

/* 
 Principio de abierto/cerrado -> Las clases, componentes, etc deben estar abiertas para su extension pero cerradas para su modificacion
*/
class ConductorAutomovil{
    function acelerar(Challenger $auto){
        $auto->aumentarVelocidad();
    }
}



class Challenger{
    function aumentarVelocidad(){
        echo " estoy acelerando";
    }
}

class Mercedes{
    function aumentarVelocidad(){
        echo "estoy acelerando mas fuerte";
    }
}

$vehiculoHumilde = new Challenger();
$schuma = new ConductorAutomovil();
$schuma -> acelerar($vehiculoHumilde);
?>