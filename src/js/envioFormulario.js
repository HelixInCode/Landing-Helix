const $form = document.getElementsByTagName('form')[0]
const $modalDelMensaje = document.getElementById('modal-message-sent')
const $icono = document.querySelector('#modal-message-sent > .login > .message i')
const $parrafo = document.querySelector('#modal-message-sent > .login > .message p')

const mensajeDelModal = (mensaje) =>{
  $modalDelMensaje.classList.toggle('hide')
  $icono.className = simbolo
  $icono.style.color = color
  $parrafo.innerText = mensaje

  if(color === 'var(--success)'){
    $modalDelMensaje.addEventListener('click', () =>{
      window.location = 'https://helixincode.com';
    })
  }
}
$form.addEventListener('submit', (event) => {

  event.preventDefault();

  (async()=>{
    
    try {
      const formulario = new FormData($form);
      const response = await fetch("https://helixincode.com/enviar.php", {
        method: 'POST',
        body: formulario
      });
      const data = await response.json()

      if(data === 'si se envio'){
        $form.reset()
        mensajeDelModal('¡Su mensaje ha sido enviado exitosamente!')
        
      }else if('Error al enviar el mail'){
        
        mensajeDelModal('¡Ha habido un error, intentelo de nuevo!')
      }
      
    } catch (error) {
      console.log(error)
      mensajeDelModal('¡Ha habido un error, intentelo de nuevo!')
    }

  })();
})