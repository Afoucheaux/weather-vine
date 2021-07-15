const baseUrl = '';
// this is for the API endpoint for wine
export const getWines = (style, vintage) => {
  return fetch(`${baseUrl}?${style}?${vintage}`)
  .then(data => data.json())
}
