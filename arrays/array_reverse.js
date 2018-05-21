function reverseArray (arr) {
    let reversed = [];
    for (var i = arr.length -1; i >= 0; i--) {
        reverseArray += arr[i];
    }
    return reversed;
}