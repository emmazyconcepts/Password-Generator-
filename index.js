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
}

function copyPass() {
  if (pass != "") {
    navigator.clipboard.writeText(pass.value);
    pass.classList.add("active");
    setTimeout(() => {
      pass.classList.remove("active");
    }, 1000);
  }
}
