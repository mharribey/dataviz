const fond1 = document.querySelector("#fond1")
const fond2 = document.querySelector("#fond2")
const fond3 = document.querySelector("#fond3")
const fond4 = document.querySelector("#fond4")
const view = document.querySelector('.view')
const menu = document.querySelector('#menu')
const bulle = document.querySelector("#link")
const close = document.querySelector('#close')

const tContainer = document.querySelector("#trees-container")
let datas = deforestation

const infos = document.querySelector("#info-container")
const note = document.querySelector("#note")
const percent = document.querySelector("#percent")
const date = document.querySelector("#date")

function parallax(){
  fond1.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)"
  fond2.style.transform = "translateX("+ -0.3 * view.scrollLeft +"px)"
  fond3.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)"
  fond4.style.transform = "translateX("+ 0.1 * view.scrollLeft +"px)"

  window.requestAnimationFrame(parallax)
}

function displayDate(){
  if(view.scrollLeft > window.innerWidth){
    let currentDate = 2014 - (tContainer.offsetWidth - view.scrollLeft - window.innerWidth)*24/window.innerWidth
    let perc = Math.abs(2014 - parseInt(currentDate) - 24)
    date.innerHTML = parseInt(currentDate)
    console.log(perc)
    percent.innerHTML = datas[perc].percent + "%*"
  }

  window.requestAnimationFrame(displayDate)
}

displayDate()
parallax()

menu.addEventListener("click",()=>{
  menu.classList.toggle("display-none")
  bulle.classList.toggle("display-none")
});

close.addEventListener("click",()=>{
  menu.classList.toggle("display-none")
  bulle.classList.toggle("display-none")
});
