function removeLeftRight(arr, left, right) {
  // your code here
  if (left === true) {
    arr.shift();
  } else if (right === true) {
    arr.pop();
  } else {
    throw new Error('Invalid position, must be "left" or "right"');
  }
  return arr;
}
console.log(removeLeftRight([1, 2, 3, 4, 5], true, false)); // [2, 3, 4, 5]
console.log(removeLeftRight([1, 2, 3, 4, 5], false, true)); // [1, 2, 3, 4]
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], true, false)); // ["Budi", "Joko", "Tono"]
console.log(removeLeftRight(["Edo", "Budi", "Joko", "Tono"], false, true)); // ["Edo", "Budi", "Joko"]
