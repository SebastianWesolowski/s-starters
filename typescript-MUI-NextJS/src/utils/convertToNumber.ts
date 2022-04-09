const convertToNumber = (value: string): number => {
  const resultat = String(value).match(/\d/g);
  if (resultat === null) {
    return 0;
  }

  return parseInt(resultat.join(''), 10);
};

export default convertToNumber;
