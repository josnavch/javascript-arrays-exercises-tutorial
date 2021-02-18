function lyricsGenerator (array){
    let counter = 0;
    let stribillo = "!!!Break the base!!! "
    let cancion = ""
    let i = 0;
    for( i in array){
        if (array[i] == 0){
            cancion += "Boom "
        } else{
            if (array[i] == 1){
                cancion += "Drop the base "
                counter++
                if (counter == 3){
                    cancion += stribillo;
                };
            };
        };
    };
    return cancion
};


// test Data
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))