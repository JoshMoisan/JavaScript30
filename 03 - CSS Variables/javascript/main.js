const inputs = document.querySelectorAll('.controls input')

inputs.forEach(input => {
  console.log(input.value)
})

const picture = document.querySelector('img')


addEventListener("change", (e) => {
  // console.log(e)
  picture.style.padding = `${inputs[0].value}px`
  picture.style.filter = `blur(${inputs[1].value}px)`
  picture.style.backgroundColor = inputs[2].value
})
