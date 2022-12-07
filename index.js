/**
 * @returns {Promise<import ("./types").RootObject>}
 */
async function fetchdata() {
  return await fetch('./data.json')
    .then((res) => res.json())
    .then((json) => {return json})
}

(async (d) => {
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

  products.addEventListener('mouseover', (event) => {
    let target
    if (event.target.parentElement.className == 'target') {
      target = event.target.parentElement
    }
    if (event.target.className == 'target') {
      target = event.target
    }
    if (target) {
      target.querySelector('.target__title').classList.add('active')
    }
  })
  products.addEventListener(
    'mouseleave',
    (event) => {
      event.target?.classList.forEach((c) => {
        if (c === 'target') {
          event.target.querySelector('.target__title').classList.remove('active')
        }
      })
    },
    true
  )
})(document)