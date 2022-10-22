/**
 * google recaptcha v3
 */


/* var proxy = 'https://cors-anywhere.herokuapp.com/';
var grecaptcha_key = '6Lci77AUAAAAAMovMCKtEx0q79v6UtfdAVTEUMQp';
import(proxy + 'https://www.google.com/recaptcha/api.js?render=' + grecaptcha_key).then(() => {
  console.log(grecaptcha_key);
  grecaptcha.ready(function () {
    grecaptcha.execute(grecaptcha_key, {
      action: 'contactForm'
    }).then(function (token) {
      console.log('tokenGET', token);
      document.body.innerHTML += `<p id="token">TOKEN: </p>`;
      document.getElementById('token').innerHTML += token;
    });
  });
}); */