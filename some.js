// some: kiểm tra array có thỏa điều kiện không, nếu thỏa trả về true
var numbers = [1, 7, 3, 2, 10];
var greaterThan10 = numbers.some(ele => ele > 10); // Arrow Function
console.log(greaterThan10); // false

var mixedArray = [1, null, 2, undefined, 3];
var filteredArray = mixedArray.filter(value => value != null);
console.log(filteredArray); // Output: false