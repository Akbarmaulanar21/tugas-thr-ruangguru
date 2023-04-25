function addNewElementUpDown(array, element, position) {
  //your code here!
  function addNewElementUpDown(array, element, position) {
  if (position === "up") {
    array.unshift(element);
  } else if (position === "down") {
    array.push(element);
  } else {
    throw new Error('Invalid position, must be "up" or "down"');
  }
  return array;
}

console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, "up")); // [6, 1, 2, 3, 4, 5]
console.log(addNewElementUpDown([1, 2, 3, 4, 5], 6, "down")); // [1, 2, 3, 4, 5, 6]
console.log(addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", "up")); // ["Rudi", "Edo", "Budi", "Joko", "Tono"]
console.log(
  addNewElementUpDown(["Edo", "Budi", "Joko", "Tono"], "Rudi", "down")
); // ["Edo", "Budi", "Joko", "Tono", "Rudi"]
}
