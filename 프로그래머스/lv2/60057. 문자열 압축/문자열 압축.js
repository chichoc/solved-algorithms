const solution = s => {
  const units = [...Array(Math.floor(s.length / 2))].map((_, index) => index + 1);
  return units.length ? Math.min(...units.map(unit => compress(s, unit).length)) : 1;
};

const compress = (s, unit) => {
  const make = ([r, w, c]) => `${r}${c > 1 ? c : ''}${w}`;
  return make(chunk(s, unit).reduce(([result, repeatedWord, count], word) => word === repeatedWord ? [result, repeatedWord, count + 1] : [make([result, repeatedWord, count]), word, 1], ['', '', 0]));
};

const chunk = (str, unit) => str.length <= unit ? [str] : [str.slice(0, unit), ...chunk(str.slice(unit), unit)]; 