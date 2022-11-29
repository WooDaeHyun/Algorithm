function solution(arr) {
    var answer = 0;
    for(let x of arr) {
        answer += x;
    }
    answer = answer / arr.length
    return answer;
}