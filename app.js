// app.js : 영화 배열을 다루는 함수 6개 / 김시윤(2651013) / 10주차
// average : 영화 배열 ⇒ 평균 평점(숫자)
function average(list) {
    let sum = 0;
    for (const m of list) {
        sum += m.rating;
    }
    return sum / list.length;
}
console.log("평균:", average(movies));