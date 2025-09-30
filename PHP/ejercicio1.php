<?php 
function busquedaLineal($lista, $elementoBuscado) {
    for($i = 0 ; $i < count($lista); $i++) {
        if($lista[$i] === $elementoBuscado) {
            return $i;
        }
    }

    return -1;

}

//Ejemplo practica con estudiantes del fsj30
$estudiantes = ["Daniela", "Luis", "Carlos", "Dayana", "Angel"];

$posicion = busquedaLineal($estudiantes, "Dayana");

if ($posicion !== -1) {
    echo "El estudiante se encuentra en la posicion: " . $posicion ." \n";
    echo "El estudiante es: " . $estudiantes[$posicion]. "\n";
} else {
    echo "El estudiante no se encuentra en la lista";
}

