const country = 'Bangladesh';
const slice = country.slice(0,6);
console.log(slice);

const sentence = 'I am a good person and hard working :P';
console.log(sentence.split(' '));


const friendsStr = 'Abul,Babul,Chanchal,Dalim,Eyasin,Fahim';
const friends = friendsStr.split(',');
console.log(friends);

const realFriends = [ 'Abul', 'Babul', 'Chanchal', 'Dalim', 'Eyasin', 'Fahim' ]
console.log(realFriends.join());
console.log(realFriends.join(' | '));
console.log(realFriends.join(' - '));
console.log(realFriends.join(' + '));


const firstName = 'Arif';
const lastName = 'Hossain';
const fullName = firstName.concat(' ').concat(lastName);
console.log(fullName);
console.log(fullName.includes('D'));