// problem # 01

// 1
let variable_1 , variable_2 , variable_3 ;
// 2
let legalName_1 = "numbers";
let legalName_2 = "$";
let legalName_3 = "_";
let legalName_4 = "sensitive";
let legalName_5 = "keywords";
let legalName_6 = "letters";

let illegalName_1 = "1stName";
let illegalName_2 = "my name";
let illegalName_3 = "alert-keyword";
let illegalName_4 = "using&symbols";
let illegalName_5 = "var=keyword";

// 3

document.writeln(`
    <h1>Rules For Naming JS variables</h1>
<p>Variable names can only contain ${legalName_1},${legalName_2} and ${legalName_3}. <br>
For example <b>$my_1stVariable</b></p>
<p>Variables must begin with a ${legalName_6}, ${legalName_2} or ${legalName_3}. <br>
For Example <b>$name, _name or name</b></p>
<p>Variables names are case ${legalName_4}</p>
<p>Variables names should not be JS ${legalName_5}</p>
    `);




