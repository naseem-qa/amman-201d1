
var score = 0;

score += aboutMeQuestions();

console.log('score', score);

function aboutMeQuestions() {

  var aboutMeScore = 0;

  var questions = [
    ['Do I like sweets?','Of course. Now I\'m hungry.','I am shocked', 'yes'],
    ['Do I like tomatoes?','Correct. They are ok if cooked though','Wrong. Actually I don\'t', 'no'],
  ];

  for (var i = 0; i < questions.length; i++) {
    aboutMeScore += presentQuestion(questions[i]);
  }

  return aboutMeScore;
}

function presentQuestion(questionData) {

  var userResponse = prompt(questionData[0]);

  var correctReply = questionData[1];

  var incorrectReply = questionData[2];

  var correctAnswer = questionData[3];

  var userAnswer = getResponseType(userResponse);

  var reply = 'What a wierd thing to say. No points for you';

  var pointsToAdd = 0;

  if (userAnswer == correctAnswer) {

    reply = correctReply;

    pointsToAdd = 1;
  
  } else {

    reply = incorrectReply;
  }
  
  alert(reply);

  return pointsToAdd;
  
}

function getResponseType(response) {

  response = response.toUpperCase();

  switch (response) {
    case 'YES':
    case 'Y':
      return 'yes';
    case 'NO':
    case 'N':
      return 'no';
    default: 
      return 'other';
  }
}

