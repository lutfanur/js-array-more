var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatSt = '';

for(let num of numbers){
    concatSt += num;
}
console.log(concatSt);


// task4....
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

const statement = 'I am a hard working person';
// let wordS = statement.split('');
let revS = wordS.reverse();
let reversedStatement = revS.join('');

console.log(reversedStatement);