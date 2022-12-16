/**
 * @returns {Promise<import ("../types").RootObject>}
 */
export async function fetchdata() {
  return await fetch('./data.json')
    .then((res) => res.json())
    .then((json) => {
      return json
    })
}
