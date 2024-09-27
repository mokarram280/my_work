// let day = 0;
// let dayName;

// switch (day) {
//     case 1:
//         dayName = 'saturday';
//         break;
//     case 2:
//         dayName = 'Sunday';
//         break;
//     case 3:
//         dayName = 'Monday';
//         break;
//     case 4:
//         dayName = 'Tuesday';
//         break;
//     case 5:
//         dayName = 'Wednesday';
//         break;
//     case 6:
//         dayName = 'Thersday';
//         break;
//     case 7:
//         dayName = 'Friday';
//         break;
        
//     default:
//         dayName = ' Warning! Not found day name.';    

// }

//console.log(dayName);

// let age = 27;

// let permission = age > 25 ? 'You are selected' : 'You are rejected';
// console.log(permission);

// let speed = 100;

// let limit = speed >= 100 ? 'This is too fast' : speed >= 40 ? 'Avarage speed' : 'You can go';
// console.log(limit)

// let x = 10;

// for(let x = 0; x <= 10; x++){
//     console.log('Hello world')
// }

// const person = {
//     firstName: 'MD',
//     lastName: 'Mokarram',
//     phone: '01929232476',
//     age: 25,
//     address:'Narsingdi-Bangladesh',
//     gander:'Male'
// }

// let storage = "";

// for(let take in person){
//     storage +=person[take] + '\n'
// };

// console.log(storage);

// const myList = ['Apple','Banana','Sroberi','Mango','Pine-apple'];

// for( let list of myList){
//     console.log(list);
// };

// let x = 0;
// while(x <= 10){
//     console.log(x)

//     x += 1
// }

// let count = 0;

// do{
//     console.log(count)
//     count += 1
// } while(count <= 20);

// const list = [1,2,3,4,5,6,7];

// let number = list.map(function(value){
//     return value * 4
// })
// console.log(number)
// let sum = 0;
// var arr = [10,15,20,30];
// arr.forEach(function myFunction(element){
//     sum = sum + element;
// });
// console.log(sum)

// let size = 5;
// let a = 5;
// for(let j = size;j >= 0;j = a){
//     console.log(a);
//     a = a - 2;

// };

// var quiz =[1,2,3];
// var js =[6,7,8];
// var result = quiz.concat(js);

// console.log(result);

// var arr =[1,2,3,4,5];
// var slicedArr = arr.slice(1,4);
// console.log(slicedArr)

// var fruit =['apple','banana','orange','mango'];
// console.log(fruit[1]);

// var x = 2 + 3 + "5";
// console.log(x)
// while(a != 0)
//     {
//     (a == 1)
//     continue;
//     else
//     a ++;
// }

// function delayLog(){
//     for(var i = 1; i <= 5;i++){
//    setTimeOut(function(){
//             console.log(i);
//         }, 1000);
//     }
// };

// delayLog();


// const obj1 = {property1:'10'};
// const obj2 = Object.freeze(obj1);
// obj2.property1 ='20';
// console.log(obj2.property1)

// var a = 225;
// console.log(Math.sqrt(a));

// var grade = 'A';
// var result = 0;

// switch(grade){
//     case 'A':
//         result+=10;
//     case 'B':
//         result+=9;
//     case 'C':
//         result+=8;
//     default:
//         result+=0;            
// };

// console.log(result);

// function funMama(x,y){
//         console.log(x,y)
// };
// funMama('Student ','Teacher');

// function add(a,b){
//     return a + b
// };
// let result = add('Teacher ','Student');

// console.log(result);

// let add = function (a, b){
//         return a * b
// };
// console.log(add(5,12));

// for(let i = 0; i < 5;i++){
//     if (i === 2){
//         continue;
//     }
//   console.log(i)
// }

// let x = 5;
// do{
//     console.log('HELLO');
//     x--;
// } while(!x > 0);

// var i = 5;
// for(;i < 5; i++){
//     console.log(i);
// }

// let size = 5;
// let a = 5;
// for(let j = size; j >= 0; j = a){
//     console.log(a);
//     a = a -2;
// }

// function display1(option){
//     return(option ? "true" : "false");
// }
// const ans = true;
// console.log(display1(ans));

