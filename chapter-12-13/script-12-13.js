// PROB # 01

/*
let anyNum = Number(prompt("choose any number."));

if (anyNum > 10 && anyNum < 20) {
    document.writeln("Valid");
}else {
    document.writeln("Invalid");
}    
*/


// PROB # 02

/*
let anyNum = Number(prompt("choose any number."));

if (anyNum < 0 || anyNum > 100){
    document.writeln("Out of range");
}else {
    document.writeln("Within range");
}
*/

// PROB # 03

/*
let userName = prompt("write your username?");
let password = prompt("enter your password.");
let correctUsername = "Kiran";
let correctPassword = "kiranafees"

if (userName ===  correctUsername && password === correctPassword){
    document.writeln("login succesfull.");
} else {
    document.writeln("username or password is not correct. try again.");
}
*/

// Prob # 04

/*
let anyDay = prompt("choose any day?");

if (anyDay === "Saturday" || anyDay === "Sunday" ){
    document.writeln("Weekend");
} else if ( anyDay === "Monday" || 
    anyDay === "Tuesday" ||
    anyDay === "Wednedsay" ||
    anyDay === "Thursday" ||
    anyDay === "Friday"){
        document.writeln("Weekday");
}else {
    document.writeln("Invalid input"); 
}
*/

// PROB # 05

/*
let age = Number(prompt("Enter your age."));

if (age >= 18 && age <= 60){
    document.writeln("Youre eligible to vote.")
} else {
    document.writeln("Youre not eligible to vote.")
}
*/

// Prob # 06

/*
let membership = prompt("Do you have a membership?");
let bill = Number(prompt("your billing amount?"));

if (membership === "yes" || bill > 1000 ){
    document.writeln("You get a DISCOUNT VOUCHER.");
} else {
    document.writeln("Youve got no discount voucher.");
}
*/

// PROB # 07

/*
let marks = Number(prompt("Enter your Total marks Obtained."));
let attendance = parseInt(prompt("How much attendane do you have?"));

if (marks >= 40 && attendance >= 75){
    document.writeln("Pass");
} else {
    document.writeln("Fail");
}
*/

// PROB # 08
/*
let username = prompt("Enter your name.");
let correctUsername = "Kiran";
let defaultUsername = "Guest";

if (username != correctUsername || !username ) {
    document.writeln(defaultUsername);
} else {
    document.writeln(correctUsername);
}
*/


// PROB # 09

/*
when using || , if first value is claimed false, it will check either second value is true or false. if second or more conditions are placed. it will check if any condition is true. if it find any single condition thats true it Work. 

when using && , if the first value is true. it will look for further conditions. if all conditions are true it will execute. if any condition is false and rest are true it wont work.
*/

// PROB # 10

/*
let anyNum = Number(prompt("Choose any number which you think is divisible by both 3 and 5."));

if (anyNum%3 == 0 && anyNum%5 == 0){
    document.writeln("Number is divisible by 3 and 5");
} else {
    document.writeln("this number isnt divisible by both 3 and 5");
}
*/

// Prob # 11

/*
let userName = prompt("Enter your username?");
let password = prompt("Enter your password.");
let correctUsername = "Kiran";
let correctPassword = "kiranafees";

if (userName === correctUsername && password === correctPassword){
    document.writeln("Login Successful");
} else {
    document.writeln("Username or Password incorrect. Logged in as Guest.");
}
*/

// PROB # 12

/*
let marks = prompt("Enter your marks obtained.");

if (marks >= 80){
    document.writeln("you have achieved GRADE A");
} else if (marks >= 60 && marks <= 79){
    document.writeln("you have achieved GRADE B");
} else if (marks >= 40 && marks <= 59){
    document.writeln("you have achieved GRADE C");
} else {
    document.writeln("you are failed");
}
*/

// PROB # 13

/*
let username = prompt("Enter your username.");
let password = prompt("Enter your password");
let email = prompt("Enter your wmail.");

if (username != null && password.length >= 6 ){
    document.writeln("Form submitted");
} else {
    document.writeln("form not submitted");
}
*/

