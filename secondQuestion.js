// Here we have a snippet with nested functions. 
//What happens when the code runs? Explain why we get this result.

let color = "blue";

function func1() {
  let size = "large";

  function func2() {
    let number = "five";
  }
  
  func2();
  
  console.log(color);
  console.log(size);
  console.log(number);
}

func1();
/*
The first output is blue because the variable color is in global scope that can be accessed from anywhere in the code.
The second output is large because we are calling the variable size inside the function local scope where it was declared.
The third output is a reference error because we're trying to call number that has only been defined in the nested function func2 and is therefore out of scope.

*/