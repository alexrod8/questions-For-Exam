let number = 10

function add (num){ 
return num += 1;
}

add(number)
console.log(number);

//  What does line 8 output? Explain why in detail and identify the principle that this snippet demonstrates.

/*
Line 8 outputs `10` because when we pass the number variable to the add function, we are passing
a copy of its value. Any changes made to `num` parameter inside the function do not affect
the original `number` variable outside the function this demonstrates pass by value. 

*/

