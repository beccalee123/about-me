'use strict';

var totalCorrect = 0;

alert('Welcome! Let\'s play a guessing game so you can learn more about me.');
var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started.');

var answerOne = prompt('Do I have more than 1 pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  alert('Good guess, ' + username + '! I have two cats named Buddy and Hank!'); totalCorrect++;
  console.log('The user answered question 1 correctly');
} else {
  alert('Nice try, ' + username + ', but I actually have two cats!');
  console.log('The user did not answer question 1 correctly');
}

var answerTwo = prompt('Do I like butterflies?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Nice work, ' + username + '! I was forever scarred by an 8th grade science class video *shudders*');
  totalCorrect++;
  console.log('The user answered question 2 correctly');
} else {
  alert('I\'m afraid you\'re wrong, ' + username + '. I was traumatized by a science video in 8th grade');
  console.log('The user did not answer question 2 correctly');
}

var answerThree = prompt('Do I like ice cream?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('Yep! Ice cream is one of my favorite foods, ' + username + '!'); totalCorrect++;
  console.log('The user answered question 3 correctly');
} else {
  alert('You\'re very wrong, ' + username + '. I eat ice cream almost every day.');
  console.log('The user did not answer question 3 correctly');
}

var answerFour = prompt('Do I like Pro Wrestling?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  alert('Correct! While most people are fans from childhood, it may surprise you to hear, ' + username + ', that I started watching just 3 years ago');
  totalCorrect++;
  console.log('The user answered question 4 correctly');
} else {
  alert('Clearly you\'re not smelling what The Rock is cooking, because I\'m a big fan, ' + username + '!');
  console.log('The user did not answer question 4 correctly');
}

var answerFive = prompt('Do I have any tattoos?').toLowerCase();

if (answerFive === 'no' || answerFive === 'n') {
  alert('You\'re right, ' + username + '. I like tattoos, but I\'ve never been able to decide on something!');
  totalCorrect++;
  console.log('The user answered question 5 correctly');
} else {
  alert('I know a lot of people have tattoos, ' + username + ', but I\'ve never gotten one.');
  console.log('The user did not answer question 5 correctly');
}


var counter = 4

while (counter > 0 && answerSix !== 12) {
  var answerSix = Number(prompt('What number am I thinking of? You get ' + counter + ' guesses!'));
  counter--;
  if (answerSix === 12) {
    alert('You\'re right! Wow, you\'re a good guesser, ' + username + '!'); totalCorrect++;
    console.log('The user answered question 6 correctly with ' + counter + ' more guesses');
  } else if (answerSix > 12) {
    alert('Too high, ' + username + '. You have ' + counter + ' more guesses');
    console.log('The user answered question 6 incorrectly with too high of a number. They have ' + counter + ' more guesses')
  } else if (answerSix < 12) {
    alert('Nice try, but you\'re too low, ' + username + '. You have ' + counter + ' more guesses');
    console.log('The user answered question 6 incorrectly with too low of a number. They have ' + counter + ' more guesses')
  }

  if (counter === 0) {
    alert('A valiant effort, ' + username + ', but the number was 12!');
    console.log('The user ran out of guesses for question 6 and was told the answer')
  }
}

var iceCreamCounter = 6;
var correctAnswer = true;
var iceCreamFlavors = ['mint chocolate chip', 'strawberry', 'chocolate peanut butter', 'rocky road'];

while (iceCreamCounter > 0 && correctAnswer) {
  var answerSeven = prompt('Can you guess one of my favorite ice cream flavors? You have ' + iceCreamCounter + ' guesses.').toLowerCase();
  for (var i = 0; i < iceCreamFlavors.length; i++) {
    if (answerSeven === iceCreamFlavors[i]) {
      alert('Dang, you\'re good at this, ' + username + '! My favorites are ' + iceCreamFlavors[0] + ', ' + iceCreamFlavors[1] + ', ' + iceCreamFlavors[2] + ', and ' + iceCreamFlavors[3] + '!');
      correctAnswer = false; //breaks for loop & while loop
      totalCorrect++;
      console.log('The user answered question 7 correctly');
    }
  }
  iceCreamCounter--;
  if (iceCreamCounter > 0 && correctAnswer) {
    alert('Sorry, that flavor sounds good, ' + username + ', but it\'s not one of my favorites. You have ' + iceCreamCounter + ' more guesses.');
    console.log('The user answered question 7 incorrectly and has ' + iceCreamCounter + ' more guesses.')
  }
  if (iceCreamCounter === 0) {
    alert('Nice try, ' + username + ', but the my favorite flavors of ice cream are ' + iceCreamFlavors[0] + ', ' + iceCreamFlavors[1] + ', ' + iceCreamFlavors[2] + ', and ' + iceCreamFlavors[3] + '!');
    console.log('The user ran out of guesses for question 7 and was told the answer');
  }
}

alert('You got ' + totalCorrect + ' out of 7, ' + username + '!');
console.log('The user was told how many questions they answered correctly');
