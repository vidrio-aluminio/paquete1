const menu_slide = document.getElementById("activo")
const contenedor= document.getElementById("contenedor")
const botones= document.getElementById("botones")
const qr= document.getElementById("qr")
const qr2=document.getElementById("qr2")

menu_slide.onclick = function () {

  if(contenedor.className=="contenedor active2"){
    contenedor.className="contenedor"
    botones.className="botones"
    qr2.className="qr2"
  }
    menu_slide.classList.toggle("active")
    contenedor.classList.toggle("active")
    botones.classList.toggle("active")
  }

  qr.onclick = function () {
   
    qr2.classList.toggle("active2")
    qr.classList.toggle("active2")
    contenedor.classList.toggle("active2")
    botones.classList.toggle("active2")
   
  }
  