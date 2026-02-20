const mobile = {
    brand: 'apple',
    model: 'iphone 14',
    price: 100000,
    color: 'black',
    ram: '6gb',
    camera: '12mp',
}

for (const prop in mobile) {
    // console.log(prop);
    // console.log(mobile[prop]);
}

const keys  = Object.keys(mobile);
// console.log(keys);

for (const key of keys) {
    console.log(key, ':', mobile[key]);
    
}