function solution(my_string) {
    var answer = 0;
    
    for(let value of my_string) {
        if(!isNaN(Number(value))){
            answer += Number(value);
        }
    }
    return answer;
}