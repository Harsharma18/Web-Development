//object prototype 
 // Every object in javascript has built in property callled prototype eg uppercase ,lowercase,
 // for print function which is in prototype we use arr._proto_(reference) or  Array.prototype(actual) or String.prototype
let arr1 = [1,2,5];
let arr2 = [1,2,3]
 console.log(arr1.__proto__);//reference
 console.log(Array.prototype)//actual
 
 arr1.sayHello = ()=>{
    console.log("Hello");
 }
 console.log(arr1); ///sayHellofunction is create functio other than prototype function 
 console.log(arr2);//sayhello function not exist
 arr2.sayHello = ()=>{
    console.log("Hello");
 }
 console.log(arr2);

  arr1.__proto__.push = (n)=>console.log("pushing number is :", n);//with this function it does not puh n in arr1 it only print line pushing number:4 it cant add 4 in arr1

 console.log(arr1.push(4));
 console.log(arr1);
 console.log(arr1.sayHello==arr2.sayHello);//false//beacause it create different memory and copy
 console.log("abc".toUpperCase=="hsd".toUpperCase); //true because it cant create copy protype n memory bacha li 
 //Factory function that create object
 function PersonMaker(name,age){
    const Person = {
        name:name,
        age:age,
        talk() {
console.log(`MyName is ${name}`);
        }
    }
    return Person;
 };
 let p1 = PersonMaker("Harsh",20);//copy
 let p2 = PersonMaker("Aarti",21);//copy
 console.log(p1);
 console.log(p2);
 //disadvantage of factory function is every object have its own copy for eg.
 console.log(p1.talk==p2.talk);//return false while these function are same 
//constructon does not return anything and start with capital letter 
function Person(name,age){
    this.name=name;
    this.age = age;
    console.log(this);//when we dont initialse p3 and p4 then it print window object
}
Person.prototype.talk = function(){
    console.log((`hi My name is %{this.name}`));

}
let p3 = new Person("Harsh",20);
let p4 = new Person("Bharti",20);
console.log(p1);
console.log(p3.talk===p4.talk);  //true print because now they have same copy not create individual copy 
//Classes are template for creating object and start from capital letter and we define function inside class while in new operator we create function outside 
class Personc{
    constructor(name,age){
        this.name= name;
        this.age = age;
    }
    talk(){
        console.log("Hello");
    }
}
let p5 = new Personc("Harsh",21);
console.log(p5);

//inheritance that allow us to create a new class onn basic of already existing class
class Info{
    constructor(name,age){
        console.log("Info constructor was called")
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log("Hi");
    }
}
class Student extends Info{
    constructor(name,age,marks){
        console.log("student constructor called");
        super(name,age); //info constructor called
        this.marks = marks;
    }
}
    class Teacher extends Info{
        constructor(name,age,sub){
            console.log("student constructor called");
            super(name,age); //info constructor called
            this.sub = sub;
        }
        talk(){
            console.log("stu1 dont talk");
        }
}
let stu1 = new Student("Harsh",20,95);
console.log(stu1);
stu1.talk();
let t1 = new Teacher("Simran",30,"chem");
console.log(t1);
console.log(t1.sub);
console.log(t1.talk());//now here override is used when same function in baseor parentclas and derived or childclass then function use child class rathen than parent class and this is called oveeride