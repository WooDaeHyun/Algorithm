function solution(my_string) {
    var answer = [];
    
    for(let i of my_string) {
        if(!isNaN(Number(i))) {
            answer.push(Number(i))
        }
    }
    
    answer.sort((a,b) => a- b)
    
    return answer;
}