const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled ')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function togglePlay() {
  if(video.paused) {
    video.play()
  } else {
    video.pause()
  }
}

function updateButton() {
  video.paused ? toggle.innerHTML = "PLAY" : toggle.innerHTML = "PAUSE"
}


function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percentage}%`
}

function scrub(e) {
  console.log(e.offsetX)
  console.log(progress.offsetWidth)
  const scrubTime = (e.offsetX / progress.offsetWidth)
  console.log(scrubTime)
  video.currentTime = scrubTime * video.duration
}

let mouseDown = false
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)


toggle.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))

skipButtons.forEach(button => {
  button.addEventListener('click', skip)
})

ranges.forEach(range => {
  range.addEventListener('mousemove', handleRangeUpdate)
})
