   function solution(progresses, speeds) {
    var answer = [0];
    let days = [];
    
    let idx = 0;
    let cnt =0;
    while(idx < speeds.length){
        progresses[idx] += speeds[idx];
        cnt++;
        if(progresses[idx] >= 100){
            days.push(cnt);
            cnt = 0;
            idx++;
        }
    }
    
    let maxday = days[0];
    let answerIdx = 0;
    for(let i = 0; i < days.length ; i++){
        if(days[i] <= maxday){
            answer[answerIdx]++;
        }else{
            maxday = days[i];
            answerIdx++;
            answer[answerIdx] = 1;
        }
    }
    return answer;
}