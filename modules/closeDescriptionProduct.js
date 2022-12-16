export function closeDescriptionProduct() {
  const d = document

  const closeDescriptionProduct = d.querySelector('.description__close')
  closeDescriptionProduct.addEventListener('click', () => {
    const description = d.querySelector('.description')
    description.hidden = true
    description.parentElement.hidden = true
  })
}
