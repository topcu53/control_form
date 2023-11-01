var myname = document.getElementById("name");
var lastname = document.getElementById("lastname");
var username = document.getElementById("username");
var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var btn_kyt = document.getElementById("btn_kyt");

myname.addEventListener("keyup", run); // tuştan elini kaldırdığında
lastname.addEventListener("keyup", run);
btn_kyt.addEventListener("click", password_control);
function password_control() {
  if (pass.value == "" || pass2.value == "") {

    alert("Lütfen parola giriniz!");
  }
  else if (pass.value == pass2.value) {
    alert("Parolalar eşleşti.");
  }
  else {
    alert("Parolalar eşleşmedi!");
  }
}

function birlesim() {
  username.value = myname.value.toLowerCase() + "." + lastname.value.toLowerCase() + "@ozdilek.com.tr";
}
function run(e) {
  e.preventDefault();
  birlesim();
}
