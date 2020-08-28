
function lifeCheck(arrayCharacters) {
  arrayCharacters.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }
    return 0;
  });
  return arrayCharacters;
}

const test2 = lifeCheck([
  { name: 'маг', health: 80 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 95 },
]);

// eslint-disable-next-line no-console
console.log(test2);

export default lifeCheck;
