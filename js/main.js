let toggle = document.getElementById("menu");
let ul = document.getElementById("ul");
let head = document.getElementById("header");

toggle.addEventListener("click", () => {
  if (ul.style.right === "-200px" || ul.style.right === "") {
    ul.style = "right:0;";
    header.style = "overflow: visible;"
  }
  else {
    ul.style = 'right:-200px;';
    header.style = "overflow: hidden;"
  }
})

let skills = document.getElementsByClassName("skill");
window.addEventListener("scroll", () => {
  // console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop >= 132) {
    for (let i = 0; i < skills.length; i++) {
      skills[i].style = "translate: 0 0;"
    }
  }
  else {
    for (let i = 0; i < skills.length; i++) {
      skills[i].style = `translate: ${+skills[i].move} 0;`
    }
  }
})