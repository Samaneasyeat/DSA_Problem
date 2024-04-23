// adding a value in array
let names = ["Saman","Amaan","Zara","Fiza"];
console.log(names);
names.push("Divya"); //push is method to add elements in array 
console.log(names); //it will return this values ["Saman","Amaan","Zara","Fiza","Divya"];
names.unshift("ami"); //unshift is method and it is same like push method but the difference is unshift add from start and push add from last 
console.log(names); // it will return the value of array ["ami","Saman","Amaan","Zara","Fiza","Divya"];
 let lastName = names.pop(); //it will remove Divya and return Divya as well
 console.log(lastName);
 console.log(names);
  let lenthOfNames =names.length;
  console.log(lenthOfNames);
  names.length = 2; //this will decrease the length of an array and item would be deleted from array
  console.log(names); //["ami","Saman"] it would be the output
