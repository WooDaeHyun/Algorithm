function solution(n_str) {
    var answer = [];
    let temp = n_str.split('');
    
    while(temp[0] === '0') {
        temp.shift();
    }
    
    answer = temp.join('')
    
    return answer;
}