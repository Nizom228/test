let arr = [];

for(let i = 1; i <= 10;i++) {
  arr.push(i);
}
console.log(arr);


 let str = '';

for (let i = 9; i >= 1; i--) {
	str += i;
}
console.log(str);


let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i = 0; i < arr1.length; i++) {
  if(arr1[i] === 5) {
    console.log('yes');
  }
}

let arr2 = ['Привет,', 'мир', '!'];
console.log(arr2[0], arr2[1], arr2[2])

arr2 = ['Привет, ', 'мир', '!'];
let text = arr2[0] + arr2[1] + arr2[2];
console.log(text);

arr2[0] = 'Пока,';
console.log(arr2);


num1 = [1, 2, 3];
num2 = [4, 5, 6];
num3 = [7, 8, 9];
num4 = [...num1, ...num2,...num3];
console.log(num4);