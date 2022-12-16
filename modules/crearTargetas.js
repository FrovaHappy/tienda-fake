/**
 * @param {import ("../types").RootObject} data 
 */
export async function crearTargetas(data) {
  const d = document
  const products = d.querySelector('.products')
  let targets = ''
  data.products.forEach((product) => {
    let target = `
      <div class="target" id="${product.id}">
        <img class="target__img"src="${product.thumbnail}" alt="${product.title}">
        <div class="target__line"></div>
        <h1 class="target__title"> ${product.title} </h1>
        <h2 class="target__price">${product.price} $ </h2>
      </div>
    `
    targets += target
  })
  products.insertAdjacentHTML('beforeend', targets)
}
