// PROBLEM # 01
let firstName = prompt("Enter your first name.");
let lastName = prompt("Enter your last name.");

let fullName = firstName.concat(" ",lastName) ;

alert(`welcome, ${fullName}`);

// PROBLEM # 02
let ask = prompt("Enter your fav phone model.");
document.writeln(`My fav phone is ${ask} <br>`);
document.writeln(`length of string is ${ask.length}`);
 
// PROBLEM # 03
let nationality = "Pakistani";

document.write(`String : ${nationality} <br> Index of 'n' is: ${nationality.indexOf("n")} <br>`);


// PROBLEM # 04

let word = "Hello World";

document.write(`String : ${word} <br> Last index of 'l' is: ${word.lastIndexOf("l")}`);

// PROBLEM # 05
document.write(`String : ${nationality} <br> Character at Index of '3' is: ${nationality[3]} <br>`);

// PROBLEM # 07

let city = "Hyderabad";
document.write(`City: ${city} <br> After replacement: ${city.replace("Hyder" , "Islam")} <br>`);

// PROBLEM # 08
let message = "ALi and Sara are best friends. They play cricket and fotball together.";
document.write(`${message.replaceAll("and" , "&")} <br>`);

// PROBLEM # 09

let num = "472";
document.writeln(`${num} <br> ${typeof num} <br>  `);
let newNum = Number(num);

document.writeln(`${newNum} <br> ${typeof newNum} <br>  `);

// PROBLEM # 10

let upperCase = prompt(`write anything that i will convert in uppercase`);
document.writeln(`User input: ${upperCase} <br> Upper Case: ${upperCase.toUpperCase()} <br>`);

// problelem # 11

let titleCase = prompt(`write anything that i will convert in title case`);
document.writeln(`User input: ${titleCase} <br> Title Case: ${titleCase.charAt(0).toUpperCase}`);

// // PROBLEM # 12

let anyNum = prompt(`enter any number with a dot inside.`);
document.writeln(`Number: ${anyNum} <br> Result: ${anyNum.replaceAll("." , "")} <br>`);

//  PROBLEM # 13

let userName = prompt(`enter username.`);

let isValid = true;

for (let i = 0 ; i < userName.length ; i++){

    let code = userName.charCodeAt(i);

    if ( code === 33 || code === 44 || code === 46 || code === 64){

        isValid = false;

        break;
    }

}

if (isValid){
    document.write(`username: + ${userName}`);
}else{
    document.write(`Please enter a valid username.`);
}


// PROBLEM # 14

let A = [ "cake" , "apple pie" , "cookie" , "chips" , "patties"];

let userInput = prompt(`welcome to ABC bakery. what do you want to order sir/ma'am?`).toLowerCase();

if (A.includes(userInput)){
    document.write(`${userInput} is available at index ${A.indexOf(userInput)} in our bakery.`);
} else {
     document.writeln(`We are sorry. ${userInput} is not available in our bakery.`);
}

// PROBLEM # 15

// let userPass = prompt(`Enter your password.`);

// if (userPass.charAt(0) > 0){
//     document.writeln(`password must not start with number`);
// }else if(userPass.length <= 5){

//     document.writeln(`password must be 6 character long`);
// }else if (userPass.charCodeAt)


// PROBLEM # 16

let uni = "University of Karachi";
let uok = uni.split("");
document.write(uok.join("<br>"));


// problem # 17 

let country = prompt("enter your country name");
document.writeln(`User Input: ${country} <br> Last character of input: ${country.at(-1)} <br>`);

// PROBLEM # 18

let str = "The quick brown fox jumps over the lazy dog";

let words = str.toLowerCase().split(" ");

let count = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.writeln("Number of occurrences of 'the': " + count);