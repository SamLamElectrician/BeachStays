const button = document.getElementById("hamburger");
const mobile = document.getElementById("menu");
const x = document.getElementById("toggle");
const contactbtn = document.getElementById("contactbutton")
const anotherMsg = document.getElementById("anotherMsg")


//for all headers
function mobilemenu(){
  
  console.log(mobile.style.display)
  if (mobile.style.display === ""){
    mobile.style.display = "block"
    button.style.display = "none"
    x.style.display = "contents"
  // } else if (mobile.style.display = "block") {
  //   mobile.style.display = "none"
  }
};

// why cant this be in a else if
function MenuClose(){
  const mobile = document.getElementById("menu");
  if (mobile.style.display = "block"){
    button.style.display = "contents"
    mobile.style.display = "none"
    x.style.display = "none"
  }
}

button.addEventListener('click', mobilemenu);
x.addEventListener('click', MenuClose);

//For contact form
function revealMessage() {
  document.getElementById("thankyou").style.display = "block";
  document.getElementById("form").style.display = "none";
}

function anotherMessage(){
  document.getElementById("form").style.display = "block"
  document.getElementById("thankyou").style.display = "none"
}

contactbtn.addEventListener("click", revealMessage);
anotherMsg.addEventListener("click", anotherMessage)


//blog