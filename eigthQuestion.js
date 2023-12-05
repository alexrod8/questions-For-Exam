/*
The following two snippets look very similar, but produce two different outputs. 
Describe what the increment function does in each snippet, 
and explain the underlying cause of the differing outputs?
*/

/*
In Snippet 1 it outputs 1 because the increment function gets the object `data` and increments its `count` variable value 
by 1 this an example of pass by refrence because its working with the same global variable outside the function
. In Snippet 2 the it ouputs 0 because the increment function is getting the copy of the variable count because its 
value is a primitve value so its only getting modfifed in the function scope not anywhere else this is pass by value.

*/

// let data = { count: 0 };

// function increment(data) {
//   data.count += 1;
// }

// increment(data);
// console.log(data.count);


// ------------------------------------------------------------------

let data = { count: 0 };

function increment(count) {
  return (count += 1);
}

increment(data.count);
console.log(data.count);