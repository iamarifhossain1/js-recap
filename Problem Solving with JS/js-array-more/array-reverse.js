const numbers = [1, 2, 3, 4, 5];
const reverse = [];

for (let i = 0; i < numbers.length; i ++) {
    console.log(numbers[i]);
    reverse.unshift(numbers[i])
}

console.log(reverse);


const names = ['Arif', 'Hanif', 'Mousumi', 'Ayra', 'Hafsa', 'Muyaz'];

for (let i = 0; i < names.length; i++) {
    reverse.unshift(names[i]);
}

console.log(reverse);


const fruits = ['Apple', 'Banana', 'Pineapple', 'Watermelon', 'Strawberry']

for (const fruit of fruits) {
    reverse.unshift(fruit);
}

console.log(reverse);


const uniqueNumbers = [20, 40, 60, 80, 100];

specialNumbers.reverse();
console.log(specialNumbers);

