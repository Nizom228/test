for (let i = 0; i < 10; i++) { 
  if (arr[i] === 5 || arr[i] === 6 || arr[i] === 7) { 
    continue; 
  } 
  console.log(arr[i]); 
}

while (i < arr.length) { 
  console.log(arr[i]); 
  i++; 
} 
 
do { 
  console.log(arr[i]); 
  i++; 
} while (i < 0);

let numbers = [1, 2, 3, 4, 5]; 
 
let i = 0; 
 
for (let i = 0; i < 5; i++) { 
  console.log(i); 
} 
 
for (let number of numbers) { 
  console.log(number); 
} 
 
for (let item in numbers) { 
  console.log(numbers[item]); 
  console.log(item); 
}

let cities = { Dushanbe: "Tajikistan", Moscow: "Russia", AbuDabi: "UAE" }; 
 
let arr = Object.entries(cities); 
 
console.log(arr.map((city) => `${city[0]} - is ${city[1]}`));

let number = [2, 5, 9, 15, 0, 4]; 
 
console.log(numbers.filter((number) => number > 3 && number < 10));

let fruits = ["pineapple", "apple", "bannana"]; 
 
  console.log( 
    fruits.sort((a, b) => { 
      if (a < b) { 
        return -1; 
      } else if (a > b) { 
        return 1; 
      } else { 
        return 0; 
      } 
    }) 
  ); 
 
console.log(fruits.sort((a, b) => a.localeCompare(b)));