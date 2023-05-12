function solution(my_string) {
    var answer = '';
    let vowelArr = ['a', 'e', 'i', 'o', 'u'];
    
    for(let x of my_string) {
        if(vowelArr.includes(x)) {
            continue;
        }
        answer += x;
    }
    
    return answer;
}