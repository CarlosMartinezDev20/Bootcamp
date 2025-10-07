<?php 
print_r($_POST);
require_once './Aerolinea.php';

// $_SESSION -> Variable reservada para almacenar datos (Array assoc)
//INICIAMOS LA SESION PARA PODER UTILIZAR LA VARIABLE $_SESSION

session_start();

print_r($_SESSION);

//Llamamos la clase Aerolineas para crear un objeto
// include -> Incluir el archivo y si no existe, mostrar un error y continuar la ejecucion del codigo
// require -> Requerir el archivo y si no existe, mostrar un error y detener la ejecucion del codigo

// include_once -> Incluir el archivo una sola vez, si se vuelve a llamar dentro de este archivo, va a usar la misma referencia
// require_once -> Requerir el archivo una sola vez, si se vuelve a llamar dentro de este archivo, va a usar la misma referencia



// Persistencia de datos
// Auxiliar para prechequear session
if(!isset($_SESSION['aerolineas'])){
    $_SESSION['aerolineas'] = [];
}


$aerolineas = $_SESSION['aerolineas'];


if(isset($_POST['nombre_aerolinea'], $_POST['cantidad_aviones'], $_POST['tipo_aerolinea']) ){

    $id = rand(1,1000);
    $nombre = $_POST['nombre_aerolinea'];
    $cant_aviones = $_POST['cantidad_aviones'];
    $tipo_aero = $_POST['tipo_aerolinea'];
    
    $aerolineacita = new Aerolinea($id,$nombre,$cant_aviones,$tipo_aero);
    
    print_r($aerolineacita);
    array_push($aerolineas,$aerolineacita);
    //$aerolineas[] = $aerolineacita;

    // $_SESSION['aerolineas'][] = $aerolineas; otra forma de pushear los datos
    $_SESSION['aerolineas'] = $aerolineas;

    echo "<h1>Aerolineas hasta ahora</h1><br>"; 
    print_r($_SESSION['aerolineas']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica CRUD Aerolineas</title>
</head>
<body style="background-color: gray;" >
    <h1>Holiwis bienvenido a Aerolineas Jairito</h1>

    <h3>Crear una nueva aerolinea</h3>
    <form action="" method="POST">
        <label for="nombre_aerolinea">Nombre Aerolinea: </label>
        <input type="text" name="nombre_aerolinea" required>

        <label for="nombre_aerolinea">Cantidad Aviones: </label>
        <input type="text" name="cantidad_aviones" required>

        <label for="nombre_aerolinea">Tipo de Aerolinea: </label>
        <select type="text" name="tipo_aerolinea">
            <option value="Privado">Privado</option>
            <option value="Comercial">Comercial</option>
            <option value="Carga">Carga</option>
            <option value="Nacional">Nacional</option>
        </select>
        <button type="submit">Crear</button>

    </form>

    <main>
        <table>
            <thead>
                <th># ID</th>
                <th>Nombre</th>
                <th>Cantidad de aviones</th>
                <th>Tipo Aerolinea</th>
            </thead>
            <tbody>
                <?php 
                    foreach($aerolineas as $aero){
                        echo "<tr>
                            <td>{$aero->getId()}</td>
                            <td>{$aero->getNombre()}</td>
                            <td>{$aero->getCant_aviones()}</td>
                            <td>{$aero->getTipo_aerolinea()}</td>
                        </tr> ";
                    }
                ?>
            </tbody>

        </table>
    </main>
</body>
</html>