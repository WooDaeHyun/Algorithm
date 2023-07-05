function solution(myString, pat) {
    var answer = 0;
    myString = myString.toUpperCase();
    pat = pat.toUpperCase();
    
    if(myString.includes(pat)) {
        return 1
    }
    
    return answer;
}