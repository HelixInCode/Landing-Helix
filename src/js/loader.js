const $loader = document.getElementById('loader')

window.addEventListener('load', ()=>{

  $loader.classList.add('disapeared')
  setTimeout(()=> $loader.outerHTML="",3000)
})