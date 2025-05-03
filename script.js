let boxes = document.querySelectorAll(".box");
let restart = document.querySelector(".restart");
let turn = document.querySelector(".turn");
let winner = document.querySelector(".win");

let turnO = true; 

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
            turn.innerText = "X's Turn";
        }else{
            box.innerText = "X";
            turnO = true;
            turn.innerText = "O's Turn";
        }
        box.disabled = true;
        checkWinner();
    });
});

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(){
    for(pattern of winPatterns){
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        
        if(box1 != "" && box2 != "" && box3!= ""){
            if(box1 === box2 && box2 === box3){
                winner.innerText = `${box1} wins`;
                console.log("winner", box1);
                return;
            }else{
                winner.innerText = "Draw";
            }
        }
    }
}

restart.addEventListener("click", () => {
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
});