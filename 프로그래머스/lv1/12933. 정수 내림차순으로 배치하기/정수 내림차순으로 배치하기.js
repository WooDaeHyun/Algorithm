function solution(n) {
    
    let temp = String(n).split('').sort((a,b) => b-a).join('')
    return Number(temp);
}