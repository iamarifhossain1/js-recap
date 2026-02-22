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
        // console.log('Store');
    }

    else {
        if (fileName.endsWith('docx')) {
            // console.log('Store');
        }

        else {
            // console.log('Delete');
            
        }
    }
}

/**
 * Task 5: PH Email Generator
 */

const student= { name: "jhankar" , roll: 1014 ,department: "cse" };
student.email = '@ph.ac.bd';
const email = student.name + student.roll + student.department + student.email;
// console.log(email);

// Another Approach

const values = Object.values(student);
// console.log(values.join(''));

// Another Approach

const fullEmail = `${student.name}${student.roll}${student.department}${student.email}`;
// console.log(fullEmail);


/**
 * Task 6: Current Salary ( Challenge Problem )
 */

let experience = 30;
let startingSalary = 45000;
