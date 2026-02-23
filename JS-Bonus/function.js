function hello () {
    console.log('Function');
    
}

// hello();

function wallet() {
    const money = 4500;
    console.log('i have', money + ' Taka');
}

// wallet();


function sumCalculator(sum1, sum2) {
    let sum = sum1 + sum2;
    console.log('Total sum is =', sum);
    return sum;
}

const result = sumCalculator(20,30)
console.log('result is:', result);


function subtractCalculator(subtract1, subtract2) {
    let subtract =  subtract1 - subtract2;
    console.log('Result is:', subtract);
}

subtractCalculator(100, 60);

function multiplyCalculator(multiply1, multiply2) {
    let multiply = multiply1 * multiply2;
    console.log('Result is:', multiply);
}

multiplyCalculator(20, 12);

function divideCalculator(divide1, divide2) {
    let divide = divide1 / divide2;
    console.log('Result is:', divide);
}

divideCalculator(25, 5);
