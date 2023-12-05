/*
Which variable names are in the global scope, and which are local to the scope inside the baz function?
Make sure you name the variables in each of the two scopes.

*/
let foo = 24;

function baz(foo) {
  quax = 3;
  let qux = { foo: foo + quax };
  return qux;
}

foo = baz(foo, 25);

/*
The variables in the global scope are `foo`,`baz`, and `quax`,. The variables in the local scope
are qux and parameter (foo) because they were declared inside the function scope.

*/