const friends = [1, 2, 3, 4];

const family = ["a", "b", "c"];

console.log([...friends, ...family]);

const friends1 = ["nico","lynn"];

const newFriends1 = [...friends1,"dal"];

console.log(newFriends1);

const human = {
    name:"nico",
    age:"27",
    hello:()=>{"HELLO!"}
}

console.log({...human, password:123})

console.log(human.hello);