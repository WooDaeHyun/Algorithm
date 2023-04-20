function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length > arr2.length) {
        return 1
    } else if (arr1.length < arr2.length) {
        return -1
    }
    
    if(arr1.length === arr2.length) {
        let arrOneSum = 0;
        let arrTwoSum = 0;
        for(let i = 0; i < arr1.length; i++) {
            arrOneSum += arr1[i];
            arrTwoSum += arr2[i];
        }
        
        if(arrOneSum > arrTwoSum) {
            return 1
        } else if(arrOneSum < arrTwoSum) {
            return -1
        } else {
            return 0
        }
        
    }
     
    
    return answer;
}