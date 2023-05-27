// task 1
let string = 'privet';
let newString = string.slice(0, -1);
console.log(newString);
console.log(string.slice(0, 1) + string.slice(-1));


// task 2
let string1 = 'My name is Jhon';

console.log(string1.includes('My'))
 
// task 3
let string2 = 'hello world';
console.log(string2.toUpperCase());

// task 4
let str1 = 'first ';
let str2 = 'second ';
let str3 = 'third';
let str4 = str1 + str2 + str3;
console.log(str4);


// task 5
let string3 = 'Я начинающий программист';
let strin = string3.slice(2, 12)
console.log(strin);

// task (1)
const numb = [8, 19, 5, 6, 14, 9, 13];
const odds = numb.filter((num) => num % 2 === 1 && num < 15);
console.log(odds);

// task (2)
let twPoint = 2;
let trPoint = 4;

console.log(`${twPoint * 2 + trPoint * 3}`);

function basketballScore(twoPoint, threePoint) {
  return (twoPoint * 2) + (threePoint * 3);
}
console.log(basketballScore(1,2));

// task (3)
const numbers = [2, 9, 16, 25];
const newArr = numbers.map(num => num * num);
console.log(newArr);

// task (4)
const obj = {
  Dushanbe: 'Tajikistan',
  Moscow: 'Russia',
  AbuDahbi: 'UAE'
}

let cities = { Dushanbe: "Tajikistan", Moscow: "Russia", AbuDabi: "UAE" }; 
 
for (let [city, country] of Object.entries(cities)) { 
  console.log(`${city} - is ${country}`); 
} 
 
let arr = Object.entries(cities); 
console.log(arr); 


for (let i = 0; i < arr.length; i++) { 
  console.log(`${arr[i][0]} - is ${arr[i][1]}`); 
}


for (const key in obj) {
  console.log(`${key} is ${obj[key]}`);
}

// task (5)
let arr1 = [2, 5, 9, 25, 0, 4];
let newArr1 = arr1.filter(value => value > 3 && value < 10)
console.log(newArr1);

// task (6)
let n = 0;
for(let i = 1000; i >= 50; i /= 2) {
  n++
  console.log(n)
}

// task (7)
let arr2 = [12, 15, 20, 25, 59, 79];
let arr3 = arr2.map((num) => (num += arr2))
console.log(arr3);

let arr4 =  [12, 15, 20, 25, 59, 79];
let sum1 = 0;
for (let i = 0; i < arr4.length; i++)
{
    sum1 += arr4[i];
}
console.log(sum1/arr4.length);

// task (8)
let fact = 1;
let nu = 4;
for(let i = 1; i <= nu; i++) {
  fact *= i;
}
console.log(fact);
