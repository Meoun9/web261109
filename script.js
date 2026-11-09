/*
//document.write("외부 스크립트 방법"); // 보안 상 문제가 있어서 안 씀

console.log("여기 부분은 웹 페이지가 아니라 콘솔에 출력이 됩니다.");

let dan = 3;

console.log("=== '구구단 3단' ===");
for (let i = 1; i < 10; i++){
console.log(`${dan} * ${i} = ${dan*i}`) // ` `
};

// 같다는 ===

if (dan === '3'){
    console.log("3단이 맞다");
} else {
    console.log("3단이 아니다");
}

// JS는 C랑 비슷하다.

let arr = [80, 70, "gd", 90, 60];
console.log(arr);
console.log(arr[2]);

let stdScore = {
    korean : 80,
    english: 70, 
    math : 90, 
    science : 60
};
console.log(stdScore);
console.log(stdScore.math);

stdScore.name = "홍길동";
console.log(stdScore);
*/

// script.js : 내 영화 평점 통계(콘솔판)
// 작성자 : 김시윤(2651013)

// Step 1.
const titles = ["스파이더맨: 브랜드 뉴 데이", "미션 임파서블: 고스트 프로토콜", "어벤져스: 엔드게임", "어벤져스: 인피니티 워", "어벤져스: 에이지 오브 울트론"];
const ratings = [8.5, 7.1, 8.2, 8.2, 7.2];
const years = [2026, 2011, 2019, 2018, 2015];

// 즉시 실행 함수 만들기
(function(){
    console.log("나는 함수다. 실행되었다.");
})();
//화살표 함수로 함수 정의 하기
const gugudan = dan => {
    for(let i =1 ; i<=9; i++){
        console.log(`${dan} * ${i} = ${dan*i}`);
    }
}
gugudan(7);

const add = (num1, num2) => num1 + num2;
console.log(add(1234,5678));


let sum = 0;
for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
}
console.log("합계:", sum);

// Step 2.
const average = sum / ratings.length;
console.log("평균:", average);

// Step 3. ~ 4.
let max = ratings[0];
let maxIndex = 0;
let count = 0;

for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
        max = ratings[i];
        maxIndex = i;
    }
    if (ratings[i] >= 8) {
        count++;
    }
}
console.log("최고:", titles[maxIndex], max);
console.log("8점 이상:", count + "편");

// Step 5.
let label;
for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8.5) {
        label = "명작";
    } else if (ratings[i] >= 7) {
        label = "추천";
    } else {
        label = "보통";
    }
    console.log(titles[i] + " (" + years[i] + ") : " + ratings[i] + " " + label);
}

//Step 6.
const avgText = average.toFixed(1);
const best = titles[maxIndex];
alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);