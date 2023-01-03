let youAge = 27;
let yearAfBirth = 1995;
let numberOfBirth = 27;
let numberOfIblings = 1;
let numberOfSiblings = 1;
let numberOfPeopleInTheFamily = 9;
let theCostOfTravelToThePlaceOfStudy = 300;
let currentYear = 2023;
let dollarExchangeRate = 73/65;
let euroExchangeRate = 78/65;
let bitcoinExchangeRate = 16/800;


// Задача 2.2: В файле из предыдущего задания создай в конце переменные, значения которых являются вычисляемыми.

// Подсказка: вместо того, чтобы повторять ранее указанные значения просто используй переменные с этими значениями.

// текущий год минус год рождения;
// текущий год минус твой возраст;
// количество родных братьев плюс количество родных сестер;
// курс евро умноженный на 1000;
// курс доллара умноженный на 2.5;
// курс биткоина разделенный на 10000;
// стоимость проезда до места обучения разделенная на курс доллара;
// количество человек в семье минус количество братьев минус количество сестер;
// 0 деленный на твой возраст;
// 35 минус твой возраст;
// Выводить в консоль ничего не нужно.


let sum = currentYear - yearAfBirth;
let sum1 = currentYear - youAge;
let sum2 = numberOfIblings + numberOfSiblings;
let sum3 = euroExchangeRate * 1000;
let sum4 = dollarExchangeRate * 2.5;
let sum5 = bitcoinExchangeRate / 10000;
let sum6 = theCostOfTravelToThePlaceOfStudy / dollarExchangeRate;
let sum7 = numberOfPeopleInTheFamily - numberOfIblings - numberOfSiblings;
let sum8 = 0 / youAge;
let sum9 = 35 - youAge;
