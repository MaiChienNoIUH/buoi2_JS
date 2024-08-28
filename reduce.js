// reduce() trong JavaScript là một công cụ mạnh mẽ để xử lý các mảng. 
// Nó cho phép bạn "giảm" (reduce) mảng thành một giá trị duy nhất bằng cách áp dụng 
// một hàm callback lên từng phần tử của mảng, cùng với một giá trị tích lũy.

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15


const numbers1 = [1, 2, 3, 4, 5];
const max = numbers1.reduce(function(accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
});
console.log(max); // Output: 5

//Đếm số lần xuất hiện của phần tử
const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce(function(accumulator, fruit) {
    accumulator[fruit] = (accumulator[fruit] || 0) + 1;
    return accumulator;
}, {});
console.log(fruitCount); // Output: { apple: 3, banana: 2, orange: 2 }