console.log("Welcome to tic tac toe");
let turn = "X";
let gameOver = false;

//funtion to change turn
const changeTurn = () => {
    return turn === "X"?"0":"X";
}
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    win.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "") ){
           document.querySelector(".info").innerText= "Congratulations " + boxtext[e[0]].innerText + ". You won.";
           gameOver = true;
           document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "150px";
        }
    })
}


 //game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e => {
   let boxtext= e.querySelector('.boxtext');
   e.addEventListener('click', ()=>{
       if(boxtext.innerText === ''){
           boxtext.innerText = turn;
           turn = changeTurn();
           checkWin();
           if(!gameOver){
               document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
           }
       }
   })
})

let reset= document.getElementById("reset");
reset.addEventListener ('click', ()=>{
    let boxtext= document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(e =>{
        e.innerText="";
    });
        gameOver=false;
        turn="X";
        document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
        document.querySelector('.gif').getElementsByTagName('img')[0].style.width = "0px";
    
})
