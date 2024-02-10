'use strict'

const balls = 12;
const diametre = 0.5;
const thick = 0.01;

let result = 0;

for(let i = 1; i <= balls; i++){
    let currentDiametre = diametre + 2 * (i-2) * thick;
    let currentVolume = Math.PI * currentDiametre ** 3 / 6;
    result += currentVolume;
}
console.log(result)