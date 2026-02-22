/**
 * Task 1: Divide the Asset
 */

const area = 800;
const divide = area / 2;
// console.log(divide);

/**
 * Task 2: Cycle or  Laptop
 */


const money = 31000;

if (money >= 25000) {
    // console.log('Laptop');
}

else {
    if (money >= 10000) {
        // console.log('Cycle');
    }

    else {
        // console.log('Chocolate');        
    }
}


/**
 * Task 3: Medicine Planner
 */

const lastDay = 11;

for (let i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
        // console.log(i, '-', 'Medicine');
    }

    else {
        // console.log(i, '-', 'Rest');
        
    }
} 

/**
 * Task 4: Delete / Store
 */

const fileName = "pdfData.jpeg";

if (fileName.startsWith('#')) {
    console.log('Store');
}

else {
    if (fileName.endsWith('pdf')) {
        console.log('Store');
    }

    else {
        if (fileName.endsWith('docx')) {
            console.log('Store');
        }

        else {
            console.log('Delete');
            
        }
    }
}