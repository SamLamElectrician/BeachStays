let email = document.getElementById("email")
const contactBtn = document.getElementById("contactButton")
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const form = document.getElementById("form")
const thanks = document.getElementById("thankyou")

// form js

contactBtn.addEventListener('click', validateForm);
thanks.addEventListener('click', thankYou)

function validateForm(){
  if (!email.value.match(re)){
    alert("Please Include Your Email")
    console.log(email.value)
  } else if (email.value.match(re)){
    thankYou();
  }
}


function thankYou(){
  form.classList.toggle("invisible")
  thanks.classList.toggle("visible")
}

//mobile menu js

var mobile = document.getElementById("menu")
var button = document.getElementById("hamburger")
var toggle = document.getElementById("toggle")


button.addEventListener('click', mobileMenu)
toggle.addEventListener('click', mobileMenu)


function mobileMenu(){
  mobile.classList.toggle("visible")
  button.classList.toggle("invisible")
  toggle.classList.toggle("visible")
}


