let passwordText = document.getElementById("pass-description");
let characters =
  "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+[]{}?><";
let pass = document.getElementById("pass");
let passwordLen = document.getElementById("passlen");

//this fuction generateRandom passwords
function generateRandom() {
  let passwordLength = passwordLen.value;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  pass.value = password;

  return password;
}

//this function help you copy the password
function copyPass() {
  if (pass != "") {
    navigator.clipboard.writeText(pass.value);
    pass.classList.add("active");
    setTimeout(() => {
      pass.classList.remove("active");
    }, 1000);
  }
}
