'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me.');
var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started.');

var answerOne = prompt('Do I have more than 1 pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    alert('Good guess, ' + username + '! I have two cats named Buddy and Hank!');
    console.log('The user answered the question correctly');
}else {
    alert('Nice try, ' + username + ', but I actually have two cats!');
    console.log('The user did not answer the question correctly');
}

var answerTwo = prompt('Do I like butterflies?').toLowerCase();

if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Nice work, ' + username + '! I was forever scarred by an 8th grade science class video *shudders*');
    console.log('The user answered the question correctly');
}else {
    alert('I\'m afraid you\'re wrong, ' + username + '. I was traumatized by a science video in 8th grade');
    console.log('The user did not answet the question correctly');
}