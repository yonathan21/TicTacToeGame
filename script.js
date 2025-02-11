

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
let playerSign = 'X';

function clickedBox(element){
  
  if(players.classList.contains("player")){
    element.innerHTML =  `<i class = "${playerOIcon}"></i>`;
    players.classList.add('active');
    playerSign = 'O';
    element.setAttribute('id', playerSign);
  }else{
    element.innerHTML =  `<i class = "${playerXIcon}"></i>`;
    players.classList.add('active');
    element.setAttribute('id', playerSign);
  }

  selectWinner();
  playBoard.style.pointerEvents = 'none';
  element.style.pointerEvents = "none";
  
  let randomDelayTime = (Math.random() * 1000) + 200;
  setTimeout(() => {
    bot();
  }, randomDelayTime);

}

function bot(){
  playerSign = 'O';
  let array =[];

  for(let i = 0; i < allBox.length; i++){
    if(allBox[i].childElementCount === 0){
      array.push(i);
    }
  }

  let randomBox = array[Math.floor(Math.random() * array.length)];
  
  if(array.length > 0){

    if(players.classList.contains("player")){
      allBox[randomBox].innerHTML =  `<i class = "${playerXIcon}"></i>`;
      players.classList.remove('active');
      playerSign = 'X';
      allBox[randomBox].setAttribute('id', playerSign);
    }else{
      allBox[randomBox].innerHTML =  `<i class = "${playerOIcon}"></i>`;
      players.classList.remove('active');
      allBox[randomBox].setAttribute('id', playerSign);
    }
      selectWinner();
  }
  
  allBox[randomBox].style.pointerEvents = 'none';
  playBoard.style.pointerEvents = 'auto';
  playerSign = 'X';
}

function getClass(idname){
  return document.querySelector('.box' + idname).id;
}

function checkThreeClasses(val1,val2,val3,sign){
  if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
    return true;
  }
}

function selectWinner(){
  if(checkThreeClasses(1,2,3,playerSign) || checkThreeClasses(4,5,6,playerSign) || checkThreeClasses(7,8,9,playerSign) || checkThreeClasses(1,4,7,playerSign) || checkThreeClasses(2,5,8,playerSign) || checkThreeClasses(3,6,9,playerSign) || checkThreeClasses(1,5,9,playerSign) || checkThreeClasses(3,5,7,playerSign)){
    console.log(playerSign + " " + "is the winner");
  }
}