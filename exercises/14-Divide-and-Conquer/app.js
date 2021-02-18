let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList (list_of_numbers){
    let odd = [];
    let even = [];
    let newArray = [];

  //  console.log(list_of_numbers.length);
    for(let i = 0; i < list_of_numbers.length; i ++){
       // console.log(list_of_numbers[i]);
        if (list_of_numbers[i]%2 === 0 ){
          //  console.log("Is number "+list_of_numbers[i]+" is even")
            even.push(list_of_numbers[i]);
        } else{
            //console.log("Is number "+list_of_numbers[i]+" is odd")
            odd.push(list_of_numbers[i]);
        }
    }
    newArray = odd.concat(even);
    
    return newArray
  
}

console.log(mergeTwoList(list_of_numbers))
