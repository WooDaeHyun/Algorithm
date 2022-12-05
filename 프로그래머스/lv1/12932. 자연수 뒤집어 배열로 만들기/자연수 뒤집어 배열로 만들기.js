function solution(n) {
    var answer = [];
    
    let temp = String(n).split('').reverse()
    for(let i = 0; i < temp.length; i++) {
        answer.push(Number(temp[i]))
    }
    return answer;
}