function agregarItemCarrito(data) {
  const carritoLS = localStorage.getItem('carrito') ?? '[]'
  let carrito = JSON.parse(carritoLS)
  if (carrito.length == 0) carrito.push(data)
  let existeEnCarrito = false
  carrito.forEach((item) => {
    if (item.id == data.id) {
      existeEnCarrito = true
    }
  })
  if (!existeEnCarrito) carrito.push(data)
  carrito.map((item) => {
    if (!(item.id == data.id)) return item
    if (item.stock >= (item.buy ?? 0)) {
      item.buy ? (item.buy += 1) : (item.buy = 1)
    }
  })
  carrito = JSON.stringify(carrito)
  localStorage.setItem('carrito', carrito)
}
export function clickDescriptionComprar(data) {
  const d = document
  const descriptionComprar = d.querySelector('.description__comprar')
  descriptionComprar.addEventListener('click', () => {
    agregarItemCarrito(data)
  })
}
