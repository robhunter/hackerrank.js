'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the solve function below.
function solve(cities, pops) {
    console.log(cities);
    console.log(pops);
    return 280;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const arrCount = parseInt(readLine(), 10);

        const cities = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
        const pops = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = solve(cities, pops);

        ws.write(result + "\n");
    }

    ws.end();
}
