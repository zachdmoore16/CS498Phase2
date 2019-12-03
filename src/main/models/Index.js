const activelist =require('../views/index')
//runs on startup? and sets the progress bars to match the artifact progress
window.onload=function setBar() {
    var numeratorList=document.getElementsByClassName("numerator");
    var denominatorList=document.getElementsByClassName("demoninator");
    var width=0;
    var bar=document.getElementById("partBar")
    for(var i=0; i<denominatorList.length; i++){
        if(numeratorList[i]>denominatorList[i]){
            width=100;
        }
        else{
            width=numeratorList[i]/denominatorList[i];
        }
        bar.style.width=width + "%";

    }
}


function goBack() {
    window.history.back();
}

//creating hover text boxes on the classes called "material-icons" help(?)
function hover(x){
    x.style.visibility= "visible";
    x.style.opacity= 1;
 }

 function notHover(x){
    x.style.visibility= "hidden";
    x.style.opacity= 0;
 }