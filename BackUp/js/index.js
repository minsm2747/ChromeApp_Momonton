// alert('I`m Working. I`m Js. Im Beautiful.  I`m worth it ');
// console.log('I`m Working. I`m Js. Im Beautiful.  I`m worth it ');

// let a = 221;
// let b =  a - 5;
//  a = 4;

// console.log(b, a);


// var = varible
    // var a = 221;
    // var b =  a - 5;
    //  a = 4;

    // console.log(b, a);


// String
    // const what = "Jisu";
    // console.log(wat);

// console.log(what);

// Boolean = True of False
    // const wat = true;
    // console.log(wat);

// const Mon = "월요일";
// const Tue = "화요일";
// const Wed = "수요일";
// const Thu = "목요일";
// const Fri = "금요일";
// const Sat = "토요일";
// const Sun = "일요일";
// const daysOfWeek = ["Mon, Tue, Wed, Thu, Fri, Sat, Sun"]; // [] = array

// console.log(daysOfWeek);

// const JisuInfo = ["LimJiSu", "25", "Man", "1996-06-18"];

// console.log(JisuInfo);

// Array = [], Object = {}, Object안에 Array를 포함 할 수 있고 
// 반대로 Array 내부에 Object를 포함 할 수도 있다.
// const JisuInfo = {
//     Name: "LimJiSu",
//     Age: "25",
//     Grender: "Man",
//     Date: "1996-06-18",
//     LikeMovies: ["신 과 함께", "퍼펙트 게임", "베테랑", "택시 운전사"],
//     LikeFoods: [{
//         name: "삼겹살", 
//         fatty: true
//     },

//     {
//         name: "목살",
//         fatty: false
//     },

//     {
//         name: "갈비",
//         fatty: false
//     },

//     {
//         name: "보쌈",
//         fatty: true
//     }],
//     LikeSports: ["BaseBall"]
// };

// console.log(JisuInfo.name);
//     JisuInfo.name = "홍길동";

// console.log(JisuInfo);

// function sayHello(Name, Age) {
//     console.log(`Hello ${Name} You Are ${Age} years old`);
// }

// sayHello("Jisu", 25);

function sayHello(Name, Age) {
    return `Hello ${Name} You Are ${Age} years old`
}

const greetsayHello = sayHello("Jisu", 25);

console.log(greetsayHello);

const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

console.log(calculator);
const plus = calculator.plus(5, 5);
console.log(plus);

console.log(document);