let number = 0;
const dummyText = 'I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this';

while (number < 60) {
    number = number + 1;
    console.log('Count:', number, ':', dummyText);
    
}

let oddNumber = 61;

while (oddNumber <= 100) {
    oddNumber = oddNumber + 1;
    if (oddNumber % 2 === 1) {
        console.log('Odd Numbers:', oddNumber);
    }
}


let allOddNumbers = 81;
let sum = 0;

while (allOddNumbers < 132) {
    if (allOddNumbers % 2 === 1) {
        sum = sum + allOddNumbers;
    }   
    allOddNumbers = allOddNumbers + 1
}

console.log('Total sum of 81 to 131:', sum);


let allEvenNumbers = 206;
let anotherSum = 0;
while (allEvenNumbers <= 311) {
    if (allEvenNumbers % 2 === 0) {
        anotherSum = anotherSum + allEvenNumbers;
    }

    allEvenNumbers = allEvenNumbers + 1;
}

console.log('Total sum of 206 to 311:', anotherSum);



let multiplication = 5;
let i = 1;

while (i <= 10) {
    console.log(multiplication, 'x', i, '=', (multiplication * i));
    i = i + 1;
}


let countDown = 21;

while (countDown >= 15) {
    console.log('Count Down:', countDown);
    countDown = countDown -1;
}
