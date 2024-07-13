//template literal
let p = 20;
let e = 25;
let str = '20';
// let output = "price of p and e  is " + (p+e) + " " +  "Rs";
// console.log(output);
// let answer = `price of p and e is ${p+e} Rs`;
// console.log(answer);
// console.log("price of p and e = ",p+e,"Rs.");
//Arithmatic operator 
//console.log(p+e); //- * /
//unary operator 
console.log(p++);
console.log(++p);
//comparison operator >=,<=,==,===,>,<,!= print true or false 
console.log(p>e);
console.log(3<5);
console.log(2=='2');//give true compare only type
console.log(2==='2');//give false compare type &value
console.log(null==undefined); //give true 
console.log(null===undefined); //give false 
console.log(0==''); //give true 
console.log(0===""); //give false 
console.log('a'<'b');  //a =61 -----z
console.log('a'<'A');  //A = 41----z
console.log('*'<'$');
//if statement 
console.log("before statement");
let age = 18;
if(age>16){
    console.log("you cant vote");
}
console.log("after statement");
if(age<35){
    console.log("you can vote");
}
//if ,else if, else example
let size = "l";
if(size=="xl"){
    console.log("price is 250");
}
else if(size == "l"){
    console.log("price is 200");
}else{
    console.log("price is 50");
}
//nested if else 
let marks = 90;
if(marks>=33){
    console.log("Pass");
    if(marks>80){
        console.log("Grade: O")
    }else{
        console.log("Grade:A");
    }

}else{
    console.log("fail");
}
//logical operator
console.log(5>3&&4>3);
console.log(5>3&&3>5);
console.log(5>3||3>5);
console.log(true||false);
console.log(5!=5);
console.log(5!=3);
//example using logical operator 
let mar = 80;
if(marks>=33 && marks>75){
    console.log("Pass");
    console.log("Grade: O");
}
if(marks>33&&marks>75||!false){
    console.log("pass ho gya");
}
let str1 = "gbcd";
if(str1[0]==='a'&& str1.length>3){
    console.log(`${str1} is a good string`);
}else{
    console.log(`${str1} is a bad string `);
}
let num = 12;
if((num%3===0) && ((num+1==15)|| num-1 == 11 )){
    console.log("Safe");
}else{
    console.log("unsafe");
}
//javascript has tuthy & falsy value 
if(true){
    console.log("it has true value"); //1,"abscsc",
}else{
    console.log("it has false value"); //"",null,undefined,0
}
//switch statement 
let color = "green";
switch(color){
    case "red" : console.log("stop");
    break;
    case "yellow" : console.log("slow");
    break;
    case "green" : console.log("go");
    break;
    default:console.log("error");
}
console.log("this is simple msg");
console.error("this is an error msg");
console.warn("this is a warning msg");
//Aletrs and prompt
// let firstName = prompt("Enter your name");
// console.log(firstName);
// let lastName = prompt("Enter last name");
// console.log(firstName,  " " ,lastName);
// let msg = "Welcome"+ " " + firstName + " " + lastName + "!";
// alert(msg);

// largest of three number 
let a = 3;
let b= 5;
let c = 7;
if(a>b && a>c ){
 console.log(a);
}
else if(b>c){
    console.log(b);
}else{
    console.log(c);
}

let num1 = 32;
let num2 = 47862; 
if((num1%10 == num2%10)){
    console.log("number have last same digit is 2");
}else{
    console.log("number have not last same digit is 2");
}
//for remove space we used trim  trim create new string it cant changes in old string 
// let password = prompt("Enter password");
// console.log(password.trim()); 
let msg = "     heLLo       ";
let newmsg = msg.trim();
console.log(newmsg);
console.log(newmsg.toUpperCase());
console.log(newmsg.toLowerCase());
//method chaining 
let newmsg1 = msg.trim().toUpperCase();
console.log(newmsg1);
//method with arguments indexOf based on first occurance 
let z = "ilovecodingjavadsaDevelopment";
console.log(z.indexOf("love"));
console.log(z.indexOf("o"));
console.log(z.indexOf("Development"));
//slice 
let w = "apnacollege";
console.log(w.slice(4));
console.log(w.slice(2,5));
console.log(w.slice(-2));
console.log(w.slice(-8));
//repeat and replace method replace method return newstring not change the value off old string
console.log(w.replace("apna","delta"));
console.log(w.replace("p","*"));
console.log(w.repeat(2));
console.log(w.slice(4).replace("ll","tt"));
let student = ["Harsh","Shubham","Chirag"];
console.log(student);
console.log(student[1]);
console.log(typeof student);
let nums = [2,4,6,8];
console.log(typeof nums);
//creating array 
let mark1 = ["harsh","9.5","10"];
console.log(mark1);
let empArr = [];
console.log(empArr);
console.log(empArr.length);
console.log([1,2,3,4].length);
console.log(student[0][1]);
//Arrays are mutable not create newarr when we change value it change in old arr
let fruits = ["banana","litchi","apple"];
fruits[0]  = "Mango"; 
console.log(fruits);
fruits[10] = "papaya";
console.log(fruits);
//Array Method push add to end pop delete from end 
let cars = ["Alto","Swift","Polo","i20"];
cars.push("Ferrari");
console.log(cars);
cars.pop();
console.log(cars);
//unshift add from start shift delete from start
cars.unshift("BMW","ROll Royce");
console.log(cars);
cars.shift();
console.log(cars);
let start = ["january","july","March" ,"August"];
start.shift();
start.shift();
console.log(start);
start.unshift("june");
start.unshift("july");
console.log(start);
 //includes  give boolean value 
console.log(cars.includes("Polo"));
//concatenation and reverse concat doesn't change in array it create new array
let primary = ["red","green","blue","violet",'black'];
let secondary = ["yellow","saffron","skyblue"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));
//console.log(primary.reverse());
//slice 
console.log(primary.slice(1));
console.log(primary.slice(2,5));
console.log(primary.slice(6));
console.log(primary.slice(-3));

//splice method splice changed on original array 
console.log(primary);
console.log(primary.splice(2));
let cars1= ["BMW","audi","xuv","polo"];
console.log(cars1.splice(0,1));
console.log(cars1);
cars1.push("maruti","ferrari");
console.log(cars1);
cars1.splice(1,2);
console.log(cars1);
cars1.splice(0,0,"GWagon","Defender");
console.log(cars1);
//if we want replace maruti  
console.log(cars1.splice(3,1,"supra"));
console.log(cars1);

