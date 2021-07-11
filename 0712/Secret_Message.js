let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//use .pop() method to remove the last element in the arrary

secretMessage.pop();
console.log(secretMessage.length);


//Use .push() to add the words to and Program as separate strings to the end of the secretMessage array.
secretMessage.push('to','Program');

//Change the word easily to the word right by accessing the index and replacing it.
secretMessage[secretMessage.indexOf('easily')] = 'right';

console.log(secretMessage);


//Use .shift() method to remove the first string of the array.
secretMessage.shift();
secretMessage.unshift('Programming');
console.log(secretMessage);


/* Use an array method to remove the strings get, right, the, first, time,,
 and replace them with the single string know, */

 secretMessage.splice(secretMessage.indexOf('get'),5,'know')

 //use console.log() and .join() to print the secret message as a sentence.
 console.log(secretMessage.join(' '));