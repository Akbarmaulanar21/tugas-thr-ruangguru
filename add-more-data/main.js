function addMoreData(object, key, value) {
  // your code here
  return { ...object, [key]: value };
}

const person = { name: "Edo", age: 20 };

const personWithAddress = addMoreData(person, "address", "Jakarta");
console.log(personWithAddress); // { name: 'Edo', age: 20, address: 'Jakarta' }

const personWithHobbies = addMoreData(person, "hobbies", ["coding", "reading"]);
console.log(personWithHobbies); // { name: 'Edo', age: 20, hobbies: ['coding', 'reading'] }

const personWithMarriedStatus = addMoreData(person, "isMarried", false);
console.log(personWithMarriedStatus); // { name: 'Edo', age: 20, isMarried: false }
