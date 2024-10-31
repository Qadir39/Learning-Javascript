// var userCity = prompt("Enter your city");
// userCity = userCity.toUpperCase
// console.log(userCity);

// if(userCity==="karachi"){

//     alert("welcome to karachi")
// }
// else{
//     alert("invalid city")
// }


// var userAge = +prompt("enter your age");
// var userGender = prompt("enter your gender");
// var userWeight = +prompt("enter your weight");

// if(userAge>=20 && userGender == "male" && userWeight<= 150){
//     alert("welcome to our gym");
// }
// else{
//     alert("next time please");
// }


// var userAge = +prompt("enter your age");
// var userGender = prompt("enter your gender");
// // var userWeight = +prompt("enter your weight");

// if(userAge>=20 || userGender == "male" ){
//     alert("welcome to our gym");
// }
// else{
//     alert("next time please");
// }

// var num1 = +prompt("enter a first number");
// var num2 = +prompt("enter a second number");
// var sign = prompt("enter a sign");

// if(sign=="+"){
//     console.log(num1+num2);
// }
// else if (sign=="-"){
//     console.log(num1-num2);
// }
// else if (sign=="/"){
//     console.log(num1/num2);
// }


// var arr =["apple","mango","orange","banana"];
// // arr.pop()
// // arr.pop()
// arr.push("cat","dog");
// arr[10]= "duck";

// console.log(typeof(arr));

// var arr =["apple","mango","orange","banana","anar","watermelon"];
// arr.push("cat","dog");
// arr.pop();
// arr.shift();
// arr.unshift("anar");
// arr[11]="dog";
// arr.splice(6,5);
// console.log(arr)

// var newArr=arr.slice(2,5);
// console.log(newArr);

//  var userInput = +prompt("enter a number");
//  if(userInput % 2==0){
// alert("even number");
//  }
// else if(userInput % 3==0)
//     {
//         alert("odd number");
//          }

// for(var i =0; i<=10;i++){
// document.write( i+"hello world" + "<br>")
// }


// var userCity = prompt("enter your city");
// var arr = ["karachi","lahore","islamabad","multan"];
// for(var i = 0; i<=arr.length;i++){
//     if(userCity==arr[i]){
//         alert(`you live in ${userCity}`)
//         break;
//     }
//     else{
//         alert("invalid city")
        
//     }
// }


// var firstName = ["Abdul","Syed"];
// var lastName =  ["samad","Qadir","Ahad"];

// for(var i = 0; i<firstName.length;i++){
//     for(var x = 0; x<lastName.length;x++){
//         console.log(`${firstName[i]} ${lastName [x]   }`)
//     }
// }

var userInput = +prompt("enter a number ");
var range = +prompt("enter a range");

for(var i = 1; i<=range;i++){
    document.write(userInput+" "+"x"+" "+i+" "+"="+" "+userInput*i +"<br>")

}



