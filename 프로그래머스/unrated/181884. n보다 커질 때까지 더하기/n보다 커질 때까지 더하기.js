function solution(numbers, n) {
    var answer = 0;
    for(let value of numbers) {
        if(answer <= n) {
            answer += value;
        }
    }
    
    return answer;
}