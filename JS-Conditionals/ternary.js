const age = 10;

if (age >= 18) {
    console.log('You can vote');
}

else {
    console.log('you can not vote');
    
}




age >= 18 ? console.log('You can vote') : console.log('Go Home');


let price = 1500;
const isLeader = true;

if (isLeader === true) {
    price = 0;
    console.log(price);
}

else {
    price = price + 100;
    console.log(price);
    
}


price = isLeader === true ? 0 : price + 100;
console.log(price);

if (isLeader === true) {
    if (price  > 1000) {
        price = price / 2;
    }

    else {
        price = 0
    }
}

else {
    price = price + 100;
}

console.log(price);


price > 1000 ? price / 2 : price = 0

price = isLeader === true ? price > 1000 ? price / 2 : price = 0 : price + 100;
console.log(price);


