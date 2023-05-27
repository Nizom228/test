const myArray = [
  {userid: '100', projectid: '10', rowid: '0'},
  {userid: '101', projectid: '11', rowid: '1'},
  {userid: '102', projectid: '12', rowid: '2'},
  {userid: '103', projectid: '13', rowid: '3'},
  {userid: '101', projectid: '10', rowid: '4'},
]

const myFilter = [
  { userid: '101', projectid: '11' },
  { userid: '102', projectid: '12' },
  { userid: '103', projectid: '11' },
];


const data = myArray.filter((arrayEl) =>
  !myFilter.some((filterEl) => filterEl.userid === arrayEl.userid && filterEl.projectid === arrayEl.projectid)

);

console.log(data);


 let users = [{name: "Oleg", gender:"male", age:22},{name: "Lola", gender:"female", age:25}];


 let usersName = users.map((name) => name.name);
 console.log(usersName);


 let usersGenderMale = users.filter((male) => male.gender === 'male');
 console.log(usersGenderMale);

 let usersGenderFemale = users.filter((female) => female.gender === 'female');
 console.log(usersGenderFemale);


 let findUser = users.find((find) => find.name === 'Lola');
 console.log(findUser);


 let usersAgeSort = users.sort((a, b) => a.age - b.age);
 console.log(usersAgeSort);


let newUsers = users.map((a) => a.age += 10);
console.log(newUsers);


let numbers =  [2,34,1,-1,3,6,0,5];
let sort = numbers.sort((a, b) => a - b);
console.log(sort);


// console.log( 
//   fruits.sort((a, b) => { 
//     if (a < b) { 
//       return -1; 
//     } else if (a > b) { 
//       return 1; 
//     } else { 
//       return 0; 
//     } 
//   }) 
// ); 
 
// console.log(fruits.sort((a, b) => a.localeCompare(b)));

function sortArray(array, method) {
  if (method === 'Asc') {
    console.log(array.sort((a, b) => b - a));
  } else if (method === 'Des') {
    console.log(array.sort((a, b) => a - b));
  } else {
    console.log(array);
  }
}

sortArray(numbers, 'Asc');
sortArray([12, 12, 4, 6, 2, 56, 2, 0, 9, 3, 2], 'Des');