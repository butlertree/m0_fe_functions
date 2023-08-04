// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


// The includes() method is called on the string "Hello World"
// The job of the method is to search the string for "Hello"
// The return value is ture

"Hello World".includes("Hello");


// The endsWith() method is called on the string "Hello World"
// The job of the method is to check if the string ends with "Hello"
// The return value is false

"Hello World".endsWith("Hello");


// The endsWith() method is called ont the string "Hello World" 
// The job of the method is to check if the string ends with "rld"
// The return value is true

"Hello World".endsWith("rld");



// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// The endsWith() method is called on the greeting variable, which stores the string "Nice to meet you!".
// The endsWith() method returns true if the data in the greeting variable ends with the argument "you!".
// In this example, the return value is true, because "Nice to meet you!" does end with "you!".
// The console.log() statements prints the return value of the endsWith() method (true) to the console.
var greeting = "Nice to meet you!"
console.log(greeting.endsWith("you!"));


// The incluede() method is called on the person variable, which stores the string "Hannah".
// The includes() method returs true if the data in the person variable contains the argument "h".
// In this example, the return value is true, because "Hannah" contains "h".
// The console.log() statements prints the return value of the contains() method (true) to the console.
var person = "Hannah"
console.log(person.includes("h"));



// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// The pop() method is called on the array assigned to the ages variable.
// The pop() method changes the array by removing the last element.
// The console.log() statements print out the new array without the last element from the original. 

var ages = [47, 46, 13, 13, 16, 4, 1];
ages.pop();
console.log(ages);


// The sort() method is called on the array assigned to the names variable.
// The sort() method reorders the array and places all of the strings in alphabetical order.
//  The console.log() statements print out the new array with all of the elements in alphabetical order.  
var names = ["Pilar", "Petunia", "Pamela", "Tan", "Amands", "Phil"];
names.sort();
console.log(names);

