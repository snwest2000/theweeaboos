/*var pictures2 = document.getElementsByClassName("pic");

for (var i = 0; i < pictures.length; i++){
  var pic2 = pictures2[i];
  pic.addEventListener("click", function( event ){
      event.target.style.left = ((Math.random() * 60) + 15 )+ "%";
      event.target.style.top = ((Math.random() * 60) + 10 )+ "%";
    }
  });*/


randomDiv()
setInterval(randomDiv, 2000);

function randomDiv(){
  var pictures = document.getElementsByClassName("pic");

  for (var i = 0; i < pictures.length; i++) {
    var pic = pictures[i];
    pic.style.left = ((Math.random() * 70) + 10 )+ "%";
    pic.style.top = ((Math.random() * 70) + 5 )+ "%";

  }
}
