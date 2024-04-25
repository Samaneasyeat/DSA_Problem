//second largest eleemnt in array 
//brute solution would be first will sort the array and then array[array.length-2] would be second largest value
let array = [4,6,7,8,2,1];
let firstLargestElement = array[0];
for (let index = 1; index < array.length; index++) {
    if (array[index]>firstLargestElement) {
        firstLargestElement = array[index]
        
    }
    
}
console.log(firstLargestElement);
let secondLargestNumber = -1;
for (let index = 1; index < array.length; index++) {
    if (secondLargestNumber<array[index] && array[index]!=firstLargestElement ) {
        secondLargestNumber=array[index]
        
            
        }
        
    }
    

console.log(secondLargestNumber);