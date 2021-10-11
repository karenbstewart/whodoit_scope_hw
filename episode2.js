let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// const variable murderer cannot be changed 
// changed const to let to allow code to work
// This code will show that - The murderer is Mrs. Peacock.