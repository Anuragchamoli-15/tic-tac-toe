let button = document.querySelectorAll(".btn");
let turnInfo = document.querySelector(".turn-info");
let refreshBtn = document.querySelector(".ref");
let winnerMsg = document.querySelector(".winner-info");


button.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnInfo.innerText === "Player-1") {
      btn.disabled = true;
      btn.innerText = "x";
      btn.style.color = "red";
      turnInfo.innerText = "Player-2";
    } else {
      turnInfo.innerText = "Player-1";
      btn.innerText = "o";
      btn.style.color = "white";
      btn.disabled = true;
    }
    
    win();
  });
  
  refreshBtn.addEventListener("click", () => {
    if(btn.innerText != ""){
      btn.innerText = "";
      btn.disabled = false
    }
    turnInfo.innerText = "Player-1";
    winnerMsg.innerText = "";
  });
});

// winning senerio
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

let win = () => {
  for (let senerio of winners) {
    let val1 = button[senerio[0]].innerText;
    let val2 = button[senerio[1]].innerText;
    let val3 = button[senerio[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "")
      if (val1 === val2 && val2 === val3) {
        winnerMsg.innerText = `${button[senerio[0]].innerText} is winner`;
      }
  }
};
