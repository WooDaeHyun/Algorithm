function solution(my_string) {
    var answer = '';
    for(let value of my_string) {
        if(value === value.toUpperCase()) {
            answer += value.toLowerCase();
        } else {
            answer += value.toUpperCase();
        }
    }
    return answer;
}