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

const ifDashRequired = str => {
  return tens.indexOf(str.split(' ').pop()) > 1;
};

const ifAndRequired = str => {
  return str.split(' ').pop() === 'hundred';
};

const cleanWord = str => {
  let arr = str.trimRight(' ').split(' ');
  const poped = arr.pop();
  if (poped === 'and') {
    str = arr.join(' ');
  } else if (poped.indexOf('-') > 1) {
    console.log(str, poped);
    const arrr = poped.split('-');
    if (arrr.pop() === '') {
      console.log('cleaning required!');
      str = arr.join(' ') + arrr[0];
    }
    // str = arr.join(' ') + poped.substring(0, poped.indexOf('-'));
  }
  return str;
};

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
  return cleanWord(numToWords(number, word, num, tens));
};
