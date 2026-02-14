const rev = 'i am learning web dev'
let reverse = ''

for (const letter of rev) {
    // console.log(letter);
    reverse = letter + reverse;
    
}
// console.log(reverse);

let reve = ''
for (let i = 0; i < rev.length; i++) {
    const letter = rev[i];
    reve = letter + reve;
}

// console.log(reve);

const reversed = rev.split('').reverse().join('');
console.log(reversed);

