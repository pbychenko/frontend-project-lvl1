export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
export const getNod = (a, b) => {
    while (a!== 0 && b !== 0) {
      if (a > b) {
        a = a % b;
      } else {
        b = b % a;
      }
  
    }
    return a + b;
};
export const getProgression = (start , step) => {
  let progressionList = [];
  for (let i = 0; i < 10; i += 1) {
      progressionList[i] = start + step * i;
  }   
  return progressionList; 
};

export const getProgForGame = (list, place) => {
  list[place] = '..';
  return list.join(' ');
};