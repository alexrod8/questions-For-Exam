let greet = "Knock";

function repeatThrice(str) {
  return str + str + str;
}

repeatThrice(greet);
console.log(greet);
//Examine the code below. What does line 8 output? Explain why in detail 
//and identify the underlying principle that this snippet demonstrates.

/*
 Line 8 outputs `knock` because in the function because were not assgining or
 reasggining it to a variable were simply returning it to the function
 so no modifcations get done to the global variable `greet`.

*/