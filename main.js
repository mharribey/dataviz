let fond1 = document.getElementById("fond1")
let fond2 = document.getElementById("fond2")
let fond3 = document.getElementById("fond3")
let fond4 = document.getElementById("fond4")

let tree = document.getElementById("trees-container")

function parallax(){
  fond1.style.transform = "translateX("+ -0.3 * tree.scrollLeft +"px)";
  fond3.style.transform = "translateX("+ 0.5 * tree.scrollLeft +"px)";
  fond4.style.transform = "translateX("+ 1.2 * tree.scrollLeft +"px)";

  window.requestAnimationFrame(parallax)
}

parallax()
