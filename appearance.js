function validate()
{
    var userName=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
    if(userName=="admin" && password=="user")
    {
        alert("Login Successful");
        return false;
    }
    else{
        alert("login failed");
    }

}
let fullName=document.getElementById("full");
let userName=document.getElementById("usern");
let email=document.getElementById("mail");
let PhoneNumber=document.getElementById("phone");
let ConfirmPassword=document.getElementById("passw");
let password=document.getElementById("con");
let form=document.querySelector("signup");

function Inputs(){
//var fullName=document.getElementById("full").value;
//var userName=document.getElementById("userName").value;
//var email=document.getElementById("mail").value;
//var phoneNumber=document.getElementById("phone").value;
//var password=document.getElementById("passw").value;
//var confirmPassword=document.getElementById("con").value;

  
  if( fullName=="hello" && userName=="hello" && email=="hello@rental" 
  && phoneNumber=="hello" && confirmPassword=="hello" && 
  password=="hello" )
  {
    alert ("sign up successful");
  }
  else{
    alert("sign up failed");
    console.log("hello");
  }

}