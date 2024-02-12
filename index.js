//Task 1

/*function getSum(n) {
    var sum = 0;

    for (var i = 0; i <= n; i++) {
        sum += i;
    }

    return sum;
}

var result = getSum(100);
console.log(result);*/

//Task 2

/*function calculate(amount) {
    var percentInYear = 17; 
    const amountOfYears = 5; 

  
    var coeficent = percentInYear / 100;


    var pereplata = amount * coeficent * amountOfYears;

    return pereplata;
}

var amount = 10000; 
var result = calculate(amount);
console.log('Переплата по кредиту: ' + result); */

//Task 3

/*function trimString(str, from, to) {
    var trimmedString = '';

    for (var i = from; i <= to && i < str.length; i++) {
        trimmedString += str[i];
    }

    return trimmedString;
}


var originalString = "если 48 умножить на 48 и разделить на 48, то ответ в консоли будет";
var result = trimString(originalString, 5, 7);
console.log(result); */


//Task 4

/*function getSumNumbers(number) {
    var numberStr = number.toString();
    
    var sum = 0;

    for (let i = 0; i < numberStr.length; i++) {
        sum += parseInt(numberStr[i]);
    }

    return sum;
}


var numberToSum = 2021;
var result = getSumNumbers(numberToSum);
console.log(result);*/


//Task 5

/*function getSum(a, b) {
    if (a === b) {
        return a;
    }

    var sum = 0;
    var start = a < b ? a : b;
    var end = a > b ? a : b;

    for (var i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
}


console.log(getSum(1, 0)); 
console.log(getSum(1, 2)); 
console.log(getSum(0, 1)); 
console.log(getSum(1, 1)); 
console.log(getSum(-1, 0)); 
console.log(getSum(-1, 2)); 

*/

//Tasl 6

function foo() {
    console.log("foo");
}

function boo() {
    console.log("boo");
}

function fooBoo(isTrue, fooFunc, booFunc) {
    if (isTrue) {
        fooFunc();
    } else {
        booFunc();
    }
}


fooBoo(true, foo, boo); 
fooBoo(false, foo, boo); 




