let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelectorAll(".resetbtn");
let new_game = document.querySelector(".new-game")
let msg = document.querySelector(".msg")
let msg_container = document.querySelector(".msg-container")
let resetbtn = document.querySelector(".resetbtn")
let turn = true;
let game_container = document.querySelector(".container");


const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if (turn === true){ 
            box.innerText = "O";
            box.style.color = "red";
            turn =  false;
        }else{
            box.innerText = "X";
            box.style.color = "yellow";
            turn = true;

        }
        box.disabled = true;

        checkwinner();  
    })   
})




const boxenable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msg_container.classList.add("hide");
    }
};


const showWinner = (winner) => {
    msg.innerText =`Congratulation, winner is ${winner}`;
    msg_container.classList.remove("hide");
    game_container.classList.add("hide");
    resetbtn.classList.add("hide");    
};

const resetGmae = () =>{
    turn = true;
    msg_container.classList.add("hide");
    game_container.classList.remove("hide");
    resetbtn.classList.remove("hide");
    boxenable();
}
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        
        if (pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val === pos3val){
                
                showWinner(pos1val);
                
            }
        }
    }
};

new_game.addEventListener("click",resetGmae);
resetbtn.addEventListener("click",resetGmae);