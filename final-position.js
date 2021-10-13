const finalPosition = (moves) => {
  const movement = [0, 0]; // x, y

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'north') {
      movement[1]++;
    } else if (moves[i] === 'south') {
      movement[1]--;
    } else if (moves[i] === 'east') {
      movement[0]++;
    } else if (moves[i] === 'west') {
      movement[0]--;
    }
  }
  return movement;
}