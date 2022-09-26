let mobile = document.getElementById("menu")
let button = document.getElementById("hamburger")
let toggle = document.getElementById("toggle")


button.addEventListener('click', mobileMenu)
toggle.addEventListener('click', mobileMenu)


function mobileMenu(){
  mobile.classList.toggle("visible")
  button.classList.toggle("invisible")
  toggle.classList.toggle("visible")
}


const buttonPrev = document.querySelector("carouselButtonPrev")
const buttonNew = document.querySelector("carouselButtonNext")
