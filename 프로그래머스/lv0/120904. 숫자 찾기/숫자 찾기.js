function solution(num, k) {
    var answer = -1;
    let temp = String(num).split('');
    
    for(let i = 0; i < temp.length; i++) {
        if(temp[i] === String(k)) {
            answer = i + 1;
            break;
        }
    }
    
    return answer;
}