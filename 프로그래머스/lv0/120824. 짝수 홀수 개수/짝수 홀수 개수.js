function solution(num_list) {
    var answer = [];
    
    let count1 = 0;
    let count2 = 0;
    
    for(let x of num_list) {
        if(x % 2 === 0) {
            count1++;
        } else {
            count2++;
        }
    }
    
    answer.push(count1);
    answer.push(count2);
    
    
    return answer;
}