// var tens = (function(x){
//     return x * x;
// }(10));
// console.log(tens)

// let a = [1,2,3,4,5];
// console.log(a.slice(0,3));

//function myFunction(){};
//let myFunction = function(){};
//const myFunction = () => {};

// function height (){
//     var height = 123.56;
//     var type = (height >= 190) ? "Taller" : "Littal sort";
//     return type;
// }

// console.log(height());

// function greet(){
//     console.log('Hello!');
// }
// var sayHello = greet;
// sayHello()

// var arr = [7,5,9,1];
// var min = Math.min.apply(null,arr);
// console.log(min);

// var a1 = [,,,];
// console.log(0 in a1);

// var grade ="D";
// var result;

// switch (grade){
//     case 'A':
//         result += '10';
//     case 'B':
//         result += '9';    
//     case 'C':
//         result += '8';
//     case 'D':
//         result += '6';
//     default:
//         result += '0';    
// };
// console.log(result);

// const person = {
//     firstName: 'MD',
//     lastName: 'MOKARRAM',
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     }
    
// }
// console.log(person.fullName());

// function factorial(n){
//     if(n === 0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(5));

// function isEven(num){
//     return num % 2 === 0;
// }

// console.log(isEven(4));

// function reversString(str){
//     return str.split('').revers().join('');
// }

// console.log(reversString('hello'));

// const nums = [1,2,3];
// const result = nums.map(num => num * num);
// console.log(result)

// const number = [1,2,3,4,5];
// const result = number.filter(n => n % 2 === 0);
// console.log(result)

// const arr = [1,2,3,4];
// const mapped = arr.map((num,index) => num * index);

// console.log(mapped);

// const numbers = [10,20,30];
// const filtered = numbers.filter(n => n > 15);

// console.log(filtered);

// const arr = [1,2,3,4];
// const result = arr.map( x => x + 1);

// console.log(result);

// const arr = ['a','b','c','d'];
// arr.forEach((element,index) => {
//     console.log(index,element);
// });

// const fruits = ['apple','banana','cerry','date'];
// const filtered = fruits.filter(fruits => fruits.includes('a'));

// console.log(filtered);

// function revString(stringArg) {
//     let arr = stringArg.split("");
//     arr.reverse();
//     return arr.join("");
// }

// console.log(revString('hello'));


// try {
//     console.log('Hello world');
// } catch {
//     let result = hablu(10,20);
//     console.log(result);
// } finally {
//     console.log('Hablu-programmer');
// }




// function myFun(){
//     let x = document.getElementById("demo").value;
//     let message = document.getElementById("para");

//     try {
//         if(x.trim() == "") throw "input field is empty";
//         else if(x < 5 ) throw "number is too low";
//         else if(x > 10) throw "number is too high";
//         else {
//                 throw "number is okay";
//         }  
//     }
//     catch(err) {
//         message.innerHTML = err;
//     }
// }

// function abbas(a){
//     function babor(b){
//         function chamad(c){
//             console.log(a + b + c)
//         }
//         return chamad('Chamad my friend' + "\n")
//     }
//     return babor('Babor my best friend' + "\n")
// }
// return abbas('Abbas my good friend' + "\n")

// function add(a,b){
//     console.log(a * b)
// };
// add(25,7);





//problem solving part 1

// question no 1:
//let carName = "volvo" ;
//console.log(carName);

// question no 2:
//On one single line, declare three variables with the following names and values:
//let firstName = "John";   // (firstName.) variable name
//let lastName = "Doe"; // ("Doe".) variable values
//let age = 35; // (age and 35.) variable name and values

// question no 3:
//Use the correct assignment operator that will result in x being 50 (same as x = x * y). 
//x = 10;
//y = 5;
//x = x * y // 50.

// question no 4:
//Use comments to describe the correct data type of the following variables:
//let length = 16; // number type.
//let lastName = "Johnson"; // string type.

// const x = {
//   firstName: "John",  
//   lastName: "Doe"
// };    // object type.

// question no 5:
//Execute the function named myFunction.
//  function myFunction() {
//   alert("Hello World!");
// }
// myFunction();