//sort
let char = ['f','b','n','g']
console.log(char.sort());
let start1 = ["january","july","march","august"];
console.log(start1.splice(0,1));
console.log(start1);
console.log(start1.splice(0,1,"july","june"));
console.log(start1);
//Array Reference 
console.log([1]==[1]);
console.log([]==[]);
let arr = ['a','b','c'];
arrcopy = arr;
console.log(arrcopy);
arrcopy.push('d');
console.log(arr);
//in const arr we perform operation like push pop but cant refference to new array
const arr1 = [1,2,3,4];
arr1.push(6);
console.log(arr1);
console.log(arr1.pop());
console.log(arr1);
let arr2 = [2,3,5,6];
console.log(arr2);
let arr3 = [[2,4],[3,5],[6,8]];
console.log(arr3);
console.log(arr3[0][1]);
console.log(arr3.push([3,8]));
console.log(arr3);
//Practice Question  
let arr4 = [7,9,0,-2];
//console.log(arr4.splice(3,1));
console.log(arr4);
console.log(arr4.shift());
console.log(arr4); 
//  let check = prompt("Enter String ");
//  if(str.length==0){
//     console.log("Str is empty");
//  }
//  else{
//     console.log("str is not empty");
//  }
 let char1 = "ApnaCOlLeGe";
 let idx = 6;
 if(char1[idx]==char1[idx].toLowerCase()){
   console.log("char is in lowercase");
 }else{
    console.log("char1 is not in lowercase");
 }
//  let str2 = prompt("Enter String");
//  console.log(`original string is ${str2}`);
//  console.log(`string without spaces is ${str2}`);
let arr5 = ["hello",3.9,30,40];
let item = 40;
if(arr5.indexOf(item)!=-1){
 console.log("element exist in array");
}else{
    console.log("element not exist in array");
}
//print all odd number 
for(let i =1;i<=15;i=i+2){
    console.log(i);
}
console.log("backward");
for(let i=15;i>=1;i=i-2){
    console.log(i);
}
for(let i =2;i<=10;i=i+2){
    console.log(i);
}
//prompt is asically is string  so we use parseInt 
// let n = prompt("Enter Number");
// //n = parseInt(n);
// for(let  i=n;i<=n*10;i=i+n){
// console.log(i);
// }
//Nested loops 
for(let i =0;i<=3;i++){
    console.log(`outer loop is   ${i}`);
    for(let j =0;j<=3;j++){
        console.log(j);
    }
}
//while loop
let  i = 1;
while(i<=5){
    console.log(i);
    i++;
}
//Favourite movie 
// const favMovie = "Spiderman";
// let guess = prompt("Enter favorite movie");
// while(guess!=favMovie && guess!="quit"){
//     guess = prompt("Wrong Guess 🥲 Please Try Again");
// } 
// if(guess ==favMovie){
//     console.log("Congrats 😀😀");
// }
// if(guess=="quit"){
//     console.log("you are out of game 😕😕")
// }
//break keyword 
// const favMovie = "Spiderman";
// let guess = prompt("Enter favorite movie");
// while(guess!=favMovie){
//     if(guess=="quit"){
//         console.log("you are out of game 😕😕");
//         break;
//     }
//     guess = prompt("Wrong Guess 🥲 Please Try Again");
// } 
// if(guess ==favMovie){
//     console.log("Congrats 😀😀");
// }
let j = 1;
while(j<=5){
 if(j==3){
     break;
 }
 console.log(j);
 j++;
}
//loop with arrays 
let fruit = ["apple","banana","litchi"];
for(let i=0;i<fruit.length;i++){
    console.log(i,fruits[i]);
}
//loop with nested array 
let heroes = [["spiderman","ironman","thor"],["flash","marvel","antman"]]
for(let i =0;i<heroes.length;i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j =0;j<heroes[i].length;j++){
        console.log(`j = ${j} , ${heroes[i][j]}`);
    }
}
let student1 = [["Harsh",60],["Subham",88],["Vipul",95]]
for(let i =0;i<student1.length;i++){
    console.log(`info of student${i}`);
    console.log(i,student1[i],student1[i].length);
    for(let j = 0;j<student1[i].length;j++){
        console.log(`${j},${student1[i][j]}`);
    }
}
//for of loop 
let fruits1 = ["banana","mango","litchi","berry"];
for(fruit of fruits1){
    console.log(fruit);
}
for(char of "apnacollege"){
    console.log(char);
}
//nested for of loop 
let hero = [["spiderman","thor","captain marvel"],["flash","Antman","marvel"]]
for(list of hero){
    console.log(list);
    for(lists of  list){
        console.log(lists);
    }
}
//practice question 
let arr6 = [1,2,3,4,5,6,2,3];
let num3 = 2;
for(let i = 0;i<arr6.length;i++){
    if(arr6[i]==num3){
        arr6.splice(i,1);
    }  
}
console.log(arr6);
//count of number
let number = 12345678;
let count = 0;
while(number>0){
    count++;
    number = Math.floor(number/10); 
}
console.log(count);
//sum of number 
let number1 = 12345678;
let sum = 0;
while(number1>0){
    let digit = number1%10;
    sum+=digit;
    number1 = Math.floor(number1/10);
}
console.log(sum);
//factorial of number
let n = 5;
let fact = 1;
for(let i =1;i<=n;i++){
   fact = fact*i;
    
}
console.log(`factorial of ${n} is ${fact}`);
//largest number
let arr7 = [2,3,4,5,65,7];
let largest = 0;
for(let i =0;i<arr7.length;i++){
    if(largest<arr7[i]){
        largest = arr7[i];
    }

}
console.log(`largest number is ${largest}`);
//object literal has no specific order object literal has key & value 
let student4 = {
    Name:"Harsh",
    Age:20,
    marks:94,
   lang :["Java,Mern Stack"]
};
console.log(student4);
//in object we store array and when we put const on object we can change key & value but cant change address
const item1 = {
    price:750,
    clothes:"nikes",
    shoes:'adidas'
}
console.log(item1);
//create a twitter post 
const post = {
    username : "@Harshsharma",
    content: '@THis is my #firstpost',
    profile:'A',
    likes:150,
    reposts:4,
    1:"js",
    null:"d",
    undefined:"e",
    true:"g",
    follower : ["Subham",'Vipul','Chirag'],
    tags : ["@apnaCOllege","DeltaCollege"]
}
console.log(post);
//get values 
console.log(post["username"]);
console.log(post.content);
console.log(post.tags);
let prop = "reposts";
console.log(post[prop]);
console.log(post["reposts"]);
//undefined print we cant write this bc when we create variable we dont use dot operator

console.log(post.prop);
//javascript 1 into string first
console.log(post[1]);
console.log(post["1"]);
//dot operator cant conver 1 to directly in string

// console.log(post.1);
console.log(post.null);
console.log(post["null"]);
console.log(post.undefined);
console.log(post['undefined']);
console.log(post.true);
console.log(post["true"]);

