// PROBLEM # 01

let city = prompt(`In which city you live?`);
if(city.toLowerCase() ===`karachi`){
    alert(`Welcome to city of lights`);
}

// PROBLEM # 02

let sex = prompt(`What's Your gender?`);
if(sex.toLowerCase() ==="male"){
    alert(`Good Morning Sir`);
}else if(sex.toLowerCase() ==="female"){
    alert(`Good Morning Ma'am`);
}else{
    alert(`Chal bay khusre Bhaag yahan se`);
}

// PROBLEM # 03

let color = prompt(`What's the traffic signal color?`);
if(color.toLowerCase() ==="red"){
    alert(`Must Stop`);
}else if(color.toLowerCase() ==="yellow"){
    alert(`Ready to move`);
}else if(color.toLowerCase() ==="green"){
    alert(`Must move`);
}else{
    alert(`Invalid color`);
}

// PROBLEM # 04

let fuel = Number(prompt(`How much fuel available in your car in lit?`));

if(fuel <= `0.25lit`){
    alert(`Please refill the fuel in your car`);
}else{
    alert(`You are good to go`);
}


// PROBLEM # 05
// a
let a =4;
if(++a ===5){
    alert(`given condition for variable is true`);
}

// b
let b = 82 ;
if(b++ === 83){
    alert(`given condition for variable is true`);
}

// c
let c = 12 ;
if(c++ === 13){
    alert(`condition 1 is true`);
}else if(c === 13){
    alert(`condition 2 is true`);
}else if(++c <= 14){
    alert(`condition 3 is true`);
}else if(c === 14){
    alert(`condition 4 is true`);
}else{
    alert(`invalid condition`);
}

// d
let material_cost = 20000;
labour_cost = 2000;
total_cost = material_cost + labour_cost;

if(total_cost === labour_cost + material_cost){
    alert(`The cost equals`);
}

// e
// f


// PROBLEM # 06
let totalMarks_sub1 = Number(prompt(`Total marks of English?`));
let totalMarks_sub2 = Number(prompt(`Total marks of Urdu?`));
let totalMarks_sub3 = Number(prompt(`Total marks of Maths?`));
let obtainedMarks_sub1 = Number(prompt(`obtained marks of English?`));
let obtainedMarks_sub2 = Number(prompt(`obtained marks of Urdu?`));
let obtainedMarks_sub3 = Number(prompt(`obtained marks of Maths?`)) ;

let totalMarks = totalMarks_sub1 + totalMarks_sub2 + totalMarks_sub3 ;

let obtainedMarks = obtainedMarks_sub1 + obtainedMarks_sub2 + obtainedMarks_sub3 ;

let percentage = (obtainedMarks / totalMarks) * 100;
let grade ;
if(obtainedMarks >= (80/100)*100 ){
    grade = "A-one";
}else if(obtainedMarks >= (70/100)*100 ){
    grade = "A";
}else if(obtainedMarks >= (60/100)*100 ){
    grade = "B";
}else{
    grade = "fail"
}

let remarks ;
if (grade === "A-one"){
    remarks = "Excellent";
}else if(grade === "A"){
    remarks = "Good";
}else if(grade === "B"){
    remarks = "You need to Improve"
}else{
    remarks = "Sorry";
}

document.writeln(`<h1> Marks Sheet </h1>`);
document.writeln(`<h5> Total Marks: ${totalMarks} </h5>`);
document.writeln(`<h5> Marks Obtained: ${obtainedMarks} </h5>`);
document.writeln(`<h5> Percentage: ${percentage}% </h5>`);
document.writeln(`<h5> Grade: ${grade} </h5>`);
document.writeln(`<h5> Remarks: ${remarks} </h5>`);


// PROBLEM # 07

alert(`Let's play a secret game`);

let secretNum = Number(prompt(`Guess the secret number from 1 to 10.`));

if(secretNum === 4){
    alert(`Bingo! Correct answer.`);
}else if(secretNum === 4 + 1){
    alert(`Close enough to the correct answer`);
}else if(secretNum === 4 - 1){
    alert(`Close enough to the correct answer`);
}else{
    alert(`NOt correct`);
}

// PROBLEM # 08

let anyNum = Number(prompt(`Choose any number and i will tell you whether its divisible by 3 or not!`));

if(anyNum%3 === 0 ){
    alert(`This no is divisible by 3`);
}else{
    alert(`This no is not divisible by 3`);
}

// PROBLEM # 09

let anyNumber = Number(prompt(`Want to know wether this no is even or odd? Let's try any number.`));

if(anyNumber%2 === 0 ){
    alert(`HohOho It's An Even number`);
}else{
    alert(`LalaLaA Its an Odd One.`);
}

// PROBLEM # 010

// temperature Checker
let temp = Number(prompt(`whats the Temperature outside?`));

if(temp >= 40){
    alert(`It is too Hot Outside!`);
}else if(temp >= 30){
    alert(`The weather today is normal`);
}else if(temp >= 20){
    alert(`Today's weather is cool.`);
}else{
    alert(`Omg! Today's weather is so cool.`)
}

// PROBLEM # 11

let firstNum = Number(prompt(`Choose any first number.`));
let secondNum = Number(prompt(`choose any second number.`));
let operator = prompt(`choose between + , - , * , / , %`);
let answer ; 

if(operator === "+"){
    answer = firstNum + secondNum;
}else if(operator === "-"){
    answer = firstNum - secondNum;
}else if(operator === "*" ){
    answer = firstNum * secondNum;
}else if(operator === "/"){
    answer = firstNum / secondNum;
}else if(operator === "%"){
    answer = firstNum % secondNum;
}else{
    answer = "Invalid operation";
}
alert(answer);