// PROB # 14

/*
let user = prompt("who will use the website? admin or editor?");
let accountStatus = prompt("Account status, active or inactive");
if (user == "admin"){
    document.writeln("access granted");
} else if (user === "editor" && accountStatus === "active"){
    document.writeln("access granted");
} else {
    document.writeln("access denied.");
}
*/

/*
let user = prompt("who will use the website? admin or editor?");

if (user == "admin"){
    document.writeln("access granted");
} else {
    let accountStatus = prompt("Account status, active or inactive");
    if(user==="editor"  && accountStatus === "active"){
    document.writeln("access granted");
} else {
    document.writeln("access denied.");
}
}
*/



// PROB # 15


/*
let rain = prompt("do you love rain?");
let dance = prompt("do You love dancing?");

if ( rain === "yes" && dance === "yes"){
    alert("you are a lively person");
} else {
    alert("you are only breathing");
}
*/

// PROB # 16

/*
let food = prompt("name your favourite food.");
let item1 = "biryani";
let item2 = "burger";
let item3 = "pizza";
let item4 = "pasta";
let item5 = "noodles";

if (food === item1 || item2 || item3 || item4 || item5 ){
    document.writeln("we serve your favourite meal.");
} else {
    document.writeln("not available");
}
    */

// PROB # 17

/*
let age = Number(prompt("Enter your age."));
let ID = prompt("Do you have an ID?");

if (age>=18 && ID==="yes"){
    document.writeln("permission granted");
} else if (age>=16){
    let minor = prompt("Do you have permission from parents?");
    if (minor === "yes"){
        document.writeln("permision granted");
    } else {
        document.writeln("not granted");
    }
} else {
    document.writeln("permision not granted");
}
    */

// Prob # 18

/*
let item = prompt("How many items in your cart?");
let amount = Number(prompt("Totam Bill Amount?"));
let membership = prompt("are you a member?");

if (amount >= 2000 || membership ==="yes" || item >= 3){
    document.writeln("FREE SHIPPING AVAILABLE");
} else {
    document.writeln("Pay delievery charges.");
}
*/


/*
let amount = Number(prompt("Totam Bill Amount?"));

if (amount >= 2000 ){
    document.writeln("FREE SHIPPING AVAILABLE");
} else {
    let membership = prompt("are you a member?");
    let item = prompt("How many items in your cart?");

    if (membership==="yes" && item >=3){
        document.writeln("FREE SHIPPING AVAILABLE");
    }else{
    document.writeln("Pay delievery charges.");
} 
}
*/

// PROB # 19
 

// PROB # 20


/*
let username = prompt("enter your username.");
let password = prompt("Enter your password.");

let correctUsername = "Kiran Nafees";
let correctPassword = "Kiran";

if (username === correctUsername && password === correctPassword){
    document.writeln("Login successful"); 
   let user = prompt("which type of user you are?");
    if (user === "admin"){
        document.writeln("You get full access");
    }else if (user === "normal"){
        let account = prompt("is your account active?");
        if (account === "active"){
            document.writeln("You get full access.");
        }else {
            document.writeln("You get limited access.");
        }
    }else if (user === "guest"){
        document.writeln("You get limited access.");
    }else {
        document.writeln("you get limited access ");
    }
}else {
    document.writeln("Invalid username or password.");
}

*/

// PROB # 21

/*
let certificate = alert("to get your certificate you need to give your personam ID number, along with your parent ID or partner ID" );

let personalID = Number(prompt("Enter personal ID"));
let p1id = 12345 ;
let ParentID = Number(prompt("Enter parent ID"));
let p2id = 12345 ;
let partnerID = Number(prompt("Enter partner ID"));
let p3id = 12345;

if ( personalID === p1id && ( ParentID === p2id || partnerID === p3id) ){
    alert("youll get certificate");
} else {
    alert("you cant get certificate");
}
*/




