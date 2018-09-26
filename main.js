let la = document.getElementById("la")
let deforestations = document.getElementById("deforestation")
let cartouche = document.getElementById("cartouche")
let scroll = document.getElementById("scroll")
let fleche = document.getElementById("fleche")

la.style.left = window.innerWidth / 2 - 270 + "px"
la.style.top = window.innerHeight / 2 - la.height/2 - 120 + "px"

deforestations.style.left = window.innerWidth / 2 - deforestations.width/2 + "px"
deforestations.style.top = window.innerHeight / 2 - deforestations.height/2 + "px"

cartouche.style.left = window.innerWidth / 2 - cartouche.width/2 + "px"
cartouche.style.top = window.innerHeight / 2 - cartouche.height/2 + 140 + "px"

scroll.style.left = window.innerWidth / 2 - scroll.width/2 - 20 + "px"
scroll.style.top = window.innerHeight / 2 - scroll.height/2 + 143 + "px"

fleche.style.left = window.innerWidth / 2 - scroll.width/2 + 140 + "px"
fleche.style.top = window.innerHeight / 2 - scroll.height/2 + 143 + "px"
