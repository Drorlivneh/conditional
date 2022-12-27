

// function lightColor(command){
//     if (command==="stop"){
//         console.log('red');
//     }
//     else if (command==="slow"){
//         console.log('yellow');
//     }
//     else if (command==="go"){
//         console.log('green');
//     }
//     else{
//         console.log('purple');
//     }
// }

// lightColor("stop");

//Write a function that takes in a number and returns true if the number is even, and false if the number is odd.
 
function isEven(number){
    if(number%2===0){
        return("even");
    }
    else{
        return("odd");
    }
    }
    
     
// Write a function named greaterNum that:
// takes 3 arguments, all numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, 
//and log the output to make sure it works (e.g. "The greater number of 5 , 15 , 10 is 15.").

function greaterNum(num1,num2,num3){
    let highestNum 
    if(num2>num1 && num2>num3){
        return(`the greater number of ${num1} ${num2} and ${num3} is ${num2}`);
    }
    else if (num3>num1 && num3>num2){
        return(`the greater number of ${num1} ${num2} and ${num3} is ${num3}`);
    }
    else if (num1>num3 && num1>num2){
        return(`the greater number of ${num1} ${num2} and ${num3} is ${num1}`);
    }
}
greaterNum(6,7,10);
greaterNum(-1,-3,9);

//Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "es", "de", "en")
//returns "Hello, World" for the given language, for at least 3 languages.
// It should default to returning English.
//Call that function for each of the supported languages and log the result to make 
//sure it works.

function helloWorld(languageCode){
if (languageCode==="es"){
    return("Hola Mundo");
}
else if (languageCode==="en"){
        return("hello world");
}
else if (languageCode==="it"){
    return("Ciao mondo");
}
else{
    return("hello world");
}
}
let esGreeting = helloWorld("es");
console.log(esGreeting);
let enGreeting = helloWorld("en");
console.log(enGreeting);
let itGreeting = helloWorld("it");
console.log(itGreeting);

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// (A for: 90-100, B for: 80-89, C for: 70-79, D for: 60-69, F for 59 or lower)
// Call that function for a few different scores and make sure it works.

function assignGrade(numberScore){
if(numberScore<=100 && numberScore>=90 ){
return "A";
}
if(numberScore<=89 && numberScore>=80 ){
return "B";
}
if(numberScore<=79 && numberScore>=70 ){
return "C";
}
if(numberScore<=69 && numberScore>=60 ){
return "D";
}
if(numberScore<=59){
return "F";
}
}
let firstScore = assignGrade(67);
console.log(firstScore);
let secondScore = assignGrade(97);
console.log(secondScore);

// Write a function named pluralize that:
// takes 2 arguments, a noun (that is string) and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".

function pluralize(noun,num){
if(num===1){
    return (`${num} ${noun}`);
}
if(num>1){
    return (`${num} ${noun}s`);
}   
}
let sentence = pluralize("cher", 2);
console.log(sentence);

// 6  Using logical operators, write an expression that represents the following statement:
//  "I would like an ice cream with strawberry and chocolate, or stracciatella,
// or an ice cream of any flavor but caramel." 
// Flavors: strawberry, chocolate, stracciatella, caramel.
//     (the expression will look like: a && b || c || b &&d …)
//      Put the expression in a comment as it’s not valid code

//I would like an ice cream with strawberry && chocolate, || stracciatella
// || an ice cream !==caramel." 






// Write a function that uses “prompt” asking the user to
// write their name, use “document.write” to print
// “Hello, __(name)__, Welcome!”, if there is no name 
//inputted print the text “Hello friend, Welcome!”. 
//Try to do this exercise in two different ways.

function prompt2(){
    let givenAge = prompt("what is your age?");
    if(givenAge){
        document.write(`hello ${givenAge}, welcome!`);  
    }
    else {
        document.write(`hello friend, welcome!`);
}
}
prompt2();


// function prompt(name){
//         let person = prompt("Please enter your name", "Harry Potter");
//          document.write(`Hello ${name} , welcome!`);
// }


