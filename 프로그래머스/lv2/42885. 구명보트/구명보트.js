function solution(people,limit){
    let answer;

    people.sort((a,b) => a-b);
    let count = 0;

    for(let i = 0, j = people.length-1 ; i < j ; j--){
        if(people[i] + people[j] <= limit){
            i++;
            count++;
        } 
    }
    return people.length-count;
}