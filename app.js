var Home = document.getElementById("navHome");
var Problem = document.getElementById("navProblem");
var Steps = document.getElementById("navSteps");
var About = document.getElementById("navAbout");
var Img = document.getElementsByClassName("img")
var button = document.getElementById("button");
Home.onclick=()=>{
    location.href="./home.html";
}
Problem.onclick=()=>{
    location.href="./problem.html";
}
Steps.onclick=()=>{
    location.href="./steps.html";
}
About.onclick=()=>{
    location.href="./about.html";   
}

var order=[
    "1 - Refuse - Say NO to things you do not need ",
    "2 - Reduce - Reduce the plastic you use everyday",
    "3 - Reuse - Reuse things multiple times before discarding ",
    "4 - Repurpose - Find a new purpose for things instead of creating trash",
    "5 - Recycle - Recycle things instead of throwing away, use only recyclable material",
    ]
    var i=0 , j=0;
    var x="",y="";
    function change1(){
        if(i<order.length){
x += order[i++] + "<br>" + "<br>" ;
     }
       document.getElementById("R").innerHTML=x;
    } 