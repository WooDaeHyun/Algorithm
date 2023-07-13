function solution(array) {
    var answer = [];
    let biggestNum = Math.max(...array);
    let biggestNumIndex = array.indexOf(biggestNum);
    answer.push(biggestNum);
    answer.push(biggestNumIndex);
    
    
    
    return answer;
}