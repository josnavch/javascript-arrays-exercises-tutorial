let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const state = {totalSlots:0, availableSlots:0, occupiedSlots:0}

function getParkingLotState (matrix){
     for(let i = 0; i < matrix.length; i++){
         for(let x = 0;x < matrix[i].length; x++){
             console.log(matrix[i][x])
            switch (matrix[i][x]){ 
                case 1:
                    state.occupiedSlots = state.occupiedSlots + 1
                    break;
                case 2:
                    state.availableSlots = state.availableSlots + 1 
                    break;
            }; 
        }
     }
      state.totalSlots = state.occupiedSlots + state.availableSlots
        
    return state;
}

console.log(getParkingLotState(parking_state))