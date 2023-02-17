function solution(t, p) {
    var answer = 0;
    let temp = '';
    
    for(let i = 0; i < t.length - (p.length - 1); i++) {
        for(let j = 0; j < p.length; j++) {
            temp += t[i + j];
        }
        if(Number(temp) <= Number(p)) {
            answer++;
        }
        temp = ''
    }
    
    return answer;
}