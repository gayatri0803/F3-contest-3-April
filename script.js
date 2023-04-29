const name = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirmPass = document.getElementById("confirm-pass");
const signUp = document.getElementById("signup-btn");
const msg = document.getElementById("msg");
const headerSign = document.getElementById("header-signup-btn");
const headerProfile = document.getElementById("header-profile-btn")


let  nameValue = "";
let emailValue = "";
let passValue = "";
let userData = {};


function getData() {

    nameValue = name.value;
    emailValue = email.value;
    passValue = pass.value;
    console.log(nameValue);


     if(nameValue=='' || emailValue=='' || passValue=='')
     {
        msg.innerHTML = '<p style="color:red;">All fields are mandatory</p>'


     }
     else if(passValue !== confirmPass.value){
        msg.innerHTML = '<p style="color:red;">Password did not match</p>';
     }
     else {
        msg.innerHTML = '<p style="color: green;">SuccessFully Signup</p>';

        userData = {
            name : nameValue,
            email : emailValue,
            pass : passValue
        }

        let token = "";

        for(let i =0;i<16;i++)
        {
            token += String.fromCharCode(Math.floor(Math.random() * 256));
        }
        localStorage.setItem('token', btoa(token));

        localStorage.setItem("user",JSON.stringify(userData));
        console.log(nameValue,emailValue,passValue,userData);
        setTimeout(location.href = './profile.html',5000);

     }
}


redirectSignUp();
signUp.addEventListener("click",getData);

headerSign.addEventListener("click",redirectSignUp);

headerProfile.addEventListener("click",redirectToProfile);



function redirectSignUp() {

        if(localStorage.getItem('token')){
            alert("Already Sign In")
            location.href = './profile.html';
        }
        else{
            // alert("Please Sign Up first...")
            // location.href = './signUp.html';
        }

}

function redirectToProfile() {

    if(localStorage.getItem('token')){
        location.href = './profile.html';
    }
    else{
       alert("Please Sign Up first...")
        location.href = './index.html';
    }

}