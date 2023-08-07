function solution(n, k) {
    var answer = [];
    
    let count = 1;
    let temp = k;
    
    while(k * count <= n) {
        let computed = count * k;
        answer.push(computed);
        temp = computed;
        count++;
    }
    
    return answer;
}