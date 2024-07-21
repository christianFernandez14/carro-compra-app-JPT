
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');

// Donde se almacenara los productos
let articulosCarrito = []


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

  // Agrega elementos al arreglo de carrito
  // articulosCarrito.push(infoCurso) // puede hacerse tambien
  articulosCarrito = [infoCurso, ...articulosCarrito] // Ultimo seleccionado, primero en mostrarse

  // Lo inyectamos en el HTML
  carritoHTML()
}


// Mostrando los articulos seleccionados en el HTML
function carritoHTML() {

  // Limpiamos lo que hay en el array
  limpiarHTML()

  // Iteramos por cada articulo que hay dentro del array carrito
  articulosCarrito.forEach(articulo => {
    const row = document.createElement('TR')

    row.innerHTML = `
      <td>
        <img src="${articulo.imagen}" width="100" />
      </td>
      <td>${articulo.titulo}</td>
      <td>${articulo.precio}</td>
      <td>${articulo.cantidad}</td>
    `
    // Inyectamos el HTML en <tbody>
    contenedorCarrito.appendChild(row)
    // console.log(articulo);
  })

}

// Limpindo el HTML
function limpiarHTML() {
  //La manera lenta 
  contenedorCarrito.innerHTML = ''

  // Con mejor performance
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild)
  }
}





/** Comentarios extras:
 * 1.- Ya con mi objeto creado, la idea es ir alamacenarlo en algun lugar y que estes se muestre posteriormente donde deba mostrarse y la mejor opción es guardarlo en un array.
 * 
 * 2.- Usamos el Spread operator, pudimos usar .push, pero para ir con las actulizaciones de java.
 * 
 * 3.- Seguimos con el principio unico de las funciones, en esta oportunidad creamos otra funcion que se encargará de crear el HTML y mostrarlo en la app.
 * 
 * 4.- A la hora de mostrar los cursos en el HTML debemos inyectarlos dentro del elemento "tbody", ya en el diseño pre-establecido, para esto un elemento "tr", cae perfecto por cada columna que tiene la tabla.
 * 
 * 5.- Ya resuelto lo anterior y por el uso del appendChild, se nos esta duplicando la información en el array y por obvias razones en el HTML tambien, para esto debemos limpiar el HTML, previo a una incorporación nueva, nueva logica, hay que separlo de esta función y hacer una nueva.
 * 
 * 6.- 
*/
