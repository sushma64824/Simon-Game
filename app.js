let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
     if (started == false) {
        console.log("game is started");
        started = true;

        levelup();
     }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250 );
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250 );
}


function levelup() {
    userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;

   let randIdx = Math.floor(Math.random() * 3);
   let randcolor = btns[randIdx];
   let randBtn = document.querySelector(`.${randcolor}`);
   gameSeq.push(randcolor);
   console.log(gameSeq);
   btnflash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
           setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game over!Your scroe was <b>${level}</b> <br> Press any Key to start:`;
        document.querySelector("body").style.background = "red";
        setTimeout(function () {
            document.querySelector("body").style.background = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
   let btn = this;
   userflash(btn); 

   usercolor = btn.getAttribute("id");
   userSeq.push(usercolor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}    

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
