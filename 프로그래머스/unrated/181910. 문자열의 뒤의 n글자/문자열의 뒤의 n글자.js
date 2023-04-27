function solution(my_string, n) {
    var answer = '';
    const startIndex = my_string.length - n;
    for(let i = startIndex; i < my_string.length; i++) {
        answer += my_string[i]
    }
    return answer;
}