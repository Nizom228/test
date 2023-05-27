function sumEvenInRange(x, y) {
  let sum = 0;
 
  for (let i = x; i <= y; i++) {
    // n % x - остаток деления n на x
    // если при делении на 2 остаток 0, то число чётное
    // если остаток 1, то нечётное
    // а если нечётное, то пропускаем текущую итерацию цикла
    if (i % 2 === 1) continue;
 
    sum += i;
  }
 
  return sum;
}
 
// в диапазоне от 2 до 10 (не включительно)
// числа: 2, 3, 4, 5, 6, 7, 8, 9
// тогда сумма будет 2 + 4 + 6 + 8 = 20
console.log(sumEvenInRange(5, 10)); //=> 20


function getEvens(n) {
  let evens = [];
 
  for (let i = 0; i <= n; i++) {
    if(i % 2 === 0)
    evens.push(i);
}
return evens;
}
console.log(getEvens(10));

function getEven(n) {
  let evens = [];
 
  for (let i = n; i >= 0; i--) {
    if(i % 2 === 0)
    evens.push(i);
}
return evens;
}
console.log(getEven(10));