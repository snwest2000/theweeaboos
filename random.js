var pictures = document.getElementsByClassName("pic");


while(1){
  for (var i = 0; i < pictures.length; i++) {
    var pic = pictures[i];
    pic.style.left = (Math.random() * 100) + "%";
    pic.style.top = (Math.random() * 100) + "%";
  }
  wait(4);
}