// question no 6:
// Create an object called person with name = John, age = 50, Then,access the object to alert("John is 50").
// const person = {
//     name:'Jhon',
//     age:50
// }
// alert("Jhon is 50")

// question no 7:
//The <button> element should do something when someone clicks on it. Try to fix it!
//alert("Hello! Hablu Programmer Team")

// question no 8:
// 1. Alert the number of items in an array, using the correct Array property: 
// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length);

// 2. Change the first item of Brand to "Ford".
// const Brand = ["Volvo", "Jeep", "Mercedes"];
// Brand[0] = "Ford";
// console.log(Brand);


// question no 9:
// let random = Math.random();
// console.log(random);

// let max = Math.max(10,20);
// console.log(max);

// let square = Math.sqrt(9);
// console.log(square);

// question no 10:
//1. Choose the correct comparison operator to alert true, when x is greater than y. 
// x = 10;
// y = 5;
// alert( x > y); // true.

// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, 
//  otherwise alert "Old enough".

// let age = 18;
// let man =(age < 18) ? "Too young" : "Old enough";
// alert("Old enough");



//Problem solving part 2

// question no 1:
// function celsiusToFahrenheit(celsius) {
//     return (celsius* (9 / 5) + 32);
//   };
  
//   console.log(celsiusToFahrenheit(0)); // 32
//   console.log(celsiusToFahrenheit(25)); // 77
  
// question no 2:
// function isEven(num) {
//     return num % 2 == 0;
//   };
  
//   console.log(isEven(4)); // true
//   console.log(isEven(7)); // false
  
// question no 3:
// function sum(a, b) {
//     return a + b;
//   }
  
//   console.log(sum(3, 4)); // 7
//   console.log(sum(10, 20)); // 30
  
// question no 4:
// function findSmallestNum(arr) {
//     let min = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];
//         if( element < min ){
//             min = element
//         }
//     }
//     return min;
//   }
  
//   console.log(findSmallestNum([3, 5, 1, 9])); // 1
//   console.log(findSmallestNum([-1, -5, 0, 10])); // -5

// question no 5:
//   function countVowels(str) {
//     let vowels = 'aeiouAEIOU';
//     let vowelMatches = str.match(/[aeiouAEIOU]/g);
//     return vowelMatches ? vowelMatches.length : 0;
//   }
  
//   console.log(countVowels("hello world")); // 3
//   console.log(countVowels("Javascript")); // 3
  
// question no 6:
// function getFirstElement(arr) {
//     const getArray = arr.at(0);
//     return getArray;
//   }
  
//   console.log(getFirstElement([1, 2, 3])); // 1
//   console.log(getFirstElement(["a", "b", "c"])); // "a"
  
// question no 7:
// function isArrayEmpty(arr) {
//     return Array.isArray(arr) && arr.length === 0;
//   }
  
//   console.log(isArrayEmpty([])); // true
//   console.log(isArrayEmpty([1, 2, 3])); // false
  
// question no 8:
// function factorialize(num) {
//     if (num === 0) { 
//         return 1; 
//     } 
//     else { 
//         return num * factorialize( num - 1 ); 
//     }
//   }
  
//   console.log(factorialize(5)); // 120
//   console.log(factorialize(7)); // 5040

// question no 9:
// function reverseString(str) {
//     let arr = str.split("");
//     arr.reverse();
//     return arr.join("");
//   }
  
//   console.log(reverseString("hello")); // "olleh"
//   console.log(reverseString("world")); // "dlrow"
  
// question no 10:
// function toLowerCase(str) {
//     return str.toLowerCase();
//   }
  
//   console.log(toLowerCase("HELLO WORLD")); // "hello world"
//   console.log(toLowerCase("JavaScript")); // "javascript"
  
// question no 11:
// function stringLength(str) {
//     let count = 0;
//     for(let char of str) {
//         count++;
//     }
//     return count;
//   }
  
//   console.log(stringLength("hello")); // 5
//   console.log(stringLength("world")); // 5
  
// question no 12:
// function mergeArrays(arr1, arr2) {
//     for(let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i]);
//       }
//     return arr1;
//   }
  
