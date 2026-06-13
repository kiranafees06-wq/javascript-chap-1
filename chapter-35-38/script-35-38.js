
document.writeln('FUNCTION');


// prob 1

let now = new Date();

document.writeln(now);

// prob 2
let fName = prompt('Enter your first name');
let lName = prompt("Enter your last name");

function greet(){
    alert(`Welcome ${fName} ${lName}`);
    document.writeln(`Welcome ${fName} ${lName}`);
}

greet();

// prob 3

let firstNum = Number(prompt('Enter any number.'));
let secondNum = Number(prompt('Enter another number.'));

function sum(){
    document.writeln(`the sum of numbers is: ${ firstNum + secondNum }`);
}

sum();

// prob 4

let num1 = Number(prompt('Enter any num.'));
let num2 = Number(prompt('Enter any num.'));
let operator = prompt('choose operator (+,-,x,/)');

function calculate(){
    if (operator === '+'){
        return num1 + num2;
    }else if (operator === '-'){
        return num1 - num2;
    }else if (operator === '*'){
        return num1 * num2;
    }else if (operator === '/'){
        return num1 / num2;
    }else{
        return "invalid operator";
    }
}

document.writeln(`the ${operator} of two number results ${calculate()}`);
document.writeln(calculate());

// prob 5

let squ = Number(prompt('Enter any number to square it.'));

    function square(){
     return Math.pow(squ,2);
    }

document.writeln(`The square of ${squ} is ${square()}`);
// document.writeln(square());

// prob 6
let num = Number(prompt('Enter any number to find its factorial.'));
function factorial(num){
let result = 1;

for(let i = 1 ; i <= num ; i++){
result *= i;
}
return result;
}

// prob 7

let startPoint = Number(prompt('Start counting from?'));
let endPoint = Number(prompt('End counting at?'));

function counting(){
    for (let i = startPoint ; i <= endPoint ; i++){document.writeln(i + "<br>");}
}

counting();

// prob 8

let base = Number(prompt('Enter base number'));
let perpendicular = Number(prompt('Enter perpendicular number'));

function hypotenuse(){

function square(num){
    return Math.pow(num,2);
    }

    let bsqu = square(base);
    let psqu = square(perpendicular);

    let result = Math.sqrt(bsqu + psqu);

    return Math.round(result);
}

document.writeln(hypotenuse());

// prob 9

let height = Number(prompt(`Enter the height of rectangle.`));
let width = Number(prompt(`Enter the width of the rectangle.`));

// 2 argument as variable

function area(height,width) {
    return height*width;
}

console.log(area(height,width));

// 1 Argument as value

function area(height,width){
     return height*width;
}

console.log(area(2,3));


// prob 10

let palin = prompt(
  "enter a word that you think is a palindrome i.e a word that is same forward or backward",
);

let arr = palin.split("");
let newpalin = arr.reverse().join("");

function palindrome() {
  if (palin === newpalin) {
    document.writeln("your word ${palindrome} is a palindrome");
  } else {
    document.writeln("your word ${palindrome} is not a palindrome.");
  }
}
palindrome();

// prob 11

let normalStr = prompt("turn any word into title case");
function titlecase(normalStr) {
  let words = normalStr.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return words.join(" ");
}

titlecase();

document.writeln(`normal: ${normalStr} \n title case: ${newStr}`);

// prob 12

let longest = prompt(
  `longest word finder. enter any sentence it will find longest word`,
);
function longestWord(longest) {
  let words = longest.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
document.writeln(`the longest word in your sentence is ${longestWord()}`);

// prob 13

let a = prompt(`any word or sentence`);
let b = prompt(`count which letter?`);
function count(a,b){
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    if(a[i].toLowerCase() === b.toLowerCase()){
        total++;
    }
    return total;

}
}
document.writeln(`${count(a,b)}`);
count(a,b);

// prob 14

function calculateCircumference(radius){
    let pie = 3.14;
    let circumference = 2*pie*radius;
    return circumference;
}

function calculateArea(radius){
    let pie = 3.14;
    let area = pie * Math.pow(radius,2);
    return area;
}