//add/update value
post.profile = "beginner";
console.log(post.profile);
post.gender = "Male";
console.log(post);
console.log(post.follower);
console.log(post);
delete post.likes;
console.log(post);
//object of objects 
const classInfo = {
    Harsh : {
     Grade : "A",
     Marks : 75,
    },
    Subham : {
        Grade : "A+",
        Marks : 86,

    },
    Vipul : {
        Grade :"B",
        Marks : 70.

    },
}
console.log(classInfo);
console.log(classInfo.Harsh.Marks);
console.log(classInfo.Vipul);
classInfo.Harsh.city = "Charkhi Dadri";
console.log(classInfo.Harsh);
classInfo.Vipul.Grade = "O";
console.log(classInfo.Vipul);
//Array of objects
let  classstu = [
    {
        name : "Harsh",
        Grade: "O",
        City : " Charkhi Dadri"
    },
    {
        name : "Subham",
        Grade: "A+",
        City : "Bhiwani"
    },
    {
        name : "Chirag",
        Grade: "O",
        City : "Rohtak"
    },
]
console.log(classstu);
console.log(classstu[0]);
console.log(classstu[2].name);
classstu[2].name = "vipul";
console.log(classstu[2]);
//Math object 
console.log(Math.PI);
console.log(Math.E);
//positive number we use absolute function
console.log(Math.abs(-5));
console.log(Math.abs(6));
console.log(Math.pow(2,5));
//nearest smallest value integer
console.log(Math.floor(5.66));
console.log(Math.floor(-5.40));

//largest value int 
console.log(Math.ceil(6.45));
console.log(Math.ceil(-6.45));
console.log(Math.ceil(-5));
//for random number 
console.log(Math.random());
//Random integers
let num4 =  Math.random();
num4 = num4*10; //for 100 = *100,1000,4
num4 = Math.floor(num4); //remove float num for getting integer
num4 = num4+1;  //bc random no. lie between o and 1 it cant be 1 so we add 1 10*1
console.log(num4);
//Method chaining 
console.log(Math.floor(Math.random()*10+1))
console.log(Math.floor(Math.random()*100+1))
console.log(Math.floor(Math.random()*5+1))
//if we want 21 t0 25
console.log(Math.floor(Math.random()*5+21));
//practice question
let dice = Math.floor(Math.random()*6)+1;
let car = {
    name:"BMW",
    Model: "x6",
    color: "White"
}
console.log(car);

//function 
function hello(){
    console.log("hello");
}
hello();  //function call 
function printPoem(){
    console.log("Twinkle Twinkle Little Star");
    console.log("how i wonder what you are");
}
printPoem();
function rolldice(){
    console.log(Math.floor(Math.random()*6)+1);
}        
rolldice();
//function with arguments 
function printName(name){
   console.log(name);
}
printName("Harsh Sharma");
function printinfo(name,age){
    console.log(`${name}'s age  is ${age}`);
 }
 printinfo("Harsh",20);
 printinfo(13);//function is orderwise 

function add(a,b){
    console.log(a+b);
}
add(2,3);
function average(a,b,c){
   console.log((a+b+c)/3);
}
average(2,3,4);
function multiply(n){
    for(let i =n;i<=n*10;i=i+n){
       console.log(`multiplication of table   is = ${i}`);
    }
}
multiply(5);
//return keyword before return we can print console.log but after return we dont print console.log
function sum3(a,b){
    console.log("Harsh");
    console.log("Harsh");
    return(a+b);
    console.log("Harsh"); 
    console.log("Harsh");
}
let s = sum3(3,4);
console.log(s);
console.log(sum3(3,5));
console.log(sum3(sum3(2,3),5));
//similarly for loop
function isAdult(){
    let age = 22;
    if(age>18){
        return "Adult";
    }else{
       return "Not Adult";
    }
    console.log("bye");
}
console.log(isAdult());
function  sumofn(n){
    let sum =0;
    for(let i =1;i<=n;i++){
      sum+=i;
    }
    return sum;
}
console.log(sumofn(5));
//concat all strings 
let strn = ["hi","hello","bye"];
function concat(strn){
    let result = "";
    for(let i =0;i<strn.length;i++){
      result+=strn[i];
    }
    return result;
}
console.log(concat(strn));

//function scope is more specifec then global scope
 let add1 = 54;
 function calcSum(a,b){
    let add1 = a+b; //function scope
    //if i comment function scope then it print the add1 of global scope
    console.log(add1);
 }
 calcSum(1,2);
 console.log(add1);
 //block scope variable declare inside{} ,var has no block scope only let and const have block scope
 for(let i =0;i<=5;i++){
    console.log(i); //block scope
 }
 //Lexical Scope
 function outerFunc(){
    let x = 5;
    let y = 8;
    function innerFunc(){ //function scope
        let a = 10;
        console.log(x);
        console.log(y);
    }
     console.log(a);
    innerFunc();
 }
 outerFunc();
 //if we create function first then declare variable called hoisting
 //we cant access  innerfunction outside 
 function outerFunc(){
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    let x = 10;
    let y = 8;
    innerFunc();
    
 }
 outerFunc();

 let greet = "hello";
 function changegreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet); //lexical scope
    }
    innergreet();
 }
 console.log(greet);
 changegreet();
 //function expression we define function by creating variable
 let mul = function(a,b){
    return a*b;
 }
 console.log(mul(2,3));

 //High order function 
 let greet1 = function(){
    console.log("Harsh Sharma");
 }
 function multiplicationgreet(func,count){//Highorder function
    for(let i =0;i<count;i++){
          func();
    }
 }
 //we cant write greet() in arguments 
 multiplicationgreet(greet1,3);
 //high order function return 
 let odd = function(n){
    console.log((n%2)!=0);
 }

 let reqs = "odd";
 function oddorEven(reqs){
    if(reqs=="odd"){
        let odd1 = function(n){
            console.log((n%2)!=0);
         }
         console.log(odd1(3));
    }else if(reqs == "even"){
        let even = function(n){
            console.log((n%2)==0);
         }
         console.log(even(3));
         return even;
    }else{
        console.log("wrong request");
    }
 }
 console.log(odd(3));
  let req = "even";
 function oddEvenTest(req){
    if(req == "odd"){
        return function(n){
            console.log((n%2)!=0);
        }
    }else if(req == "even"){
        return function(n){
            console.log((n%2)==0);
        }

        }
        else{
            console.log("Wrong Request");
        }
    
 }
  let funct =  oddEvenTest("even");
  funct(3);
  //Methods 
  const calculator = {
    add:function(a,b){
        console.log(a+b);
    },
       sub :function(a,b){
      return a-b;
  },
    multiply :function(a,b){
    return a*b;
  },

  }
  console.log(calculator.add(2,3));
  console.log(calculator.sub(2,3));
  console.log(calculator.multiply(2,3));

  //Method SHortehand 
  const calc = {
    add(a,b){
        console.log(a+b);
    },
    sub(a,b){
        return a-b;
    },
    divide(a,b){
        return a/b;
    },
    multiply(a,b){
        console.log(a*b);
    }
  }
  console.log(calc.divide(10,5));
  //practice question array element largert then a number 
  let arr8 = [1,4,5,8,9,3,2];
  let num5 = 5;
  function getelement(){
    for(let i =0;i<arr8.length;i++){
        if(arr8[i]>num5){
            console.log(arr8[i]);
        }
      }
  }
 getelement();

 //extract unique characterfrom a string 
 let str3 = "abcdabcdefgggh";
 function uniquestr(){
    let ans = "";
    for(let i=0;i<str3.length;i++){
       if(ans.indexOf(str3[i])==-1){
        ans+=str3[i];
       }
    }
    console.log(ans);
   
 }
