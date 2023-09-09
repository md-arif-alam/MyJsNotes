// ############################ JSON ###################################3

// let product1={
//    name : 'Shirts',
//    price : 700,
//    fun(){
//       let f = 10;
//       console.log(f);
//    }

// };
// console.log(typeof JSON.stringify(product1));
// console.log(typeof JSON.parse(JSON.stringify(product1)));
// const {name,price} = product1;
// console.log(name);
// console.log(product1.fun.f=90);
// // console.log(b);
// console.log(typeof product1);
// console.log('Shirts'.length);
// console.log(3.0.toString());
// console.log(null.toString());//error
// console.log(undefined.toString());//error


// const product2 = product1;
// product2.name='hello world';
// // console.log(product2);
// // console.log(product1);
// console.log(product1===product2);
// let product3={
//     name : 'shirts',
//     price : 700,
//     fun(){
//        let f = 10;
//        console.log(f);
//     }
// };
// console.log(product1===product3);
 







// ############################ Nested Function...#######################################



// let sum = (a,b) => a+b; 
// let sub = (a,b) => a-b;
// let div = (a,b) => Math.floor(a/b);

// function calculator(task,a,b){
//    let res = task(a,b);
//    console.log(res);
// }
// calculator(sum,10,20);


// here 'a' is not present in inner function local scope so JS engine search variable in outer function or global scope this is called 'lexical scope'

// function outer(){
//    console.log('outer function');
//    let a = 90;
//       function inner(){
//          console.log('inner function');
//          console.log(a);
//       }
//       return inner;
// }

//  outer();               // only access to outer function...
// let res = outer();  // 1st way to call inner function... 
//     res();
// outer()();      // 2nd way to call inner funntion...




// Function Hoisting...Function doesn't belong to TEMPORAL DEAD ZONE...if function keyword is used 

// greet();
// function greet(){
//    console.log('heloo');
// }




// Function can't be hoisted if its reference is saved in a variable or function when passed to a variable as expression b'coz it doesn't belongs to TEMPORAL DEAD ZONE...

// greet();                  //error -> greet is not defined
// let fun = function greet(){
//    console.log('heloo');
// }



// let sum = (a,b)=> a+b;
// let div = (a,b)=> a/b;
// let mul = (a,b)=> a*b;
// let min = (a,b)=> a-b;

// function calculator(operand,a,b){
//  let result = operand(a,b);
//  alert(`${result}`);
// }

// while(true){
//    let user = prompt('Enter Y to start And X to Exit');
//    if(user === 'X'){
//       break;
      
//    }
//    else if(user ==='Y'){
//       let input1 = prompt('enter input 1');
//       // console.log(input1);
//       let input2 = prompt('enter input2');
//       // console.log(input2);
//       let operand =prompt('enter operation');
//       // console.log(operand);
//       if(operand==='+'){
//          operand = 'sum';
//       }
//       else if(operand==='-'){
//          operand = 'min';
//       }
//       else if(operand==='/'){
//          operand = 'div';
//       }
//       else if(operand==='*'){
//          operand = 'mul';
//       }
      
      
  
//    }
   
//    calculator(operand,input1,input2);
// }


//###########################shallow copy of Object..#################################

// let obj1 = {
   
//     name:"arif",
//     age : 21,
// };

// let obj2=obj1;
// obj1.age=23;
// obj2.name = "alam";
// console.log(obj1); //if original object change it reflect to change in copy object
// console.log(obj2);


//Deep Copy Of  Object

// ******* case - I ********

// let obj1 = {
//    name:"arif",
//    age:21,
// };

// let obj2 = {};

// for(let key in obj1){
//    obj2[key] = obj1[key];
// }

// console.log(obj1);
// console.log(obj2);
// obj1.age = 24;
// obj2.name = "alam";
// console.log(obj1); //if original change the value wil not get affect in copy object
// console.log(obj2);




// ***** case - II *******

