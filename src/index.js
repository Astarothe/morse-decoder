const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let first = 0;
     let last = 2;
     let resultMors = [[]];
     let result = [];
     let i = 0;
     while (last <= expr.length) {
         if (expr.slice(first,last) == '10') {
             resultMors[i].push('.');
             first += 2;
             last += 2;
         } else if (expr.slice(first,last) == '11') {
             resultMors[i].push('-');
             first += 2;
             last += 2;
         } else if (expr.slice(first,last) == '**') {

             resultMors[i].push(' ');
             first += 10;
             last += 10;
         } else if (expr.slice(first,last) == '00') {
             while (expr.slice(first,last) == '00') {
                 first += 2;
                 last += 2;
             }

         }
         i = Math.floor(first / 10);
         if (resultMors[i] == undefined) resultMors[i] = [];

     }

     resultMors.forEach(element => {
         if (element.join('') in MORSE_TABLE) {
             result.push(MORSE_TABLE[element.join('')]);
         } else if (element == ' ') {
             result.push(' ');
         }

     })

     return result.join('');
}

module.exports = {
    decode
}
