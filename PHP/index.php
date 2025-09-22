<?php
//Diferencias vs Javascript
// 1. PHP es un lenguaje compilado (se interpreta por apache)
// 2. PHP es un lenguaje de tipado debil pero con tipado obligatorio
// 3. PHP no es case sensitive (no distingue entre mayusculas y minusculas) en variables y funciones
// 4. PHP vamos a utilizar una POO con todos los pilares
// Delimitadores

/* Comentario
multilinea */

// Salto de linea \n
// La concatenacion va a ser con el punto .
echo "Holiwiis"."\n";
print "Holiwiis con print \n";
echo "Chauchis"."\n";

//Variables
//let nombre = "Jairo"

$nombre = "Jairo";

//Constantes
define("PI", 3.1416);


//Template string
$templateString = "Hola, mi nombre es {$nombre}";
echo $templateString . "\n";

//Operadores matematicos
$suma = 2 + 2;
$resta = 2 - 2;
$multiplicacion = 2 * 2;
$division = 2 / 2;
$modulo = 5 % 2; //Resto de la division
$exponente = 2 ** 3; //2^3

//Operadores de comparacion
$igual = (2 == 2);
$igualdadEstricta = (2 === "2");
$diferente = (2 != 3);
$diferenteEstricta = (2 !== "2");
$mayor = (2 > 1);
$menor = (2 < 3);
$mayor_igual = (2 >= 2);
$menor_igual = (2 <= 3);

//Operadores logicos AND (&&), OR (||), NOT (!)
$y = (2>3 && 3<=2);
$o = (3>5 || 2<5);
$no = !true;


//Funciones
//Funcion expresada
function saludar($nombre) {
    return "Hola, {$nombre}";
}

echo saludar("Jose")."\n";

//Funciones anonimas 
$despedirse = function($nombre){
    return "Chauchis, {$nombre}";
};

echo $despedirse("Jose")."\n";

//Funciones flecha (PHP 7.4+)
$gritar = fn($nombre) => "AAAAHHH, {$nombre}";

echo $gritar("Jairo")."\n";


// Estructuras condicionales
// IF ELSEIF ELSE
$edad = 18;
if($edad < 18){
    echo "Eres menor de edad\n";
} elseif($edad === 18){
    echo "Tienes 18 años\n";
} else {
    echo "Eres mayor de edad\n";
}

// SWITCH case
$dia = 3;
switch($dia){
    case 1:
        echo "Lunes\n";
        break;
    case 2:
        echo "Martes\n";
        break;
    case 3:
        echo "Miercoles\n";
        break;
    default:
    echo "Es un otro dia que no tenemos clases \n";
    break;
}   

//Ternario
$mensaje = ($edad < 18) ? "Eres menor de edad" : "Eres mayor de edad";
echo $mensaje."\n";

//Estructuras repetitivas
// While
$contador = 0;
while($contador < 5){
    echo "Contador: {$contador}\n";
    $contador++;
}

//Do While 
$contador = 0;
do{
    echo "Contador Do While: {$contador}\n";
    $contador++;
} while($contador < 5);

//for
for($i = 0; $i < 5; $i++){
    echo "Contador For: {$i}\n";
}

?>