//   console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
//   console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  
// question no 13:
// function getLastElement(arr) {
//     return arr[arr.length - 1];;
//   }
  
//   console.log(getLastElement([1, 2, 3])); // 3
//   console.log(getLastElement(["a", "b", "c"])); // "c"
  
// question no 14:
// function getFirstCharacter(str) {
//     return str.charAt(0);
//   }
  
//   console.log(getFirstCharacter("hello")); // "h"
//   console.log(getFirstCharacter("world")); // "w"
  
// question no 15:
// function sumArray(arr) {
//     let total = 0;
//     for(let num of arr){
//         total += num;
//     }
//     return total;
//   }
  
//   console.log(sumArray([1, 2, 3, 4])); // 10
//   console.log(sumArray([-1, -2, -3, -4])); // -10
//   console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  
// Javascript type of Data:

// let counter; // undefined 
// console.log(typeof counter); // undefined type

// let counter = null; // null
// console.log(typeof null); // object type

// let num = 100; // number
// console.log(num); // number type

// let x = 'hablu'; // string
// console.log(typeof x); // string type

// console.log(typeof 'a' / 5); // NaN type

// let x = true; // boolean
// let y = false; // boolean
// console.log(typeof x); // boolean type


// Javascript Object:
// const person = {
//     firstName:'Abu', // firstName: holo Property. 'Abu' holo value.
//     lastName: 'Hasnat',
//     age: 25,
//     address: 'DHAKA - BANGLADESH'
// };

// person.age = 27; // Modifying the value of a property
// person.address = 'RAJSHAHE-BANGLADESH'; // Modifying the value of a property
// person.eyecolor = 'Black'; // Adding a new property to an object
// person.profession = 'Teacher'; // Adding a new property to an object
// delete person.profession; // Deleting a property of an object
// delete person.age; // Deleting a property of an object

// console.log('eyecolor' in person); // Checking if a property exists, use (in) operator

// JavaScript comparison operators

// Operator	           Meaning
//   <	              less than
//   >	              greater than
//   <=	              less than or equal to
//   >=	              greater than or equal to
//   ==	              equal to
//   !=	              not equal to

// JavaScript Logical Operators
// let x = true;
// let y = false;
// console.log(!x); // Logical NOT(!) operator

// let x = true;
// let y = false;
// console.log(x && y); // Logical AND(&&) operator

// let x = true;
// let y = false;
// console.log(x || y); // Logical OR(||) operator

// JavaScript exponentiation operator ( ** )

// let x = 20;
// let y = 4;
// console.log(x ** y); // 20 x 20 x 20 x 20 = 160000

// JavaScript String concat()
// let x = 'Hablu';
// let y = 'Programmer';
// console.log(x.concat(' ',y));

// let x = 'Hello hablu programmer team.How are you everybody';
// console.log(x.indexOf('How'));

// let x = 'Hello hablu programmer team.How are you everybody';
// console.log(x.length);

// let x = 'Hello world! ';
// console.log(x.repeat(10));

// let x = "Hi! everybody";
// console.log(x.replace("Hi!", "Hello!"));

// let x = "HABLU PROGRAMMER";
// console.log(x.toLocaleLowerCase());

// let y = "i am a programmer";
// console.log(y.toLocaleUpperCase());

// String Templates 
// Template Strings
// Template Literals
// Template Strings use back-ticks (``)

// const fruits = ['Apple','Banana','Orange','Mango','Pine-apple',100,200,300,400,500,true,false,null];
// fruits[4] = 'Strowberry';
// fruits[1];
// fruits.push('Rice');
// fruits.unshift('Dragon');
// fruits.pop();
// fruits.shift();
//console.log(fruits.indexOf('Mango'));
//console.log(fruits.length);
//console.log(Array.isArray(fruits));
// fruits.splice(0,3);
// console.log(fruits);

// const num = [1,2,3,4,5,];
// let sum = num.toSpliced(0,3);
// console.log(num);

// let d = new Date();
// console.log(d.getTime());

// let max = Math.max (1,2,3,-10,-14,-19,-20);
// console.log(max)

// let x = 0;
// console.log(Math.random(x))

