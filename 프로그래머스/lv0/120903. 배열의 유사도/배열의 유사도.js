function solution(s1, s2) {
    var answer = 0;
    
    for(let value of s1) {
        if(s2.indexOf(value) !== -1) {
            answer++;
        }
    }
    
    return answer;
}