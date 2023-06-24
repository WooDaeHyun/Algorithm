function solution(my_string, is_prefix) {
    var answer = 1;
    for(let i = 0; i < is_prefix.length; i++) {
        console.log(1)
        if(my_string[i] !== is_prefix[i]) {
            return 0
        }
    }
    return answer;
}