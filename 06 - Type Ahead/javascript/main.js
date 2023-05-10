const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []
fetch(endpoint)
  .then(blob =>  blob.json())
  .then(data => cities.push(...data))

  const searchInput = document.querySelector('.search')
  const suggestions = document.querySelector('.suggestions')

  const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi')
      return place.city.match(regex) || place.state.match(regex)
    })
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const displayMatches = (wordToMatch) => {
    const matchArray = findMatches(wordToMatch, cities)
    const html = matchArray.map(place => {
      const regex = new RegExp(wordToMatch, 'gi')
      const cityName = place.city.replace(regex,`<span class="hl">${wordToMatch}</span>`)
      const stateName = place.state.replace(regex,`<span class="hl">${wordToMatch}</span>`)
      return `
        <li>
          <span class='name'>${cityName}, ${stateName}</span>
          <span class='population'>${numberWithCommas(place.population)}</span>
        </li>
      `
    }).join('')
    suggestions.innerHTML = html
  }

  document.addEventListener("keyup", () => {
    const wordToMatch = searchInput.value

    if((searchInput.value).length > 2) {
      displayMatches(wordToMatch)
    }
   })
