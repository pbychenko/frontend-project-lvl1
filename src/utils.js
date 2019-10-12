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