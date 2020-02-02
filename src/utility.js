const num = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(
  ' '
);
const tens = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];
let word = '';
const numToWords = number => {
  let remainder = 0;
  let dividend = 0;
  if (number < 20) {
    word = word + num[number];
  } else if (number < 100) {
    dividend = Math.floor(number / 10);
    remainder = number % 10;
    word = word + (word !== '' ? ' ' : '') + tens[dividend] + '-';
  } else if (number < 1000) {
    dividend = Math.floor(number / 100);
    remainder = number % 100;
    word = numToWords(dividend) + ' hundred and ';
  } else {
    dividend = Math.floor(number / 1000);
    remainder = number % 1000;
    word = numToWords(dividend) + ' thousand ';
  }
  if (remainder !== 0) {
    numToWords(remainder);
  }
  return word;
};

export const convert = number => {
  word = '';
  return numToWords(number, word, num, tens);
};
