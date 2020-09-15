function Call_Loop() { //This is an example of a function that uses the while loop
    var decreaser = "";
    var Y = 10;
    while (Y > -1) {
        decreaser += "<br>" + Y;
        Y--;
    }
    document.getElementById("Loop").innerHTML = decreaser;
}
//The following is an example of a function that includes a for loop
var Instruments = ["Bass", "More bass", "Even more bass", "And even more bass", "bass is the only instrument you need"];
var Content = "";
var X;
function for_Loop () {
    for (X = 0; X < Instruments.length; X++) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() { //This is a function that utilizes an array
    var possible_instruments = [];
    possible_instruments[0] = "guitar";
    possible_instruments[1] = "bass";
    possible_instruments[2] = "piano";
    possible_instruments[3] = "hurdy gurdy";
    possible_instruments[4] = "drums";
    document.getElementById("Array").innerHTML = "Clearly, Jon prefers the " + possible_instruments[1] + ".";
}

function constant_function() { //This is an example of a function that utilizes a constant, where a a value is both added and changed
    const Jons_bass = {make:"Ibanez", model:"BTB", color:"purple"};
    Jons_bass.strings = 5;
    Jons_bass.color = "wood finished";
    document.getElementById("Constant").innerHTML = "Jon plays a " + Jons_bass.color + " " + Jons_bass.make + " " + Jons_bass.model + " with " + Jons_bass.strings + " strings.";
}

var Y = "Bass"; //The following is an example of global scope variable and a let keyword with a block scope
document.write(Y);
{
    let Y = "Bass guitar"
    document.write("<br>" + Y);
}
document.write("<br>" + Y);

let guitar = { //The following is an example of a let keyword used in a function to call it's values
    make: "LTD ",
    model: "EC256 ",
    year: "2018 ",
    color: "black ",
    description: function () {
        return "Jon's guitar  is a " + this.year + this.color +this.make +this.model;
    }
};
function getGuitar() {
    document.getElementById("Guitar_Object").innerHTML = guitar.description();
}