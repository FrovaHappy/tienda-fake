import { actionsCarrito } from './actionsCarrito.js'

function crearCarrito() {
  const d = document
  const carritoDom = d.querySelector('.carrito')
  const carritoLS = localStorage.getItem('carrito') ?? '[]'
  let carrito = JSON.parse(carritoLS)
  let targetaItem = ''
  carrito.forEach((item) => {
    targetaItem += `
      <div class="carrito__item"> 
        <img class="carrito__img" src="${item.thumbnail}" alt="${item.title}">
        <p class="carrito__title">${item.title}</p>
        <p class="carrito__buy">${item.buy}</p>
      </div>
    `
  })
  if (targetaItem.length == 0) {
    targetaItem = `
      <div class="carrito_vacio">
        <p class="carrito_vacio__text"> carrito vacio :( </p>
      </div>
    `
  }
  const carritoContenedor = `
    <div class="carrito__contenedor">
      <button class="carrito__close">←</button>
      <div class="carrito__targetas">
        ${targetaItem}
      </div>
      <button class="carrito__comprar " hidden> comprar todo </button>
    </div>
  `
  carritoDom.innerHTML = carritoContenedor
  const desactivado = d.querySelector('.carrito__comprar')
  if (carrito.length > 0) desactivado.hidden = false
  carritoDom.hidden = false
  carritoDom.parentElement.hidden = false
}

export function openCarrito() {
  const d = document
  const headerCarrito = d.querySelector('.header__carrito')
  headerCarrito.addEventListener('click', () => {
    crearCarrito()
    actionsCarrito()
  })
}
