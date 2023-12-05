/*
What will line 8 in the code snippet below output? Explain why that is, in the context of the 
relationship between the greet and arr variables. 
Identify the two main underlying principles that this snippet demonstrates
*/

let greet = ["Knock"];

function repeatThrice(arr) {
  arr.push("Knock", "Knock");
}

repeatThrice(greet);
console.log(greet);


/*
line 8 would output ["Knock", "Knock", "Knock"] because of pass by refrence the parameter(arr)
refrences the same global variable outside the scope any modifcations done to the variable inside the function
also affect the outer varibale too. 
*/