var englishToFrench = {
  'hello':'bonjour',
  'goodbye' : 'au revoir',
  'yes' : 'oui',
  'no' : 'non',
  'good evening' : 'bonsoir'
}

show(englishToFrench);

show("the part to left of colon is called the 'key'");

show('the part to right of colon is called the \'value\'');

show("They are often referred to together as 'key value pairs'");


// you usually access the value for each key in the form object.key
show(englishToFrench.hello);

// you can also access by putting the in brackets as a string 
show(englishToFrench['goodbye']);

// if your key has spaces, or dashes or other reserved characters then you must use the bracket style
show(englishToFrench['good evening']);

// bonus: notice that because the bracket style expects the key as a string you can do some cool things
// like storing the key in a variable

var key = 'yes';
show(englishToFrench[key]);

// or even cooler setting the value of variable conditionally
var isNight = false;

key = 'no';

if(isNight) {
  key = 'yes';
}

show('Is it night time? ' + englishToFrench[key]);

// we can create a function that takes in an unknown english word and translates it
function translate(english) {
  return englishToFrench[english];
}

show(translate('yes'));





