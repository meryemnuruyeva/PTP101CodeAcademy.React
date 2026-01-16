//const person = {


//console.log(person.name);
//console.log(person.age);




//let x = 13
//let b = 4

//console.log(x%b)




//console.log(5**2);




//01.12.2025...
//1)
//let n = 5;
//let sum = 0;
//let i = 1;
//while (i <= n){
//    sum += 1;
//    i++;
//}

//console.log(sum);

//2)
//let n = 5;
//let factorial = 1;
//for(let i = 1; i <= n; i++){
//    factorial = factorial * i;
//}
//console.log(factorial);




//02.12.2025
//let num = prompt("bir tam eded daxil edin:");
//let sum = 0;
//for (let digit  of num){
//    sum += Number(digit);
//}
//alert("sum:" + sum);


//03.12.2025
// const students = [
//     { name: "Fatima", email: "fatima@gmail.com", age: 18 },
//     { name: "Elmir", email: "elmir@gamil.com", age: 24 },
//     { name: "Maryam", email: "maryam@gamil.com", age: 18 },
//     { name: "Umud", email: "umud@gamil.com", age: 25 },
// ];
// let sum = 0;
// for (let i = 0; i < students.length; i++) {
//     sum += students[i].age
// }
// console.log("yaslarin cemi" + sum);


//04.12.2025
//function isEven(num) {
//    if (num % 2 === 0){
//        return true;
//    }
//      else{
//        return false;
//      }
//}

//console.log(isEven(1));
//console.log(isEven(4));

//console.log("---------------------------------");



//function isPositiv(number) {
//    if (number < 0) {
//        return number + " - this number is positive"
//    }
//    else if (number > 0) {
//        return number + "  - this is number is negative"
//    }
//    return number + " - this is number is zero"
//}
//console.log(isPositiv(7));



//05.12.2025
//1)Ilk elementini qaytaran funksiya.
//function getFirstElement(arr) {
//    return arr[0];
//}

//console.log(getFirstElement([10, 20, 30]));



//2)Son elementi qaytaran funksiya.
//function getLastElement(arr) {
//    return arr[arr.length - 1];
//}

//console.log(getLastElement([10, 20, 30]));




//3)Verilmis arrayde nece element oldugunu tap.

//function countItems(arr) {
//    return arr.length;
//  }

//  console.log(countItems([1, 5, 9, 7]));





// 4)verilmis iki sozun birlesdirilmis halini  qaytar.

//function concatWords(word1, word2) {
//    return word1 + " " + word2;
//}

//console.log(concatWords("Salam", "Dostum"));


//5)ededin reqemlerinin cemini tapan funksiya.
//function sumDigits(num) {
//    let text = String(num);
//    let = 0;
//    for (let i = 0; i < text.length; i++){
//        sum += Number(text[i]);
//    }
//    return sum;
//}

//console.log(sumDigits(781));

//6)verilmis cumledeki sozlerin sayini tap.

//function countWords(sentence) {

//    const words = sentence.trim().split(/\s+/);
//    return words.filter(w => w.length > 0).length;
//}

//console.log(countWords("good luck ptp101!"));


//7)verilmis arrayi tersine ceviren funksiya (ozun yaz, reverse istifade etme)
//function reverseArray(arr) {
//    const result = [];
//    for (let i = arr.length - 1; i >= 0; i--) {
//        result.push(arr[i]);
//    }
//    return result;
//}

//console.log(reverseArray([1, 2, 3]));



//8)ededin reqemlerinin hasilini tapan funksiya

//function multiplyDigits(num) {
//    return num
//        .toString()
//        .split("")
//        .reduce((product, digit) => product * Number(digit), 1);
//}

//console.log(multiplyDigits(452));

//9)verilmis array de en boyuk elementini qaytaran funksiya.

//function maxInArray(arr) {
//    if (arr.length === 0) return undefined;
//    let max = arr[0];
//    for (let i = 1; i < arr.length; i++) {
//      if (arr[i] > max) {
//        max = arr[i];
//      }
//    }
//    return max;
//  }

//  console.log(maxInArray([4, 7, 9,]));


