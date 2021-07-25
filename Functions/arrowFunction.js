const name = ["name", "lynn", "flynn"];


// 중괄호를 사용하지 않고 본문을 적으면 자동으로 리턴을 해준다.
const heart = name.map(item => item + "😍");
console.log(heart);
//["name😍", "lynn😍", "flynn😍"]

//중괄호를 사용해 본문을 넣을 때는 리턴이 필요하면 리턴을 명시해 주어야 한다. (안그러면 리턴해주지 않는다.)
const heart2 = name.map(item => {
            item + "🖕";
});
console.log(heart2);
// [undefined, undefined, undefined]


const heart3 = name.map(item => {
    return item + "🖕";
});
console.log(heart3);
//["name🖕", "lynn🖕", "flynn🖕"]


//매개변수를 하나만 사용할땐 괄호를 제거한다. 그러나 매개변수가 2개 이상이라면 괄호를 사용해서 명시해야 한다.
const heart4 = name.map((item, index) => {
    return item + index + "❌";
});
console.log(heart4);
//["name0❌", "lynn1❌", "flynn2❌"]