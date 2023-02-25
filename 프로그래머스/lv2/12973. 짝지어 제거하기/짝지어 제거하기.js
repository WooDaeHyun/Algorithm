function solution(s){
    var answer = 1;
    
    
    let sArray = s.split('');
    let tempArr = [];
    
    let firstString = sArray.shift();
    tempArr.push(firstString);
   
    while(sArray.length !== 0){
        let temp = sArray.pop();
        
        if(tempArr.length === 0){
            tempArr.push(temp);
        }
        else if(temp === tempArr[tempArr.length-1]){
            tempArr.pop();
        }else if(temp !== tempArr[tempArr.length-1]){
            tempArr.push(temp);
        }
    }
    if(tempArr.length !== 0){
        answer = 0;
    }

    return answer;
}