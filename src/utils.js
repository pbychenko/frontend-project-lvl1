export const min = 1;
export const max = 10;
export const getRandomInt = (mini, maxi) => {
  const localMin = Math.ceil(mini);
  const localMax = Math.floor(maxi);
  return Math.floor(Math.random() * (localMax - localMin)) + localMin;
};
