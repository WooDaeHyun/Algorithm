function solution(fees, records) {
    var answer = [];
    let endTime = 1439;
    let temp = [];
    for(let x of records){
        temp.push(x.split(' '));
    }
    for(let i = 0 ; i < temp.length ; i++){
        let sum = '';
        for(let j = 0 ; j < 5 ; j++){
            if(!isNaN(temp[i][0][j]))
            sum += temp[i][0][j];
        }
        temp[i][0] = sum;
    }
    for(let i = 0 ; i < temp.length ; i++){
        let sum = 0;
        let hours = Number(temp[i][0][0] + temp[i][0][1]);
        let min = Number(temp[i][0][2] + temp[i][0][3]);
        temp[i][0] = (hours * 60) + min;
    }
    
    temp = temp.sort((a,b) => a[1]-b[1]);

    let defaultFee = fees[1];
    let defaultTime = fees[0];
    let overTime = fees[2];
    let overChargingFee = fees[3];

    function calculateFee(sumTime){
        if(defaultFee + Math.ceil((sumTime - defaultTime) / overTime) * overChargingFee > defaultFee){
            return defaultFee + Math.ceil((sumTime - defaultTime) / overTime) * overChargingFee
        }else{
            return defaultFee;
        }
    }

    let mapOne = new Map();
    let mapTwo = new Map();

    let carNumbers=[];
    
    for(let x of temp){
        if(!(carNumbers.includes(x[1]))) carNumbers.push(x[1]);
        if(mapOne.has(x[1])){
            let result = x[0] - mapOne.get(x[1]);
            if(mapTwo.has(x[1])){
                mapTwo.set(x[1], mapTwo.get(x[1]) + result);
            }else{
                mapTwo.set(x[1], result); 
            }
            mapOne.delete(x[1]);
        }else{
            mapOne.set(x[1],x[0]);
        };
    }
    console.log(mapOne);
    console.log(mapTwo);
    console.log(carNumbers);
   
    for(let [k,v] of mapOne){
        console.log(k,v);
        if(mapTwo.has(k)){
            mapTwo.set(k, mapTwo.get(k) + (endTime - v));
        }else{
            mapTwo.set(k, endTime - v);
        }
    }
    

    for(let x of carNumbers){
        answer.push(calculateFee(mapTwo.get(x)));
    }
    return answer;
}
