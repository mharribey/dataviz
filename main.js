const fond1 = document.getElementById("fond1")
const fond2 = document.getElementById("fond2")
const fond3 = document.getElementById("fond3")
const fond4 = document.getElementById("fond4")

const view = document.querySelector('.view')
const menu = document.querySelector('#menu')
const bulle = document.querySelector("#link")
const close = document.querySelector('#close')


function parallax(){
  fond1.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)";
  fond2.style.transform = "translateX("+ -0.3 * view.scrollLeft +"px)";
  fond3.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)";
  fond4.style.transform = "translateX("+ 0.1 * view.scrollLeft +"px)";

  window.requestAnimationFrame(parallax)
}
parallax()

menu.addEventListener("click",()=>{
  menu.classList.toggle("display-none");
  bulle.classList.toggle("display-none");
});

close.addEventListener("click",()=>{
  menu.classList.toggle("display-none");
  bulle.classList.toggle("display-none");
});
