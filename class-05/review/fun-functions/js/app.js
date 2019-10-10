

// a function is like a box
// where you can give it some number things as input 
// it will do some work
// and it will give something back

function makeCoffee(numberOfCups, style, withMilk) { // 3 argument with type number

  // For example
  // JavaScript will implicitly declare a variable
  // named withMilk that contains the 3rd argument value
  // It is the 3rd argument because withMilk is listed 3rd 
  // within the parentheses

  console.log('before return');

  if(withMilk) {
    return 'making ' + numberOfCups + ' cups of ' + style + ' coffee with milk';
  } else if (style == 'turkish') {
    return 'making ' + numberOfCups + ' cups of ' + style + ' coffee without milk';
  }
  
}

// parameter and argument 

console.log('Before calling makeCoffee');

var coffeeResults = makeCoffee(2, 'turkish', true);

console.log('After calling makeCoffee.');

console.log('coffeeResults', coffeeResults);