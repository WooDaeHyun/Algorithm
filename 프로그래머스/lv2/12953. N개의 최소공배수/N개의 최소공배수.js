function solution(arr) {
  for(var i=0; i<arr.length-1; i++) {
        var max = 1;
    var a = arr[i];
    var b = arr[i+1];
    arr[i+1] = a * b;
    for(var j=b; j>=1; j--) {
        if(a % j == 0 && b % j == 0) {
        max = j;
        break;
      }
    }
    arr[i+1] = arr[i+1] / max;
  }

    return arr[arr.length-1];
}