let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames = allNames.filter( function(name){
    if (name.match (/R.*/)){
          return name
    }

});

console.log(resultingNames);