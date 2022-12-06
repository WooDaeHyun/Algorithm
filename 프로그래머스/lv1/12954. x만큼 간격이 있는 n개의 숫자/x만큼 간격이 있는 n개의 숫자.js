function solution(x, n) {
    var answer = [];
        
    
    for(let i = 1; i <= n; i++) {
        let firstNum = x;
        answer.push(firstNum * i)
    }
    
    
    return answer;
}