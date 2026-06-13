// PROBLEM # 01

let positive = prompt('enter any positive integer.');

document.writeln(`
    number: ${positive} <br> 
    round off value: ${Math.round(positive)} <br>
    floor value: ${Math.floor(positive)} <br>
    ceil value: ${Math.ceil(positive)} <br>`);

// PROBLEM # 02
document.write(`<hr>`);

let negative = prompt('enter any negative integer.');

document.writeln(`
    number: ${negative} <br>
    round off value: ${Math.round(negative)} <br>
    floor value: ${Math.floor(negative)} <br>
    ceil value: ${Math.ceil(negative)} <br>`);

// PROBLEM # 03
document.write(`<hr>`);

let absNum = prompt(`enter any poitive or negative number to get absolute value`);

document.writeln(`The absolute value of ${absNum} is ${Math.abs(absNum)} <br>`);

// PROBLEM # 04
document.write(`<hr>`);

let dice1 = Math.floor(Math.random()*6)+1;
let dice2 = Math.floor(Math.random()*6)+1;

document.writeln(`random dice value: ${dice1} <br>
    random dice value: ${dice2} <br>`);


// PROBLEM # 05
document.write(`<hr>`);

let coin1 = Math.floor(Math.random()*2)+1;
let coin2 = Math.floor(Math.random()*2)+1;

if (coin2 === 1){
    coin2 = "Tails";
}else {
    coin2 = "Heads";
}
if (coin1 === 1){
    coin1 = "Tails";
}else {
    coin1 = "Heads";
}

document.writeln(`random coin value: ${coin1} <br> 
    random coin value: ${coin2} <br>`);


// PROBLEM # 06
document.write(`<hr>`);

let random = Math.floor(Math.random()*100)+1;

document.writeln(`random number between 1 and 100 is: ${random} <br>`);

// PROBLEM # 07
document.write(`<hr>`);

let weight = prompt(`enter your current weight in kgs.`);

// let Result = parseInt(weight); 
// parseFloat input mn kuch b dale kg kilo wo number nikal lega
// parseInt se . k bad ki figures jari hain
let Result = parseFloat(weight);
document.writeln(`the weight of user is ${Result} kilogram`);


// PROBLEM # 08
document.write(`<hr>`);

let guess = Number(prompt(`enter secret number from 1 to 10`));
let secretNo = Math.floor(Math.random()*10)+1;

while(secretNo !== guess){
    alert(`that's not right`);
    guess = Number(prompt(`enter secret number`));
}

document.writeln(`congo! you guessed right. the secret number was: ${guess}`);