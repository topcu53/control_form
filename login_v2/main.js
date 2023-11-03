var myname = document.getElementById("name");
var lastname = document.getElementById("lastname");
var username = document.getElementById("username");

var pass = document.getElementById("pass");
var pass2 = document.getElementById("pass2");
var btn_kyt = document.getElementById("btn_kyt");

myname.addEventListener("keyup", run); // tuştan elini kaldırdığında
lastname.addEventListener("keyup", run);
function password_control() {
  if (pass.value == "" || pass2.value == "") {

    showAlert("times-circle","error","Alanlar boş lütfen doldurunuz.")
  }
  else if (pass.value == pass2.value) {
    showAlert("check","success","Parolalar eşleşti.");
  }
  else {
    showAlert("times-circle","error","Parolalar eşleşmedi")
  }
}

function deneme(){
  password_control();
}
const firstH1=document.querySelector(".wrapper");
function showAlert(type2,type, message) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `${type}-msg`;
  firstH1.appendChild(alertDiv);
  alertDiv.innerHTML=`<i class="fa fa-${type2}"></i> ${message}`
  setTimeout(() => {
    alertDiv.remove();
}, 5000);
}

runEvents();
function runEvents() {
  btn_kyt.addEventListener("click", deneme);
}



function birlesim() {
  username.value = myname.value.toLowerCase() + "." + lastname.value.toLowerCase() + "@ozdilek.com.tr";
}
function run(e) {
  e.preventDefault();
  birlesim();
}
