'use strict';

var love = prompt('Do you love coding?');

love = love.toLowerCase();

// you can do 
switch (love) {
  case 'yes':
  case 'y':
    alert('of course');
    break;
  default:
    alert('What is up???');

}

/* or this way with if/else
if(love == 'yes') { // YES, yEs, YEs,
    alert('Of course you do');
} else if (love == 'y') {
    alert('Of course you do');
} else if (love == 'no') {
    // etc
} else {
    alert('How odd');
}
*/


/* You don't need this for lab */
var fruits = ['apple', 'banana', 'cucumber'];
fruits[3]; // what does this equal???

