function solution(num_list) {
    var answer = 0;
    let t1 = '';
    let t2 = '';
    for(let value of num_list) {
        if(value % 2 === 0) {
            t2 += value
        } else {
            t1 += value
        }
    }
    
    answer = Number(t1) + Number(t2);
    return answer;
}