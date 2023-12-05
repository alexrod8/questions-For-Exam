function modifyObject(obj) {
  obj.property = "modified";
}

let myObject = { property: "original" };
modifyObject(myObject);

console.log(myObject.property);
console.log(myObject);





