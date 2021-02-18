// Code goes here

function matrixBuilder (dim){
    var row = [];
    var col = []
     for(let i = 0; i < dim; i++){
         row.push(col)
     }
    for(let x = 0;x < dim; x++){
        col.push(1)
        }
        
    return row
}


// do not change anything from this line down
console.log(matrixBuilder(5))