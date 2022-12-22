function solution(s) {
    var answer = '';
    let temp = s.split(' ')
    
    let max = Number.MIN_SAFE_INTEGER
    let min = Number.MAX_SAFE_INTEGER
    
    for(let x of temp) {
        if(Number(x) > max) {
            max = x
        }
        if(Number(x) < min) {
            min = x
        }
    }
    answer = `${min} ${max}`
    
    
    return answer;
}