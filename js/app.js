
let articulosCarrito = []
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners()

function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso)

  carrito.addEventListener('click', eliminarArticulo)

  vaciarCarritoBtn.addEventListener('click', () => {
    articulosCarrito = []
    limpiarHTML()

  })

}

function agregarCurso(e) {
  e.preventDefault()
  if (e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement

    leerDatosCurso(cursoSeleccionado);
  }

}

function eliminarArticulo(e) {
  if (e.target.classList.contains('borrar-curso')) {
    const articuloId = e.target.getAttribute('data-id')

    articulosCarrito = articulosCarrito.filter(articulo => articulo.id !== articuloId)

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


