// <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//   <div class="flex">
//     <div class="a"></div>
//     <div class="b"></div>
//     <div class="c"></div>
//   </div>
//   <style>
//     .flex {
//       height: 700px;
//       background-color: gray;
//       display: flex;
//       justify-content: center;
     
//     }
//     .a {
//       width: 200px;
//       height: 200px;
//       border-radius: 100%;
//       background-color: red;
//       margin-left: -20px;
//       display: grid;
//     }
//     .b {
//       width: 200px;
//       height: 200px;
//       border-radius: 100%;
//       background-color: red;
//     }
//     .c {
//       width: 200px;
//       height: 200px;
//       border-radius: 100%;
//       background-color: red;
//     }
//   </style>
//   <script>
    
//   </script>
// </body>
// </html>

function even(x){
      if(Number.isInteger(x) == true){
        return x % 2 == 0
      }else{
        return undefined
      }
    }
    console.log(even(10));

    function sumOfEvenNum(start,end) {
      let sum = 0;
    while (start <= end) {
      if(start % 2 == 0) {
        sum += start    
      }
      start += 1;
      }
     return sum
  }
        
console.log(sumOfEvenNum(5,15));