/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

for (let i = 1; i <= 60; i++) {
    console.log('I will invest at least 6 hrs every single day for next 60 days!', i);
    
}


/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

for (let i = 61; i <= 100; i+=2) {
    console.log(i);
    
}

// another way using modulus 

for (let i = 61; i <= 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        
    }
}


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

for (let i = 78; i <= 98; i+=2) {
    console.log(i);
    
    
}

// another way using modulus

for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
        console.log(i);
        
    }
}



/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */

let sum = 0;

for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        console.log(i);
        sum = sum + i;
    }
}

console.log('total sum of 91 to 129:', sum);


/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

for (i = 51; i <= 85; i++) {
    if (i % 2 === 0) {
        console.log(i);
        sum = sum + i;   
    }
}

console.log('total sum of 51 to 85:', sum);


/***

Generate a multiplication table for number 9

 */

let multiplication = 9;

for (let i = 1; i <= 10; i++) {
    console.log(multiplication + ' x ' + i + ' = ' + (multiplication * i));
    
}


/***

Implement a countdown timer that counts down from 81 to 65.

 */

for (let i = 81; i >= 65; i--) {
    console.log('Count Down:', i);
    
}