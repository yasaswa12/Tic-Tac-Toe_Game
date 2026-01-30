let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#mssg");


let turno = true; //playerX playerO
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let count = 0;

const resetgame = () => {
    turno = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {//playerO
            box.innerText = "O";
            turno = false;
        }
        else {//playerX
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        count++;
        let iswinner = checkwinner();
        if (count === 9 && !iswinner) {
            gamedraw();
        }
    });
});
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText
        if (pos1value != "", pos2value != "", pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                showwinner(pos1value);
            }
        }

    }
};
const gamedraw = () => {
    msg.innerText = `congratulations!!,game is draw`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
};
newgamebtn.addEventListener("click", resetgame);
rstbtn.addEventListener("click", resetgame);