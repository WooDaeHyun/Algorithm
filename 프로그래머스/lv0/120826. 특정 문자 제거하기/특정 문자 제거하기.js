function solution(my_string, letter) {
    var answer = '';
    
    for(let char of my_string) {
        if(char === letter) continue;
        answer += char;
    }
    
    return answer;
}