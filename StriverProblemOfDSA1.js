//largest element of array;
let array = [3,5,67,89];
let max = array[0];
for (let index = 1; index < array.length; index++) {
    if (max < array[index]) 
    {
        max= array[index]
        
    }
    
}
console.log(max);