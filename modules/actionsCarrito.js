function closeCarrito() {
  const d = document
  const carrito = d.querySelector('.carrito')
  const closeCarrito = d.querySelector('.carrito__close')
  closeCarrito.addEventListener('click', () => {
    carrito.hidden = true
    carrito.parentElement.hidden = true
    carrito.innerHTML = ''
  })
}
function removeCarritoItem() {
  const d = document
  const carrito = d.querySelector('.carrito')
  const buyCarrito = d.querySelector('.carrito__comprar')
  buyCarrito.addEventListener('click', () => {
    carrito.hidden = true
    carrito.parentElement.hidden = true
    carrito.innerHTML = ''
    localStorage.removeItem('carrito')
  })
}
export function actionsCarrito() {
  closeCarrito()
  removeCarritoItem()
}
