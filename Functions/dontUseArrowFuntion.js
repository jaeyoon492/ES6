const button = document.querySelector("button");

//오브젝트 안에 있는 애로우함수에 this키워드가 있다면 . 외부에서 호출하여도 작동하지 않는다.
const nico = {
    name: "Nico",
    age: 27,
    addYear: () => {
        this.age++;
    }
};

//기본문법의 함수는 this가 잘 작동한다.
//오브젝트 안에 함수를 정의할때는 앞에 function을 붙이지 않는다.
// const nico = {
//     name: "Nico",
//     age: 27,
//     addYear() {
//         this.age++;
//     }
// };


console.log(nico.age);
nico.addYear();
nico.addYear();
nico.addYear();
console.log(nico.age);




//애로우함수를 사용할땐 본문에 this를 사용하면 안된다.
button.addEventListener("click", () => {
    this.style.backgroundColor = "red";
});


//다른곳에서 호출 하더라도 애로우함수 내부에 this키워드가 존재하면 작동하지 않는다.
const handleClick = () => {
    console.log(this);
};
button.addEventListener("click", handleClick);


//기본 방식의 함수 호출시에는 this키워드를 사용해도 상관이 없다.
function handleClick2() {
    console.log(this);
}
button.addEventListener("click", handleClick2);
