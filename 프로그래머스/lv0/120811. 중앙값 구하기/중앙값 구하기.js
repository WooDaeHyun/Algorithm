function solution(array) {
    var answer = 0;
    let temp = array.sort((a, b) => a - b);
    answer = array[parseInt(array.length / 2)];
    
    return answer;
}