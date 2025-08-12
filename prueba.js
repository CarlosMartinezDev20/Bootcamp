let cursosCarrito = [];
const contenedorCarrito = document.getElementById('cuerpo-carrito');

function vaciarCarrito(event) {
    console.log("Carrito vaciado");

    cursosCarrito = [];
    contenedorCarrito.innerHTML = "";
}

function agregarCurso(evento) {
    console.log("Curso agregado al carrito");
    // console.log(event.target.parentElement.parentElement);
    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    console.log(curso);

    // chequeamos si el curso existe previamente y guardamos true o false
    const existe = cursosCarrito.some((cursoArr) => cursoArr.id === curso.id)

    if (existe) {
        cursosCarrito.map((cursoArr) => {
            if (cursoArr.id === curso.id) {
                cursoArr.cantidad += 1;

                //Aumentar el precio
                // Utilizar un metodo string que pueda quitar el primer caracter
                //Metodos posibles = substring o slice
                cursoArr.precio = cursoArr.precio.substring(1);
                //transformamos el string a numero
                //ParseInt o parseFloat
                cursoArr.precio = parseFloat(cursoArr.precio);

                // Obtener precio de un curso
                let precioUno = curso.precio.substring(1);
                precioUno = parseFloat(precioUno);

                //Aumentamos el precio
                cursoArr.precio += precioUno
                //Devolvemos el precio a su formato original
                cursoArr.precio = $${cursoArr.precio.toFixed(2)};

                return;
            }
        })
    } else {
        cursosCarrito.push(curso);
    }
    console.log(cursosCarrito);
    pintarCarritoHTML();
}

function leerDatosCurso(curso) {
    console.log(curso);
    console.log(curso.querySelector('a').getAttribute('data-id'));
    console.log(curso.querySelector('img').src);
    console.log(curso.querySelector('h4').textContent);
    console.log(curso.querySelector('h5').textContent);

    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('h5').textContent,
        cantidad: 1
    }
    return infoCurso;

}

function pintarCarritoHTML() {
    // Limpiar el carrito de compras
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map((curso) => {
        //crear una fila
        const fila = document.createElement('tr');

        //asignar los valores en celdas
        fila.innerHTML = `
            <td><img src="${curso.imagen}" width="80" ></td>
            <td>${curso.nombre}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `
        contenedorCarrito.appendChild(fila);
    })
}

function eliminarCurso(id) {
    console.log(id);

    cursosCarrito.map((curso) => {
        //Si tiene cantidad mayor a 1 tiene que disminuir en 1
        if (curso.id == id) {
            console.log(curso.id);

            // Revisar si hay mas de uno
            if (curso.cantidad > 1) {
                curso.cantidad -= 1;

                // Extraer número del precio y quitar el primer caracter y convertir a float
                let precioTotal = parseFloat(curso.precio.substring(1));
                // Calcular precio de un curso
                let precioUno = precioTotal / (curso.cantidad + 1); // usamos +1 porque ya restamos 1 a la cantidad
                // Restar el precio unitario al precio total
                precioTotal -= precioUno;
                // Volver a formatear el precio con $
                curso.precio = $${precioTotal.toFixed(2)};
            } else {
                // Si la cantidad es 1, eliminar el curso del carrito
                cursosCarrito = cursosCarrito.filter(curso => curso.id != id);
            }
        }
    });

    pintarCarritoHTML();
}