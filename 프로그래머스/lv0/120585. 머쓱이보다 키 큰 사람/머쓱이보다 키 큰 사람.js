function solution(array, height) {
    var answer = 0;
    for(let x of array) {
        if(height < x) {
            answer++;
        }
    }
    return answer;
}