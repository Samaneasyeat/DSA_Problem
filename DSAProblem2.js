//constructor in javaScript 
let students = new Array(5); //we are using new constructor for making a array of 5 elements 
console.log(students); // it will give empty list of 5 array elemets 
students = ["Mohan", "Rakesh", "Akash","Vishnu"]; //we are updating the values of array 
console.log(students); //it will give updated values of students;
//Accessing Elements of an Array
let fruits = ["Apple","Banana","Mango","grapes", "watermelon"];
console.log(fruits[0]); //output would be Apple
console.log(fruits[1]);//output would be Banana
console.log(fruits[2]); //output would be Mango
console.log(fruits[3]); //output would be Grapes
console.log(fruits[4]); //output would be watermelon
console.log(fruits[5]); //output would be undefined
console.log(fruits[6]); //output would be undefined
let n = fruits.length // this will give the length of an array
console.log(n);
console.log(fruits[n-1]); //this will give the last element of array 


