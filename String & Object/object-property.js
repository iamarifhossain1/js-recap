const person = {
    name: 'Arif Hossain',
    age: 28,
    profession: 'Web Developer',
    salary: 30000,
    isMarried: false,
    'fav place': ['Cox Bazar', 'Sajek Valley', 'Bandarban']
}

console.log(person);
// Dot Notation
console.log(person.name);
// Bracket Notation
console.log(person['age']);
console.log(person['fav place']);

const keyName = 'profession';
console.log(person[keyName]);

