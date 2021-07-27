const isEmail = (email) => email.includes("@");
const email = "audwodbs492@gmail.com";

console.log(isEmail(email));

// boolean String.includes메소드 인자 안에 includes(delimeter)가 존재하면 true를 리턴한다.

const CC_NUMBER = "6060";

const displayName = `${"*".repeat(10)}${CC_NUMBER}`;

console.log(displayName);

// String.repeat(number) = 어떤 문자나 문자열을 인수 만큼 반복해준다. 

const name = "Mr. jaeyoon";

console.log(name.startsWith("Mr"));
console.log(name.endsWith("Mr"));

//String.startsWith(String) 검사할 문자열의 시작이 인자값과 같은지 비교후 같으면 true
//String.endsWith(String) 검사할 문자열이 인자값으로 끝나는지 비교후 같으면 true

console.log(email.startsWith("audwodbs492"));
// 이메일 유효성 검사에도 사용할수 있다.