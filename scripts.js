const pwd1 = document.getElementById('pwd1');
const pwd2 = document.getElementById('pwd2');

function validatePassword(){
  if (pwd1.value != pwd2.value) {
  pwd2.setCustomValidity("Error: Passwords don't match. Please try again.");
  } else {
  pwd2.setCustomValidity('');
  }
}

pwd1.onchange = validatePassword;
pwd2.onkeyup = validatePassword;
