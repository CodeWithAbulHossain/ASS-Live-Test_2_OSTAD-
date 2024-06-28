// 1) Create a function that takes voltage and current and returns the calculated power.  Ex- circuitPower(110, 3) ➞ 330

// function circuitPower1(voltage1, current1) {
//   return voltage1 * current1;
// }

// circuitPower1(110, 3);
// console.log(circuitPower1(110, 3));

function circuitPower2(voltage2, current2) {
  if (typeof voltage2 !== "number" || typeof current2 !== "number") {
    return "Both voltage and current must be numbers";
  }
  return voltage2 * current2;
}
circuitPower2(110, 3);
circuitPower2(110, "three");
console.log(circuitPower2(110, 3));
console.log(circuitPower2(110, "three"));

// 2) Write a JavaScript function named ‘findMaxNumber’ that takes an array of numbers as an argument and returns the maximum number in the array. If the array is empty, the function should return null.
function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  return Math.max(...numbers);
}
findMaxNumber([22, 55, 36, 87, 96, 111, 475, 69]);
findMaxNumber([]);
console.log(findMaxNumber([22, 55, 36, 87, 96, 111, 475, 69]));
console.log(findMaxNumber([]));

// 3) Write a JavaScript function named ‘mergeArrays’ that takes two arrays as arguments and returns a new array.

function mergeArrays(arr1, arr2) {
  let newArr = [...arr1, ...arr2];
  return newArr;
}
let mergedArray = mergeArrays([25, 36, 57, 89], [11, 36, 77, 99]);
mergeArrays([25, 36, 57, 89], [11, 36, 77, 99]);
console.log(mergedArray);

// 4) Create a function ‘arrayValuesTypes’ that takes an array and returns the types of values (data types) in a new array. Ex- arrayValuesTypes([1, 2, "null", []]) ➞ ["number", "number", "string", "object"]

// function arrayValuesTypes(arr) {
//   let dataTypeArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     dataTypeArr.push(typeof arr[i]);
//   }
//   return dataTypeArr;
// }
// console.log(arrayValuesTypes([2, 5, "null"]));

function arrayValuesTypes(arr) {
  return arr.map((value) => typeof value);
}
arrayValuesTypes([1, 2, "null", []]);
arrayValuesTypes([2, 5, "null"]);
arrayValuesTypes([true, {}, 42, "hello", null, undefined]);
console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes([2, 5, "null"]));
console.log(arrayValuesTypes([true, {}, 42, "hello", null, undefined]));
