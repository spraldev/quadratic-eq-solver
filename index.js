let a = 1
let b = 15
let c = 50


const anw1 = (-b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / (2 * a)
const anw2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

console.log(anw1, anw2)