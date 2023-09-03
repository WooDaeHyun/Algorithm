function solution(my_string) {
    var answer = '';
    let temp = ['a', 'e', 'i', 'o', 'u'];
    
    for(let x of my_string) {
        if(temp.includes(x)) continue;
        answer += x;
    }
    
    return answer;
}