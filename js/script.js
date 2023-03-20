/*
let num = 1; 
while (num<=15) {
    document.write('Hello!')
    num++
}
*/


// Поступово вводяться вартості 7 товарів. Знайти загальну вартість
/*
let price;
let totalPrice = 0;

let num = 1;
while (num<=7) {
    price = parseFloat(prompt('Введіть вартість товару'));
    totalPrice = totalPrice + price;
    num++
}
*/


// Поступово вводяться вартості 7 товарів із зазначенням номеру товару. Знайти загальну вартість
/*
let price;
let totalPrice = 0;

let num = 1;
while (num <= 7) {
    price = parseFloat(prompt(`Введіть вартість ${num} товару`));
    totalPrice = totalPrice + price; num = num + 1;
}
document.write(`Загальна вартість ${totalPrice}`);
*/

/*
for (let num = 0; num <= 15; num++) {
    document.write('Hello!');
}

for (let num = 20; num <= 37; num++) {
    //....
}
*/

// З клавіатури вводиться 5 пар цілих чисел. Якщо числа рівні, то вивести їх суму, інакше добуток.
/*
5 разів повторити
{
    ввести перше число
    ввести друге число

    якщо числа рівні
            то вивести їх сумму
    інакше
            вивести добуток
}
*/
/*
for (let i = 0; i < 5; i++) {
    let num1 = parseInt(prompt("num1="))
    let num2 = parseInt(prompt("num2="))
    if (num1 === num2) {
        document.write(`Prod=${num1+num2}`)
    } else {
        let product = num1 * num2
        document.write(`Prod=${product}`)
    }
}
*/

/* З клавіатури шість разів генерується ціле число в межах від 1 
до 10, і кожного разу дається можливість користувачу вгадати число.
*/
/*
Кількисть_вгаданих=0

6 разів повторити
{
    compNum = випадкове число від 1 до 10
    userNum = питаємося від користувача число
    якщо userNum дорівнює compNum
        то Кількість_вгаданих++
}
Виводимо кількість вгаданих
*/
/*
let guessedCount = 0
for (let i = 0; i < 6; i++) {
    let compNum = 1 + Math.floor(Math.random() * 10)
    let userNum = parseInt(prompt("Введіть число (від 1 до 10)"))
    if (userNum === compNum) {
        guessedCount++
    }
    document.write(`User: ${userNum}, Comp:${compNum} <br>`)
}
document.write(`Вгадано: ${guessedCount}`)
*/



// Три рази дати можливість ввести пароль (правильний пароль "123")
/*
let pass
for (let i = 0; (i < 3) && (pass!=='123'); i++){
    pass = prompt('Password')
}
*/
/*
let paass
let i = 0
while ((i < 3) && (paass !== '123')) {
    paass = prompt('Password')
    i++
}
*/


/*
Тренажер додавання! Розробити програму для перевірки знань з 
додавання цілих чисел в межах від 1 до 3 (перебрати усі можливі 
комбінації додавання цілих чисел, тобто перше число перебрати 
від 1 до 3 і для кожного першого числа перебрати числа від 1 до 3).
Іншими словами:
1+1, 1+2, 1+3
2+1, 2+2, 2+3
3+1, 3+2, 3+3
*/
/*
перше число змінюється від 1 до 3 // треба повторювати
{
        друге число змінюється від 1 до 3 // треба повторювати
        {
                виводимо повідомлення "Чому дорівнює перше + друге"
                вводимо відповідь користувача
                якщо відповідь дорівнює сумі чисел (відповідь правильна)
                        то кажемо "Ок"
                інашке 
                        кажемо "помилка"
        }
}
*/
/*
for (let num1 = 1; num1 <= 3; num1++) {
    for (let num2 = 1; num2 <= 3; num2++)
    {
        let userAns = parseInt(prompt(`${num1}+${num2}=`))
        if (userAns === num1 + num2) {
            alert('Ok')
        }
        else {
            alert('Error')
        }
        }
}
*/


/*
З клавіатури вводяться два числа N і M (N < M). 7
Вивести на екран числа

N---M
N+1 --- M-1
N+2 --- M-2
N+3 --- M-3
*/
/*
let n = parseInt(prompt('N='))
let m = parseInt(prompt('M='))
*/
/*
while (n<m) {
    document.write(`${n} - ${m}<br>`)
    n++
    m--
}
*/
/*
for (; n < m; n++, m--){
    document.write(`${n} - ${m}<br>`)
}
*/
/*
const phonePrice = 10000
let moneySum = 0
const minPayment = 1, maxPayment = 200
let theNumberOfTimes = 0

do {
    const paymaent = minPayment + Math.floor(Math.random() * (maxPayment - minPayment + 1))
    moneySum += paymaent
    theNumberOfTimes++
    document.write(`money = ${moneySum}<br>`)
} while (moneySum<phonePrice);

document.write(`Оленка назбирала на телефон за ${theNumberOfTimes} спроб`)
*/
/*
const phonePrice = 10000
let moneySum = 0
const minPayment = 1, maxPayment = 200
let theNumberOfTimes = 0
let M = parseFloat(prompt('M = '))
moneySum = M
while (moneySum < phonePrice) {
    const paymaent = minPayment + Math.floor(Math.random() * (maxPayment - minPayment + 1))
    moneySum += paymaent
    theNumberOfTimes++
    document.write(`money = ${moneySum}<br>`)
}

document.write(`Оленка назбирала на телефон за ${theNumberOfTimes} спроб`)
*/


/*
let sum = 0
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt('Number = '))
    if (!isFinite(num))
        break
    sum += num
}

document.write(`Sum = ${sum}`)
*/

/*
let totalSum = 0
exit: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
        const price = parseFloat(prompt(`Week ${i + 1} day ${j + 1} Price = `))
        if (!isFinite(price))
            break exit
        
        totalSum += price
    }
    
}
document.write(`Sum = ${totalSum}`)
*/

/*
const MIN_NUM = 1
const MAX_NUM = 5
let guessedNumber = 0
mainLoop: for (let i = 1; i <= 3; i++) {
    const compNum = Math.floor(
        MIN_NUM + Math.random() * (MAX_NUM - MIN_NUM + 1)
    )
    for (let j = 0; j < 4; j++) {
        let userNum = parseInt(prompt(`Вгадування ${i}-го числа. Ваша версія: `))
        if (userNum === compNum) {
            alert('Вгадали')
            guessedNumber++
            continue mainLoop
        } else alert ('Не вгадали')
    }
}
document.write(`Вгадали чисел : ${guessedNumber}`)
*/


/*
let product = 1
let num
do {
    num = parseInt(prompt('Number = '))
    if (num!=0)
        product*=num
} while (num!=0);
document.write(`Product = ${product}`)
*/
/*
let sum = 0
let evenNumber = 0
const maxEvenNumber = 3
do {
    const num = parseInt(prompt('Num = '))
    sum += num
    if (num %2 === 0)
        evenNumber++
} while (evenNumber < maxEvenNumber);

document.write(`Sum = ${sum}`)
*/