uniquestr();

//longest country name 
let country = ["Australia","Germany","United States of America"]
function longestcountry(){
    let longestName = country[0];
    for(let i =1;i<country.length;i++){
        
        if(country[i].length>longestName.length){
            longestName = country[i];
        }
    }
    console.log(longestName);
    
}
longestcountry();
//count he number of vowels in a String 
function countVowel(){
    let str4 = "abcegfeo";
    let count1 = 0;
    vowel = "";
    for(let i =0;i<str4.length;i++){
        if(
            str4.charAt(i)=="a"||
            str4.charAt(i)=="e"||
            str4.charAt(i)=="i"||
            str4.charAt(i)=="o"||
            str4.charAt(i)=="u"&&vowel.indexOf(str4[i]==-1)
    
            ){
         count1++;
          vowel+=str4[i];
            }
    }
    console.log(count1);
    console.log(vowel);
   
}
countVowel();
function countVowel() {
    let str4 = "abcegfeo";
    let count1 = 0;
    let vowel = "";

    for (let i = 0; i < str4.length; i++) {
        if (
            (str4.charAt(i) == "a" ||
            str4.charAt(i) == "e" ||
            str4.charAt(i) == "i" ||
            str4.charAt(i) == "o" ||
            str4.charAt(i) == "u") &&
            vowel.indexOf(str4[i]) === -1
        ) {
            count1++;
            vowel += str4[i];
        }
    }

    console.log("Number of vowels:", count1);
    console.log("Vowels:", vowel);

    // Print string without vowels
    let stringWithoutVowels = "";
    for (let i = 0; i < str4.length; i++) {
        if (
            str4.charAt(i) != "a" &&
            str4.charAt(i) != "e" &&
            str4.charAt(i) != "i" &&
            str4.charAt(i) != "o" &&
            str4.charAt(i) != "u"
        ) {
            stringWithoutVowels += str4.charAt(i);
        }
    }
    console.log("String without vowels:", stringWithoutVowels);
}

countVowel();



//generate a random number with a range 
function generaterandomnumber(start,end){
   console.log(Math.floor(Math.random()*100)+100);
}
generaterandomnumber(100,200);
//this keyword refer to object 
const student2 = {
    name:"Harsh",
    age :20,
    eng :90,
    phy:92,
    chem:92,
    math:80,
    music:99,
    getAvg(){
        console.log(this);
        let avg = ((this.eng+this.phy+this.chem+this.math+this.music)/5);
        console.log(`${this.name} get avg marks = ${avg}`);
    }
}
console.log(student2.getAvg());
//this keyword refer  to window object when we dont create object
function getAvg(){
    console.log(this);
}
getAvg();
// console.log("hello");
// console.log("hello");
// console.log(x);
// console.log("hello"); //after error this hello cant print 


//try test for error & catch use when error occured 
//we cant write only try statement we write both try&catch
console.log("hello");
console.log("hello");
try{
    console.log(x); //if we define x then it show no error it print x 
}catch{
    console.log("caught an error");
}
console.log("hello");
console.log("hello");
//Arrow Function is naeless function 
const sum1 = (a,b)=>{
    console.log(a+b);
};
console.log(sum1(2,3));
const pow = (a,b)=>{
    console.log(pow(2,3));
};
//when we write one argument it is optional to put parenthesis 
const cube = (n)=>{
    return a*a*a;
};
console.log(cube(3));
const sq = a=>{
    return a*a;
};
console.log(sq(4));
//if there is no argument but it is compulsary to put parenthesis 
const hello1 = ()=>{
    console.log(" Hi Harsh Sharma");
};
console.log(hello1());
//implict return in arrow function 
const mul1 = (a,b)=>a*b;
console.log(mul1(25,4));
const pow1 = (a,b)=> (a**b);
console.log(pow1(25,25)); 
//set timeout function mainly us efor api call
console.log("Hi");
// setTimeout(()=>{
//     console.log("Harsh Sharma")
// },5000);
console.log("Welcome to");
//set interval function execute time multiple times
// setInterval(()=>{
//     console.log("Om namah Shivay")
// },5000) 
//every set interval has indivisual  id 
let id = setInterval(()=>{
    console.log("Om namah Shivay")
},5000)
let id1 = setInterval(()=>{
    console.log("Om")
},7000)
console.log(id);
console.log(id1);
//for stop setinterval 
console.log(clearInterval(id));
console.log(clearInterval(id1));
//this with arrow function
// const student3 = {
//     name : "Harsh Sharma",
//     marks : 73,
//     prop : this, //global scope 
//     getName : function(){
//         return this.name;
//     },
//     getMarks :()=>{
//         console.log(this);  //parents scope 
//         return this.marks;
//     },
//     getInfo1 : function(){
//         setTimeout(()=>{//student
//             console.log(this);
//         },2000);
//     },
//     getInfo2 :function(){
//         setTimeout(function(){//window
//             console.log(this);
//         },2000);
//     } 

// };
// console.log(student3.getName());
// console.log(student3.prop);
// console.log(student3.name);
// console.log(student3.getInfo1());//student object
// console.log(student3.getInfo2());//window object
// console.log(student3.getMarks());
//for arrow function this is of parent's this 
//Practice question 
//   let id3  =  setInterval(()=>{
//         console.log("hello");
//     },2000)
//   setTimeout(()=>{
//     clearInterval(id3);
//   },10000);
const  arrAverage = (arry)=>{
    let total  = 0;
    for(number of arry){
        total+=number;
    }
    console.log(total);
    let avg1= total/arry.length;
    console.log(avg1);
};
let arry  = [1,2,3,4,5];
arrAverage(arry);
const arrEven = n=>{
    if(n%2==0){
        return "even";
    }else{
        return "not even";
    }
}
console.log(arrEven(7));
//shorthand
const arreven1 = num=>(num%2==0);
console.log(arreven1(4));
//ArrayMethod
//forEach 
let arr01 = [1,2,3,4,5];
let print = function(el){
    console.log(el);
}
arr01.forEach(print);
console.log("--------");
//or
arr01.forEach(function(el){
    console.log(el);
})
console.log("----");
//forEach in arrow function 
arr01.forEach((el)=>{
console.log(el);
})
//for objects 
let arr02 = [{
    name:"Harsh",
    marks:75,
},
{
    name:"Shubham",
    marks:90,

},{
    name:"Vipul",
    marks:85,
},];
arr02.forEach((el)=>{
    // console.log(el);
    // console.log(el.marks);
    console.log(el.name);
});
//Map & filter 
//map create of new array of same size as old array 
let num6 = [1,2,3,4];
//if we cant return anything then it print undefined 
let double = num6.map((el)=>{});
let double01 = num6.map((el)=>{
   return el*el; //or el*3
});
console.log(double);
console.log(double01);
let student01 = [
    {
        name:"Harsh",
        marks:75,
    },{
        name:"Shubham",
        marks:90,
    },{
        name:"Vipul",
        marks:85,
    },
]
let cgpa = student01.map((el)=>{
    return el.marks/10;
});
console.log(cgpa);
//filter
let arr03 = [1,2,3,4,5,6,40,53,80,68];
let even = arr03.filter((el)=>{
    return el%2==0;


}
)
console.log(even);
//Every & Some  //every is like logical and or some is logical or operator
 //every return true or false but it print true if all condition true if one condition false then it print false 
