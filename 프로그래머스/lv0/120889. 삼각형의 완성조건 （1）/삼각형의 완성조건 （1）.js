function solution(sides) {
    var answer = 0;
    let maxNumber = 0;
    let sum = 0;
    
    for(let value of sides) {
        if(maxNumber < value) {
            maxNumber = value;
        }
        sum += value;
    }
    
    if((sum - maxNumber) > maxNumber) {
        return 1
    } else {
        return 2
    }
    
    
    
    return answer;
}