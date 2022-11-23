    function solution(s) {
        var answer = true;
        const tempArray = [];

        if (s[0] === ")") return false;

        for (let x of s) {
          if (x === "(") {
            tempArray.push(x);
          } else {
            tempArray.pop();
          }
        }

        return tempArray.length ? false : answer;
      }