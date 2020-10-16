const $form = document.getElementsByTagName('form')[0]
const $modalDelMensaje = document.getElementById('modal-message-sent')
const $icono = document.querySelector('#modal-message-sent > .login > .message img')
const $parrafo = document.querySelector('#modal-message-sent > .login > .message p')

const mensajeDelModal = (simbolo, mensaje) =>{
  $modalDelMensaje.classList.toggle('hide')
  $icono.setAttribute('src', `dist/img/${simbolo}`)
  $parrafo.innerText = mensaje

}
$form.addEventListener('submit', (event) => {
  event.preventDefault();

  const enviarFormulario = async()=>{
    
    try {
      const formulario = new FormData($form);
      const response = await fetch("https://helixincode.com/enviar.php", {
        method: 'POST',
        body: formulario
      });
      const data = await response.json()
      console.log(data)
      
      if(data === 'ok!, eres un humano'){
        $form.reset()
        mensajeDelModal('enviado.svg', '¡Su mensaje ha sido enviado exitosamente!')
        
      }else if(data === "Lo siento, parece que eres un Robot"){
        
        mensajeDelModal('envioError.svg', '¡Ha habido un error, intentelo de nuevo!')
      }
      
    } catch (error) {
      
      console.log(error)
      mensajeDelModal('envioError.svg', '¡Ha habido un error, intentelo de nuevo!')
    }

  }  

  console.log('se envio el formulario')
  enviarFormulario()
  
})