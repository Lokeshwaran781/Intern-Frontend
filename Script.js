function validate() {
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let email = document.getElementById('email').value;
  let mobile = document.getElementById('mobile').value;
  let desc = document.getElementById('Description').value;
  let re_name = /^[a-zA-Z.]+$/;
  let re_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let re_mobile=/^[0-9]+$/;
  if (fname == "") {
    document.getElementById('fname').style.border="0.5px solid red";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="First Name Can't be Empty";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if(!re_name.test(fname)){
    document.getElementById('fname').style.border="0.5px solid red";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="First Name Should contain only alphabet";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if (lname == "") {
    document.getElementById('lname').style.border="0.5px solid red";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="Last Name Can't be Empty";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if(!re_name.test(lname)){
    document.getElementById('lname').style.border="0.5px solid red";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="Last Name Should contain only alphabet";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if (email == "") {
    document.getElementById('email').style.border="0.5px solid red";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="";
    document.getElementById('msg2').innerText="Email Can't be Empty";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if(!re_email.test(email)){
    document.getElementById('email').style.border="0.5px solid red";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="";
    document.getElementById('msg2').innerText="Invalid Email";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if(!re_mobile.test(mobile)){
    document.getElementById('mobile').style.border="0.5px solid red";
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('msg1').innerText="";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="Invalid Mobile Number";
    document.getElementById('msg4').innerText="";
    return false;
  }
  else if(desc==""){
    document.getElementById('Description').style.border="0.5px solid red";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('msg1').innerText="";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="Description Can't be Empty";
    return false;
  }
  else{
    sendmsg();
    return true;
  }
}

function Reset() {
    document.getElementById("Form").reset();
    document.getElementById('Description').style.border="1px solid black";
    document.getElementById('email').style.border="1px solid black";
    document.getElementById('fname').style.border="1px solid black";
    document.getElementById('lname').style.border="1px solid black";
    document.getElementById('mobile').style.border="1px solid black";
    document.getElementById('msg1').innerText="";
    document.getElementById('msg2').innerText="";
    document.getElementById('msg3').innerText="";
    document.getElementById('msg4').innerText="";
    document.getElementById("specify").style.visibility = "hidden";
}

function Spec(){
    var checkBox = document.getElementById("others");
    var specify = document.getElementById("specify");
    if (checkBox.checked == true){
        specify.style.visibility = "visible";
    }
    else{
        specify.style.visibility = "hidden";
    } 
}

window.onload = function() {
  Reset();
}

function sendmsg(){
  let name = document.getElementById('fname').value+" "+document.getElementById('lname').value;
  let email=document.getElementById('email').value;
  let phone=document.getElementById('mobile').value;
  let Description=document.getElementById('Description').value;
  var services = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  for (var i = 0; i < checkboxes.length; i++) {
    if(checkboxes[i].value=="others"){
      services.push(document.getElementById("specify").value);
    }
    else{
      services.push(checkboxes[i].value)
    }
  }
  var msg={};
  msg.name=name;
  msg.email=email;
  msg.phone=phone;
  msg.description=Description;
  msg.services=services;
  var message=JSON.stringify(msg);
  console.log(message);
  
  
  	var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("mode", "no-cors");

var urlencoded = new URLSearchParams();
urlencoded.append("name", name);
urlencoded.append("email", email);
urlencoded.append("phone", phone);
urlencoded.append("description", Description);
urlencoded.append("services", services);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow',
  mode:'no-cors'
};

fetch("http://formz.in/api/task", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));  
}
