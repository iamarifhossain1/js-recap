/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// Plain For Loop

for (let i = 1; i <= 200; i++) {
    if (i >= 100) {
        break;
    }

    console.log(i);
    
}


// While Loop

let i = 0;

while (i <= 200) {
    if(i >= 100) {
        break;
    }

    i++;

    console.log(i);
    
}



/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let num = 1;
let sum = 0;

while (num <= 100) {
    sum = sum + num;
     console.log('total sum:', sum);
    if (sum >= 100) {
        break;
        
    }

    num++;
    
}


let sum1 = 0;

for (let i = 1; i <= 100; i++) {
    if (sum1 >= 100) {
        
        break;
    }   
    sum1 = sum1 + i;

    console.log('total sum:', sum1);
    
}


let sqrNum = 1;

while (sqrNum <= 100) {
    if (Math.sqrt(sqrNum) % 1 === 0 && sqrNum !== 1) {
        break;
    }

    console.log(sqrNum);
    sqrNum++
    
}