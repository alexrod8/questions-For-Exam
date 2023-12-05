let time = 8;

if (time <= 11) {
  let greeting = "Good morning";
}

console.log(time);
console.log(greeting);

/*
Examine the code below. Why does line 7 output 8, 
and why does line 8 throw an error? Explain 
how you came up with your answer and identify the underlying 
principle that this snippet demonstrates

*/


/*
Line 7 outputs 8 because the global variable `time` was declared outside the scope so it's 
accesiable anywhere in the code. line 8 throws an error because let greeting was declared inside 
the if statment scope , so its not acessiable anywhere else but inside the if statment scope.
*/