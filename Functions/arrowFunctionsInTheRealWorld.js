const email = [
    "nco@naver.com",
    "masd@yahoo.com",
    "ngowe@gmail.com",
    "123123123@naver.com",
    "안녕하새요@gmail.com"
];

const foundMail = email.find(item => item.includes("@naver.com"));

const noGamil = email.filter(item => !item.includes("gmail.com"));

console.log(foundMail);
console.log(noGamil);


//array.map = 배열의 인덱스를 순차적으로 돌며 주어진 콜백 함수를 호출하고, 그 반환값을 모은 새로운 배열을 반환합니다.
const splitgol = email.map(email => email.split("@")[0]);


//오브젝트 타입으로 반환받고 싶을때는 브라켓을 사용해야 하는데 브라켓을 ( )로 한번 감싸면 implicit return(자동반환)이 가능하다.
const splitGolObj = email.map((email, index) => ({
    username: email.split("@")[0],
    index: index
}));


console.log(splitgol);
console.table(splitGolObj);