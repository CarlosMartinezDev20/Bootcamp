// Array que almacena los cursos agregados al carrito
let cursosCarrito = [];

// Referencia al cuerpo de la tabla donde se mostrarán los cursos del carrito
const contenedorCarrito = document.getElementById('cuerpo-carrito');

// Vacía el carrito y actualiza la vista
function vaciarCarrito(event) {
    event.preventDefault();
    cursosCarrito = [];
    pintarCarritoHTML();
}

// Agrega un curso al carrito. Si ya existe, incrementa la cantidad
function agregarCurso(evento) {
    // Obtener los datos del curso seleccionado
    let curso = leerDatosCurso(evento.target.parentElement.parentElement);
    // Verificar si el curso ya está en el carrito
    const existe = cursosCarrito.some((cursoArr) => cursoArr.id === curso.id);
    if (existe) {
        // Si existe, incrementar la cantidad
        cursosCarrito = cursosCarrito.map((cursoArr) => {
            if (cursoArr.id === curso.id) {
                cursoArr.cantidad += 1;
            }
            return cursoArr;
        });
    } else {
        // Si no existe, agregarlo al carrito
        cursosCarrito.push(curso);
    }
    pintarCarritoHTML();
}

// Extrae los datos relevantes de un curso desde el DOM y los retorna como objeto
function leerDatosCurso(curso) {
    const infoCurso = {
        id: curso.querySelector('a').getAttribute('data-id'), // ID único del curso
        imagen: curso.querySelector('img').src,               // URL de la imagen del curso
        nombre: curso.querySelector('h4').textContent,        // Nombre del curso
        precio: curso.querySelector('h5').textContent,        // Precio en formato string (ej: "$15.00")
        cantidad: 1                                           // Cantidad inicial
    }
    return infoCurso;
}

// Renderiza el contenido del carrito en la tabla HTML
function pintarCarritoHTML() {
    // Limpiar el contenido actual del carrito
    contenedorCarrito.innerHTML = '';
    // Recorrer los cursos en el carrito y crear una fila para cada uno
    cursosCarrito.forEach((curso) => {
        const fila = document.createElement('tr');
        // Calcular el precio total por curso (precio unitario * cantidad)
        const precioUnitario = parseFloat(curso.precio.replace(/[^\d.]/g, ""));
        const precioTotal = (precioUnitario * curso.cantidad).toFixed(2);
        fila.innerHTML = `
            <td><img src="${curso.imagen}" width="80"></td>
            <td>${curso.nombre}</td>
            <td>$${precioTotal}</td>
            <td>${curso.cantidad}</td>
            <td><a class="btn btn-danger btn-eliminar" data-id="${curso.id}">Eliminar</a></td>
        `;
        contenedorCarrito.appendChild(fila);
    });
    // Asignar evento a cada botón de eliminar para quitar cursos individuales
    const botonesEliminar = document.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarCurso);
    });
}

// Elimina un curso del carrito. Si hay más de uno, disminuye la cantidad; si solo queda uno, lo elimina completamente
function eliminarCurso(event) {
    const id = event.target.getAttribute('data-id');
    cursosCarrito = cursosCarrito.map((curso) => {
        if (curso.id === id) {
            if (curso.cantidad > 1) {
                curso.cantidad -= 1;
            } else {
                return null; // Eliminar el curso del carrito
            }
        }
        return curso;
    }).filter(Boolean);
    pintarCarritoHTML();
}
// Inicializa la vista del carrito al cargar la página
pintarCarritoHTML();