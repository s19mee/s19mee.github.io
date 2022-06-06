// alert("It's Work!");

const User = {
    Username:"abolfazleffati", Password:"1234", Level:"Permium"
};

function lightmode(){

    let x = document.getElementById("PageMode");
    let banner = document.getElementById("banner");
    let loginbtn = document.getElementById("login-btn");
    let signupbtn = document.getElementById("signup-btn");

    if(x.innerHTML == "Turn On Light Mode"){
        document.body.style.backgroundColor = "whitesmoke";
        document.body.style.color = "black";
        banner.style.backgroundImage = "url(images/header-light.jpg)"
        banner.style.border = "black solid 3px"
        x.style.backgroundColor = "green";
        x.style.color = "white"
        x.innerHTML = "Turn Off Light Mode";
        loginbtn.style.backgroundColor = "#2980b9";
        signupbtn.style.backgroundColor = "#e67e22";
        document.getElementById("clock").style.color = "white";
        document.getElementById("login-for-more").style.color = "black";
    }
    else{
        document.body.style.backgroundColor = "#212b2d";
        document.body.style.color = "#9FB1B2";
        banner.style.backgroundImage = "url(images/header.jpg)";
        banner.style.border = "#6C8286 solid 3px";
        x.style.backgroundColor = "#f1f2f6";
        x.style.color = "black"
        x.innerHTML = "Turn On Light Mode";
        loginbtn.style.backgroundColor = "green";
        signupbtn.style.backgroundColor = "#2980b9";
        document.getElementById("clock").style.color = "black";
        document.getElementById("login-for-more").style.color = "#eccc68";
    }
}

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == User.Username && password == User.Password){
        document.getElementById("wel-title").innerHTML = "Welcome " + User.Username;
        document.getElementById("wel-dis").innerHTML = "This Your JavaScript Basic Project";
        document.getElementById("username-show").innerHTML = "Username : " + User.Username;
        document.getElementById("level-show").innerHTML = "Level : " + User.Level;
        document.getElementById("date-show").innerHTML = "Login on : " + Date();
        
        document.getElementById("loginform").reset();
        document.getElementById("loginform").style.display = "none";
        document.getElementById("login-btns").style.display = "none";
        document.getElementById("login-for-more").style.display = "none";
        document.getElementsByClassName("after-login")[0].style.display = "block";
    }
    else{
        alert("Not Found User!")
    }
}

function signout(){
    let weltilte = document.getElementById("wel-title");

    weltilte.innerHTML = "My JavaScript Basic Project";
    document.getElementById("wel-dis").innerHTML = "Oh my name is abolfazl effati";
    document.getElementsByClassName("after-login")[0].style.display = "none";
    document.getElementById("loginform").style.display = "block";
    document.getElementById("login-btns").style.display = "block";
    document.getElementById("login-for-more").style.display = "block";
}

// Arrow Functions
let clock = () => {
    let date = new Date(); 
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();
  
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    switch (day) {
        case 0:
           day = "Sunday";
           break;
        case 1:
           day = "Monday";
           break;
        case 2:
           day = "Tuesday";
           break;
        case 3:
           day = "Wednesday";
           break;
        case 4:
           day = "Thursday";
           break;
        case 5:
           day = "Friday";
           break;
        case 6:
           day = "Saturday";
           break;
    }
      
    let time = "Time : " + hour + ":" + minute + ":" + second + " - " + day;
  
    document.getElementById("clock").innerHTML = time; 
    setTimeout(function(){ clock() }, 1000);
}

let modalShow = (modal,btn,closebtn) => {
   modal = document.getElementById(modal);
   btn = document.getElementById(btn);
   closebtn = document.getElementById(closebtn);

    btn.onclick = () => {
        modal.style.display = "block";
    }


    closebtn.onclick = () => {
        modal.style.display = "none";
    }
}
//------------------

function Calculator(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

        if(operator == "sum"){
            document.getElementById("result").innerHTML = num1 + num2;
        }
        else if(operator == "min"){
            document.getElementById("result").innerHTML = num1 - num2;
        }
        else if(operator == "multi"){
            document.getElementById("result").innerHTML = num1 * num2;
        }
        else if(operator == "divis"){
            document.getElementById("result").innerHTML = num1 / num2;
        }
        else if(operator == "undivis"){
            document.getElementById("result").innerHTML = num1 % num2;
        }

    document.getElementById("frm-to").reset();
}