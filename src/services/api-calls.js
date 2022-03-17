const baseUrl = "https://www.swapi.dev"


export function getAllStarships() {
  return fetch(`${baseUrl}/api/starships`)
  .then(res => res.json())
}