// let obj1 = {
//    name:"arif",
//    age:21,
//    address:{
//       city:"Noida"
//    }
// }

// let obj2 = {};

// for(let key in obj1){
//    obj2[key]=obj1[key];
// }
// // console.log(obj1);
// // console.log(obj2);

// // obj1.name = "alam";
// // console.log(obj1);
// // console.log(obj2);

// obj1.address.city="delhi";
// console.log(obj1); //here the reference of address object is copy to obj2 so any change in original object it will refelect only and all other key-value will have no effect on copy object.
// console.log(obj2); 






// *************  Using JSON property  *************


// let obj1 = {
//    name:"arif",
//    age:21,
//    address:{
//              city:"Noida"
//    }
// };

// let obj2 = {};

//  let string_obj1 = JSON.stringify(obj1); //changing object (obj1) to string 
//  console.log(string_obj1);

//  obj2 = (JSON.parse(string_obj1)); //converting stringify object(obj1) string  to object form 
//  console.log(obj2);

//  obj2.address.city = "delhi";
//  console.log(obj1);  //city: noida
//  console.log(obj2);  // city: delhi  
 
//  //here using JSON we can do Deep copy of original object where chnaging in copy will not affect the original object....
 
// so we can achieve deep copy by two ways Ist is using "for-in-loop" & 2nd is using "JSON" ....





// ************ Constructor Function ********(another way of creating object)

// function Employee (name,age,gender,salary,relation_status,cityName){ //this is constructer funtion used to create object...
//    this.name = name;
//    this.age = age;
//    this.gender = gender;
//    this.salary = salary;
//    this.relation_status = relation_status;
//    Object.assign(this,cityName);  // it used to store key-value pair...
// }

// let e1 = new Employee("arif",21,"male",100000,"Mingle"); // here "new" keyword create a memory block of object name Employee and its reference is store in variable "e1"....
// console.log(e1);

// let e2 = new Employee("arifalam",21,"male",160000,"Mingle",{city:"noida"}); // here we pass object as argument value which will store the key-value in construtor function...
// console.log(e2);





// *****************Object Methods *************************

// function Employee (name,age,gender,salary,relation_status,cityName){
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//       this.salary = salary;
//       this.relation_status = relation_status;
//       Object.assign(this,cityName);  
//    }

//    let e3 = new Employee("arif",21,"male",100000,"Mingle");
//    console.log(Object.keys(e3)); // Object.keys() will return the array of all the keys only...

//    console.log(Object.values(e3)); // Object.values() will return the array of all the values only...

//    console.log(Object.entries(e3)); // Object.entries() will return the individual array of each key-value pair...

//    let e4 = new Employee("zain",21,"male",130000,"Mingle",{city:"noida"});
//    console.log(Object.assign(e4,e3));  // object.assign() will assing that key-valaue pair from target object(e4) to object(e3) which is not present in object(e3)... here city:noida key-value pair is assing in object(e3)...



// object destructing
// let obj = {name:"arif", age: 21};

// let {name,age} = obj;
// console.log(name);
// console.log(age);
// console.log(rollNo);


//Array destructing 

// let arr = [20,30,40,50,70];
// let [a,b,c,r,i,m] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(i);
// console.log(m);


// Function Destructing using object
// let obj ={a:9,b:8}
// function details({a,b}){
//    console.log("Your in a function");
//    console.log(a+b);
// }

// details(obj);





// Function Destructing Using Array

// let arr = [2,5,7,8,9];

// function details([,,a,b]){
//    console.log("You'r in a function");
//    console.log(a+b);
// }

// details(arr);





// Rest Parameter  ==> if values are passed through it,it will accept the values nad store in a array.

// function sum(a,b,...r){   // ...r is called rest parameter where we pass the value and it will  store it in a dynamic array
//    console.log(a);
//    console.log(b);
//    console.log(r);
// }
// sum(20,30,40,60,77,80);





