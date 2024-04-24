//concatenate in arrays
let fruits =["anaar","mango"];
let vegetables = ["chilli","cabbage"];
let item = fruits.concat(vegetables);
console.log(item); //it will concatenate items of fruits with vegetables and will return an array with items ['anaar','mango','chilli','cabbage'];
//conversion array to string 
let names = ["saman","zara","fiza"];
let newarray = names.toString();
console.log(newarray); // it will convert the array to string and will give result saman,zara,fiza
//type of an array 
let courses = ["DSA","ML"];
let typeOfArray = typeof(courses);
console.log(typeOfArray); //it will give type as object
//Print second element of the array
let arrays = ["saman","anaa","jarren"];
console.log(arrays[1]);
//Print the length of the array
console.log(arrays.length);
//Add "4" in the array
let arr= ["you", "are", "coder"]; 
arr.push(4);
console.log(arr);
//print last element of the array;
let arr1= ["G", "F", "G", "Tutorial"];
let lastElement = arr1[arr1.length-1];
console.log(lastElement); 
//Create an array having values 4, 3, 5, 6
let newArray = new Array(4);
newArray = [4,3,5,6];
console.log(newArray);
//Sort the given array let arr = [1,9,5,7,2]
newArray.sort();
console.log(newArray);