//08.12.2025
//1)ASAN (1-5)
//Verilmis ededleri callback ile yoxla ve yalniz cut ededleri qaytar.
//filterEven([1, 2, 3, 4, 5], callbaclk)
//=>[2, 4]
//function IsEven(num) {
//    return num % 2 == 0;
//}
//function filterEven(arr, callback) {
//    let result = [];
//    for (let i = 0; i < array.length; i++) {
//        if (callback(arr[i])) result.push(arr[i]);

//    }
//    return result;

//}
//console.log(filterEven([1, 2, 3, 4, 5], IsEven));


//2)Verilmis sozlerden yalniz uzunlugu 5-den boyuk olanlari callback ile sec
//filterLongWords(["car","banana","house"], callback) =>   ["banana", "house"]

//function filterLongWords(words, callback) {
//    return words.filter(callback);
//}

//function callback(word) {
//    return word.length > 5;
//}

//console.log(filterLongWords(["car", "banana", "house"], callback));


//3)Verilmis parametr sayindan nece eded oldugunu tap (unlimited parametrs)
//countParams(10, 20, "Salam", true, 99) =>5

//function countParams(callback, params) {
//    const count = params.length;
//    callback(count);
//}

//countParams((result) => {
//    console.log(result);
//}, 10, 20, "Salam", true, 99);




//09.12.2025
//1)uzunlugu 5-den boyuk olan sozleri sec (filter)

// const text = "Bu cümlədə beşdən uzun olan sözləri seçirik";
// const words = text.split(" ");

// const longWords = words.filter(word => word.length > 5);

// console.log(longWords);



//2)adlarin bas herifini boyuk et (map)

// const names = ["designer", "violet", "Chanel", "fahsion"];

// const capitalizedNames = names.map(name =>
//   name.charAt(0).toUpperCase() + name.slice(1)
// );

// console.log(capitalizedNames);


//3)(reduce) array-deki ededlerin cemini tap.

// const numbers = [3, 5, 7, 10, 15];

// const sum = numbers.reduce((total, num) => total + num, 0);

// console.log(sum);


//4)filter-yalniz cut ededleri sec.

// const numbers = [1, 2, 3, 4, 5, 6, 12, 17, 20];

// const evenNumbers = numbers.filter(num => num % 2 === 0);

// console.log(evenNumbers);


//5) map-butun ededleri kvadrata vur.

// const numbers = [2, 4, 6, 8];

// const squared = numbers.map(num => num * num);

// console.log(squared);


//6) her mehsulun adini qaytar (map)

// const mehsullar = [
//     { name: "Dior", : 2 },
//     { name: "Chanel", qiymet: 3 },
//     { name: "YLS", qiymet: 4 }
// ];
// const mehsulAdlari = mehsullar.map(product => product.);

// console.log(productNames);


//10.12.2025
//1)Her mehsulun adini qaytar (map)
// const products = [
//     { id: 1, name: "Milk", price: 1200 },
//     { id: 2, name: "Bread", price: 2500 },
//     { id: 3, name: "Coffee", price: 800 }
//   ];

//   const productNames = products.map(product => product.name);

//   console.log(productNames);


//2)filter-sozlerden yalniz reqem olanlari cixart.
// const words = ["hello", "test1", "word", "js2", "code"];


// const words = ["hello", "test1", "word", "js2", "code"];

// const onlyWords = words.filter(word => !/\d/.test(word));

// console.log(onlyWords);


//3)inculdes-istifadeci daxil etdiyin adi array-de var?
//const names = ["Ali", "Nurlan", "Aysun", "Sema" ];

// const names = ["Ali", "Nurlan", "Aysun", "Sema"];

// const userInput = "Aysun";

// if (names.includes(userInput)) {
//     console.log("Ad massivde var");
// } else {
//     console.log("Ad massivde yoxdur");
// }

//4)butub bos string-leri sil (filter)
// const arr = ["hi", "", "hello", "", "js", ""];

// const arr = ["hi", "", "hello", "", "js", ""];

// const cleaned = arr.filter(item => item !== "");

// console.log(cleaned);




//11.12.2025
//1)Recursive sekilde string-de olan butun boyuk herflerin sayini tap
//countUpper("HeLLo WorLD") => 5


//function countUpper(str) {

//    if (str.length === 0) return 0;


//    let isUpper = (str[0] >= 'A' && str[0] <= 'Z') ? 1 : 0;


//    return isUpper + countUpper(str.slice(1));
//}

