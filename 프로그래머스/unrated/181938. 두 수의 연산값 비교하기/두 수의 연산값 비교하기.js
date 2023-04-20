function solution(a, b) {
    var answer = 0;
    let firstState = Number(a.toString() + b.toString());
    let secondState = 2 * a * b;
    if(firstState >= secondState) {
        answer = firstState
    } else {
        answer = secondState
    }
    
    return answer;
}