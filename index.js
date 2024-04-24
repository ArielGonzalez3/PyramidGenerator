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

for (let i = 0; i < count; i = i + 1) {
  rows.push(character);
  character.repeat(i + 1);
}

let result = "";

console.log(result);

for (const row of rows) {
  result = result + "\n" + row;
}

function padRow(name){
  return name;
}

const call = padRow("Ari");

console.log(call);
