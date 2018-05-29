BinarySearch = (arr, key) => {
  
  var findIndex = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if(num == arr[i]) {
      return i;
    } else {
      findIndex++;
      if (findIndex == arr.length) {
        return -1;
      }
    } 
  }
}
