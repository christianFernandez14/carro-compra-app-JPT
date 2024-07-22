
let articulosCarrito = []

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners()

function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso)

  // Elimina curso del carrito
  carrito.addEventListener('click', eliminarArticulo)

}

function agregarCurso(e) {
  e.preventDefault()

  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(cursoSeleccionado);
  }

}

// Eliminando curso dl carrito
function eliminarArticulo(e) {
  // haciendo pruebas de estamos con el elemento correcto
  // console.log('Eliminando el articulo...');
  if (e.target.classList.contains('borrar-curso')) {
    const articuloId = e.target.getAttribute('data-id')

    // Elimina del arreglo de arregloCarrito, por el data-id
    articulosCarrito = articulosCarrito.filter(articulo => articulo.id !== articuloId)

    // Aca voy viendo como queda mi arreglo articuloCarrito
    // console.log(articulosCarrito);

    // Hasta aqui solo en manipulado el arrar debo mostrar lo que queda en el.
    carritoHTML()
  }
}

function leerDatosCurso(curso) {

  const infoCurso = {
    id: curso.querySelector('a').getAttribute('data-id'),
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    cantidad: 1
  }

  const articuloExiste = articulosCarrito.some(articulo => (articulo.id === infoCurso.id))

  if (articuloExiste) {

    const articulos = articulosCarrito.map(articulo => {

      if (articulo.id === infoCurso.id) {
        articulo.cantidad++
        return articulo

      } else {
        return articulo
      }
    })

    articulosCarrito = [...articulos]
  } else {
    articulosCarrito = [infoCurso, ...articulosCarrito]

  }

  carritoHTML()
}

function carritoHTML() {

  limpiarHTML()

  articulosCarrito.forEach(articulo => {
    const { imagen, titulo, precio, cantidad, id } = articulo

    const row = document.createElement('TR')

    row.innerHTML = `
      <td>
        <img src="${imagen}" width="100" />
      </td>
      <td>${titulo}</td>
      <td>${precio}</td>
      <td>${cantidad}</td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
      </td>
    `
    contenedorCarrito.appendChild(row)
  })

}

function limpiarHTML() {

  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}





/** Comentarios extras:
 * 1.- Ahora trabajando con la funcionalidad de elimando, especificamente eliminando un articulos, nos percatamos que el selector utizado es todo el div o tbody mas bien, aca para solucionarlo, debes trabajar con el event bubbling.
 * 
 * 2.- La mejor opcion para trabajar con DELETE, es iterar con un filter, prueba mas adelante, agregando otro filter, donde guarde el articulo eliminado y luedo te lo muestre más adelante; seria una muy buena practica de HTML, Css y Js
 * 
 * 
 * 
 * 
 * 
*/
