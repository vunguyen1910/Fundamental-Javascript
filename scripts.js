//Milestone 1 
const inventors = [
    'Albert Einstein',
    'Issac Newton',
    'Galileo Galilei',
    'Marie Curie',
    'Johannes Kepler',
    'Nicolaus Copernicus',
    'Max Planck',
    'Katherine Blodgett',
    'Ada Lovelace',
    'Sarah E. Goode',
    'Lise Meitner',
    'Hanna Hammarstrom'
  ];
  
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  //Milestone 2


const startWithA = inventors.filter(inventor => {
    const chars = inventor.split('');
    if(chars[0] === "A") return true;
  })
console.log(startWithA);


const containsN = inventors.filter(inventor => {
    const chars = inventor.split('');
    let isContains = false;
    chars.filter(char => {
        if (char === "n") isContains = true;
    });
    return isContains;
})
console.log(containsN);

const sameLetterTwice = inventors.filter(inventor => {
    const chars = inventor.split('');
    let isSameTwice = false;
    chars.filter((char, i) => {
        const Same = char === chars[i + 1];
        if(Same) isSameTwice = true;
    });
    return isSameTwice;
})
console.log(sameLetterTwice);

const numIsOdd = numbers.filter(num => num%2 != 0);
console.log(numIsOdd);

const haveTwoDigits = numbers.filter(num => num>10 && num<100);
console.log(haveTwoDigits);

const isPrime = numbers.filter(num => {
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num%i === 0) return false;
        return true;
    }
});
console.log(isPrime);

const firstName = inventors.map(inventor => {
    const name = inventor.split(' ');
    return name[0];
})
console.log(firstName);

const nameLength = inventors.map(inventor =>{
    const name = inventor.split('');
    const length = name.length;
    return length;
})
console.log(nameLength);

const upperCaseName = inventors.map(name => {
    let upper = name.toUpperCase();
    return upper;
})
console.log(upperCaseName);

const multiplied100 = numbers.map(num => {return num*100;});
console.log(multiplied100);

const powerof2 = numbers.filter(num =>{
    if(num%2 === 0) return true;
})
console.log(powerof2);

const sortInventors = inventors.sort();
console.log(sortInventors);

const sortInventorsZtoA = inventors.sort((a,b)=>{return a < b})
console.log(sortInventorsZtoA);

const sortWithNameLength = inventors.sort(function(a,b){
    return a.length - b.length;
})
console.log(sortWithNameLength);

const sortWithNameLengthReverser = inventors.sort(function(a,b){
    return b.length - a.length;
})
console.log(sortWithNameLength);

const sum = numbers.reduce((num1, num2) => num1 + num2);
console.log(sum);

const evenNum = numbers.filter(num => {
    if(num%2===0) return num;
})
const sumEven = evenNum.reduce((a,b) => a+b);
console.log(sumEven);

const stringFisrtName = firstName.reduce((a,b) => a+ " " +b);
console.log(stringFisrtName);

const isAnyY = inventors.some(name => {
    const checkName = name.split("");
    const isContainsY = checkName.some(containsY => "y" === containsY);
    return isContainsY;
})
console.log(isAnyY);

const isEveryE = inventors.every(name => {
    const checkName = name.split('');
    const isContainsE = checkName.some(containsE => "e" === containsE);
    return isContainsE;
})
console.log(isEveryE);

