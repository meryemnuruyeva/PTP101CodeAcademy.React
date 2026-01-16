//let numbers = [1, 3, 5];

//let sum = 0;

//for(let i = 0; i < numbers.length; i++){
//    sum = sum + numbers[i]
//}
//console.log("cem" + sum);



//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let count = 0;

//for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 === 0) {
//       count++;
//  }
//}

//console.log(count); 


//for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//       console.log(i);
//   }
//}



let n = parseInt(prompt("n ədədini daxil edin:"));

let cem = 0;
let i = 1;

while (i <= n) {
    cem += i;
    i++;
}

console.log("1-dən " + n + "-ə qədər olan ədədlərin cəmi = " + cem);





function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // 120
