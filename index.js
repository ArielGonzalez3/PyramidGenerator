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

const character = "#";
const count = 8;
const rows = [];

// TODO: a different kind of loop
/*for (let i = 1; i <= count; i ++) {
  rows.push(padRow(i, count));
}*/




/*while(rows.length < count) {
  
  rows.push(padRow(rows.length + 1, count));
  
}*/

/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

const numbers = [1, 2, 3];
const unshifted = numbers.unshift(5)
console.log(unshifted);

let result = "";

console.log(result);

for (const row of rows) {
  result = result + "\n" + row;
}


function padRow(rowNumber, rowCount){
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
