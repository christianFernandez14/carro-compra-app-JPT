
let articulosCarrito = []

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners()

function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso)

}

function agregarCurso(e) {
  e.preventDefault()

  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(cursoSeleccionado);
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

  articulosCarrito = [infoCurso, ...articulosCarrito]

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
 * 1.- Agregamos una propiedad más que esta asociada al boton del elminar un curso (enlance)
 * 
 * 2.- Viendo que nuestro codigo puede optimizarse mas, aplicamos destructuring a cada articulo.
 * 
 * 
*/
