document.write(`<h1>Date Methods</h1>`);
document.write(`<hr>`);
// PROBLEM # 1
document.write(`<h5>Problem # 01</h5>`);

let currentDate = new Date();
document.write(currentDate);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 02
document.write(`<h5>Problem # 02</h5>`);

let month = new Date().toLocaleString('default' , {month: 'long'});
document.write(`Current Month: ${month}`);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 03
document.write(`<h5>Problem # 03</h5>`);

let day = new Date().toLocaleString('default' , {weekday: 'short'});
document.write(`Today is: ${day}`);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 04
document.write(`<h5>Problem # 04</h5>`);

let fun = new Date().getDay();
if (fun === 0 || fun === 6){
fun = "Fun day";
}
document.write(`It's ${fun}`);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 05
document.write(`<h5>Problem # 05</h5>`);

let ordinalDate = currentDate.getDate();
if (ordinalDate <= 15){
    document.write(`First fifteen days of the month`);
}else{
    document.write(`last fifteen days of the month`);
}
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 06
document.write(`<h5>Problem # 06</h5>`);
let consDate = new Date(0);
let s = Math.floor(currentDate.getTime()/(1000*60));
document.writeln(`${currentDate.toDateString()} <br>
    Elapsed millisecond since ${consDate.toDateString()}: ${currentDate.getTime()} <br>
    Elapsed seconds since ${consDate.toDateString()} : ${s}
    `);

document.write(`<hr>`);

// PROBLEM # 07
document.write(`<h5>Problem # 07</h5>`);

let am_pm = currentDate.getHours();
if (am_pm >= 12 ){
    document.write(`It's ${am_pm} PM`);
}else{
    document.write(`It's ${am_pm} AM`);
}

document.write(`<br>`);
document.write(`<hr>`);

// new Date().toLocaleString('default' , {timeStyle: 'short'});

// PROBLEM # 08
document.write(`<h5>Problem # 08</h5>`);

let oldDate = Date.UTC(2021, 0,1) //in ms
let oneDay = 24 * 60 * 60 * 1000; //in ms
let laterDate = oldDate - oneDay;  //in UTC/ ms

// document.write(laterDate);

let laterDate2 = new Date(laterDate)
document.write(`Later date: ${laterDate2}`);
document.write('<br>');
document.write(`<hr>`);

// PROBLEM # 09
document.write(`<h5>Problem # 09</h5>`);

let ramadan = new Date()
ramadan.setFullYear(2026,1, 19)
document.writeln(`First ramadan was on ${ramadan.toDateString()} <br>`);
let countRamadan = Date.UTC(2026,1, 19)
let now = Date.now()
let counting = now - countRamadan;
let laterDate5 = Math.floor(counting/86400000);
alert(`${laterDate5} days have passed since 1st Ramadan, 2026`);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 10
document.write(`<h5>Problem # 10</h5>`);

let refDate = new Date(2016,0,1,12,0,0);

let difference = Math.floor((currentDate - refDate)/1000);
// document.write(difference);

document.write(`On reference date i.e today : ${currentDate.toLocaleString()} " ${difference} " seconds had passed since beginning of 2026.`);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 11
document.write(`<h5>Problem # 11</h5>`);

let hourAhead = new Date(currentDate - (60*60*1000));

document.writeln(`Current Time: ${currentDate.toLocaleString()} <br> 1 hour ago, it was ${hourAhead.toLocaleString()} `);

document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 12 
document.write(`<h5>Problem # 12</h5>`);

// let oneYear = 365*24*60*60*1000;
let yearsAgo = new Date();
// currentDate.getFullYear()-100;
// currentDate.setFullYear()-100
yearsAgo.setFullYear(yearsAgo.getFullYear()-100);
alert(`Current date: ${currentDate.toString()} 100 years ago, it was ${yearsAgo.toString()}`);
console.log(yearsAgo);
document.write(`Alert problem(solved)`);
document.write(`<hr>`);


// PROBLEM # 13
document.write(`<h5>Problem # 13</h5>`);

let age = Number(prompt('Enter your age.'));
let birthYear = currentDate.getFullYear() - age;

document.write(`Your age: ${age} <br>
    Your birth year: ${birthYear} `);
document.write(`<br>`);
document.write(`<hr>`);

// PROBLEM # 14
document.write(`<h5>Problem # 14</h5>`);

let nou = 410;
let cpu = 16;
let lateCharge = 350;
let beforeAmount = nou * cpu;
let afterAmount = beforeAmount + lateCharge;
let billMonth = new Date();
billMonth.setMonth(1);
billMonth = billMonth.toLocaleString('default' , {month: 'long'});

document.write(`<h1>K-Electric Bill</h1>`);
document.write(`<br>`);
document.write(`Customer Name: <b>ABC customer</b> <br> 
    Month: <b>${billMonth}</b> <br>
    Number of units: <b>${nou}</b> <br>
    Charges per unit: <b>${cpu}</b> <br>
    `);
document.write(`<br>`);
document.write(`Net Amount Payable (within Due Date): <b>${beforeAmount}</b> <br>
    Late payment surcharge: <b>${lateCharge}</b> <br>
    Gross Amount Payable (after Due Date): <b>${afterAmount}</b>`);
document.write(`<hr>`);

