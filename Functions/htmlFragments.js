const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "Hello";
    div.append(h1);
    wrapper.append(div);
};

//백틱을 통해 복잡한 코드를 한번에 줄일 수 있다.
const minusWelcome = () => {
    const hello = "hello";
    const div = `
        <div class ="hello">
            <h1 class = "title">${hello}<h1>        
        <div>    
    `;
    wrapper.innerHTML = div;
};

setTimeout(minusWelcome, 5000);