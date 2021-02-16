var arr = [45,67,87,23,5,32,60];

//Your code here.
let newArr = [];
for(let i = arr.length -1; i >= 0; i--){
    let x = arr[i];
    newArr.push(x);
}
console.log(newArr);