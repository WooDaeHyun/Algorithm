
function solution(n, k) {
    var answer = -1;

      
    function primeCheck(num){
        if(num === 1) return false;
        if(num === 2) return true;
        for(let i = 2; i < Math.ceil(Math.sqrt(num))+1 ; i++){
            if(num % i === 0) return false;
        }
        return true;
    }    

    let temp = n.toString(k); //211, 2 , 1,1, 11
    temp = temp.replace(/0/g,',').split(',');
    

    let cnt = 0;
    for(let x of temp){
        if(Number(x) === 2){
            cnt++;
            continue;
        }
        else if(primeCheck(Number(x)) && Number(x) !== 0){
            cnt++;
        }
    }
    
    
    answer = cnt;
    
    
    
    return answer;
}
