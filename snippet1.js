function hello() {
  console.log("hello");
}

function greet(greeting) {
  greeting();
}

greet(hello);