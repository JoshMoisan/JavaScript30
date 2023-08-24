const triggers = document.querySelectorAll(".cool > li")
const background = document.querySelector(".dropdownBackground")
const nav = document.querySelector(".top")

function handleEnter () {
  this.classList.add('trigger-enter')
  setTimeout(() => {
  if(this.classList.contains('trigger-enter')) {
    this.classList.add('trigger-enter-active')
  }
}, 150);
  background.classList.add("open")

  const dropdown = this.querySelector('.dropdown')
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()

  background.style.width = `${dropdownCoords.width}px`
  background.style.height = `${dropdownCoords.height}px`
  background.style.top = `${dropdownCoords.top - navCoords.top}px`
  background.style.left = `${dropdownCoords.left - navCoords.left}px`

}

function handleLeave () {
  this.classList.remove('trigger-enter','trigger-enter-active')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
