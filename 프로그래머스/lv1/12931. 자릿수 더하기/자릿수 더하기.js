function solution(n)
{
    var answer = 0;
    const temp = String(n).split('')
    
    for(let x of temp) {
        answer += parseInt(x)
    }
    
    

    return answer;
}