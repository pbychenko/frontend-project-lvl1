export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
export const getNod = (a, b) => {
  let x = a;
  let y = b;
  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};
export const getProgression = (start, step) => {
  const progressionList = [];
  for (let i = 0; i < 10; i += 1) {
    progressionList[i] = start + step * i;
  }
  return progressionList;
};

export const getProgForGame = (list, place) => {
  const buff = list.slice();
  buff[place] = '..';
  return buff.join(' ');
};

export const isPrime = (number) => {
  if (number === 0) {
    return false;
  }

  if (number < 4) {
    return true;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
