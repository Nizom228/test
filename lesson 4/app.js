
for(let i = 1; i <= 3; i++){
  console.log(i);
}

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

let array = ['Dushanbe', 'Moscow', 'New-York'];

//добавление в конец
array.push('Tokyo');
//добавление в начало
array.unshift('Dubai');
//удаление с конца
array.pop();
//удаление с начала
array.shift();
//вырезания какого то конкретного элемента или элементов из массива
// array.splice(0, 1);
//третий параметр добавляет значение вместо вырезаемого
array.splice(1, 1, 'Dubai');

console.log(array);


let fruits = ['orange', 'apple'];
let vegetables = ['tomato', 'potato'];
let newList = vegetables.concat(fruits);
let newList1 = [...fruits, ...vegetables];
console.log(newList, newList1);

let cities = ['Dubai', 'Dushanbe', 'New-York'];
// let dubai = cities[0];
// let dushanbe = cities[1];
// let newYork = cities[2];
let [item1, item2, item3] = cities;
console.log(item1, item2, item3);