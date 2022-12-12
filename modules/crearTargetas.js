/**
 * @returns {Promise<import ("./types").RootObject>}
 */
async function fetchdata() {
  return await fetch('./data.json')
    .then((res) => res.json())
    .then((json) => {
      return json
    })
}
export async function crearTargetas() {
  const d = document
  const products = d.querySelector('.products')
  let targets = ''
  const data = await fetchdata()
  data.products.forEach((product) => {
    let target = `
      <div class="target" id="${product.id}">
        <img class="target__img"src="${product.images[0]}">
        <div class="target__line"></div>
        <h1 class="target__title"> ${product.title} </h1>
        <h2 class="target__price">${product.price} $ </h2>
      </div>
    `
    targets += target
  })
  products.insertAdjacentHTML('beforeend', targets)
}
