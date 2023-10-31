var myname = document.getElementById("name");
var lastname = document.getElementById("lastname");
var username = document.getElementById("username");



myname.addEventListener("keyup", run); // tuştan elini kaldırdığında

function run(e) {
    e.preventDefault();
    username.value = myname.value +"."+ lastname.value;
}