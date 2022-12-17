function solution(arr, divisor) {
    var answer = [];
    
    let temp = arr.sort((a,b) => a-b)
    
    for(let x of temp) {
        if(x % divisor === 0) {
            answer.push(x)
        }
    }
    if(answer.length === 0) {
        answer.push(-1)
    }
    
    return answer;
}