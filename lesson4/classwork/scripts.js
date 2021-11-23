// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers (a, b, c){
//     let result;
//     if (a < b && a < c) {
//         result = "a < b,c"
//     }else if (b < a && b < c) {
//         result = "b < a,c"
//     } else if (c < a && c < b) {
//         result = "c < a,b"
//     }
//     return result
// }
// result1 = numbers(5,6,7);
// console.log(result1);
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers (a, b, c){
//     let result;
//     if (a > b && a > c) {
//         result = "a > b,c"
//     }else if (b > a && b > c) {
//         result = "b > a,c"
//     } else if (c > a && c > b) {
//         result = "c > a,b"
//     }
//     return result
// }
// result1 = numbers(5,6,7);
// console.log(result1);
// - створити функцію яка повертає найбільше число з масиву
// let array = [111, 454, 656, 324, 767, 9239];
//
// function numberBack(numbers) {
//     let max = numbers[0];
//     for (const number of numbers) {
//         if (number > max) {
//             max = number;
//         }
//     }
//     return max;
// }
//
// console.log(numberBack(array));
// - створити функцію яка повертає найменьше число з масиву
// let array = [111, 454, 656, 324, 767, 9239];
//
// function numberBack(numbers) {
//     let max = numbers[0];
//     for (const number of numbers) {
//         if (number < max) {
//             max = number;
//         }
//     }
//     return max;
// }
//
// console.log(numberBack(array));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1, 2, 10];
//
// function numberSum(sums) {
//     let result = 0;
//     for (const sum of sums) {
// result = result + sum;
//     }
//     return result;
// }
//
// console.log(numberSum(array));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1, 2, 10];

// function numberSum(sums) {
//     let result = 0;
//     for (const sum of sums) {
//        result = result + sum;
//
//     }
//     return result / array.length;
// }
//
// console.log(numberSum(array));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const num of arguments) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(max);
//     return min;
// }
// document.write(minMax(11,22,456))
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random (arr) {
//     for (let i = 0; i < 10; i++) {
//
//         let a = arr[i] = (Math.round(Math.random()*100));
//     }
//     return arr
// }

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function random (arr, limit) {
//     for (let i = 0; i < 10; i++) {
//
//         let a = arr[i] = (Math.round(Math.random() * limit));
//     }
//     return arr
// }
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let newArr = [1,2,3,4];
//     for (let i = newArr.length - 1; ri = 0, i>=0; i--, ri++) {
//         newArr[ri] = newArr[i];
//     }
//     return newArr;
// }


