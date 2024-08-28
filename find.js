// find() là một phương thức của mảng, giúp tìm và trả về phần tử đầu tiên trong mảng thỏa mãn một điều kiện nhất định.
// Nếu không có phần tử nào thỏa mãn điều kiện, find() trả về undefined.
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(number => number > 10);
console.log(found); // Output: 12

const numbers2 = [5, 12, 8, 130, 44];
const found2 = numbers2.find(number => number === 130);
console.log(found2); // Output: 130

const numbers3 = [5, 12, 8, 130, 44];
const found3 = numbers3.find(number => number === 1000);
console.log(found3); // Output: undifined