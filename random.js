setInterval(randomDiv, 2000);

function randomDiv(){
  var pictures = document.getElementsByClassName("pic"); 

  for (var i = 0; i < pictures.length; i++) {
    var pic = pictures[i];
    pic.style.left = ((Math.random() * 60) + 15 )+ "%";
    pic.style.top = ((Math.random() * 60) + 10 )+ "%";
  }

}
