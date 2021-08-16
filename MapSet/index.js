let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

console.log(recipeMap); //Map(3) { 'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50 }

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);//cucumber tomatoes onion
}

for (let amount of recipeMap.values()) {
    console.log(amount);//500 350 50
}

for (let entry of recipeMap) {
    console.log(entry); //[ 'cucumber', 500 ] [ 'tomatoes', 350 ] [ 'onion', 50 ]
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`) //cucumber: 500 tomatoes: 350  onion: 50
});

let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

let obj = {
    name: "John",
    age: 30
};

let map2 = new Map(Object.entries(obj));

console.log(map2.get('name')); //John

let prices = Object.fromEntries([
    ['banana',1],
    ['orange',2],
    ['meat',4]
]);

console.log(prices.banana); //1

let map3 = new Map();
map3.set('banana',1);
map3.set('orange',2);
map3.set('meat',4);

let obj1 = Object.fromEntries(map3.entries());

console.log(obj1); //{ banana: 1, orange: 2, meat: 4 }

 /**============================================================================== */

 let set = new Set();

 let john = {name:"John"};
 let pete = {name:"Pete"};
 let mary = {name:"Mary"};

 set.add(john);
 set.add(pete);
 set.add(mary);
 set.add(john);
 set.add(mary);

 console.log(set); //Set(3) { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }

 console.log(set.size) //3

 for(let user of set){
     console.log(user.name); //John Pete Mary
 }

 let set2 = new Set(["orange","apples","bananas"]);

 for(let value of set2){
     console.log(value); //orange apples bananas
 }

 set2.forEach((value, valueAgain, set) => {
     console.log(valueAgain); //orange apples bananas
 })

 function unique(arr){
    let set = new Set();

    arr.forEach(item => set.add(item));

   return Array.from(set);

 }

 let values = ["Hare", "Krishna", "Hare", "Krishna",
 "Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 

console.log(unique(values)); [ 'Hare', 'Krishna', ':-O' ]