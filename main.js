let fond1 = document.getElementById("fond1")
let fond2 = document.getElementById("fond2")
let fond3 = document.getElementById("fond3")
let fond4 = document.getElementById("fond4")

const view = document.querySelector('.view')

function parallax(){
  fond1.style.transform = "translateX("+ -0.2 * view.scrollLeft +"px)";
  fond2.style.transform = "translateX("+ -0.3 * view.scrollLeft +"px)";
  fond3.style.transform = "translateX("+ 0.3 * view.scrollLeft +"px)";
  fond4.style.transform = "translateX("+ 0.2 * view.scrollLeft +"px)";

  window.requestAnimationFrame(parallax)
}

parallax()
