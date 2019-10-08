'use strict';

//////////////// Greeting ////////////////////////
var name = prompt('Hello , what is your name ? ');
alert(' Nice to meet you :' + name);
console.log('name', name);

var prompts = [
  'Do you have any pets?',
  'Is there one person you want to be with right now?',
  'Do you have a crush on someone?',
  'Do you believe in Miracles?',
  'Have you ever lost someone special?'
];

var yesReplies = [
  'Very Nice',
  'ooooh , i hope to meet him/her right away',
  'why you do that :(',
  'God bless you',
  'I\'m sorry for your loss'
];

var noReplies = [
  'Soo saaad!',
  'why not?',
  'be calm and kind',
  'Think again',
  'I hope not to loose'
];

for (var i = 0; i < prompts.length; i++) {

  var userResponse = prompt(prompts[i]);

  userResponse = userResponse.toUpperCase();

  var yesReply = yesReplies[i];

  var noReply = noReplies[i];

  switch (userResponse) {

    case 'YES':
    case 'Y':
      alert(yesReply);
      break;

    case 'NO':
    case 'N':
      alert(noReply);
      break;

    default:
      alert(' Wrong Answer!');
  }

}