// Write a function that takes in a number and prints a message based on the 
//following conditions: 
//If the number is positive and odd, print "Positive and odd"If the number is
// positive and even, print "Positive and even"
//If the number is negative and odd, print "Negative and odd"
//If the number is negative and even, print "Negative and even"
//If the number is zero, print "Zero"

function number(num){
    if(num>0 && num%2===0){
        console.log("Positive and even");
    }
    else if(num<0 && num%2===0){
        console.log("negative and even");
    }
    else if(num>0 && num%2===1){
        console.log("positive and odd");
    }
    else if(num<0 && num%2===1){
        console.log("negative and odd");
    }
    else{
        console.log("the number is zero");
    }
}
number(5);




//Write a function `calculator()` thats get 3 arguments : num1,num2,operand (“+”,”-”,”/”,”%”,”*”) 
//and return the answer of the equation. 
//for example:
//console.log(calculator(2, 3, "+")); // Output: 5
//console.log(calculator(2, 3, "-")); // Output: -1
// console.log(calculator(2, 3, "/")); // Output: 0.6666666666666666
// console.log(calculator(2, 0, "/")); // Output: "Cannot divide by zero"
// console.log(calculator(2, 3, "^")); // Output: "Invalid operator"

// function calculator(num1,num2,operand){
//     (`function calculator(num1,num2,operand){
// (`the answer is (${num1}${operand}${num2})`)

// }the answer is (${num1}${operand}${num2})`)


    
    

    //Write a JavaScript function called isLeapYear that takes a number representing 
    //a year and returns a boolean value indicating whether or not the year is a leap year. A leap year 
    //is a year that is divisible by 4, but not divisible by 100 unless it is also divisible by 400.

function isLeapYear(year){
if (year%4===0 ){
    if (year%100!==0 || year%400===0){
        return (true);
    }
    else{
        return (false);
    }

}
else{
    return (false);
}
}
let year4 = isLeapYear(4);
let year200 = isLeapYear(200);
let year400 = isLeapYear(400);
console.log(year4);
console.log(year200);
console.log(year400);


function askAge(){
    
}

//Write a JavaScript conditional statement to sort three numbers. 
//Display an alert box to show the result.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1

function highestNum(num1,num2,num3){
    if(num1>num2){
        if (num2>num3){
        console.alert(`${num1}${num2}${num3}`)
    }
        else {
        console.alert(`${num1}${num3}${num2}`)
        }
    }
    if(num2>num3){
        if (num3>num1){
        console.alert(`${num2}${num3}${num1}`)
    }
        else {
        console.alert(`${num2}${num1}${num3}`)
        }
    }
    if(num3>num1){
        if (num1>num2){
        console.alert(`${num3}${num1}${num2}`)
    }
        else {
        console.alert(`${num3}${num2}${num1}`)
        }
    }
        
   
}

// USE SWITCH CASE  (for Tuesday) - Write a function that takes in a string and prints a message based 
//on the following conditions
// If the string is "red", print "Red is the color of danger"
// If the string is "orange", print "Orange is the color of caution"
// If the string is "yellow", print "Yellow is the color of sunshine"
//  If the string is "green", print "Green is the color of nature"
//  If the string is "blue", print "Blue is the color of the sky"
// If the string is "purple", print "Purple is the color of royalty"
// If the string is none of the above, print "Invalid color"

function colorMeaning(color){
    switch(color) {
        case "red":
          console.log("Red is the color of danger");
          break;
        case "orange":
            console.log("Orange is the color of caution");
        break;
        case "green":
            console.log("Green is the color of nature");
        break;
        default:console.log("Invalid color");
        break;
        }
    }
    colorMeaning("red");
    colorMeaning("black");

    
    // //14.
    // function crewStatus(spaceSuitsOn,shuttleCabinReady){
    //     if (spaceSuitsOn && shuttleCabinReady){
    //         console.log("crew is ready");  
    //     }
    //     else{
    //         console.log("Crew Not Ready");
    //     }
    // }
    // function computerStatusCode(){
    //     if(value===200, console.log("Please stand by. Computer is rebooting.");

    // }




