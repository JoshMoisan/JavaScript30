
 const inputLines = ["This is an inbox layout.",
  "Check one item",
  "Hold down your Shift key",
  "Check a lower item",
  "Everything in between should also be set to checked",
  "Try to do it without any libraries",
  "Just regular JavaScript",
  "Good Luck!",
  "Don't forget to tweet your result!"]

  // inputLines.forEach(line => {
  //   const target = document.querySelector(".inbox")
  //   const html = `
  //   <div class="item">
  //   <input type="checkbox">
  //   <p>${line}</p>
  //   </div>`
  //   target.innerHTML += html
  // })

  const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
  let lastChecked
  // console.log(checkboxes)

  const handleCheck = (e) => {

    let inBetween = false
    console.log(e.target)
    if(e.key === "Shift" && e.target.checked) {
      checkboxes.forEach(checkbox => {
        console.log(checkbox)
      });
    }

    lastChecked = this
  }

  checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
