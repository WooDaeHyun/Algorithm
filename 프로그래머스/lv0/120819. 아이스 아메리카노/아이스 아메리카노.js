function solution(money) {
    var answer = [];
    let coffeeCount = Math.floor(money / 5500);
    let exchangeMoney = money - (coffeeCount * 5500);
    answer.push(coffeeCount);
    answer.push(exchangeMoney);
    return answer;
}