// 스타일드 컴포넌트
const styled = aElement => {
    const el = document.createElement(aElement);
    return args => {
        console.log(args)
        const styles = args;
        el.style = styles;
        return el;
    };
};

const title = styled("h1")
`border-radius: 10px; color: blue;`

console.log(title);
