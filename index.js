function add(a, b) {
    console.log(`${a + b}`);
}

function subtract(a, b) {
    console.log(`${a - b}`);
}

function multiply(a, b) {
    console.log(`${a * b}`);
}

function divide(a, b) {
    console.log(`${a / b}`);
}

function add(a, b) {
    return `${a + b}`;
}
console.log(add(1300, 18));

function subtract(a, b) {
    return `${a - b}`;
}
console.log(subtract(100, 8));

function multiply(a, b) {
    return `${a * b}`;
}
console.log(multiply(1704, 100));

function divide(a, b) {
    return `${a / b}`;
}
console.log(divide(4.929411764705883, 3));

function increment(a) {
    return `${++a}`;
}
console.log(increment(511));

function decrement(a) {
    return `${--a}`
}
console.log(decrement(178));



function makeInt(number) {
    return `${parseInt(number, 10)}`;
}
console.log(makeInt(452));



function makeInt(number) {
    return `${parseFloat(number, 10)}`;
}
console.log(makeInt(0.2328));


function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal('2.222'));
