let arry1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
arry1.push("fig") // adds 'fig' to the end of the array
console.log(arry1); // output: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']
arry1.pop()
console.log(arry1); // removes the last element 'fig', output: ['apple', 'banana', 'cherry', 'date', 'elderberry']
arry1.shift() // removes the first element 'apple'
console.log(arry1); // output: ['banana', 'cherry', 'date', 'elderberry']
arry1.unshift("apricot") // adds 'apricot' to the beginning of the array
console.log(arry1); // output: ['apricot', 'banana', 'cherry', 'date', 'elderberry']
arry1.unshift("avocado","walnut")
console.log(arry1); 
let resultslice = arry1.slice(1, 4); // creates a new array with elements from index 1 to 3 
console.log(resultslice); // output: ['banana', 'cherry', 'date']
let arry2 = ["a", "b", "c", "d", "e"];
arry2.slice(1,-2) // creates a new array with elements from index 1 to 1
console.log(arry2);
 // output: ['b', 'c'] // slice method does not modify the original array
let arry3 = ["b", "i", "n","d","u"];
    arry3.splice(1,1, "w")
    console.log(arry3); // output: ['b', 'w', 'n', 'd', 'u'] // splice method modifies the original array