//Spread Operator ==> If values are not passed through it and it extrsct the values and int the form of only value not in array form..

// function sum(...r){
//    console.log(r);  //return array
//    console.log(...r); // it will return only value of the array
// }

// sum(40,50,30,66,77);


// let obj = {
//    name :"arif",
//    age:21,
//    address:{city:"Delhi"},
// };

// let obj2 = {...obj};
// obj2.address.city="Noida";
// obj2.name="alam";
// console.log(obj2);
// console.log(obj);


// Prototype Inheritance ..."Prototype" is External and "[[prototype]]" is internal prototype of "string", "Array" and "Function" 

// let str ="";
// console.log(str.__proto__); // it point to the String Prototype
// console.log(str.__proto__.__proto__); // it point to the Object Prototype
// console.log(str.__proto__.__proto__.__proto__); // it point to the Null value

// let arr =[];
// console.log(arr.__proto__); //it point to the Array Prototype
// console.log(arr.__proto__.__proto__);// it point to the Object Prototype
// console.log(arr.__proto__.__proto__.__proto__);// it point to the Null value

// function fun(){};
// console.log(fun.__proto__);//it point to the Function Prototype
// console.log(fun.__proto__.__proto__);// it point to the Object Prototype
// console.log(fun.__proto__.__proto__.__proto__);// it point to the Null value




//  let arr = [3,4,6,7,9];
//  console.log(typeof `${arr}`); //string 
//  console.log(typeof arr); // object
//  let str = "arif";        
//  console.log(typeof `${str}`);  //string
//  console.log(typeof str); //string



// fun();  //hoisting of function 
// {
//    a=10;// if a variable is not declare with any keyword then it behave as Global Variable
//    var b =20;
//    let c =30;
//    const d=40;
// }
// function fun(){
//    a=100;  // if a variable is not declare with any keyword then it behave as Global Variable
//    var b =20;
//    let c =30;
//    const d=40;
//    console.log(a);//100
//    console.log(b);//20
//    console.log(c);//30
//    console.log(d);//40
// }

// console.log(a);//10
// console.log(b);//20
// console.log(c);//error
// console.log(d);//error

// let arr1 = [3,4,6,7,8];
// console.log(arr1);

// let arr2 = new Array(2,4,6,8,9);
// console.log(arr2);

// let obj = {name:"arif", age:21}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// let obj1 = new Object({name:"arif",age:21});
// console.log(obj1);

// let obj3 = {
//     name:"arif",
//     speak : function (){
//       console.log("heooo");
//     }

// }
// console.log(obj3["speak"]());

// let obj4 = {
//   name:"arif", age:21,
//   speak:function (){
//    console.log(`my name is ${this.name} and my age is ${this.age}`);
//   }

// }
// console.log(obj4["speak"]());

// Methods in Array.....

// let arr = [30,40,50,60];
// console.log( arr.push(10)); // push() return the length of the updated array

// let arr1 = [30,40,50,60];
// console.log(arr1.pop()); // pop() return the deleted element.

// let arr = [30,40,50,60];
// arr.unshift(10); // unshift() return the length of updated array..
// console.log(arr);

// let arr1 = [30,40,50,60];
// arr1.shift(); // shift() return the deleted element
// console.log(arr1);

// let arr = [30,40,50,60];
// console.log(arr.splice(1,3,90)); // splice(startingIndexNo,NoOfElementDeleted,Inserted elements) return the array of deleted element..
// console.log(arr);

// let arr1 = [30,40,50,60];
// let copy_arr1 = arr1.slice(0,4); // slice(startIndex,lastIndex) it will return elements of copy array 
// console.log(copy_arr1);

// let arr1 = [30,40,50,60];
// console.log(arr1.indexOf(50,0)); //if element found it return index of element and if not found it will return -1

// let arr1 = [30,40,50,60];
// console.log(arr1.includes(50,1));// if element found it return true and not found return false...

