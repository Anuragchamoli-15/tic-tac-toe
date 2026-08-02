/* === click button === */
let clickSound = document.querySelector("#clickSound");
let button = document.querySelectorAll(".btn");

let turn = "player1"

let count = 0;
button.forEach((btn) => {
  btn.addEventListener("click", () => {
    clickSound.currentTime = 0;
    clickSound.play();


  if (turn === "player1"){
    btn.disabled = true
    btn.style.color = "red"
    btn.innerText = "X"
    count++
    turn = "player2"
  }else{
    btn.innerText = "O"
    btn.style.color = "blue"
    btn.disabled = true 
    count++
    turn = "player1"
  }    

 

    win();
    refresh();
    checkDraw();


  });
});

/* === Refresh btn === */
let refreshBtn = document.querySelector(".ref");

function refresh() {
  button.forEach((btn) => {
    refreshBtn.addEventListener("click", () => {
      if (btn.innerText != "") {
        btn.innerText = "";
        btn.disabled = true;
      }
      winnerMsg.innerText = "";
      btn.innerText = "";
      btn.disabled = false;
    });
  });
}

/* === winning senerio === */
let winners = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

/* === wining info === */
let winnerMsg = document.querySelector(".winner-info");
let winSound = document.querySelector("#winSound");
let looseGame = document.querySelector("#looseGame");


let win = () => {
  for (let senerio of winners) {
    let val1 = button[senerio[0]].innerText;
    let val2 = button[senerio[1]].innerText;
    let val3 = button[senerio[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "")
      if (val1 === val2 && val2 === val3) {
        winnerMsg.innerText = `${button[senerio[0]].innerText } is winner`;
        winSound.play();
      }}

    disabled();

};


// btn disabled after win;
let disabled = () =>{
button.forEach ((btn)=>{
    if (winnerMsg.innerText != "") {
      btn.disabled = true;
    }
})}


let checkDraw = () => {
  if(count === 9 && winnerMsg.innerText === ""){
    looseGame.play();
    count = 0;
    // button.forEach((btn) => {
        btn.innerText = "";
        btn.disabled = false;
        winnerMsg.innerText = "Draw";
    
  }
}




