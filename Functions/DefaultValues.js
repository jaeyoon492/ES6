//무언가 값이 정해지지 않았을때 쓸수있는 DefaultValue를 정해두면 좋다.
//사용 방식은 파라메터 옆에 명시하는 방법이 있다.
//aName이 없으면 대신 anon이 출력된다. anon = anonymous의 약어.
function sayHi(aName = "anon") {
    return "Hello " + aName;
}
console.log(sayHi());

const sayBye = ((aName = "anon") => "Bye " + aName);
console.log(sayBye());