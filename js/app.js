
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

  // Revisamos si un articulo ya existe en el carrito
  const articuloExiste = articulosCarrito.some(articulo => (articulo.id === infoCurso.id))

  console.log(articuloExiste); // Me retorna un bool

  if (articuloExiste) {
    // Actulizamos la cantidad
    const articulos = articulosCarrito.map(articulo => {

      if (articulo.id === infoCurso.id) {
        articulo.cantidad++
        return articulo // Retorna el objeto actulizado

      } else {
        return articulo // retorna los objetos que no son duplicados
      }
    })

    articulosCarrito = [...articulos]
  } else {
    // Agregamos por primera vez el articulo
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
 * 1.- En este caso estamos trabajando con la columna de cantidad, ya que si agregas el mismo artiuculo, n-veces, este se agrega y no es la idea
 * 
 * 2.- utilizamos un iterador de los array, como lo es el some, ya que me permite verificar si alguno cumple una condicion y te retorna un boll
 * 
 * 3.- Luego de esto, utilizamos el resultado del some, para aumentar la propiedad de la cantidad o agregar el articulo como primera vez.
 * 
 * 
*/
