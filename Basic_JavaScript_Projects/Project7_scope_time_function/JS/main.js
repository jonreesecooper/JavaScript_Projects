var X = 25; //This is a global variable
function Subtract_numbers_1() { //This function uses the global variable
    console.group(50 - X);
    document.write(50 - X + "<br>");
}
function Subtract_numbers_2() { //This function also uses the global variable
    console.log(125 - X);
    document.write(125 - X + "<br>");
}
Subtract_numbers_1(); //This will display a result of 25
Subtract_numbers_2(); //This will display a result of 100

function Multiply_numbers_1() { //This function has a local variable
    var Y = 50;
    console.log(Y * 2);
    document.write(Y * 2 + "<br>");
}
function Multiply_numbers_2() { //This function has a bug, as it tries to call the local variable in the last function, console.log used to debug
    console.log(Y * 3);
    document.write(Y * 3);
}
Multiply_numbers_1(); //This will display a result of 100
Multiply_numbers_2(); //This will have no display - see console.log


function clock_function() { //This function uses the date/get time element and uses an if statement
    if (new Date().getHours() < 23) {
        Time_greet = "It is before 11pm!"
    }
    document.getElementById("Greeting").innerHTML = Time_greet;
}

function compare_age() { //This function uses input to run through if/else statements
    Age = document.getElementById("yob").value; 
    if (Age > 1981) {
        older_younger = "You are younger than me!";
    }
    else {
        older_younger = "You are older than me!";
    }
    document.getElementById("answer").innerHTML = older_younger;
}

function Time_function() { //This is the Time function that uses if/elseif/else
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}