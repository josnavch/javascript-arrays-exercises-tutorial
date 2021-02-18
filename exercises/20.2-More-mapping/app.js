

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
let newArray = 0;
var myFunction = myNumbers.map(function(value){
    newArray = value * 3;
    return newArray; 
});

console.log(myFunction);