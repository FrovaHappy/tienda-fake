import { closeDescriptionProduct } from './closeDescriptionProduct.js'
/**
 * @param {import ("../types").Product} data
 */
function createDescriptionTarget(data) {
  const d = document
  const description = d.querySelector('.description')
  let imagenes = ''
  data.images.map((image) => {
    imagenes += `<img class="image__switch--img" src="${image}" />`
  })
  const content = `
    <div class="description__header">
      <h1 class="description__title">${data.title}</h1>
      <button class="description__close">X</button>
    </div>
    <h2 class="description__category">${data.category}</h2>
    <div class="image">
      <div class="image__switch">
        ${imagenes}
      </div>
      <img class="image__principal" src="${data.images[0]}"/>
    </div>
    <div class="description__info_compra">
      <p class="description__rating">${data.rating}</p>
      <p class="description__stock">${data.stock}</p>
      <button class="description__comprar">comprar</button>
    </div>
    <h2 class="description__price">${data.price}</h2>
    <p class="description__p">${data.description}</p>
  `
  description.innerHTML = content
  closeDescriptionProduct()
  description.hidden = false
  description.parentElement.hidden = false
}

/**
 * @param {import ("../types").RootObject} data
 */
export function openDescriptionProduct(data) {
  const d = document
  const products = d.querySelector('.products')
  products.addEventListener('click', (event) => {
    let target

    if (event.target.parentElement.className == 'target') {
      target = event.target.parentElement
    }
    if (event.target.className == 'target') {
      target = event.target
    }
    if (target) {
      const product = data.products.filter((product) => {
        return product.id == target.id
      })
      console.log(product[0])
      createDescriptionTarget(product[0])
    }
  })
}
