function insertShiftArray(arr, num){
    
  let newArray = [];
  let sweetSpot = Math.ceil(arr.length/2);
    
  for(let i=0; i < arr.length+1; i++){
    if(i < sweetSpot){
      newArray[i] = arr[i];
    }
    if(i == sweetSpot){
      newArray[i] = val;
    }
    else if(i > sweetSpot){
      newArray[i] = arr[i-1];
    }
  }
  return newArray;
}

insertShiftArray();