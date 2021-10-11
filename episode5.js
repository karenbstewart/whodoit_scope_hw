const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

// WRONG - changeWeapon function can not change Candle Stick to a Revolver. 
// The weapon is the Revolver because changeWeapon is reassigning to the same sort of variable, not changing the make up of the const scenario dictionary


