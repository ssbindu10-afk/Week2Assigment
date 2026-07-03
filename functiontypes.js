//Named function //
export function printRBG() 
{
    let colors = ["Red", "Blue", "Green"];
    console.log(colors);
    return colors;

}
printRBG(); // calling the function

//Expression function //

export let printRBG1 = function()
{
    let colors = ["Red", "Blue", "Green", "Yellow", "Orange"];
    console.log(colors);
    return colors;
}
printRBG1(); // calling the function

//Arrow function //

let y = (a,b) => {
    let c= a+b;
    console.log(c);
    return c;

}
const result = y(5,10); // calling the function
 // arrow function with two parameters

 //simple one line arrow function
 let z = (a,b) => a*b;
 console.log(z(5,10)); // calling the function
 
 
// calling the fun // output: 50


