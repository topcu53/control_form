var myname = document.getElementById("name");
var lastname = document.getElementById("lastname");
var username = document.getElementById("username");

myname.addEventListener("keyup", run); // tuştan elini kaldırdığında
lastname.addEventListener("keyup", run);

function birlesim() {
  username.value = myname.value.toLowerCase() + "." + lastname.value.toLowerCase() + "@ozdilek.com.tr";
}
function run(e) {
  e.preventDefault();
  birlesim();
}