// let age = 20;
// let country = 'Bangladesh';
// if(country == 'Bangladesh' && age <= 18){
//     console.log('You are selected')
// } else {
//     console.log('You are not selected')
// }

// let mark = 30;
// let passMark;

// if(mark == 10){
//     passMark = 'fail';
// } else if (mark == 20){
//     passMark = 'fail';
// } else if(mark == 30){
//     passMark = 'fail';
// } else if(mark == 33){
//     passMark = 'pass';
// } else {
//     passMark = 'You are rejected'
// };

// console.log(passMark)

// let speed = 102;
// let limit = speed > 100 ? 'Too fast' : speed > 80 ? 'Fast' : 'OK';
// console.log(limit);

// let day = 0;
// let dayName;

// switch(day){
//     case 1:
//     dayName = 'Saturday'
//     break;
//     case 2:
//     dayName = 'Sunday'
//     break;
//     case 3:
//     dayName = 'Monday'
//     break;
//     case 4:
//     dayName = 'Towesday'
//     break;
//     case 5:
//     dayName = 'Wednesday'
//     break;
//     case 6:
//     dayName = 'Thersday'
//     break;
//     case 7:
//     dayName = 'Friday'
//     break;
//     default:
//     dayName = 'Warning! Day not avalable'                            
// }

// console.log(dayName);

// let i = 5;
// for(i = 0; i < 10; i++) {
//     console.log('Hello world' + i)
// };

// const person = {
//     firstName:'Mokarram',
//     lastName:'Hossain',
//     phone:198765432,
//     age:25,
//     gander:'Male',
//     address:'Narsingdi'
// };

// let storage = "";

// for(let take in person){
//     storage += take + '\n'
// };
// console.log(storage)

// const str = 'Hablu-Programmer';
// for(let i of str){
//     console.log(i)
// };

// let count = 0;
// while(count < 20){
//     console.log(count)
//     count += 1
// };

// let count =0;
// do {
//     console.log(count)
//     count += 1
// } while(count < 10);

// function myFun(a,b){
//     console.log(a,b)
// }
// myFun('Abbas','Babor')

// function myFun(a,b){
//     return a + b
// }
// let x = myFun('Abbas my friend ','Babor my best friend');
// console.log(x)

// function get(a,b){
//     return a + b
// }
// let result = get

// console.log(result(100,20))
// console.log(get(220,80))

// let count = function(a,b){
//     return a + b
// };
// console.log(count(200,300))

// (
//     function(a){
//         console.log('hablu Programmer')
//     }
// )()

// function square(x){
//     x = x + x
//     return x
// }
// let y = 100;
// let result = square(y)
//     console.log(result)

// const person ={
//     name: 'Mokarram',
//     age: 25
// };

// function value(x){
//     x.age += 2
// };
// value(person);
// console.log(person);

// const fruit = ['Apple','Banana','Coconat','Orange','Strowberry','Pine-apple'];

// fruit.forEach(itemList)

// function itemList(value,index,itself){
//     console.log(index + " " + itself)
// };

// const number =[2,4,6,8,10];

// let sum = number.map(total)
// function total (value){
//         return value * 3
// };
// console.log(sum);
// console.log(number);

// const myArr = [1,2,3,4,5,6];
// let newArr = myArr.flatMap((x) => x * 2);
// console.log(newArr);

// const myFilter = [48,3,87,25,75,45];

// let Fresh = myFilter.filter(newFilter);

// function newFilter(value){
//     return value > 50
// };
// console.log(Fresh);


// let text = "I am student of Hablu Programmer, hablu Programmer is very good online HABLU platform";
// let result = text.replace(/hablu/ig, 'gablu');

// console.log(result);

// const person = {
//     firstName: 'MD',
//     lastName: 'Mokarram',
//     age: 25,
//     address: 'Narsingdi',
//     fullName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName());


// class parent{
//     assets1(){
//         console.log('My grandfather assets')
//     }
//     assets2(){
//         console.log('My Father assets')
//     }
// }
// class ami extends parent{
//     myAssets(){
//         super.assets1()
//         super.assets2()
//     }
// }
// myAssets = new ami()
// myAssets.myAssets()