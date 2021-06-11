function moveRight(character){
    character.style.transform = "scaleX(-1) translate(-200px)";
};



let character = document.getElementById("gif");
moveRight(character);
moveRight(character);
for (let i = 0; i<50 ; i++){
    let pos = 0;
    character.style.transform = "scaleX(-1) translate(-" + pos + "px)";
    pos++;
}

