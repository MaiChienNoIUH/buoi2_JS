//Map: thực hiện tác vụ array
var a = [9, 7];
var cbfn = (item) => {
    return item / 2;
}
var newArr = a.map(cbfn);
console.log(newArr);


var weight = [45, 33, 66];
var newArray1 = weight.filter(function(ele, id) { //(element, index, array) // CallBack
    return this;
});
console.log(newArray1);