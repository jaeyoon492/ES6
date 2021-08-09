let str = "happy winner winner chicken dinner";

let target = 'in';

let pos = 0;
while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert(`위치: ${foundPos}`);
    pos = foundPos + 1;
}