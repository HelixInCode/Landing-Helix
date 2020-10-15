

document.querySelector('#form').addEventListener('submit', (e) =>{
  e.preventDefault();
  console.log('lanzando recaptcha');
  /*Cambia 6LcZu9QUAAAAACaj-WBiVIQUlr94vfCC8DUpIanS por tu clave de sitio web*/
  grecaptcha.ready(function() {
      grecaptcha.execute('6LeYwtcZAAAAAOm29aUx7Upt_KvTj9mEo1o5CmFc', {action: 'registro'}).then(function(token) {
          $('#form').prepend('<input type="hidden" name="token" value="' + token + '">');
          $('#form').prepend('<input type="hidden" name="action" value="registro">');
          $('#form').unbind('submit').submit();
      });;
  });
});