
function rcolor(){

   document.getElementById("circle1").style.backgroundColor="white";
   document.getElementById("circle1").innerHTML="";
   document.getElementById("circle2").style.backgroundColor="white";
   document.getElementById("circle2").innerHTML="";
   document.getElementById("circle3").style.backgroundColor="white";
   document.getElementById("circle3").innerHTML="";


    var circle=Math.floor(Math.random()*3)+1;
   const randomColor=Math.floor(Math.random()*16777215).toString(16);
   document.getElementById("circle"+circle).style.backgroundColor ="#" +randomColor;
 var hex= hexa.innerHTML ="#" + randomColor;

}
Refresh.addEventListener("click",rcolor);



//copy hexa value
 function copyCode(){
   var copyTextarea = document.querySelector('#hexa');
   document.execCommand('copy');
   alert("Copied the text: " + copyTextarea.innerHTML);
 }
      





