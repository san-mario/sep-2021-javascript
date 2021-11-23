// --створити масив з:
// - з 5 числових значень
// let numbers = [1,2,3,4,5];
// - з 5 стічкових значень
// let strings = ['one', 'two', 'three', 'four', 'five'];
// - з 5 значень стрічкового, числового та булевого типу
// let mix = [33, 'seven', false, 'okten', true];
// - та вивести його в консоль
// console.log(mix);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = false;
// array[1] = 1;
// array[2] = 999;
// array[3] = 'hello';
// array[4] = 'hi';
// console.log(array);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>hello</div>')
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>xxx ${i}</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write('<h1>hello</h1>')
//     i++
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while(i < 20) {
//     document.write(`<h1>hello. index - ${i}</h1>`)
//     i++
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [1,2,3,4,5,1,2,3,4,5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js', 'java', 'ionic'];
// for (let i = 0; i < listOfItems.length; i++) {
//     console.log(listOfItems[i]);
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js', 'java', 'ionic'];
// let i = 0;
// while (i < listOfItems.length) {
//     console.log(listOfItems[i]);
//     i++
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mix = [33, 'seven', false, 'okten', true, 333, 'neves', 'nekto', 789, 'false'];
// for (let i = 0;i < mix.length; i++) {
//     const mixItem = mix[i];
//     if (typeof mixItem === 'boolean') {
//         console.log(mixItem)
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mix = [33, 'seven', false, 'okten', true, 333, 'neves', 'nekto', 789, 'false'];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i]
//         if (typeof mixItem === "number") {
//             console.log(mixItem);
//         }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mix = [33, 'seven', false, 'okten', true, 333, 'neves', 'nekto', 789, 'false'];
// for (let i = 0; i < mix.length; i++) {
//     const mixItem = mix[i];
//     if(typeof mixItem === 'string') {
//         console.log(mixItem)
//     }
// }


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let mix = [];
mix[0] = 33;
mix[1] = 'seven';
mix[2] = false;
mix[3] = 'okten';
mix[4] = true;
mix[5] = 333;
mix[6] = 'neves';
mix[7] = 'nekto';
mix[8] = 789;
mix[9] = 'false';

// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log('цикл:' + i + ' ');
//     document.write('цикл:' + i + ' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log('цикл:' + i + ' ');
//     document.write('цикл:' + i + ' ');
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log('цикл:' + i + ' ');
//     document.write('цикл:' + i + ' ');
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 0) {
//         console.log('цикл:' + i + ' ');
//         document.write('цикл:' + i + ' ');
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i % 2 === 1) {
//         console.log('цикл:' + i + ' ');
//         document.write('цикл:' + i + ' ');
//     }
// }