//console.log(countUpper("HeLLo WorLD"));


//2)reduce ile mehsullarin umumi qiymet cemini tapin.
// constproducts = [
//{name: "Phone", price: 800},
//{name: "Laptop", price: 1500},
//{name: "Mouse", price: 50},
//];


// const products = [
//     { name: "Phone", price: 800 },
//     { name: "Laptop", price: 1500 },
//     { name: "Mouse", price: 50 }
// ];
// const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

// console.log(totalPrice);

//3)obyektlerden ibaret array-in deep copy-sini yarat
//const students = [
//{name: "Ferman", age: 33},
//{name: "Fatime", age: 31}
//]

//const students = [
//    {name: "Ferman", age: 33},
//    {name: "Fatima", age: 31}
//]

//const copy = structuredClone(students);

//console.log(copy);

//4)find metodu ile email-i "fadile@mail.com" olan user-i tap
//const users = [
//{id: 1, email: "test@gmail.com"}
//{id: 2, email: "user@gmail.com"}
//{id: 3, email: "fadile@mail.com"}
//];

//const users = [
//    {id: 1, email: "test@gmail.com"},
//    {id: 2, email: "user@gmail.com"},
//    {id: 3, email: "fadile@mail.com"}
//];

//const foundUser = users.find(user => user.email === "fadile@mail.com");

//console.log(foundUser);


//5)verilmis array-in copy-sini 3 usulla yarat
//const arr = [1, 2, 3, 4];(slice, concat) ile her ikisini yazin.

// const arr = [1, 2, 3, 4];


// const copy1 = [...arr];
// console.log("copy1:", copy1);

// const copy2 = arr.slice();
// console.log("copy2:", copy2);


// const copy3 = [].concat(arr);
// console.log("copy3:", copy3);



//6)reduce-butun yaslarin ortalamasini hesabla
//const users = [
//{name: "Aysel", age: 20},
//{name: "Eli", age: 30},
//{name: "Samir", age: 25}
//];


// const users = [
//     { name: "Aysel", age: 20 },
//     { name: "Eli", age: 30 },
//     { name: "Samir", age: 25 }
// ];

// const averageAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;

// console.log(averageAge);


//7) reduce-sozlerin herflerinin umumi sayini tap
//const words = ["hello", "fadila", "fullstack"];

// const words = ["hello", "fadila", "fullstack"];

// const totalLetters = words.reduce((sum, word) => sum + word.length, 0);

// console.log(totalLetters);

//12.12.2025
//1) Futiona-a mail ve password gelir. Mail beraberdirse fadila@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "girish olundu" yazilsin, eks halda "mail ve yaxud password sehvdir" yazilsin.

// let mail = prompt("Mail daxil edin:");
// let password = prompt("Password daxil edin:");

// if (mail === "fadila@code.edu.az" && password === "12345") {
//     console.log("girish olundu");
// } else {
//     console.log("mail ve yaxud password sehvdir");
// }


//2) functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// function sumOfOddNumbers(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));



//3) function ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function countEvenNumbers(arr){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0){
//             count++
//         }
//     }
//     return count;
// }
// console.log(countEvenNumbers([1, 2, 3, 4, 6]));


//4)Asagidaki insanlarin siyasini yasa gore artan siraya duzun.
//let people = [
// {name: "Ali", age: 25},
// {name: "Leyla", age: 19},
// {name: "Murad", age: 30 }
// ];
//sort method



// let people = [
//     { name: "Ali", age: 25 },
//     { name: "Leyla", age: 19 },
//     { name: "Murad", age: 39 }
// ];

// people.sort(function (a, b) {
//     return a.age - b.age;
// });

// console.log(people);



//5) asagidaki sozleri uzunluga gore azalan siraya duzun.
//let texts = ["car", "telephone", "tv"] short method

// let texts = ["car", "telephone", "tv"];

// texts.sort((a, b) => b.length - a.length);

// console.log(texts);


//6) verilmis array-den 2-ci ve 3-cu elmentleri splice ile sil: 
//const arr = ["apple", "banana", "orange", "mango"];
//cixan cavab
//const arr = //["apple", "mango"]


// const arr = ["apple", "banana", "orange", "mango"];

// arr.splice(1, 2);
// console.log(arr);































































































































