
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
        case "%":
            return mod(x, y);
        default:
            return undefined;
    }
}