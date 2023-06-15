function solution(rny_string) {
    var answer = '';
    for(let value of rny_string) {
        if(value === 'm') {
            answer += 'rn'
        } else {
            answer += value
        }
    }
    
    return answer;
}