show('So far our magical dictionary has not shown a lot of magical abilities');

var fruitDictionary = {
  apple: 'A sweet, sometimes a little sour, fruit. No need to peel'
}

show("Objects are 'alive' - meaning you can add things to them");

fruitDictionary.banana = 'A nutritious yellow fruit. Peel just before eating';

show('fruitDictionary.banana : ' + fruitDictionary.banana);

show('You can also delete from them');

delete fruitDictionary.apple;

show(fruitDictionary);

show('No we will get to the real MAGIC');

show('The values in an object can by ANYTHING!');

show('Well almost anything. They can be any JavaScript expression');

show('They can be other strings, booleans, numbers, arrays, even other Objects and more!');

fruitDictionary.banana = { name: 'banana', description: 'A nutritious yellow fruit. Peel just before eating' };

show(fruitDictionary);

show('How do you show the description for banana?');

show(fruitDictionary.banana.description);

show('Can a value be a function?');

show('Yes! Let\'s create new Object with functions inside');

fruitDictionary = {
  apple: {
    name: 'Apple',
    description: 'A sweet, sometimes a little sour, fruit. No need to peel',
    eat: function () {
      return 'Delicious!';
    }
  }
}

var eatReturnValue = fruitDictionary.apple.eat();

show('Return value from calling eat function on apple object = ' + eatReturnValue);





