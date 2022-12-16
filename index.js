import { animacionTargeta } from './modules/animacionTargeta.js'
import { crearTargetas } from './modules/crearTargetas.js'
import { fetchdata } from './modules/fetchdata.js'
import { openDescriptionProduct } from './modules/openDescriptionProduct.js'
import { openCarrito } from './modules/openCarrito.js'
;(async () => {
  const data = await fetchdata()
  await crearTargetas(data)
  animacionTargeta()
  openDescriptionProduct(data)
  openCarrito()
})()
