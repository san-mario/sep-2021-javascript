// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b) {
//     let res = a * b;
//     return res;
// }
//
// let result = square(10,20);
// console.log(result);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function radius(r) {
//     let res = Math.PI * Math.pow(r,2);
//     return res;
// }
// let result = radius(5);
// console.log(result)
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sCylinder(h,r) {
//     let res = 2 * Math.PI * r * h;
//     return res;
// }
//
// let result = sCylinder(10, 5);
// console.log(result);
// - створити функцію яка приймає масив та виводить кожен його елемент
// let ar = [1,2,3,9];
//
// function array (a) {
//     for (const item of a) {
//         console.log(item);
//     }
//
// }
// array(ar);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph (a) {
//     document.write(`<p>${a}</p>`)
// }
//
// paragraph("hello");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (a,b,c) {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${b}</li>`)
//     document.write(`<li>${c}</li>`)
//     document.write(`</ul>`)
// }
// list('hello', 'okten', 'university');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list (a)  {
//     document.write(`<ul>`);
//     for (let i=0; i < a; i++) {
//         document.write(`<li>${i+1}</li>`)
//     }
//     document.write(`</ul>`)
// }
// list(100)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function array (a) {
//     document.write(`<ul>`);
//     for (const arr of a) {
//         document.write(`<li>${arr}</li>`)
//     }
//     document.write(`</ul>`)
// }
// array([false, true, 1, 'hello']);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let mass = [{id: 1, name: 'Ivan', age: 21}, {id: 2, name: 'Alex', age: 101}, {id: 3, name: 'Gena', age: 65}];
// function array (a) {
//     for (const arr of a) {
//         document.write(`<div>id - ${arr.id}</div>`)
//         document.write(`<div>name - ${arr.name}</div>`)
//         document.write(`<div>age - ${arr.age}</div>`)
//
// }
// }
// array(mass);