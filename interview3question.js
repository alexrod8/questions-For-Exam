const person = {
  name: 'Alice',
  age: 30
};

function updateAge(obj) {
  obj = { name: 'Alice', age: 31 };
}

updateAge(person);
console.log(person);

// what is logged to the console?