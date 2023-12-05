/*
Examine the two snippets below. Explain why Snippet 1 outputs 6.28318, but Snippet 2 outputs 3.14159. 
Is num on line 1 and 4 the same variable in Snippet 1? 
How about Snippet 2? Explain how you came up with your answer. 
Lastly, identify which underlying concept is at play in Snippet 1 and which in Snippet 2.
*/
let num = 3.14159;

function doubler() {
  num *= 2;
  
}
doubler();

console.log(num);

/*
Snippet 1 outputs 6.28318 because the function doubler  is directly modifying the global variable num .
Snippet 2 outputs 3.14159 because the parameter num in the function doubler is shadowing the global variable num .
In snippet 1 the variables num  on line 1 and 4 are the same global variable, 
but in snippet 2 the variables num  on line 1 and 4 are two completely different variables. num declared on line 1 is a global variable and num declared on line 3 is a local variable.
*/