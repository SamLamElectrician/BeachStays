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

let email = document.getElementById("email")
let commentSect = document.getElementById("commentSect")
let msg = document.getElementById("message")
let person = document.getElementById("Name")
let blogbtn = document.getElementById("gas")
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



//div structure 

blogbtn.addEventListener("click", (event)=>{
  event.preventDefault();
  if (!email.value.match(re)){
        alert("Please Include Your Email")
      } else if (email.value.match(re)){
        comment();
        msg.value = ""
        person.value = ""
        email.value = ""
      }
});

//task


function comment(){
  
  const msg = document.getElementById("message").value
  const d = new Date();
  let commentBx = document.createElement("div")
  commentBx.className = "commentBox"
  let imgbx = document.createElement('div')
  imgbx.className = "commentImage"
  let img = document.createElement('img')
  img.src = "images/comment-image2.jpg"
  let commenttxt = document.createElement("div")
  commenttxt.className = "commentText"
  let title = document.createElement('h5')
  title.append(d.toDateString())
  let info = document.createElement('p')
  info.append(msg)

  imgbx.appendChild(img)
  commentBx.appendChild(imgbx)
  commenttxt.appendChild(title)
  commenttxt.appendChild(info)
  commentBx.appendChild(commenttxt)
  commentSect.appendChild(commentBx)

  //parent box == commentsection
  //append child to parent box
 //get info from form
 //add child to parent box
}