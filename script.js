const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board");

window.onload = () => {
  selectXBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
  }
  selectOBtn.onclick = () => {
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
  }
}