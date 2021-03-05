

document.getElementById("blueButton").addEventListener("click", changeBlue);
document.getElementById("pinkButton").addEventListener("click", changePink);
document.getElementById("greenButton").addEventListener("click", changeGreen);
document.getElementById("purpleButton").addEventListener("click", changePurple);
document.getElementById("picture1").addEventListener("mouseover", changeImage);
document.getElementById("picture2").addEventListener("mouseover", changeImage2);
document.getElementById("delete").addEventListener("click", deleteImage);
document.getElementById("titleButton").addEventListener("click", addTitle);

document.getElementById("numberButton").addEventListener("click", changeDate);

const _ = require('lodash'); 

_.delay(function(text) { 
    console.log(text); 
  }, 3000, 'Testing lodash'); 
  

console.log('Content:');


let newDate =  new Date();
let yr = newDate.getFullYear();
let mt = newDate.getMonth() + 1;
let de = newDate.getDate();
todaysDate = yr + "-" + mt + "-" + de;
console.log("here", todaysDate);
document.getElementById("date").innerHTML = mt + "-" + de + "-" + yr;

function changeDate(){
    let te = document.getElementById("numberText").value;
    console.log("Something", te);
    let a = moment(todaysDate); 
    let b = a.add(te, 'days'); 
    console.log(b.format());

    document.getElementById("dateFromNow").innerHTML = te + " days from now is " + b.toDate();


}







function changeBlue(){
    document.getElementById("back").style.backgroundColor="#add8e652"
}
function changePink(){
    document.getElementById("back").style.backgroundColor="#ffd1dc"
}
function changeGreen(){
    document.getElementById("back").style.backgroundColor="#b3d1b3"
}

function changePurple(){
    document.getElementById("back").style.backgroundColor="#d8c7ff"
}

function changeImage(){
    document.getElementById("picture1").style.width = "400px";
    document.getElementById("picture1").style.height = "560px";
    document.getElementById("picture1").style.marginLeft = "35%";

    
}

function changeImage2(){
    document.getElementById("picture2").style.width = "400px";
    document.getElementById("picture2").style.height = "560px";
    document.getElementById("picture2").style.marginLeft = "35%";

    
}

function deleteImage(){
    document.getElementById("picture1").remove();
    document.getElementById("delete").remove();
    document.getElementById("caption1").remove();
    
}

function addTitle(){
    console.log("here:")
    let temp = document.getElementById("titleText").value;
    console.log(temp);
    document.getElementById("ti").innerHTML = temp;
}