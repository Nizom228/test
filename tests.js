//Создайте функцию, которая принимает массив с числами и возвращает массив с элементами, умноженными на два.

function getMultipliedArr(arr) {
  let arr1 = arr.map((num) => num * 2);
  return arr1;
}
console.log(getMultipliedArr([2, 5, 3]));
//➞ [4, 10, 6]

//Создайте функцию, которая принимает массив с числами и возвращает инвертированный массив.

function invertArray(arr) {
  let invertArr = arr.map((num) => {
    if (num < 0) return (num = Math.abs(num));
    else return (num = -Math.abs(num));
  });
  return invertArr;
}

console.log(invertArray([-5, -3, -1, -9]));
//[(-2, 5, -3)];

function invertArray1(arr) {
  return arr.map((el) => el * -1);
}
console.log(invertArray1([-5, -3, -1, 9]));

//Создайте функцию, которая принимает массив строк и чисел и отфильтровывает массив, чтобы он возвращал массив только ЦЕЛЫХ чисел.
function filterArray(arr) {
  let newArr = arr.filter((x) => Number.isInteger(x));
  return newArr;
}
console.log(filterArray([2, "hello", 5.1, 3, "3"]));
//[(2, 3)];

//Создайте функцию, которая принимает массив чисел и возвращает сумму их кубов
function sumOfCubes(nums) {
  let sum = 0;
  nums.forEach((number) => {
    sum += Math.pow(number, 3);
  });
  return sum;
}

console.log(sumOfCubes([3, 4, 5]));

function sumOfCubes(nums) {
  let sum = nums.reduce((total, item) => {
    return total + Math.pow(item, 3);
  }, 0);
  return sum;
}

function sumOfCubes1(nums) {
  return nums.reduce((total, item) => total + Math.pow(item, 3), 0);
}

console.log(sumOfCubes1([3, 4, 5]));
//216;

//Возьмите массив целых чисел (положительных или отрицательных или обоих) и верните сумму абсолютных значений каждого элемента.
function getAbsSum(arr) {
  let sumAbs = arr.reduce((total, item) => {
    return total + Math.abs(item);
  }, 0);
  return sumAbs;
}

console.log(getAbsSum([-3, -4, -10, -2, -3]));
//22;
