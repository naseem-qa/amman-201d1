'use strict';

//////////////// Greeting ////////////////////////
var name = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + name);
console.log('name', name);

var questions = [
  [
    'Do you have any pets?',
    'Very Nice',
    'Soo saaad!',
  ],
  [
    'Is there one person you want to be with right now?',
    'ooooh , i hope to meet him/her right away',
    'why not?',
  ],
  [
    'Do you have a crush on someone?',
    'why you do that :(',
    'be calm and kind',
  ],
  [
    'Do you believe in Miracles?',
    'God bless you',
    'Think again',
  ],
  [
    'Have you ever lost someone special?',
    'I\'m sorry for your loss',
    'I hope not to loose'
  ],
];


for (var i = 0; i < questions.length; i++) {

  var currentQuestion = questions[i]; // array of 3 items [prompt, positive, negative]

  var promptIndex = 0;

  var positiveIndex = 1;

  var negativeIndex = 2;

  var currentPrompt = currentQuestion[promptIndex];

  var userResponse = prompt(currentPrompt);

  userResponse = userResponse.toUpperCase();

  var currentPositiveReply = currentQuestion[positiveIndex];

  var currentNegativeReply = currentQuestion[negativeIndex];

  switch (userResponse) {

    case 'YES':
    case 'Y':
      alert(currentPositiveReply);
      break;

    case 'NO':
    case 'N':
      alert(currentNegativeReply);
      break;

    default:
      alert(' Wrong Answer!');
  }

}
