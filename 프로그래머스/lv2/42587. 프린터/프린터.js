function solution(priorities, location) {
    var answer = 0;
    
    let tmp = [...priorities];
    let max = 0;

    while(tmp.length > 0){
        max = Math.max(...tmp);
        if(tmp[0] !== max){
            tmp.push(tmp.shift());
            location > 0 ? location-- : location = tmp.length-1;
        }else{
            tmp.shift();
            answer++;
            if(location === 0) return answer;
            location > 0 ? location-- : location = tmp.length-1;
        }
    }
}

