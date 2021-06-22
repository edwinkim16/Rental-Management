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