// let arr1 = [30,40,50,60];
// console.log(arr1.reverse());
// console.log(arr1);

// console.log(Array.isArray({})); //false
// console.log(Array.isArray([]));//true
// console.log(Array.isArray(10));//false
// console.log(Array.isArray([2,4,5,7]));//true

// let str = "hello";
// let arr = Array.from(str);
// console.log(arr); // return array of elements...

// let obj = {
//    name:"arif",
//    age:21,
// };

// let arr1=Array.from(obj);
// console.log(arr1); //return empty array...
 
// let arr = [4,7,8,9,5,3];
// console.log(arr.sort((a,b)=> a+b)); //if callback is -ve value then sort in ascending order


// let arr1 = [4,7,8,9,5,3];
// console.log(arr1.sort((a,b)=>b-a));//if callback is +ve value then sort in descending order


// let arr = [4,7,8,9,5,3];
// arr.forEach((val)=>{
//    if(val%2==0){
//       console.log(val+" "+"is even");
//    }
// });


// let arr =[4,7,8,9,5,3];
// let new_arr = arr.map(val=>val*8);
// console.log(new_arr);


// let arr = [4,7,8,9,5,3];
// let new_arr = arr.filter((val)=>{
//    if(val>5){
//       return true;
//    }
// });
// console.log(new_arr);

// let arr = [4,7,8,9,5,3];
// let new_arr = arr.reduce((acc,val)=>{
//    acc = acc+val;
//    return acc;
// },100); // here 100 will add after adding all index value of array..
// console.log(new_arr);

//----------- Constructor Function --------

// function Car(model,color,engine){ //here parameter "model","color" and "engine" treated as keys of the object 
//    this.model=model; // here using "this" keyword we copy the value into the keys from parameter 
//    this.color=color;
//    this.engine=engine;
// }
// let car1 = new Car(1001,"bLACK","V9");//here argument "1001","black" and "V9" are treated as Value of the object..
// console.log(car1);


//--------------------Practice-------------------------

// function fun(){  // hoisting is possible and it is belong to temporal dead zone
//    console.log("hello");
// }
// fun();


// let greet = function(){  // hoisting can't be possible and it is not in temporal Dead Zone
//    console.log("hello");
// }
// console.log(greet());

//-----Immediate Invoke Function----

// console.log((function (a,b){
//    return a+b;
// })(8,9)
// );

// (function greet(){
//    console.log("hello");
// })();

// (function(a,b){
//    console.log(a+b);
// })(9,8);

// function isPrimePresent(n){
//    while(n>0){
//       var a = n%10;
   
//       if(a%2==1 || a%2==3 || a%2==5 || a%2==7){
//          console.log(a);
//       }
//       n = parseInt(n/10);
//    //   console.log(n);
//    }
// }
// console.log(isPrimePresent(8641943687));



// let sum = (a,b)=> a+b;
// let sub = (a,b) => a-b;
// //console.log(sum(8,9));

// function calculator(task,a,b){
//    let ref = task(a,b);
//    console.log(ref);
// }

// calculator(sub,9,7);


//Types Of Function in JS
// function fun(){}
// let fun = function(){}
// let fun =()=>{}
// (function(){})();
// function fun(function_varaible,param1,param2){}
// fun(function_ref,param1,param2);

// function parent(){
//    console.log("parent");
//    function child(){
//       console.log("child");
//    }
//    return child; // parent function return the reference of child function...
// }

// let ref = parent();
// ref();  // Ist Way
// parent()(); // 2nd Way


//lexical Scope..........

// let a =10;
// function inner(){
//    a++;
//    console.log(a);
// }
// inner();

// function outer(){
//    let a =10;
//    function inner(){
//       a++;
//       console.log(a);
//    }
//    return inner;
// }
// outer()();

// let arr = [3,4,6,7,8];
// console.log(arr);
// console.log(arr[3]);

// let arr1 = new Array(234,5,5,67);
// console.log(arr1);
// console.log(arr1[2]);



