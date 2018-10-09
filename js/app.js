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
