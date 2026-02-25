export const formatUsername = (username) => {
  return username.trim().toLowerCase();
};

export const calculateCartTotal = (prices) => {
  return prices
    .map(price => parseFloat(price.replace('$', '')))
    .reduce((acc, value) => acc + value, 0);
};

export const generateRandomIndex = (length) => {
  return Math.floor(Math.random() * length);
};