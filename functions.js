// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Call each method at least twice and store the return value in a variable. 
// Use console.log() to see the return value in the console.

// 1: Write a function named greeting that returns a string with a general greeting. 

function greeting(){ 
    return "It's a pleasure to meet you!";
    }
    var result = greeting("It's a pleasure to meet you!");
      console.log(greeting())
      console.log(result)

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.

function customGreeting(name){
    return `It's a pleasure to meet you ${name}!`;
    }
    var outcome = customGreeting("Chris")
    console.log(customGreeting("Chris"));
    console.log(outcome)


// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.

function greetPerson(first, middle, last){
    return `Hello ${first}, ${middle}, ${last}, nice to meet you!`;
  }
  var result = greetPerson("Christopher", "M", "Butler")
  console.log(greetPerson("Christopher", "M", "Butler"))
  console.log(result)

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.


var find = 2

function square(num){
  var multiply = num * num;
  return `The square of this number is ${multiply}!`;
}
console.log(square(find))


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.

checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkStock(quantity, item){  
    if (quantity >= 4){
      return `${item} is stocked!`;
    } else if (quantity > 0){
      return `${item} is running low!`;
    } else {
      return `${item} is out of stock`;
    }
    }       
  console.log(checkStock(4, "Coffee"));
  console.log(checkStock(3, "Tortillas"))
  console.log(checkStock(0, "Cheese"))
  console.log(checkStock(1, "Salsa"))