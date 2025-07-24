// // Variables globales
// let carrito = [];

// // Función para agregar curso al carrito
// function agregarCurso(event) {
//     event.preventDefault();
//     const boton = event.target;
//     const card = boton.closest('.card');
//     const id = boton.getAttribute('data-id');
//     const nombre = card.querySelector('.card-title').textContent;
//     const precio = card.querySelector('h5').textContent.replace('$', '');
//     const imagen = card.querySelector('img').getAttribute('src');

//     // Buscar si ya está en el carrito
//     const cursoExistente = carrito.find(curso => curso.id === id);
//     if (cursoExistente) {
//         cursoExistente.cantidad++;
//     } else {
//         carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
//     }
//     renderCarrito();
// }

// // Función para vaciar el carrito
// function vaciarCarrito(event) {
//     event.preventDefault();
//     carrito = [];P
//     renderCarrito();
// }

// // Función para eliminar un curso del carrito
// function eliminarCurso(id) {
//     carrito = carrito.filter(curso => curso.id !== id);
//     renderCarrito();
// }

// // Renderizar el carrito en el HTML
// function renderCarrito() {
//     const tbody = document.querySelector('#lista-carrito tbody');
//     tbody.innerHTML = '';
//     carrito.forEach(curso => {
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td><img src="${curso.imagen}" width="50"></td>
//             <td>${curso.nombre}</td>
//             <td>$${curso.precio}</td>
//             <td>${curso.cantidad}</td>
//             <td><button class="btn btn-danger btn-sm" onclick="eliminarCurso('${curso.id}')">Eliminar</button></td>
//         `;
//         tbody.appendChild(tr);
//     });
// }

// // Asignar eventos a los botones que no tienen onclick en el HTML
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('.btn[data-id]').forEach(boton => {
//         if (!boton.getAttribute('onclick')) {
//             boton.addEventListener('click', agregarCurso);
//         }
//     });
// });

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

                //Aumentamos el precio
                cursoArr.precio += cursoArr.precio;
                //Devolvemos el precio a su formato original
                cursoArr.precio = `$${cursoArr.precio}`;

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
            // Va a guardar los cursos que sean diferentes a ese ID
            cursosCarrito = cursosCarrito.filter(curso => curso.id != id);
        }
    })
    pintarCarritoHTML();
}