console.log([2,4,6].every((el)=>el%2==0));
console.log([2,4,,6,7].every((el)=>el%2==0));
console.log([2,4,6,3,5].some((el)=>el%2==0));
//Reduce method reduce the array 
let num02 = [1,2,3,4,5];
let finalValue = num02.reduce((res,el)=>{
    console.log(res);
    return res+el;
})
console.log(`finalValue is ${finalValue}`);
//Maximum in array 
let arr04 = [1,2,3,4,7,8,9];
let maxArray = arr04.reduce((max,el)=>{
    if(max>el){
        return max;
    }else{
        return el;
    }
    
})
console.log(maxArray);
//Practice Question 
console.log([10,20,20,40].every((el)=>el%10==0));
//Default parameter
function sum01(a,b=2){
    console.log(a+b);
}
sum01(2); //4
sum01(2,3); //5
function sub01(a =1,b){
    console.log(a*b);
}
sub01(2,3);  //6
sub01(3); //Nan

//spread  expand iterable into multiple value 
let arr06 = [1,2,3,4,5,6,7,8,9,1,2,34,45,0];
console.log(arr06);
console.log(...arr06);
console.log(Math.min(1,2,3,4,5,6,7,8,9,1,0,));
console.log(Math.min(...arr06));
let str01 = "Harsh Sharma";
console.log(...str01);
//Spread Array Literal have order also necessary 
let arr07 = [1,2,3,4,5,6];
let newArr = [...arr07];
console.log(newArr);
let chars =[..."Harsh SHarma "];
console.log(chars);
let odd1 = [1,3,5,7,9];
let even1 = [2,4,6,8];
let nums1 = [...odd1,...even1]; //...even,...odd now even firstly print bc order matter
console.log(nums1);
//spread object literals 
const data = {
    username : "Harsharma01",
    password :  1234,
}
const datacopy = {...data,id:123,country:"India"};
console.log(datacopy);
let arr08 = [1,2,3,4,8];
//convert arr into object literal
let obj1 = {...arr08};
console.log(obj1);
//convert string into object literal 
let chars01 = "Harsh";
let obj2 = {...chars01};
console.log(obj2);
//Rest  allow to take multiple number in arguments and bundle them in array 
//arguments is a collection 
function sum04(...args){
    for(let i =0;i<args.length;i++){
        console.log("you gave us : ", args[i]);
    }
}
console.log(sum04(1,2,3,4,5));
function min01(a,b,c,d){
    console.log(arguments);
}
console.log(min01(1,2,3,4,5));
function min02(){
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[1]);
   // console.log(argument.push(6)); //not use this function in arguments
}
console.log(min02(1,2,3,4,5))
//but in arguments we dont use push pop or array method 
function sum03(){ //we dont use this 
    return arguments.reduce((sum,el)=>sum+el);
}
//so we use rest ...args
//in rest all value collect and put in array
function sum04(...args){ //...args is rest now we use function and array method
      return args.reduce((sum,el)=>{ return sum+el});
}
console.log(sum04(1,2,3,4,5));
//min
function min01(...args){
    return args.reduce((min,el)=>{
        if(min<el){
            return min;
        }else{
            return el;
        }
    })
}
console.log(min01(1,2,3,4,5,-1));
//Destructuring
let names = [ "Shubham","Chirag","Vipul","Harsh","Amardeep","Pritam","Manjeet","Yogesh"]
let [winner,runnerUp,others,...others1] = names;
console.log(winner);
console.log(others); //it print only vipul
console.log(...others1);
//Destructuring Object 
const stu ={
    name : "Harsh Sharma",
    age:20,
    username :"Harsh@123",
    password : 1234,
    State : "Haryana",
    District:"Bhiwani",
}
//for destructuring object literal 
let {username,password :secret,District = "Charkhi Dadri",Country= "India"} = stu;
console.log(username);
console.log(secret);
console.log(District); //city exist in object literal then it is first preference 
console.log(Country);
 //Practice Question 
 //square and sum the array elements 
let Arr = [1,2,3,4];
const sq1 = Arr.map((num)=>{
   return  num*num;
});
let sumArr = sq1.reduce((add,curr)=>add+curr);
let avg1 = sumArr/Arr.length;
console.log(avg1);
let numbers = [1,2,3,4,5];
let newArr1 = numbers.map((el)=>el+5);
console.log(newArr1);
//convert string into uppercase 
let string = ["harsh","subham","vipul","chirag","amardeep"];
console.log(string.map((string)=>string.toUpperCase()));
//arr and 
const doubleAndReturnArgs = (arr,...args)=>[
    ...arr,...args.map((el)=>el*2),
];
console.log(doubleAndReturnArgs([1,2,3],4,5,6));//1,2,3,8,10,12
const mergeObject = (obj1,obj2)=>(
    {
        ...obj1,...obj2
    }
);
console.log(mergeObject({a:1,b:2,c:3},{d:3,e:5,f:6}));
//docoment object model
//document store allchanges in html&css  && all html element indivdual make object
//in dom bdy and all html tag in form of tress and they consider as object 

