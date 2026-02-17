const college = {
    name: 'Unknown',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibosh',],
    speciality: {
        dressColor: 'blue',
        dressCode: ['pant', 'shirt', 'tie'],
        gpa: 5,
        meritStatus: 'excellent',
    }
}

// console.log(college.speciality);
// console.log(college.speciality.meritStatus);
console.log(college['speciality'].meritStatus);
const program = college.events[1] = 'valentines day';
console.log(program);
console.log(college.events)
console.log(college.class);


// if delete anything

delete college.class;
console.log(college);
