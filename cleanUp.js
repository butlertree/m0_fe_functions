// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: I put a return in and took the console.log outside of the code blocks. 
function askForName() {
  return "Hello, what is your name?";
}
  console.log (askForName())


// EX 2: I put the addThreeNums(1, 2, 3) and (4, 2, 7) into the console.log statement. 
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  return sum;
        }
  console.log(addThreeNums(1, 2, 3));
  console.log(addThreeNums(4, 2, 7));


// EX 3: There was nothing to return So I added a return and moved the function makeFreshPesto into the first console.log line.  
function makeFreshPesto(){
  return "Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper";
  }
console.log(makeFreshPesto() + "Pluse basil and pine nuts" );
console.log("Add garlic and cheeses");
console.log("Slowly pour in oil");
console.log("Season");





//  EX 4:I added text to the return line.  I also added a variable as a stand in for the num1 and num2 and I added a console.log statement.  


function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
  return `The average is ${avg}!`;
 }
 
 find1 = average(12, 35)
 
 console.log(find1);




