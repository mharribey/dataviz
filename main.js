
displayDate()
parallax()

view.addEventListener("scroll",()=>{
  if(view.scrollLeft > window.innerWidth){
    infos.style.display = "block"
    infos.style.animation = "0.5s fadeIn forwards"
    infos.style.opacity = 1
  }else if(view.scrollLeft < window.innerWidth){
    infos.style.opacity = 1
    infos.style.animation = "0.5s fadeOut backwards"
    infos.style.opacity = 0
  }
})

function parallax(){
  fond1.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)"
  fond2.style.transform = "translateX("+ -0.24 * view.scrollLeft +"px)"
  fond3.style.transform = "translateX("+ -0.2 * view.scrollLeft +"px)"
  fond4.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)"
  window.requestAnimationFrame(parallax)
}

function displayDate(){
  if(view.scrollLeft > window.innerWidth){
    let currentDate = 2014 - (tContainer.offsetWidth - view.scrollLeft - window.innerWidth)*24/window.innerWidth
    let perc = Math.abs(2014 - parseInt(currentDate) - 24)
    date.innerHTML = parseInt(currentDate)
    percent.innerHTML = datas[perc].percent + "%*"
  }

  window.requestAnimationFrame(displayDate)
}

function getRandomNumber(max){
  return Math.floor(Math.random() * Math.floor(max)) + 1
}


/* toggle */

menu.addEventListener("click",()=>{
  menu.classList.toggle("display-none")
  bulle.classList.toggle("display-none")
});

close.addEventListener("click",()=>{
  menu.classList.toggle("display-none")
  bulle.classList.toggle("display-none")
});
