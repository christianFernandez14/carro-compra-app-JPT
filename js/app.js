// Variables
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

// Lee el contenido  del HTML al que le dimos  click y extrae la info del curso
function leerDatosCurso(curso) {

  // Creamos un obejeto con el contenido del curso actual.
  const infoCurso = {
    id: curso.querySelector('a').getAttribute('data-id'),
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    cantidad: 1
  }

  // Voy viendo como se va construyendo mi objeto
  console.log(infoCurso);
}



/** Comentarios extras:
 * 1.- Una vez más, como buenas practicas tu funcion debe hacer una sola cosas, separa la logica y dividela en otras funciones.
 *
 * 2.- A la hora de manipular la información que vamos a mostrar en el carrito, o simplemente manipularla, la mejor opción es almancenarla en el un objeto) 
 * 
 * 3.- Todo objeto debe ser unico, por lo tando debes incorporar el id atu objeto utilizando el atributo que ya esta definido en el HTML
 * 
 * 4.- Debes ir probando cada información suministrada en el objeto. *  
  
*/
