

<<<<<<< HEAD

document.querySelector('#form').addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log('lanzando recaptcha');
  
=======
document.querySelector('#form').addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log('lanzando recaptcha');
  /*Cambia 6LcZu9QUAAAAACaj-WBiVIQUlr94vfCC8DUpIanS por tu clave de sitio web*/
>>>>>>> 9d92f3d014ad6ce0bdfdbe1fba9122a91b0d5a59
  grecaptcha.ready(function() {
      grecaptcha.execute('6LeYwtcZAAAAAOm29aUx7Upt_KvTj9mEo1o5CmFc', {action: 'registro'}).then(function(token) {
          $('#form').prepend('<input type="hidden" name="token" value="' + token + '">');
          $('#form').prepend('<input type="hidden" name="action" value="registro">');
          $('#form').unbind('submit').submit();
<<<<<<< HEAD
      });
=======
      });;
>>>>>>> 9d92f3d014ad6ce0bdfdbe1fba9122a91b0d5a59
  });
});