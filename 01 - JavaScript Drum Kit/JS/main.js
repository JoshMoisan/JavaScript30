// const eventTarget = document.querySelector

document.addEventListener("keydown", (e) => {
  // console.log(e)
  const letterSelector = document.querySelector(`div[data-key="${e.keyCode}"]`)
  const audioSelector = document.querySelector(`audio[data-key="${e.keyCode}"]`)

  if(letterSelector && audioSelector) {
    letterSelector.classList.add("playing")
    audioSelector.currentTime = 0
    audioSelector.play()
  }
  else {
    console.log(`Wrong key : '${e.key}' won't work. Choose another one`)
  }
  
  const removeTransition = () => {
    letterSelector.classList.remove("playing")
  }

  const keys = document.querySelectorAll(".key")
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))
})
