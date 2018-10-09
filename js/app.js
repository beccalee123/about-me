'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me.');
var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started.');

var answerOne = prompt('Do I have more than 1 pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  alert('Good guess, ' + username + '! I have two cats named Buddy and Hank!');
  console.log('The user answered question 1 correctly');
}else {
  alert('Nice try, ' + username + ', but I actually have two cats!');
  console.log('The user did not answer question 1 correctly');
}

var answerTwo = prompt('Do I like butterflies?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Nice work, ' + username + '! I was forever scarred by an 8th grade science class video *shudders*');
  console.log('The user answered question 2 correctly');
}else {
  alert('I\'m afraid you\'re wrong, ' + username + '. I was traumatized by a science video in 8th grade');
  console.log('The user did not answer question 2 correctly');
}

var answerThree = prompt('Do I like ice cream?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('Yep! Ice cream is one of my favorite foods, ' + username + '!' );
  console.log('The user answered question 3 correctly');
}else {
  alert('You\'re very wrong, ' + username + '. I eat ice cream almost every day.');
  console.log('The user did not answer question 3 correctly');
}

var answerFour = prompt('Do I like Pro Wrestling?').toLowerCase();

if (answerFour === 'yes'|| answerFour === 'y') {
  alert('Correct! While most people are fans from childhood, it may surprise you to hear, ' + username + ', that I started watchin just 3 years ago');
  console.log('The user answered question 4 correctly');
}else {
  alert('Clearly you\'re not smelling what The Rock is cooking, because I\'m a big fan, ' + username + '!');
  console.log('The user did not answer question 4 correctly');
}

var answerFive = prompt('Do I have any tattoos?').toLowerCase();

if (answerFive === 'no' || answerFive === 'n') {
  alert('You\'re right, ' + username + '. I like tattoos, but I\'ve never been able to decide on something!');
  console.log('The user answered question 5 correctly');
} else {
  alert('I know a lot of people have tattoos, ' + username + ', but I\'ve never gotten one.');
  console.log('The user did not answer question 5 correctly');
}
