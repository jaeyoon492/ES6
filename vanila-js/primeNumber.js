// for (i = 2; i < 100; i++) {
//     if (i == 2) {
//         console.log(i);
//     }
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

let n = 10;

nextPrime:
    for (let i = 5; i <= n; i++) { // 각 i에 대하여 반복문을 돌림

        for (let j = 2; j < i; j++) { // 제수(나눗수)를 찾음
            if (i % j == 0) continue nextPrime; // 소수가 아니므로 다음 i로 넘어감
        }

        console.log(i); // 소수
    }