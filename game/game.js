let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let ngame = document.querySelector('nGame');
let msgC = document.querySelector('msgC');
let msg = document.querySelector('msg');

let turn0 = true;
const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clciked");
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
            box.backgroundColor = "red";
        } else {
            box.innerText = "Y";
            turn0 = true;
        }
        box.disabled = true;
        ckwin();
    });
});
const showwin = (winner) => {
    msg.innerText = `Congratulation The winner Is ${winner}`;
    msgC.classList.remove('hide');

}
const ckwin = () => {
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                alert('Winner'); // Use alert directly
                showwin(pos1); // Call showwin with the winner
            }
        }
    }
};