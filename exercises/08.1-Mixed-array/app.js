var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newArr = [];
let x = ""
for(let i = 0; i < mix.length; i++){
    x = typeof mix[i]
    newArr.push(x);
}
console.log(newArr)