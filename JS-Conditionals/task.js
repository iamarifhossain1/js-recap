// const burger = 500;
// let coke = 30;

// if (burger >= 500) {
//     console.log('Enjoy free coke :D');
    
// }

// else {
//     coke = 30;
// }


// const BMI = 20

// if (BMI <= 18.5) {
//     console.log('You are underweight');
// }

// else if (BMI >= 18.5 && BMI <= 24.9) {
//     console.log('You are normal');
// }

// else if (BMI >= 25 && BMI <= 29.9) {
//     console.log('You are overweight');
// }

// else {
//     console.log('You are obese');
    
// }

// const gradeScore = 58

// if (gradeScore >= 90 && gradeScore <= 100 ) {
//     console.log('Congratulations you have got A+');
// }

// else if (gradeScore >= 80 && gradeScore <= 89) {
//     console.log('Congratulations you have got A');
// }

// else if (gradeScore >= 70 && gradeScore <= 79) {
//     console.log('Congratulations you have got B');
// }

// else if (gradeScore >= 60 && gradeScore <= 69) {
//     console.log('Congratulations you have got C');
// }

// else {
//     console.log('Sorry :( better luck next time');
    
// }


const myScore = 95;
const friendScore = 35

if (myScore > 80) {
    if (friendScore > 80) {
        console.log('Dost chol ek sathe lunch kori :D');
    }

    else {
        if (friendScore < 80 && friendScore >= 60) {
            console.log('its okay dost :( better luck next time');
        }

        else {
            if (friendScore < 60 && friendScore >= 40) {
                console.log('dont seen his message -.-');
            }

            else {
                if (friendScore < 40) {
                    console.log('Block him/her');
                }
            }
        }
    }
    
}

else { 
    if (myScore < 80) {
        console.log('Go Home...sleep and act sad :(');
        
    }
}

console.log(myScore);
