function getSumOfEven(list){
    let sum=0;
    for (let el of list){
        if (el%2===0){
            sum+=el;
        }
    }
    
    return sum;


}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let iter = [];
let count = 0;

function askNumber() {
    if (count < 10) {
        rl.question(`Введите число ${count+1}: `, (answer) => {
            iter.push(Number(answer)); // переводим в число
            count++;
            askNumber(); // рекурсивный вызов для следующего числа
        });
    } else {
        rl.close();
        let itog = getSumOfEven(iter);
        console.log("Сумма чётных чисел:", itog);
    }
}

askNumber();