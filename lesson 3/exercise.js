let number = 1;
if (number > 0) {
  console.log("true");
} else {
  console.log("false");
} 

let mark = 1;
if (mark > 0 && mark < 6) {
  console.log("true");
} else {
  console.log("false");
}

let num = 1;
switch (num) {
  case 1:
    console.log("winter");
    break;
  case 2:
    console.log("spring");
    break;
  case 3:
    console.log("summer");
    break;
  case 4:
    console.log("autumn");
    break;
  default:
    console.log("enter a number from 1 to 4");
    break;
}

// Extra task 1

let min = 0;
if (min >= 0 && min <= 14) {
  console.log("число попадает в первую четверт");
} else if (min >= 15 && min <= 30) {
  console.log("число попадает во вторую четверт");
} else if (min >= 31 && min <= 45) {
  console.log("число попадает в третью четверт");
} else if (min >= 46 && min <= 59) {
  console.log("число попадает в четвертую четверт");
} else {
  console.log("введите число от 0 до 59");
}

// Extra task 2

let a = 0;
if (a == 0 || a == 2) {
  a += 7;
} else {
  a /= 10;
}
console.log(a);

// Extra task 3

let day = 31;
if (day > 0 && day < 11) {
  console.log("число попадает в первую декаду");
} else if (day > 10 && day < 21) {
  console.log("число попадает во вторую декаду");
} else if (day > 20 && day < 32) {
  console.log("число попадает в третью декаду");
} else {
  console.log("введите число от 1 до 31");
}

// Extra task 4

let month = 1;
if (month === 12 || 1 || 2) {
  console.log('Winter');
} else if (month === 3 || 4 || 5) {
  console.log('Spring');
} else if (month === 6 || 7 || 8) {
  console.log('Summer');
} else if (month === 9 || 10 || 11) {
  console.log('Autumn');
} else {
  console.log('enter number from 1 to 12');
}
// Extra task 5

let string = "abcd";
if (string.charAt("0") == "a") {
  console.log("yes");
} else {
  console.log("no");
}

switch (string.charAt("0")) {
  case "a":
    console.log("yes");
    break;
  default:
    console.log("no");
    break;
}

let text = 'abcde';

let match = 'a';

if (text.startsWith(match)) {
  console.log(true);
} else {
  console.log(false);
}