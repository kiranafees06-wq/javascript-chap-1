// PROBLEM # 01
/*
// 1
let studentNames = [];

// 2


// 3
let mothersNAme = ["Tehmeena" , "Kiran" , "Hina"];
document.writeln(mothersNAme);

// 4
let mothersAge = [40 , 30 , 35];
document.writeln(mothersAge);

// 5
let booleanArray = ["true" , "false" , "true" , "false"];
document.writeln(booleanArray);

// 6
let mixedArray = ["Tehmeena" , 40 , "Kiran" , 30 , "hina" , 35];
document.writeln(mixedArray);

// 7
let qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"];

document.writeln("<h1>QUALIFICATION</h1>");
document.writeln(`<ol>
    <li>${qualification[0]}</li>
    <li>${qualification[1]}</li>
    <li>${qualification[2]}</li>
    <li>${qualification[3]}</li>
    <li>${qualification[4]}</li>
    <li>${qualification[5]}</li>
    <li>${qualification[6]}</li>
    <li>${qualification[7]}</li>
    </ol>`);

    // PROBLEM # 08

    let namesOfStudent = ["Micheal" , "John" , "Tony"];
    let scoreOfStudents = [320 , 230 , 480];

let totalScore = 500;

document.writeln(
    `Score of ${namesOfStudent[0]} is ${scoreOfStudents[0]}. Percentage: ${(scoreOfStudents[0]/totalScore*100)}% <br>
    Score of ${namesOfStudent[1]} is ${scoreOfStudents[1]}. Percentage: ${(scoreOfStudents[1]/totalScore*100)}% <br>
    Score of ${namesOfStudent[2]} is ${scoreOfStudents[2]}. Percentage: ${(scoreOfStudents[2]/totalScore*100)}% <br>`);


    // PROBLEM # 09

    let colorNames = ["red" , "blue" , "green"];
    document.writeln(colorNames);

    // a
    let suggestion = prompt("which color you want to add in the beggining?");

    colorNames.unshift(suggestion);
    document.writeln(colorNames);

    // b
     let suggestion = prompt("which color you want to add in the end?");
     colorNames.push(suggestion);
      document.writeln(colorNames);


// c
colorNames.unshift("white" , "black");
   document.writeln(colorNames);

 

//    d
colorNames.shift();
  document.writeln(colorNames);

 
// e
colorNames.pop();
  document.writeln(colorNames);

  

//   f
let index = prompt("at which index you want to add a color?");
let color = prompt("which color you want to add?");

colorNames.splice(index, 0, color);
document.writeln(colorNames);


// g
let index = prompt("at which index you want to delete a color?");
let count = prompt("how many colors to delete?");

colorNames.splice(index , count);
document.writeln(colorNames);


// PROB # 10

let scoreOfStudents = [320 , 230 , 480 , 120];
scoreOfStudents.sort();
document.writeln(scoreOfStudents);

// PROB # 11

let cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
let selectedCities = cities.slice(2,4);
document.writeln(selectedCities);


// PROB # 12

let abc = ["this" , "is" , "my" , "cat"];
document.writeln("<h1>Array</h1>");
document.writeln(abc);
let newArr = abc.join(' ');
document.writeln("<h1>String</h1>");
document.writeln(newArr);


// PROB # 13

let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor <br>");
document.writeln("<h1>Devices:</h1>");
document.writeln(devices );

// FIRST IN FIRST OUT 

let firstOut = devices.shift();
document.writeln("Out <br>");
document.writeln(firstOut);
let secondOut = devices.shift();
document.writeln("<br> Out <br>");
document.writeln(secondOut);
let thirdOut = devices.shift();
document.writeln("<br> Out <br>");
document.writeln(thirdOut);
let fourthOut = devices.shift();
document.writeln("<br> Out <br>");
document.writeln(fourthOut);

 */
// PROB # 14


let devices = [];
devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor <br>");
document.writeln("<h1>Devices:</h1>");
document.writeln(devices );

// LAST IN FIRST OUT

let firstOut = devices.pop();
document.writeln("Out <br>");
document.writeln(firstOut);
let secondOut = devices.pop();
document.writeln("Out <br>");
document.writeln(secondOut);
let thirdOut = devices.pop();
document.writeln("<br> Out <br>");
document.writeln(thirdOut);
let fourthOut = devices.pop();
document.writeln("<br> Out <br>");
document.writeln(fourthOut);



// PROB # 15

let companies = ["Apple" , "Samsung" , "Motorolla" , "Nokia" , "sony" , "Haeir"];

document.writeln("<select>");
for (let i = 0;
   i < companies.length;
    i++ ){
  document.writeln("<option>" + companies[i] + "</option>");
}
document.writeln("</select>");






