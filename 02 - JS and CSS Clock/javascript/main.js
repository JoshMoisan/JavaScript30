const setDate = () => {
  const time = new Date()
  const second = time.getSeconds()
  const minute = time.getMinutes()
  const hour = time.getHours()

  const secondDegrees = ((second/60) * 360 + 90).toString()
  const minutesDegrees = ((minute/60) * 360 + 90).toString()
  const hourDegrees = ((hour/24) * 360 + 90).toString()

  document.getElementById("second-hand").style.rotate = `${secondDegrees}deg`
  document.getElementById("min-hand").style.rotate = `${minutesDegrees}deg`
  document.getElementById("hour-hand").style.rotate = `${hourDegrees}deg`
}


setInterval(() => {
  setDate()
}, 1000);