// let arr=[10,20,30,40,50];
// arr.splice(2,0,100,200,300);
// console.log(arr);



// let arr = [35,7,8,9,8,4];

// arr.forEach((value)=>{
//    if(value%2===0){
//       console.log(value);
//    }
// });



// let arr = [35,7,8,9,8,4];

// let new_arr = arr.map((value)=>value*2);
// console.log(new_arr);


// let arr = [35,7,8,9,8,4];
// let new_arr = arr.filter((value)=>{
//    if(value>8){
//       return true;
//    }
// });

// console.log(new_arr);

// let arr = [35,7,8,9,8,4];
// let result = arr.reduce((acc,value)=>{
//    acc=acc+value;
//    return acc;
// },9);
// console.log(result);



// function Car(model,price,color){ here we create a function to call multiple time an object through this...so this function is called Constructor Function..
//    this.model=model;
//    this.price=price;
//    this.color=color;
// }

// let ref = new Car("Thar",1200000,"black");

// console.log(ref);

//Object Dedstructing
// let obj={
//    name:"arif",
//    age:21,
// }

// let{name,age,country}=obj;
// console.log(name);
// country="India"
// console.log(country);

//Array Destructing

// let arr =[43,6,7,8,9];
// let[a,b,c,d,e,f]=arr;
// console.log(f);


//Function Destructing

// function fun({name,age}){
//    console.log(name);
//    console.log(age);
// }

// let obj = {name:"arif", age:21,};

// fun(obj);

// function fun([a,b,c,d,e,f]){
//    console.log(b);
// }

// let arr = [33,5,7,8,9];
// fun(arr);

   // let obj = {
   //    name:'arif',
   //    age:21,
   // }
   
   // let arr = [43,5,6,7,8];
   
   // function details({name,age},[a,b,c,d,e]){
   //    console.log(name);
   //    console.log(age);
   //    console.log(a);
   //    console.log(b);
   //    console.log(c);
   //    console.log(d);
   //    console.log(e);
   // }
   // details(obj,arr);




// let human1 ={
//    name:"Md",
//    age:20,
// }
// let human2={
//    name:"arif",
//    age:21,
// }
// let human3={
//    name:"alam",
//    age:22,
// }

// function details(a,b,c){ 
//    console.log("name is "+this.name);
//    console.log("age is "+this.age);
//    console.log("a = "+a);
//    console.log("b = "+b);
//    console.log("c = "+c);}

// details.call(human1,10,90,70);// "Call()" Method

// details.apply(human1,[3,8,6]); // "Apply()" Method

// let ref = details.bind(human2,2,5,7); // "Bind()" Method
// ref();

// let arr = [3,5,7,9,2,8];

// function sum(...data){  //here "...data" is a rest-Operator
//    let arr_sum=0;
//    for(let value of data){
//    arr_sum = arr_sum + value;
//    }
//    return arr_sum;
// }

// let result = sum(...arr);  // here "...arr" is a spread-operator
// console.log(result); 


// let arr = [3,5,7,9,2,8];
// console.log(...arr); // return values of the array
// console.log([...arr]); // return array object of the array
// console.log({...arr}); // return object of the array



// let obj = {
//    name:"arif",
//    age:21,
// };

// let human = {...obj}; // here "...obj" is spread-operator
// console.log(human);

// let arr = [3,5,7,9,2,8];
// let new_array = [...arr];// here "...arr" is spread-operator
// console.log(new_array);

// ---------4-ways of creating an " Object " ------------------

//  let obj = {};
//  let obj1 = new Object({});
//  let obj3 = new constructor_function_Name();
//  class for_Obj{
//    constructor(name,age){
//       this.name=name;
//       this.age=age;
//    }
//  }

//  let obj4 = new for_Obj("arif",21);
//  console.log(obj4);

//---------------------------------------------------------------
 
