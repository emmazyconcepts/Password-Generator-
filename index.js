let passwordText = document.getElementById("pass-description");
let characters =
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
let pass = document.getElementById("pass");

function generateRandom() {
  let passwordLength = 15;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * passwordLength)];
  }
  pass.value = password;

  return password;

  //   let random = Math.floor(Math.random() * 100000000000000);
  //   let ranchar = random * characters.length;
  //   passwordText.innerHTML = random;
  //   console.log(ranchar);
}

function copyPass() {
  if (pass != "") {
    navigator.clipboard.writeText(pass.value);
  }
}
