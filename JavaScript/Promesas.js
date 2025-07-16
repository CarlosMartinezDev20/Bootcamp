//Peticiones asincronas
/*
    promesas tienen 3 estados:
    pending --> pendiente todavia no se ha resuelto
    response --> se ha resuelto bien
    rejected --> se ha rechazado, ha habido un error
*/
// console.log("Hola");

//simular una peticion a una api
function getCoach(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id == 1) {
                resolve({ id: 1, name: "Pep Guardiola" });
            } else {
                reject("No se ha encontrado el entrenador con id: " + id);
            }
        }, 2000)
    })
}

//console.log(getCoach(1));

//then ejecuta cuando todo sale bien y catch da error
function getData() {
    getCoach(1)
        .then((coach) => {
            console.log(coach);
        })
        .catch((error) => {
            console.error(error);
        });
}

//getData();

//otra forma de hacerlo con async/await
async function getDataAsync() {
    try {
        let coach = await getCoach(1);
        console.log(coach);
    } catch (error) {
        console.error(error);
    }
}

//getDataAsync();

//FETCH --> va a ser nuestro metodo(interfaz) para hacer peticiones a una API
async function getDittoAwait() {
    try { //manejo de errores
        let respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); //espera a traer la respuesta de la API
        console.log(respuesta);//ver que respuesta nos da la API, nos dara metadatos de la respuesta

        let cuerpo = await respuesta.json(); // obtenemos el cuerpo de esa respuesta
        console.log(cuerpo);//mostrar el cuerpo ahi estan los datos

    } catch (error) {//manejo de errores
        // Si hay un error, lo capturamos y mostramos
        console.error("Error al obtener Ditto:", error);
    }
}

// getDittoAwait();

function getDittoThen() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")//buscar datos en la api
        .then((data) => {// le decimos a  js que espere a la respuesta
            console.log(data);// nos dara metadatos de la respuesta
            return data.json(); // Convertir la respuesta a JSON
        })

        .then((data) => { //retorna la data para usarla despues , solo el body en tipo JSON
            console.log(data); //muestra el cuerpo de la respuesta
        })

        .catch((error) => {
            console.error("Error al obtener Ditto:", error);
        });
}
// getDittoThen();

function saludar() {
    console.log("Hola, mundo!");
}