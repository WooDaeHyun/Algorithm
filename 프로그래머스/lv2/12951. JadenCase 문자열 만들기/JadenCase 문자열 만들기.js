function solution(s) {
    var answer = '';
    const temp = s.toLowerCase()
    
    answer += temp[0].toUpperCase()
    for(let i = 1; i < temp.length; i++){
        if(temp[i-1] === ' '){
            answer += temp[i].toUpperCase()
        } else {
            answer += temp[i]
        }
    }
    
    
    
    
    return answer;
}