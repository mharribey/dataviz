
menu.addEventListener("mouseover",()=>{
  menu.style.animation = "hide 0.8s forwards ease-in-out";

  setTimeout(()=>{
    menu.classList.toggle("display-none")
    menu.style.transform = "translateX(300px)"
    bulle != null ? bulle.style.opacity = 0 : bulleCauses.style.opacity = 0
    bulle != null ? bulle.classList.toggle("display-none") : bulleCauses.classList.toggle("display-none")
    bulle != null ? bulle.style.animation = "fadeIn 0.8s forwards ease-in-out" : bulleCauses.style.animation = "fadeIn 0.8s forwards ease-in-out"
  },800)
})

close.addEventListener("click",()=>{
  bulle != null ? bulle.style.animation = "fadeOut 0.8s forwards ease-in-out" : bulleCauses.style.animation = "fadeOut 0.8s forwards ease-in-out"
  bulle != null ? bulle.classList.toggle("display-none") : bulleCauses.classList.toggle("display-none")
  bulle != null ? bulle.style.opacity = 0 : bulleCauses.style.opacity = 0

  setTimeout(()=>{
    menu.classList.toggle("display-none")
    menu.style.animation = "show 0.8s backwards ease-in-out"
    menu.style.transform = "translateX(0)"
  },800)

});
