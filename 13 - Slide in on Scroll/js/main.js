function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const imagesSlide = document.querySelectorAll('img')
console.log(imagesSlide)


function checkSlide(e) {
  imagesSlide.forEach(imageSlide => {

    const slideInAt = ((window.scrollY + window.innerHeight) - imageSlide.height / 2)
    const imageBottom = imageSlide.offsetTop + imageSlide.height
    const isHalfShown = slideInAt > imageSlide.offsetTop
    const isNotScrollPast = window.scrollY < imageBottom


    if(isHalfShown && isNotScrollPast) {
      console.log('active mode set')
      imageSlide.classList.add('active')
    } else {
      imageSlide.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide))
