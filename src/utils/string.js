/* eslint-disable prettier/prettier */

export const capitalizeWord = str => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const nameAlias = str => {
  return str.split(' ')[0].charAt(0) + str.split(' ')[1].charAt(0);
};
