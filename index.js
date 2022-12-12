import { animacionTargeta } from './modules/animacionTargeta.js'
import { crearTargetas } from './modules/crearTargetas.js'
;(async () => {
  await crearTargetas()
  animacionTargeta()
})()
