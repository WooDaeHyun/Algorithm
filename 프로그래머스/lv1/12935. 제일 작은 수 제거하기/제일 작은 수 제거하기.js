function solution(arr) {
    var answer = [];
    
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i]
        }
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== min){
            answer.push(arr[i])
        }
    }
    if(answer.length === 0) {
        answer.push(-1)
    }
    
    return answer;
}