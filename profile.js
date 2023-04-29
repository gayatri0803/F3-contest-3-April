let userData = JSON.parse(localStorage.getItem('user'));
console.log("profile");

const profileUserData = document.getElementById("userData");
const logOutBtn = document.getElementById("logout-btn");
const headerSign = document.getElementById("header-signup-btn");
const headerProfile = document.getElementById("header-profile-btn")


logOutBtn.addEventListener("click", logOutfnc);


function logOutfnc(){
    console.log("OK");
    localStorage.removeItem('token')
    localStorage.removeItem('user');
    location.href='./index.html';
}

console.log(userData);


if(userData)
{
    profileUserData.innerHTML =   `
    <p>Full Name : ${userData.name}</p>
    <p>Email : ${userData.email}</p>
    <p>Password : ${userData.pass}</p>`
//     console.log("OK");
//     profileUserData.innerText = "Ok";

}