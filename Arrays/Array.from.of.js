const button = document.getElementsByClassName("btn");

Array.from(button).forEach(element => {
    element.addEventListener("click", () =>
        console.log("i have beem click!"))
});

console.log(button);


const name = Array.of("김김김", "이이이", "북북북", "박박박");

const nameIs = name.forEach(element => {
    console.log(`mynameis${element}입니다`);
})

console.dir(nameIs);