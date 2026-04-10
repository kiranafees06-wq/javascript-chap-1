// PROBLRM 01

let a = 10;

document.writeln(`Result: <br> The value of a is: ${a} <hr>`);

document.writeln(`The value of ++a is: ${++a} <br> Now the value of a is: ${a} <hr>`);

document.writeln(`The value of a++ is: ${a++} <br> Now the value of a is: ${a} <hr>`);

document.writeln(`The value of --a is: ${--a} <br> Now the value of a is: ${a} <hr>`);

document.writeln(`The value of a-- is: ${a--} <br> Now the value of a is: ${a} <hr>`);

// PROBLEM # 02

let x =2, y=1, result=--x - --y + ++y + y--;
document.writeln(`
    --x; | x=1 <br> --x - --y | x=1 - y=0 <br> --x - --y + ++y | x=1 - y=0 + y=1 <br> --x - --y + ++y + y++ | x=1 - y=0 + y=1 + y=1 <br>
    x is ${x}. <br> y is ${y} <br> result is ${result}. <hr>
    `)

// PROBLEM # 03

let ID = prompt(`Whats your name?`);
alert(`Welcome ${ID} to my page`);

// problem #v05

let anyTable = Number(prompt(`which table you want?`));
if(anyTable === 0){
    table = 5;
}else{
    table = anyTable;
}

document.writeln(`
    ${table} x 1 = ${table*1} <br>
    ${table} x 2 = ${table*2} <br>
    ${table} x 3 = ${table*3} <br>
    ${table} x 4 = ${table*4} <br>
    ${table} x 5 = ${table*5} <br>
    ${table} x 6 = ${table*6} <br>
    ${table} x 7 = ${table*7} <br>
    ${table} x 8 = ${table*8} <br>
    ${table} x 9 = ${table*9} <br>
    ${table} x 10 = ${table*10} <br>
    `)

// PROBLEM # 06
// a
let subject_1 = prompt(`your first subject?`);
let subject_2 = prompt(`your second subject?`);
let subject_3 = prompt(`your third subject?`);
// b
let totalMarks = 100;
// c
let res_sub_1 = Number(prompt(`Marks obtained in ${subject_1}`));
let res_sub_2 = Number(prompt(`Marks obtained in ${subject_2}`));
let res_sub_3 = Number(prompt(`Marks obtained in ${subject_3}`));

// e
// let percentage= /${totalMarks} * 100;

document.writeln(`<table>
    <tr>
    <th>subject</th>
    <th>total marks</th>
    <th>mark obt</th>
    <th>percentage</th>
    </tr>
    <tr>
    <td>${subject_1}</td>
    <td>${totalMarks}</td>
    <td>${res_sub_1}</td>
    <td>${(res_sub_1/totalMarks)*100}</td>
    </tr>
    <tr>
    <td>${subject_2}</td>
    <td>${totalMarks}</td>
    <td>${res_sub_2}</td>
    <td>${(res_sub_2/totalMarks)*100}</td>
    </tr>
    <tr>
    <td>${subject_3}</td>
    <td>${totalMarks}</td>
    <td>${res_sub_3}</td>
    <td>${(res_sub_3/totalMarks)*100}</td>
    </tr>
    <tr>
    <td></td>
    <td>${totalMarks+totalMarks+totalMarks}</td>
    <td>${res_sub_1+res_sub_2+res_sub_3}</td>
    <td>${((res_sub_1+res_sub_2+res_sub_3)/(totalMarks+totalMarks+totalMarks))*100}</td>
    </tr>
    </table>
    `)




