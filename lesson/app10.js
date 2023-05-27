// task 6
function sortArray(number, str) {
  if(str === 'Asc') {
   return number.sort((a, b) => a - b);
  }else if(str === 'Des') {
   return number.sort((a, b) => b - a);
  }else {
    return number;
  }
}
console.log(sortArray([1, 2, 4,5], 'Des'));

// task 7
function matchLastItem(array) {
  let a;
 for(let i  = 0; i < array.length; i++) {
  a = array[i];
 }
 console.log(array.slice(0, -1) == a);
 console.log(a);
} 

//console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "111"]));

// task 8
function mirror(array) {
 return array.reverse(); 
}
console.log(mirror([1,2,4,5]));

// task 9
function lowestValues(array) {
  array.sort((a, b) => a - b);
  return array = array[1] + array[2];
}
console.log(lowestValues([34,-23,2,9,128,1]));

// task 10
function sevenBoom(array) {
  if(array.includes(7)) {
    return 'Boom!';
  }else {
    return 'Number 7 is not in array';
  }
}
console.log(sevenBoom([1,2,3,5,6,8]));
