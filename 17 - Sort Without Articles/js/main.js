const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector("#bands")

function strip(bandName) {
  return bandName.replace(/^(a |the |an |we )/i, '').trim();
}

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1)

bands.forEach(band => {
  const html = `<li>${band}</li>`
  list.innerHTML += html
})
