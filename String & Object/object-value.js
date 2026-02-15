const person = {
    name: 'Arif Hossain',
    age: 28,
    profession: 'Web Developer',
    salary: 30000,
    isMarried: false,
}

// if update any value

person.salary = 35000
console.log(person.salary);
person['age'] = 30
console.log(person.age);

const propName = 'profession' ;
person[propName] = 'DevOps';
console.log(person[propName]);
