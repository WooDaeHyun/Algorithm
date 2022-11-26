 function solution(x) {
        let num = 0;
        const temp = String(x).split("");

        for (let x of temp) {
          num += parseInt(x);
        }

        if (x % num === 0) {
          return true;
        } else {
          return false;
        }
      }