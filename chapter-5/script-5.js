// PROBLEM # 01
document.writeln(`<h3>Problem # 01</h3>`);
let x = 3;
let y = 5;
let sum = x + y ;
document.writeln(`Sum of ${x} and ${y} is ${sum} `);


// PROBLEM # 02
document.writeln(`<hr><h3>Problem#02</h3>`);

let sub = x - y ;
let multiply = x * y ;
let division = x / y ;
let modulus = x % y ;

document.writeln(`Subtraction of ${x} and ${y} is ${sub} 
    <br>
     Multlipication of ${x} and ${y} is ${multiply} 
    <br> 
    Division of ${x} and ${y} is ${division} 
    <br> 
    Modulus of ${x} and ${y} is ${modulus}`);


// PROBLEM # 03 
document.writeln(`<hr><h3>Problem#03</h3>`);

// a
let initialValue;
// b
document.writeln(`Value after variable declaration is ${initialValue}`);
// c
initialValue = 5;
// d
document.writeln(`<br> Initial value: ${initialValue}`);
// e
let incrementValue = ++initialValue;
// f
document.writeln(`<br> Value after increment is ${incrementValue}`);
// g
let newValue = initialValue + 7;
// h
document.writeln(`<br> Value after addition is ${newValue}`);
// i
let decrementValue = --newValue;
// j
document.writeln(`<br> Value after decrement is ${decrementValue}`);
// k
let modValue = decrementValue % 3 ;
// l
document.writeln(`<br> Output:"The remainder is : ${modValue}"`);

// PROBLEM # 04
document.writeln(`<hr><h3>Problem#04</h3>`);

let ticketPrice = 600;
let costOf_5_Tickets = 5*ticketPrice;

document.writeln(`
    Total cost to buy 5 tickets to a movie is ${costOf_5_Tickets}PKR`);

// PROBLEM # 05 
document.writeln(`<hr><h3>Problem#05</h3>`);
let table = 4;
let n=0;
let i=0*table;

document.writeln(`Table Of 4 <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++} <br>
    ${table} x ${n++} = ${i++}`);




// PROBLEM # 06
document.writeln(`<hr><h3>Problem#06</h3>`);

let tempInCels = 25;
let tempInFaren = 70;


let Faren = tempInCels * 9/5 +32;
let Cels = (tempInFaren - 32) * 5 / 9;

document.writeln(`<h1>Trmperature Convertor</h1>${tempInCels}°C is ${Faren}°F <br> ${tempInFaren}°F is ${Cels}°C`);


// PROBLEM # 07
document.writeln(`<hr><h3>Problem#07</h3>`);

let price_1 = 650;
let price_2 =100;
let quan_1 = 3;
let quan_2 =7;
let shippingCharges = 100;
let cartSum = (price_1*quan_1) + (price_2*quan_2);

document.writeln(`<h1> Shopping Cart </h1> <br> Price of item 1 is ${price_1} <br> Quantity of item 1 is ${quan_1} <br> Price of item 2 is ${price_2} <br> Quantity of Item 2 is ${quan_2} <br> Shipping charges ${shippingCharges} <br> Total Cost of your order is ${cartSum}`);

// PROBLEM # 08
document.writeln(`<hr><h3>Problem#08</h3>`);

let totalMarks = 980;
let obtainedMarks = 804;
let percentage = obtainedMarks/totalMarks * 100 ;

document.writeln(`<h1> Percentage Calculator</h1>Total Marks: ${totalMarks} <br> Marks Obtained: ${obtainedMarks} <br> Percentage: ${percentage}%`);

// PROBLEM # 09
document.writeln(`<hr><h3>Problem#09</h3>`);

let dollar = 10*104.80;
let riyal = 25*28;
let currency = dollar + riyal;

document.writeln(`<h1>Currency Conversion</h1>Total Currency in PKR: ${currency}`);

// PROBLEM # 10
document.writeln(`<hr><h3>Problem#10</h3>`);

let anyNum = 4;
document.writeln(anyNum+5 , anyNum*10 , anyNum/2);


// PROBLEM # 11
document.writeln(`<hr><h3>Problem#11</h3>`);

let currentYear = 2026;
let birthYear = 1995;
let age = currentYear - birthYear;

document.writeln(`<h1>Age Calculator</h1>Current Year: ${currentYear} <br> Birth Year: ${birthYear} <br> Your Age: ${age}`);

// PROBLEM # 12
document.writeln(`<hr><h3>Problem#12</h3>`);

let pie = 3.14
// a
let radius = 20;
// b
let circumference = 2*pie*radius ;
// c
let area = radius * pie;

document.writeln(`<h1>The Geometrizer</h1> <p>The radius of a circle: ${radius}<br> The Circumference is: ${circumference} <br> The area is: ${area}</p><br><hr>`);

// PROBLEM # 13
document.writeln(`<hr><h3>Problem#13</h3>`);


// a
let favSnack = "Naz Pan Masala";
// b
let currentAge = 30;
// c
let maxAge = 65;
// d
let ConsumptionPerDay = 3;
// e
let totalSnack = (maxAge-currentAge) * 365 * 3;

document.writeln(`<h1>The Lifetime Supply Calculator</h1>
    <p>Favourite Snack: ${favSnack} <br> Current Age: ${currentAge} <br> Estimated Maximum Age: ${maxAge} <br> Amount of Snacks Per Day : ${ConsumptionPerDay} <br> You will need ${totalSnack} to last you untill the ripe old age of ${maxAge}</p><hr>`);











