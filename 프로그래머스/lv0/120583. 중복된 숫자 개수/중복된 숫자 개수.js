function solution(array, n) {
    var answer = 0;
    
    for(let x of array) {
        if(n === x) {
            answer++;
        }
    }
     
    return answer;
}