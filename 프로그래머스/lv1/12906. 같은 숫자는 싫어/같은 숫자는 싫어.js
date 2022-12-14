 function solution(arr) {
        var answer = [];
        let tempArr = [];

        tempArr.push(arr[0]);
        console.log(tempArr);

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] !== tempArr[tempArr.length - 1]) {
            tempArr.push(arr[i]);
          }
        }
        answer = tempArr;
        return answer;
      }