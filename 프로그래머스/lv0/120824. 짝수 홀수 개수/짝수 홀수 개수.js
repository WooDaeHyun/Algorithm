function solution(num_list) {
    var answer = [];
    let evenCount = 0;
    let oddCount = 0;
    for(let x of num_list) {
        if(x % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    answer.push(evenCount);
    answer.push(oddCount);
    
    return answer;
}