function solution(num) {
    var answer = 0;
    let temp = num
    let count = 0;
    
    if(temp === 1) {
        return answer
    }
    while(temp !== 1 && count < 500) {
        if(temp % 2 === 0) {
            temp = temp / 2
        } else {
            temp = (temp * 3) + 1
        }
        count++
        answer = count
        if(count === 500 && temp !== 1){
            return -1
        }
    }
    
    
    return answer;
}