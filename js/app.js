// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');


// Este console, me sirvio para ir probando que estaba aputando al selector correcto
// console.log(vaciarCarritoBtn);

cargarEventListeners()

function cargarEventListeners() {
  // Cuando agregas un curso presionando "Agregar al Carrito"
  listaCursos.addEventListener('click', agregarCurso)

}

function agregarCurso(e) {
  e.preventDefault()

  // Aplicamos Event bubbling por delegation
  if (e.target.classList.contains('agregar-carrito')) {

    // clg, que me permite ir viendo hasta donde quiero enmarcar mi target
    console.log(e.target.parentElement.parentElement);
  }

}



/** Comentarios extras:
 * 
 * 1.- la mayoria de los selectores de los elementos los declaras con "const"
 * 
 * 2.- Deberias ir seleccionando tus variables de acuerdo los elementos involucrados y un orden, es decir, estamos trabajando con el carrito (es tu todo), luego los elementos mas pequeños, como botones, articulos, etc.
 * 
 * 3.- En vista que estaremos trabajando desde el primer proyecto con eventos, una buena practica, es declar todos los enventos dentro de una funcion, y asi no queda en la ventana global del proyecto y obvio que se llama esa función, digamos que es la primera en llamarse.
 *
 * 4.- Otra buena practica, es que en el desarrollo de los Events, el segundo parametro, solo sea el nombre de la función y fuera de esta la desarrolles 
 * 
 * 5.- Como te pudiste dar cuenta, al momento de dar click al boton de "Agregar al Carrito", hace un algo insesperado, por eso le pasamos el "preventDefault()", ya que como es un link ("a"); contien un atributo (href="#"), te genera ese evento inesperado; asi como tambien que no esta direccionado al boton exactamento el evento, ya que si le das click a cualquier parte del card, este dispara el clg de prueba que tenemos, en este caso incluimos el Event Bubbling por delegation
 * 
 * 6.- Una vez controlado la propagacion de donde quiero hacer click y que me traiga el elemento deseado, iniciamos a trabajar con el Traversing, no es más que navegar entre elementos, para arriba con "parentElement"
 */
