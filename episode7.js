let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// WRONG - The murderer is Colonel Mustard
// why is plotTwist not called? added declaration in plotTwist if that is removed it makes -
//The murderer is Miss Scarlet.

// plotTwist function can not be executed because of error is trying to reassign a new variable with the name of an existing one
// therefor the murderer remains assigned to  Mr. Green

