let audio = new Audio('assets/son-foret.mp3');

infos.style.display = "none"

view.addEventListener("scroll",()=>{
  audio.play();

  if(view.scrollLeft > window.innerWidth - window.innerWidth/10){
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
  textContent.style.transform = "translateX("+ view.scrollLeft +"px)"
  infos.style.transform = "translateX("- view.scrollLeft +"px)"

  fond1.style.transform = "translateX("+ -0.25 * view.scrollLeft +"px)"
  fond3.style.transform = "translateX("+ -0.2 * view.scrollLeft +"px)"
  fond4.style.transform = "translateX("+ -0.1 * view.scrollLeft +"px)"

  fond5.style.transform = "translateX("+ -0.4 * view.scrollLeft +"px)"
  fond6.style.transform = "translateX("+ -0.2 * view.scrollLeft +"px)"
  fond7.style.transform = "translateX("+ -0.03 * view.scrollLeft +"px)"
  window.requestAnimationFrame(parallax)
}

function displayDate(){
  if(view.scrollLeft > window.innerWidth){
    let currentDate = 2014 - ((tContainer.offsetWidth - view.scrollLeft - window.innerWidth)*24)/(window.innerWidth*5)
    console.log(2014 - ((tContainer.offsetWidth - view.scrollLeft - window.innerWidth)*30)/(window.innerWidth*5))
    let perc = Math.abs(2014 - parseInt(currentDate) - 24)
    date.innerHTML = parseInt(currentDate)
    percent.innerHTML = datas[perc].percent + "%*"
  }

  window.requestAnimationFrame(displayDate)
}

function getRandomNumber(max){
  return Math.floor(Math.random() * Math.floor(max)) + 1
}
