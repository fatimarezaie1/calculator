let num1 = document.getElementById('num1_el');
let num2 = document.getElementById('num2_el');
let sumEl = document.getElementById('sum_el');

function add(){
    let result = Number(num1.value );
    let resulttoo = Number(num2.value);
    let res  =  result + resulttoo;
    sumEl.innerText = "\n"+"Result:" + res;
}
function subtract(){
    let result = Number(num1.value );
    let resulttoo = Number(num2.value);
    let res = result  - resulttoo;
    sumEl.innerText = "\n"+"Result: " + res;
}
function multiply(){
    let result = Number(num1.value );
    let resulttoo = Number(num2.value);
    let res = result * resulttoo;
    sumEl.innerText = "\n"+"Result: " + res;
}
function division(){
    let result = Number(num1.value );
    let resulttoo = Number(num2.value);
    let res = result / resulttoo;
    sumEl.innerText = "\n"+"Result: " + res;
}