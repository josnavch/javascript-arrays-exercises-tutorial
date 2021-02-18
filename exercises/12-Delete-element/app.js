const people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    const delArray = [...people];
  //  console.log(delArray)
    for(let i = 0; i < delArray.length; i++){
        if (delArray[i] === personName){
            delArray.splice(i,1);
        }
    }
    return delArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));