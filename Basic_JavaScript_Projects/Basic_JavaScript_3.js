function addition_Function(X,Y) { //This function does basic addition of two variables
    var result = X + Y;
    document.getElementById("Math").innerHTML = result;
}

function subtraction_Function(A,B) { //this function does basic subtraction of two variables
    var subtract = A - B;
    document.getElementById("Minus").innerHTML = subtract;
}

function multiply(C,D) { //this funciton does basic multiplication of two variables
    var mult = C * D;
    document.getElementById("times").innerHTML = mult;
}

function divide(E,F) { //this function does basic division of two variables
    var divider = E / F;
    document.getElementById("fraction").innerHTML = divider;
}

function more_math(G,H,I,J){ //this function does a complex equation for 4 variables based on the order of operation
    var more = (G-H) / I * J;
    document.getElementById("operations").innerHTML = more;
}

function modulus(K,L) { //this function gives the remainder of division of two variables
    var mod = K % L;
    document.getElementById("remainder").innerHTML = mod;
}

function negation() { //this function gives the negative value of the integer 10
    var X = 10;
    document.getElementById("neg").innerHTML = -X;
}

function increment () { //this function gives a increment of 1 above the ingeter 5
        var Y = 5;
        Y++;
        document.getElementById("inc").innerHTML = Y;
}

function decrement () { //this function gives a decrement of 1 to the integer 10
    var Z = 10;
    Z--;
    document.getElementById("dec").innerHTML = Z;
}

window.alert(Math.random() * 100); //this creates a pop up window that displays a random number between 0 and 100

function square_root() { //this function gives the square root of 9
    var A = 9;
    document.getElementById("root").innerHTML = Math.sqrt(A);
}