// let phono = 8358830600;
// let name = "arif";
// let age = 21;
// let obj = {
//    phono,
//    name,
//    age
// }
// console.log(obj.name);
// console.log(obj["phono"]);


// let obj = {
//    name:"arif",
//    greet: function(){
//       console.log("helloo");
//    }
// }
// obj["greet"]();

// Accessing the object property inside function - function declare with function keyword

// let obj = {
//    name:"arif",
//    age:21,
//    city:"Noida",
//    tellAboutYourself : function(){
//       console.log("My name is: "+this.name);
//       console.log("My age is: "+this.age);
//       console.log("I live in city: "+this.city);
//    }
// }
// obj["tellAboutYourself"]();

// Accessing the object property inside function - Using Arrow function

// let obj = {
//    name:"arif",
//    age:21,
//    city:"Noida",
//    tellAboutYourself : ()=>{
//       console.log(`My name is: ${obj.name}`);
//       console.log(`My age is: ${obj.age}`);
//       console.log(`I live in city: ${obj.city}`);
//    }
// }
// obj["tellAboutYourself"]();

// let obj1 = {
//       name:"arif",
//       age:21,
//       cityName: {
//          city:"Noida",
//       },

// };
// // obj.city="noida";
// // console.log(obj);
// // obj["city"]="Noida";
// // console.log(obj);
// // console.log("name" in obj);



// let str = JSON.stringify(obj1);
// let obj2 = JSON.parse(str);
// // for(key_value in obj1){
// //    obj2[key_value] = obj1[key_value];
// //    console.log(obj2);
// // }
// obj2.age=23;
// obj2.cityName.city="Delhi";
// console.log(obj1);
// console.log(obj2);

// let obj1 = {
//          name:"arif",
//          age:21,
//          cityName: {
//             city:"Noida",
//          },
   
//    };

//    let copy = Object.assign(obj1);
//    let obj2 = Object.assign(copy);
//    obj2.cityName.city="Delhi";
//    obj2.name="alam";
//    obj2.age=23;
//    console.log(obj2);
//    console.log(obj1);

// let arr = [43,5,4,64,75,7];
// function sum(...value){
//    console.log(arr.reduce((res,value)=>{
//       res = res + value
//       return res;
//    },2));
// };

// sum(arr);

// let arr1 = [5,6,7,9,2,1];
// let arr2 = [...arr1];

// let[a,b,...c]=arr2;
// console.log(a);
// console.log(b);
// console.log(c);

// -----------Prototype------------------

// let arr= [];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// let obj = {};
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__);

// function fun(){};
// console.log(fun.__proto__);
// console.log(fun.__proto__.__proto__);
// console.log(fun.__proto__.__proto__.__proto__);

// ------------------String-----------------

// const str = "arif";
// console.log(str.slice(-4,-2));
// console.log(str.substring(0,2));

// let num = 100;
// console.log(typeof num.toString());

// let obj = {
//    name:"arif",
//    age: 21,
// }
// console.log(typeof obj.toString());

// let arr = ["arif",21];
// console.log(typeof arr.toString());

// let str = "hello world!!!";
// console.log(str.split()); // return whole string as one element of an array
// console.log(str.split("")); // return every character as an element of an array
// console.log(str.split(" ")); // return every word as an element of an array 
// console.log(str.split('')); // same as ("")
// console.log(str.split(' '));// same as (" ")

// let str = "hello world!!!. How are you all";
// console.log(str.split("").reverse().join(""));
// console.log(str.split().length); // count whole string as one
// console.log(str.split("").length); // count each character
// console.log(str.split(" ").length); // count each words
// console.log(str.split(".").length); // count whole sentence


// function capitalize(){
// let str = "hello world!!!. How are you all";
// var separate = str.toLowerCase().split(" ");
// for(var i =0 ; i< separate.length;i++){
//    separate[i] = separate[i].charAt(0).toUpperCase()+separate[i].substring(1);
// }
// return separate.join(" ");

// }

// console.log(capitalize());


