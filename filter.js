var weight = [45, 55.5, 60, 35];

// Hàm filter dùng để lọc ra những cân nặng lớn 50 kg và nằm ở vị trí thứ 2 trong mảng
var newArray1 = weight.filter(function(ele, id) { //(element, index, array) // CallBack
    return ele >= 50 && id == 1;
});
console.log(newArray1); //55.5

//hoăc 
var newArray2 = weight.filter(weight => weight >= 50); // Arrow Function
console.log(newArray2);

//Lọc các gía trị "Null" hoặc "underfined" ra khỏi array
var mixedArray = [1, null, 2, undefined, 3];
var filteredArray = mixedArray.filter(value => value != null);
console.log(filteredArray); // Output: [1, 2, 3]