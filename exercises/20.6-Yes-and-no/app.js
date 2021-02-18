let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let array = [];
let newArray = theBools.map ( function (value){
    if(value === 1){
        array.push('wiki');
    } else {
        array.push('woko');
    }
    return array
});

console.log(newArray)