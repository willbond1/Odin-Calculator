
const display = document.querySelector("#display");
const numBtns = document.querySelectorAll("button.num");
const opBtns = document.querySelectorAll("button.op");
const clrBtn = document.querySelector("button#clr");
const eqlBtn = document.querySelector("button#eql");

let numBuf = "";
let firstNum = NaN;
let op = "";

const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const mod = (x, y) => x % y;

function operate(op, x, y) {
    switch(op) {
        case "+":
            return add(x, y);
        case "-":
            return sub(x, y);
        case "*":
            return mul(x, y);
        case "/":
            return div(x, y);
        default:
            return undefined;
    }
}

numBtns.forEach(btn => btn.addEventListener("click", function() {
    const lastChar = this.textContent;
    numBuf += lastChar;
    display.textContent += lastChar;
}));

opBtns.forEach(btn => btn.addEventListener("click", function() {
    const opChar = this.textContent;
    if(isNaN(firstNum)) { // this is the first operand
        op = opChar;
        firstNum = Number(numBuf);
        display.textContent += opChar;
    } else {
        const secondNum = Number(numBuf);
        const result = operate(op, firstNum, secondNum);
        firstNum = result;
        op = opChar;
        display.textContent = result;
        display.textContent += op;
    }
    numBuf = "";
}));

eqlBtn.addEventListener("click", function() {
    if(!isNaN(firstNum) && op !== "" && numBuf !== "") {
        const secondNum = Number(numBuf);
        const result = operate(op, firstNum, secondNum);
        display.textContent = result;
        numBuf = String(result);
        op = "";
        firstNum = NaN;
    }
});

clrBtn.addEventListener("click", function() {
    display.textContent = "";
    numBuf = "";
    op = "";
    firstNum = NaN;
});