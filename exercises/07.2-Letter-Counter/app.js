let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
for (const propiedad in par){
    const letra = par[propiedad].toLowerCase();
    if (letra == " ") {

    } else{
        if(counts[letra] == undefined){
        //    console.log("Found "+letra+" for the first time")
            counts[letra] = 1;
        } else {
       //     console.log("Found "+letra+" more than once")
            counts[letra] = counts[letra] + 1;
        }
    }
}
console.log(counts);