function solution(order) {
    var answer = 0;
    
    for(let x of order) {
        if(x.includes('americano') || x.includes("anything")) {
            answer += 4500
        } else {
            answer += 5000
        }
    }
    return answer;
}