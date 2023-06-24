const videos = Array.from(document.querySelectorAll('[data-time]'));
let count = 0;

const duration = videos
  .map(video => video.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return secs + (mins * 60);
  })
  .reduce((total, vidLength) => total + vidLength, 0);

  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration - (hours * 3600)) / 60)
  const seconds = Math.floor(duration - (hours * 3600) - (minutes * 60))
  console.log(`HH = ${hours} : MM = ${minutes} : SS = ${seconds}`)

console.log(duration);
