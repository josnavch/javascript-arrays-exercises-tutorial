let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here

function filterByName (array, filtro){
    let newArray = [];
    let find = array.filter( function(value){
    //    let nombre = value.toLowerCase();
          let nombre = value;
   //     console.log(nombre)

        if (nombre.includes(filtro)){
             newArray.push(value)
        }
    });
     return newArray
}

console.log(filterByName(names, 'am'));