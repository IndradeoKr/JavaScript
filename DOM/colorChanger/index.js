const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click', (e)=>{
    const val = e.target.id
    body.style.backgroundColor = `${val}`
  })
})