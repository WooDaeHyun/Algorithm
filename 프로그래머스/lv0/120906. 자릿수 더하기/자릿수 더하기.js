function solution(n) {
    var answer = 0;
    let temp = `${n}`
    
    for(let value of temp) {
        answer += Number(value)
    }
    
    return answer;
}