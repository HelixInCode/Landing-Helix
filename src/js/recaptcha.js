
function onClick(e) {
  e.preventDefault();
  grecaptcha.ready(function() {
    grecaptcha.execute('6Le_BtcZAAAAADtvtvPoy8s6hnk4fOd_0evq55NL', {action: 'submit'})
    .then(function(token) {
        // Add your logic to submit to your backend server here.
        var recaptchaResponse = document.getElementById('recaptchaResponse');
        recaptchaResponse.value = token;
    });
  });
}
