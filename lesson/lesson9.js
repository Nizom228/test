// task 1
function hello1() {
  return 'Hello, JavaScript!';
}
console.log(hello1());

// task 2
function hello2(name) {
  let string1 = 'Hello ';
  let string2 = 'Hello Guest';
  if(name) {
    return string1 + name;
  }else {
   return string2;
  }
}
console.log(hello2());

// task 3
function min(a, b) {
  if(a < b) {
    return a;
  }else if(b < a) {
    return b;
  }else if(a === b) {
    return 'both numbers even';
  }
}
console.log(min(1,2));

// task 4
function findPerimetr(length, width) {
  return (length + width)*2;
}
console.log(findPerimetr(6,7));

// task 5
function concatName(firstName, lastName) {
  return  `${lastName } , ${firstName}`;
}
console.log(concatName('Jhon', 'Doe'));