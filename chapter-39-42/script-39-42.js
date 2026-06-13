document.writeln(`Functions | Switch | While.. Ddo-While`);

// prob 1

function exponent(a , b){
    return Math.pow(a,b);
}

document.writeln(`2 ki power 5 equals ${exponent( 2 , 5 )}`);
console.log(exponent(2,3));

// prob 2

let year = Number(prompt("Enter a year"));

function leapYear(year) {

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    }

    return "Not a Leap Year";
}

document.writeln(year + " is a " + leapYear(year));

// prob 3

let a = 7 , b = 8 , c=9;

function side(){
    let side = (a + b + c)/2;
    return side;
}

function area(){
    return area = Math.sqrt(side*(side-a)*(side-b)*(side-c));
 }

document.writeln(`the area of triangle is ${area()}`);

// prob 4

function mainFunction(){
    let resSub1 = Number(prompt("Enter marks of subject 1"));
let resSub2 = Number(prompt("Enter marks of subject 2"));
let resSub3 = Number(prompt("Enter marks of subject 3"));

function average(){
    return (resSub1 + resSub2 + resSub3)/3;
}

function percentage(){
    return ((resSub1 + resSub2 + resSub3)/300)*100;
}
document.writeln('Average marks is ' + average() + ' and percentage is ' + percentage());
}
mainFunction();

// prob 5

let text = prompt("Enter a string");
let char = prompt("Enter a character to find its index");
function indexOf(text , char){
    for(let i = 0 ; i < text.length ; i++){
        if(text[i] === char){
            return i;
        }
    }
    return -1;
}
document.writeln(`Index of '${char}' in '${text}' is: ${indexOf(text, char)}`);

// prob 6

let sentence = prompt("Enter a sentence");

function deleteVowels(sentence){
    let result = "";
    for(let i = 0 ; i < sentence.length ; i++){
        if(!"aeiouAEIOU".includes(sentence[i])){
            result += sentence[i];
        }
    }
    return result;
}
document.writeln(`Sentence without vowels: ${deleteVowels(sentence)}`);

// prob 7

let sentence = prompt("Enter a sentence");

function countVowelPairs(sentence){

    text = sentence.toLowerCase();
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {

        let first = text[i];
        let second = text[i + 1];

        let pair = first + second;

        switch (true) {

            case (isVowel(first) && isVowel(second)):
                count++;
                break;
        }
    }

    return count;
}
function isVowel(ch) {
    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}

document.writeln("Vowel pairs: " + countVowelPairs(sentence));

// prob 8

let distance = Number(prompt("Enter distance in kilometers"));

function convertToMeters(distance){
    return distance * 1000;
}
function convertToFeet(distance){
    return distance * 3280.84;
}
function convertToInches(distance){
    return distance * 39370.1;
}
function convertToCentimeter(distance){
    return distance * 100000;
}
document.writeln(`Distance in meters is: ${convertToMeters(distance)} Distance in feet is: ${convertToFeet(distance)} Distance in inches is: ${convertToInches(distance)} Distance in centimeters is: ${convertToCentimeter(distance)}`);

// prob 9

let hours = Number(prompt("Enter hours"));
function calculateOvertimePay(hours){
    if(hours > 40){
        let overtimeHours = hours - 40;
        return overtimeHours * 12;
    }
    return 0;
}
document.writeln(`Overtime pay is: $${calculateOvertimePay(hours)}`);

// prob 10

let amount = Number(prompt("Enter amount to withdraw"));
function calculateCurrency(amount){

    let hundreds = Math.floor(amount / 100);
    amount = amount % 100;

    let fifties = Math.floor(amount / 50);
    amount = amount % 50;

    let twenties = Math.floor(amount / 20);
    amount = amount % 20;

    let tens = Math.floor(amount  / 10);
    amount = amount % 10;

    return { hundreds, fifties, twenties, tens };
}
let currency = calculateCurrency(amount);
document.writeln(`Currency notes required: ${currency.hundreds} hundreds, ${currency.fifties} fifties, ${currency.twenties} twenties, ${currency.tens} tens`);