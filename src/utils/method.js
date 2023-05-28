export const getFormattedValue = value => {
  const formatedString = Math.round(value.toFixed(2)).toLocaleString();

  return formatedString;
};
