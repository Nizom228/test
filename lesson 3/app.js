let bool1 = true;
let bol2 = false;

let bool;
bool = Boolean();
console.log(bool);

let number = 2;
if (number > 0) {
  console.log("chislo polozhitelnoye");
}

number = -1;
if (number > 0) {
  console.log("chislo polozhitelnoye");
} else {
  console.log("chislo otricatelnoye");
}

number = 0;
if (number > 0) {
  console.log("chislo polozhitelnoye");
} else if (number == 0) {
  console.log("chislo ravno 0");
} else {
  console.log("chislo otricatelnoye");
}

let user = "Alisher";
if (user != "Alisher") {
}

//== - не строгое сравнение
number = 2;
if (number == "2") {
  console.log(true);
}

//=== - строгое сравнение
if (number === "2") {
  console.log(true);
} else {
  console.log(false);
}

//? - тернарный оператор

number = 2;

number > 0 ? console.log(true) : console.log(false);
//где вопросительный знак отвечает за if, двоеточие отвечает за else

if (number > 0) {
  console.log(true);
} else {
  console.log(false);
}

let color = "red";
//if
switch (color) {
  case "red":
    console.log("ваш цвет красный");
    break;
  case "black":
    console.log("ваш цвет черный");
    break;
  default: //else
    console.log("введите либо красный либо черный цвет");
    break;
}
