function solution(s){
    var answer = true;

    let arr = s.toLowerCase().split('')
    let pNum = 0
    let yNum = 0
    
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i] === 'p') {
            pNum++
        }else if(arr[i] === 'y') {
            yNum++
        }
    }

    return pNum === yNum ? true : false
    
    return answer;
}