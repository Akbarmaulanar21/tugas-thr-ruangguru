function removeUnrelated(object, key) {
  //your code here
  if (object.hasOwnProperty(key)) {
    delete object[key];
  } else {
    throw new Error("Key not found in object");
  }
  return object;
}
const obj1 = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};
console.log(removeUnrelated(obj1, "address")); // { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

const obj2 = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};
console.log(removeUnrelated(obj2, "hobbies")); // { name: 'Edo', age: 20, address: 'Jakarta' }

const obj3 = {
  name: "Edo",
  age: 20,
  address: "Jakarta",
  hobbies: ["coding", "reading"],
};
console.log(removeUnrelated(obj3, "name")); // { age: 20, address: 'Jakarta', hobbies: ['coding', 'reading'] }
