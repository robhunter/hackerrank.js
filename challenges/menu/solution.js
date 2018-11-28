'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countApplesAndOranges function below.
function getTargetPrice(keys, prices, target, bought) {
  // console.log(keys);
  // console.log(prices);
  // console.log(target);
  // console.log(bought);
  // console.log();
  if (bought == null) {
    bought = [];
    for (let i = 0; i < prices.length; i++) {
      bought.push(0);
    }
  }
  if (target == 0) {
    return true;
  }
  if (target < 0) {
    return false;
  }
  for (let i = 0; i < prices.length; i++) {
    bought[i]++;
    target -= prices[i];
    if (getTargetPrice(keys, prices, target, bought)) {
      return bought;
    } else {
      bought[i] -= 1;
      target += prices[i];
    }
  }
  return false


}

function main() {

    const keys = readLine().split(' ');

    const prices = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    const target = parseInt(readLine());

    console.log(getTargetPrice(keys, prices, target).join(' '));
}
