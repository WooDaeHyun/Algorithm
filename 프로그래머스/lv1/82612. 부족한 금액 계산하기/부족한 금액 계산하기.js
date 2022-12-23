function solution(price, money, count) {
    var answer = -1;
    let tempPrice = 0;
    let n = 1
    let tempCount = 1;
    
    while(n <= count) {
        tempPrice = tempPrice + (price * tempCount);
        tempCount++;   
        n++;
    }
    
    
    answer = tempPrice - money
    
    

    return answer > 0 ? answer : 0 
}