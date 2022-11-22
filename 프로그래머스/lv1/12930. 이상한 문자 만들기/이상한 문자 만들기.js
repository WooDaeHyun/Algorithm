      function solution(s) {
        var answer = "";
        const tempArr = s.split(" ");

        for (let x of tempArr) {
          for (let i = 0; i < x.length; i++) {
            if (i === 0 || i % 2 === 0) {
              answer += x[i].toUpperCase();
            } else {
              answer += x[i].toLowerCase();
            }
          }
          answer += " ";
        }
        return answer.slice(0, answer.length - 1);
      }