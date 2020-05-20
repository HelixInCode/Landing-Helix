var portafolio = document.querySelectorAll('#portafolio > .portafolio-container > .portafolio-item')
console.log('hola')

function cerrarItem (item, imagen, descripcion){

  imagen.style.transform = "translateY(0px)"
  descripcion.style.transform = "translateY(0px)"
  item.style.zIndex = "0"

}
function abrirItem (item, imagen, descripcion){
  
  imagen.style.transform = "translateY(-50%)"
  descripcion.style.transform = "translateY(50%)"
  item.style.zIndex = "3"

}

for (let i = 0; i < portafolio.length; i++) {
  
  portafolio[i].addEventListener('click', () => {
    

    if (portafolio[i].style.zIndex == "") {
  
      abrirItem( 
        portafolio[i], 
        portafolio[i].children[0], 
        portafolio[i].children[1])
  
    }else  if (portafolio[i].style.zIndex == "0") {
  
      abrirItem( 
        portafolio[i], 
        portafolio[i].children[0], 
        portafolio[i].children[1])
      
    }else if(portafolio[i].style.zIndex == "3"){
  
      cerrarItem( 
        portafolio[i], 
        portafolio[i].children[0], 
        portafolio[i].children[1])

    }
    for (let i2 = 0; i2 < portafolio.length; i2++) {

      if(portafolio[i2].style.zIndex == "3" && i2 != i ){
        cerrarItem( 
          portafolio[i2], 
          portafolio[i2].children[0], 
          portafolio[i2].children[1])
      }
    }
  })
  
}