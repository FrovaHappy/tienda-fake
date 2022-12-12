export function animacionTargeta() {
  const d = document
  const products = d.querySelector('.products')
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
}
