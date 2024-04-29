// Initialize the variable
// const character = 'Hello';
// const count = 8;

// Mathematical operations
// console.log(count +1);

// Array
// let rows = ["Naomi", "Quincy", "CamperChan"];

// Update the element of the array
// rows[2] = 10;
// console.log(rows);

// rows[rows.length - 1] = 10;
// console.log(rows);

// Push method
// let pushed = rows.push("freeCodeCamp");
// console.log(pushed);
// let popped = rows.pop();
// console.log(popped);
// console.log(rows);

const character = "Ari";
const count = 8;
const rows = [];

let inverted = true;

// TODO: a different kind of loop
for (let i = 1; i <= count; i ++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}




/*while(rows.length < count) {
  
  rows.push(padRow(rows.length + 1, count));
  
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

/*const numbers = [1, 2, 3];
const shifted = numbers.shift();
const unshifted = numbers.unshift(5)
console.log(shifted);
console.log(unshifted);
console.log(numbers);*/

let result = "";

console.log(result);

for (const row of rows) {
  result = result + "\n" + row;
}


function padRow(rowNumber, rowCount){
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
