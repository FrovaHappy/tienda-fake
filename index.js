/**
 * @returns {Promise<import ("./types").RootObject>}
 */
async function fetchdata() {
  return await fetch('./data.json')
    .then((res) => res.json())
    .then((json) => {return json})
}

(async (d) => {
  const fragment = d.createDocumentFragment()
  const products = d.querySelector(".products")
  const data = await fetchdata()
  data.products.forEach( product => {
    let target = `
      <div class=" target" id="${product.id}">
        <img class="target__img"src="${product.images[0]}">
        <div class="target__line"></div>
        <h1 class="target__title"> ${product.title} </h1>
        <h2 class="target__price">${product.price} $ </h2>
      </div>
    `
    const targetNodes = new DOMParser().parseFromString(target, "text/html")
    fragment.append(targetNodes.body)
  });
  products.append(fragment)
  products.childNodes.forEach(element => {
    element.addEventListener("mouseover", (e) => {
      const elemt = element.querySelector(".target__title")
      elemt.classList.add("active")
    })
    element.addEventListener("mouseleave", (e) => {
      const elemt = element.querySelector(".target__title")
      elemt.classList.remove("active")
    })
  })
})(document)