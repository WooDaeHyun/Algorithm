function solution(n, k) {
    let meetCount = n
    let drinkCount = k
    
    if(meetCount >= 10) {
        drinkCount = k - Math.floor(meetCount / 10)
    } 
    
    let meetPrice = meetCount * 12000
    let drinkPrice = drinkCount * 2000
    let totalPrice = meetPrice + drinkPrice
    
    return totalPrice
}