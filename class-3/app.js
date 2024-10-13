// var num1 = 5;
// var num2 = 10;
// var result = num1+num2-num1+50;
// document.write(result)

// var firstName = "Abdul";
// let lastNAme = "Qadir"
// const fullName = `${firstName}  ${lastNAme} `;
// document.write(fullName)


// var userCity = prompt("enter your city");
// var userAge =  +prompt("enter your age");
// var bodyWeight = +prompt("enter your weight");
// if(userCity=="karachi" && userAge>=18 && bodyWeight>=55 ){
// alert("welcome to karachi National GYM");
// }
// else{
//     alert("invalid information");
// }

//  ************* ELSE IF ******************

// *********CALCULATOR PROGRAM **********

var num1 = +prompt("enter your first number");
var num2 = +prompt("enter your Second number");
var sign = prompt("enter a sign");
if(sign==="+"){
    alert(num1+num2);
}
else if (sign==="-"){
    alert(num1-num2);
}
else if (sign==="*"){
    alert(num1*num2);
}
else if (sign==="/"){
    alert(num1/num2);
}