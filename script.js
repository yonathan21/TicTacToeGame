

const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

window.onload = () => {
  for(let i = 0; i < allBox.length; i++){
    allBox[i].setAttribute('onclick', 'clickedBox(this)');
  }

  selectXBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
  }
  selectOBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    players.setAttribute('class', "players active player");
  }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element){
  
  if(players.classList.contains("player")){
    element.innerHTML =  `<i class = "${playerOIcon}"></i>`;
    players.classList.add('active');
  }else{
    element.innerHTML =  `<i class = "${playerXIcon}"></i>`;
    players.classList.add('active');
  }

  element.style.pointerEvents = "none";
  let randomDelayTime = (Math.random() * 1000) + 200;
  setTimeout(() => {
    bot();
  }, randomDelayTime);

}

function bot(){

  let array =[];

  for(let i = 0; i < allBox.length; i++){
    if(allBox[i].childElementCount === 0){
      array.push(i);
      //console.log(i + " " + 'has no child element' );
    }
  }

  let randomBox = array[Math.floor(Math.random() * array.length)];
  
  if(array.length > 0){
    if(players.classList.contains("player")){
      allBox[randomBox].innerHTML =  `<i class = "${playerXIcon}"></i>`;
      players.classList.add('active');
    }else{
      allBox[randomBox].innerHTML =  `<i class = "${playerOIcon}"></i>`;
      players.classList.add('active');
    }
  }
  //console.log(array);
}