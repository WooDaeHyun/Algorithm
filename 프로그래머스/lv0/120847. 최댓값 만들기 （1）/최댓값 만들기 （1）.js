function solution(numbers) {
    let maxNum = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const tempNum = numbers[i] * numbers[j]
            if(tempNum > maxNum) {
                maxNum = tempNum;
            }
        }
    }
    return maxNum;
}