console.dir(document);
// console.dir(document.all);
// console.dir(document.all[9]);
// console.dir(document.all[9].innerText);
// document.all[9].innerText = "Peter Parker";
// console.dir(document.all[9].innerText);
//Selected ELement by id 
console.dir(document.getElementById("mainImg"));
console.log(document.getElementById("mainImg"));
//it act like a object 
let imgObj = document.getElementById("mainImg");
//console.log(imgObj.tagName);
//or 
//console.dir(document.getElementById("mainImg").src);
//imgObj.src = "assets/creation_1.png" ;
console.log(document.getElementById("description"));
//in form of object
console.dir(document.getElementById("description"));
//if we put wrong then it return null object 
//selecting element by class it return the elemnt as an Html collection or empty Collecyion if not found 
console.dir(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg")[1]);
console.log(document.getElementsByClassName("oldImg")[1]);
let smallImages = document.getElementsByClassName("oldImg");
for(let i =0;i<smallImages.length;i++){
    smallImages[i].src = "assets/spiderman_img.png";
    console.log(smallImages[i].src);
}
console.dir(document.getElementsByClassName("abhd"));
//select element by tag 
console.dir(document.getElementsByTagName("p"));
//document.getElementsByTagName("p")[1].innerText = "abc";
//if ther is no tag then console html collection empty 
//Query Selector use for single element it match all object but give ist object which match 
//query selector is like css selector 
//console.dir(document.querySelector("p").innerText);
console.dir(document.querySelectorAll("p"));
console.dir(document.querySelector("div a"));
//querySelctor give single value but querySelectorAll give all collection
console.dir(document.querySelectorAll("div a"));
//setting content
let para = document.querySelector("p");
//console.dir(para.innerText);//show text what text on screen
// console.dir(para.innerHTML);//give full html markup
// console.log(para.textContent);//give actusal content even if we disable anchor tag or any tag but it showen on textContent
//Manipulating attribute
let img = document.querySelector('img');
console.log(img);
// //console.dir(img.getAttribute('id'));
// img.setAttribute('id','spidermanImg');
// img.setAttribute('src',"assets/creation_3.jpeg");
// img.getAttribute('class');//there is no class of this 'class' name
// img.setAttribute('class','images');//so we set new class
// console.dir(img.getAttribute('class'));
// //manipulating style attribute
// let heading = document.querySelector('h1');
// heading.style.color = "red";
// heading.style.backgroundColor = "green";
// console.dir(heading.style);
// let link = document.querySelectorAll('.box a');
// // for(let i =0;i<link.length;i++){
// // link[i].style.color = 'green';
// // }
// for(links of link){
//     links.style.color = 'green';
// }
// //we access only inline style property we cant access css style property so we cant this style attribute we use css styling
// let box = document.querySelector('.box');
// console.dir(box.style);
// //we set class by setattribute but we dont use this bcause at one time we enhance only one class property but in classList we add multiple class
// //toggle use if class exist then remove class if not exist then add class
// let heading1 = document.querySelector('h1');
// heading1.classList.add('red');
// heading1.classList.add('underline');
// heading1.classList.remove('underline');
// console.log(heading1.classList.contains('red'));
// console.log(heading1.classList.contains('green'));
// console.log(heading1.classList.contains('underline'));
// console.log(heading1.classList.toggle('red'));
// console.log(heading1.classList.toggle('underline'));
// console.log(heading1.classList.toggle('red'));
// let box1 = document.querySelector('.box');
// box1.classList.add('yellowbg');
// //Navigation on page 
// let h4 = document.querySelector('h4');
// console.dir(h4.parentElement);
// console.log(h4.parentElement);
// console.dir(h4.children);//there is no children so it print empty html collection 
// let box2 = document.querySelector('.box');
// console.log(box2.children);
// let ul = document.querySelector('ul');
// console.log(ul.parentElement);
// console.log(ul.childElementCount);
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.dir(ul.children[2]);
// console.log(ul.children[2].previousElementSibling);
// console.dir(ul.children[2].nextELementSibling);
// let img1 = document.querySelector('img');
// console.log(img1.previousElementSibling);
// img1.previousElementSibling.style.color = 'red';
// //adding element 
// let newP = document.createElement('p');
// console.dir(newP);
// newP.innerText = "Hi, i am Harsh .";
// console.dir(newP);//but not display on screen
// // for display on screen & for insert we use append function 
// let body = document.querySelector('body');
// body.appendChild(newP);
// //for adding text in body we use append
// let box3 =document.querySelector('.box');
// box3.appendChild(newP);
// newP.append("i am 20years old ")
// //copy nahi bnti new p ab box k andar hai body k  niche nahi hai
// let btn = document.createElement('button');
// btn.innerText = "Click me";
// box3.appendChild(btn);//append add in last
// //prepend child add in first 
// box3.prepend(newP);
// //insertAdjacent(Where,element);
// let btn1 = document.createElement('button');
// btn1.innerText = "beforebegin";
// let btn2 = document.createElement('button');
// btn2.innerText = "afterbegin";
// let btn3= document.createElement('button');
// btn3.innerText = "beforeend";
// let btn4 = document.createElement('button');
// btn4.innerText = "afterend";
// let p1 = document.querySelector('p');
// p1.insertAdjacentElement('beforebegin',btn1);
// p1.insertAdjacentElement('afterbegin',btn2);
// p1.insertAdjacentElement('beforeend',btn3);
// p1.insertAdjacentElement('afterend',btn4);
// let body1 = document.querySelector('body');
// // body.removeChild(btn1);
// // btn2.remove();
// // p1.remove();

//Dom Events 
let btn5 = document.querySelectorAll('button');
// btn5.onclick = function(){
//     console.dir("button was clicked");
//   //  alert("button was clicked");
// }
function sayHello(){
    console.dir("button was clicked");
}
btn5.onclick = sayHello;
function sayHello1(){
   alert(" button  was clicked")
}
function sayName(){
    console.dir("Hi Harsh");
}
//for(btns of btn5){
    // btns.onclick = sayHello1;
       //btns.onclick = sayHello1;
    // btns.onmouseenter = function(){
    //  console.dir('arrow is showing  on buttons');

    // }  /// bt this we cant add multiple function to button so we used eventlistner for multifunction 
    //  btns.addEventListener('click',sayName);
    //  btns.addEventListener('click',sayHello1);
//      btns.addEventListener('dblclick',function(){
//        console.dir("buttton was double click")
//      })
// }
// let p3 = document.querySelector('p');
// p3.addEventListener('click',function(){
//     console.log('para was clicked');
// })
// let box = document.querySelector('.box');
// box.addEventListener('mouseenter',function(){
//   console.log('mouse inside box');
// })
//this in Event Listner 
let  h1 = document.querySelector('h1');  
let  h3 = document.querySelector('h3');
let  p5 = document.querySelectorAll('p');
let  btn7 = document.querySelector('button');
// h1.addEventListener('click',function(){
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "pink";
// });
// h3.addEventListener('click',function(){
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "pink";
// });
// p5.addEventListener('click',function(){
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "yellow";
// });
// btn7.addEventListener('click',function(){
//     console.dir(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });
//instead of this we can write btlow function function using this 
function changecolor(){
    console.log(this);
    console.log(this.innerText);
    this.style.backgroundColor = " Pink";
}
h1.addEventListener('click',changecolor);
h3.addEventListener('click',changecolor);
//p5.addEventListener('click',changecolor);
// btn7.addEventListener('click',changecolor);
//Keyboard Events 

let btn9 = document.querySelector('button');
btn9.addEventListener('click',function(event){
 console.log(event); //pointer event show
 console.log("button was click")
});
btn9.addEventListener('dblclick',function(event){
 console.log(event); //mouse event show
 console.log("button was dblclick")
});
let inp = document.querySelector('input');
// inp.addEventListener("keydown",function(){
//     console.log("key is pressing & down");// it count when we pressbackspace or enter it count how many times we pressed the key
// });
// inp.addEventListener("keyup",function(){
//     console.log("key was pressed and up");// it count when we pressbackspace or enter it count how many times we pressed the key
// });
//keyboard event has two property code and key
// inp.addEventListener("keydown",function(event){
//     console.log("code is ",event.code); //it give the name of key press
//     console.log("key is" ,event.key);  //it show what user see on screen
//     console.log("key was pressed");// it count when we pressbackspace or enter it count how many times we pressed the key
// })
//activity
inp.addEventListener('keydown',function(event){
    //Arrowup,ArrowDown,ArrowRight,ArrowLeft
    if(event.code=="ArrowUp"){
        console.log("character move in forward direction");

    }else if(event.code=="ArrowDown"){
        console.log("character move in backward direction");
        
    }else if(event.code=="ArrowRight"){
        console.log("character move in right direction");
        
    }else if(event.code=="ArrowLeft"){
        console.log("character move in left direction");
        
    }else{
        console.log("Wrong key press ");
    }

});
// let form = document.querySelector('form');
// form.addEventListener('submit',function(){
//     event.preventDefault();
//     alert("form is submit");//when we submit form we go to action website after submit to prevent this we use event.preventDefault()
// });
//Extracting form data
//when we want value of text so here we cant write inp.innerText we write here inp.value
//  let form1 = document.querySelector('form');
//  form1.addEventListener('submit',function(){
//    event.preventDefault();
//     let user = document.querySelector('#user');
//     console.log(user.value);
//     let pass = document.querySelector('#pass');
//     console.dir(pass.value);
//     alert(`hi Harsh your username is ${user.value} & password is ${pass.value}`);
//  });
//  let form2 = document.querySelector('form');
//  form2.addEventListener('submit',function(){
//    event.preventDefault();
//    console.log(form2);
//    console.dir(form2);
//     let user = form2.elements[0];
//     console.log(user.value);
//    let pass = this.elements[1];
//     console.dir(pass.value);
//     alert(`hi Harsh your username is ${user.value} & password is ${pass.value}`);
//  });
//more event like change event and input event change event track only intial and final Valuebut input event show all change with every text 
// let form3 = document.querySelector('form');
// form3.addEventListener('submit',function(){
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     user.addEventListener('change',function(){
//         console.log("change Event");
//         console.log("final Valus is " , this.value);
//     });
//     //input event
//     user.addEventListener("input",function(){
//         console.log("input Event");
//         console.log("final Valus is " , this.value);
//     })
// });

//Activity
let  parag = document.querySelector('#para');
let input = document.querySelector('#text');
input.addEventListener("input",function(){
    console.log(input.value);
    parag.innerText = input.value;
});

//Js call Stack 
function hello(){//3
    console.log("inside hello function");
    console.log("hello");
}
function demo(){
    console.log("calling hello function");
    hello();//2nd call
}
console.log("calling demo function");
demo();//1
console.log("done ,Bye");
//visualizing call stack problem 
function one(){
    return 1;
}
function two(){
    return one()+one();
           // 3rd call 4thcall
}
function three(){
    let ans = two()+one();
              //2nd call   5th call
    console.log(ans);
}
three();//1st call
//we track call satck by breakpoints ad it also used for debugging finding error
//js is a single threaded language means js ek time par ek hi kAM KR SKTI HAI 
//callback is afunction which pass in other functions by an arguments
//synchronus natue means ek k bad ek chiz print ho rhi hai
let a1 = 10;
console.log(a1);
let b1 = 20;
console.log(b1);
//when js ek time par ek kam karti hai toh settimeout function ek sath kaise print ho rhe hai ?
//because browser store setTimeout function while js cant wait but browser can wait so js send function to browser
//js act as synchronus in nature because for eg js print settimeout function after 2sec ye ek k ba ek chiz print nahi kr rahi 
// setTimeout(()=>{
//     console.log("Harsh Sharma");
// },2000);
// setTimeout(()=>{
//     console.log("Aarti Sharma");
// },2000);
// console.log('hello....');
//callbaCk hell concept 
let h = document.querySelector('h1');
// //now we see only green color we cant see changing color after 1 sec
// setTimeout(
//     ()=>{
//         h1.style.color = "saffron";
//     },1000
// );
// setTimeout(
//     ()=>{
//         h1.style.color = "red";
//     },2000
// );
// setTimeout(
//     ()=>{
//         h1.style.color = "green";
//     },3000
// );
// function changeColor(color,delay){
//     setTimeout(()=>{
//       h1.style.color = color;
//     },delay);
// };
// changeColor("red",1000);
// changeColor("green",2000);
// changeColor("purple",3000);
//now we see only purple color this is not showing dependency 
//for dependency we use call back
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//       h1.style.color = color;
//       if(nextColorChange)nextColorChange();
//     },delay);
// };
// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("green",1000,()=>{
//                 changeColor("blue",1000,()=>{
//                     changeColor("indigo",1000);
//                 });
//             });
//         });
//     });
// });
//this is callback nesting which is called callback hell
//for preventing from callback hell we use promise ,async and await
// function saveToDb(data){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         console.log("Data was saved and internet speed is : ",internetSpeed,"data saved is : ",data);
//     }else{
//         console.log("Weak Connection because internet speed is : ",internetSpeed);
//     }
// }
// saveToDb("Harsh Sharma");
// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//        success();
//     }else{
//         failure();
//     }
// };
saveToDb("Harsh Sharma",()=>{
    console.log(" success : data was save and data is :");
    saveToDb("Aarti Tanwar",()=>{
        console.log("data2 was save and data is :");
        saveToDb("Jyoti Yadav",()=>{
            console.log("data3 was save and data is :");
            
        },()=>{
            console.log("failure3 : Weak Connection");
        });
    },()=>{
        console.log("failure2:weak connection");
    });
},
()=>{
    console.log("failure : Weak Connection");
});
//Promise is object 
function saveToDb(data){
    return new Promise((resolve,reject)=>{
let internetSpeed = Math.floor(Math.random()*10)+1;
if(internetSpeed>4){
    resolve("Success : data was saved");  //this is known as result
}else{
    reject(" Failure : weak connection"); //this is known as error
}
    });
};
//console.log(saveToDb("Harsh SHarma"));
//Promise has three condition fulfilled ,pending ,rejected
//then and catch method
// let request = saveToDb("Harsh SHarma");
// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("Promise was rejected");
//     console.log(request);
// })
//or
// saveToDb("Harsh SHarma")
// .then(()=>{
//     console.log("Promise was resolved");
    
// })
// .catch(()=>{
//     console.log("Promise was rejected");
    
// });
//this is looklike nesting
// saveToDb("Harsh Sharma")
// .then(()=>{
//     console.log("data 1 saved");
//     saveToDb("Aarti Tanwar").then(()=>{
//         console.log("data2 saved");
//     });
// })
// .catch(()=>{
//     console.log("Promise was reject");
// });
//Promise chaining improved version of promise
// saveToDb("Harsh").then(()=>{
//     console.log("data1 saved");
//     return saveToDb("Aarti");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return saveToDb("Bharti");
// }).then(()=>{
//     console.log("data 3 saved");
// }).catch(()=>{
//     console.log("Promise was rejected");
// });
//Result and error in Promise 
// saveToDb("Harsh").then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise is : ",result);
//     return saveToDb("Aarti");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise is : ",result);
//     return saveToDb("Bharti");
// }).then((result)=>{
//     console.log("data 3 saved");
//     console.log("result of promise is : ",result);
// }).catch((error)=>{
//     console.log("Promise was rejected");
//     console.log("error of promise is : ",error);
// });
// let h2 = document.querySelector('h2');
// function changeColor1(color,delay){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//         h2.style.color = color;
//         resolve("color is change");
//      },delay);
//     });
// };
// changeColor1("red",1000).then(()=>{
//     console.log("red color was complete");
//     return changeColor1("orange",1000);
// }).then(()=>{
//     console.log("orange color was complete");
//     return changeColor1("green",1000);
// }).then(()=>{
//     console.log("green color was complete");
//     return changeColor1("blue",1000);
// }).then(()=>{
//     console.log("blue color was complete");
    
// });
//async function return promise bydefault
// async function  greet3(){
//     //abc.abc();
//    // throw "Harsh Sharma";
//    return "Harsh Sharma ";
// }
// greet3().then((result)=>{
//  console.log(result);
//  console.log("Promise was fulfilled");
// }).catch((err)=>{
//     console.log("Error found : ", err);
// });
// let demo3 = async()=>{
//       return "Harsh";
// }
// console.log(demo3());
//use of await keyword when we want to print anything one by one ya with some time break
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         },1000);
      
//     });
// };
// async function dem(){
//    await getNum();//jb tk await call complete nhi hogi tb tak baki call nahi jayegi
//    await getNum();
//    await getNum();
//    await getNum();
//    await getNum();
//     getNum();
// }
// console.log(dem());
let ah = document.querySelector("h4");
// function colorchange2(color,delay){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//       ah.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("color changed");
//       },delay);
//     });
// }
// async function change(){
//     await colorchange2("red",1000);
//     await colorchange2("green",1000);
//     await colorchange2("orange",1000);
//     await  colorchange2("pink",1000);
//     await colorchange2("red",1000);
// }
// console.log(change());
//Handling rejection 
// function colorchange2(color,delay){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         let num = Math.floor(Math.random()*5)+1;
//         if(num>3){
//             reject("Promise reject");
//         }
//       ah.style.color = color;
//       console.log(`color changed to ${color}`);
//       resolve("color changed");
//       },delay);
//     });
// }
// // async function change(){
// //     await colorchange2("red",1000);
// //     await colorchange2("green",1000);
// //     await colorchange2("orange",1000);
// //     await  colorchange2("pink",1000);
// //     await colorchange2("red",1000);
// //     let a= 5;
// //     console.log(a);
// //     console.log("new number : ",a+3);
// // }
// //when promise reject we cant print a and new number to resolve this we use try and catch 
// console.log(change());
// async function change(){
//     try{
//         await colorchange2("red",1000);
//         await colorchange2("green",1000);
//         await colorchange2("orange",1000);
//         await  colorchange2("pink",1000);
//         await colorchange2("red",1000);
//     }
//     catch(err){
//         let a= 5;
//         console.log(a);
//         console.log("new number : ",a+3);
//         console.log(err);
//         console.log("error caught");
//     }
    
//}
//api user send request with help of api  to server then send response to user
//Api application programme interface give data in json format not in html & css format 
//api is baccally url and we use webapi
//json (javascript object Notation)data read by computer not read by humans 
//to chexk jsn is correct we use jsaon validators
//xml is similar to html
//json ha no undefined while js ha s un defined and json data in form of string 
//json data we cant access direct we access js object so we use JSON.parse(data) which convert string data into js object 
let jsonapi = '{"type":"general","setup":"What kind of bagel can fly?","punchline":"A plain bagel.","id":256}';
console.log(jsonapi);
let validRes = JSON.parse(jsonapi);
console.log(validRes.id);
//JSON.stringify(data) convert js data into json
let st = {
    name: "Harsh",
    marks : 95,
};
console.log(JSON.stringify(st));
//Testing api request postman old and hoppscoth new hoppscoth.io
//https verb = get,post,delete
//status code  400-bad request 404 - page not found 200 ok ,500-internal server code 
//for pass additional information we used query String inquery string we use key and value eg.Seatch?q = mango here q is key and mango = value in query string ke &value not match then api ignre querystrings
//Https header use for send  additional request and response in api   & on console page on network option we see request
//free api https://icanhazdadjoke.com/  on hopsscoth get link then go to header option then click on headers  then write Accept  and format name text/html and text/plain application/json
//with help of header we send meta data meta data means data about data  means data ki additional information which does not link as such for response only additional information 
//First APi  request using Fetch
let url = "https://catfact.ninja/fact";
// fetch(url)//it return promise
// .then((res)=>{
//     console.log(res);
//     //for readable format
//     //console.log(res.json());//it also return promise 
//     res.json(data).then((data)=>{
//         console.log(data);
//     });

// }).catch((err)=>{
//     console.log("Error : ",err);
// })
//or
// fetch(url).then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// fetch(url).then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((data1)=>{
//     console.log(data1.fact);
//     return fetch(url);
// }).then((res)=>{
//     return res.json();
// }).then((data2)=>{
//     console.log(data2.fact);
// }).catch((err)=>{
//     console.log(err);
// });
//fetch using async and await function 
// async function getFact(){
//     try{
//         let res1 = await fetch(url);
//     let fact1 = await res1.json();
//     console.log("res1 fact is == " ,fact1.fact);
//     let res2 = await fetch(url);
//     let fact2 = await res2.json();
//     console.log("res2 fact is == ",fact2.fact);
// }catch(err){
//     console.log(err);
// }
// console.log("bye");
// }
// console.log(getFact());

//Axios is library make to http request
//axios have both get and post request
//fetch has readable format but cant access exact json data we parse this data
let btn = document.querySelector('button');

async function getFact(){
    try{
    let res1 = await axios.get(url);
   console.log(res1.data.fact);

}catch(err){
    console.log(err);
}
console.log("bye");
};
console.log(getFact());
//Sending header with api request 
// const url3 =   "https://icanhazdadjoke.com/";
// async function getJokes(){
//      //convert data into another data we use header here this url in html format now we change into json data
    
//     try{
//         const  headers = {headers : { Accept : "application/json"}};
//         let res4 = await axios.get(url3,headers);
//         console.log("in json format : ", res4.data);
//     }catch(err){
//         console.log(err);
//     }
   
// }
// console.log(getJokes());


