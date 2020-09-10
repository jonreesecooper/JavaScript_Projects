document.write(typeof "This is a string"); //This will display the data type of "This is a string"

function my_Function() {
    document.getElementById("test").innerHTML = isNaN('This is a string'); //This checks to see if "This is a string" is NaN and will respond true
}

function false_nan () {
    document.getElementById("false").innerHTML = isNaN('34'); //This checks to see if 34 is NaN and responds false
}

function not_number() {
    document.getElementById("not").innerHTML = 0/0; //This will result in NaN because you can't divide 0 by 0
}

function infinity() {
    document.getElementById("infinite").innerHTML = 3E310; //This will display the value Infinity
}

function neg_infinity() {
    document.getElementById("negative").innerHTML = -3E310; //This will display the value -Infinty
}

function Boolean_True () {
    document.getElementById("booltrue").innerHTML = (10 > 2); //This is a boolean statement that will display a true value
}

function Boolean_False() {
    document.getElementById("boolfalse").innerHTML = (10 < 2); //This is a boolean statement that will display a false value
}

console.log(3*5); //This will display a value of 15 in the console

console.log(25 > 32); //This will display a value of false in the console

function equal_true() {
    document.getElementById("equaltrue").innerHTML = 10+5 == 15; //This compares the two values with a true result
}

function dv_true() {
    X = 5
    Y = 5
    document.getElementById("dvtrue").innerHTML = X === Y; //This compares data type and value with a true result
}

function both_false() {
    A = 5
    B = "6"
    document.getElementById("bothfalse").innerHTML = A === B; //This compares data type and value and is false because both data type and value are not equal
}

function data_false() {
    C = 5
    D = "5"
    document.getElementById("datafalse").innerHTML = C === D; //This compares data type and value and is false because data types are not equal
}

function value_false() { //This compares data type and value and is false because values are not equal
    Q = 5
    R = 6
    document.getElementById("valuefalse").innerHTML = Q === R;
}

function and_true() {
    document.getElementById("andtrue").innerHTML = 3 > 1 && 5 > 2; //This is a boolean AND statement with a true response
}

function and_false() {
    document.getElementById("andfalse").innerHTML = 3 > 4 && 5 > 2; //This is a boolean AND statement with a false response
}

function or_true() {
    document.getElementById("ortrue").innerHTML = 3 > 4 || 5 > 2; //This is a boolean OR statement with a true response
}

function or_false() {
    document.getElementById("orfalse").innerHTML = 3 > 4 || 5 > 6; //This is a boolean OR statement with a false response
}

function not_true() {
    document.getElementById("nottrue").innerHTML = !(5 > 10); //This is a boolean NOT statement with a true response
}

function not_false() {
    document.getElementById("notfalse").innerHTML = !(10 > 5); //This is a boolean NOT statement with a false response
}

function combine() {
    document.getElementById("combine").innerHTML = 10 + "5"; //This function combines a number and a string
}