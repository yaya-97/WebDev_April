function moveRight(elem) {  
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 0.1);
  function frame() {
    if (pos == 1000) {
      clearInterval(id);
      flipCharacter(elem);
      moveLeft(elem);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
    }
  }
}

function flipCharacter(elem){
    elem.style.transform = "scaleX(1)";   
}

function moveLeft(elem) {   
    var pos = 1000;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + "px"; 
      }
    }
  }

  var id = null;
let character = document.getElementById("gif")
moveRight(character);

