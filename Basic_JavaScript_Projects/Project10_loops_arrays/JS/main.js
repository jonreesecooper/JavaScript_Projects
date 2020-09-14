function Call_Loop() {
    var decreaser = "";
    var Y = 10;
    while (Y > -1) {
        decreaser += "<br>" + Y;
        Y--;
    }
    document.getElementById("Loop").innerHTML = decreaser;
}
var Instruments = ["Bass", "More bass", "Even more bass", "And even more bass", "bass is the only instrument you need"];
var Content = "";
var X;
function for_Loop () {
    for (X = 0; X < Instruments.length; X++) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

function array_Function() {
    var possible_instruments = [];
    possible_instruments[0] = "guitar";
    possible_instruments[1] = "bass";
    possible_instruments[2] = "piano";
    possible_instruments[3] = "hurdy gurdy";
    possible_instruments[4] = "drums";
    document.getElementById("Array").innerHTML = "Clearly, Jon prefers the " + possible_instruments[1] + ".";
}

function constant_function() {
    const Jons_bass = {make:"Ibanez", model:"BTB", color:"purple"};
    Jons_bass.strings = 5;
    Jons_bass.color = "wood finished";
    document.getElementById("Constant").innerHTML = "Jon plays a " + Jons_bass.color + " " + Jons_bass.make + " " + Jons_bass.model + " with " + Jons_bass.strings + " strings.";
}

var Y = "Bass";
document.write(Y);
{
    let Y = "Bass guitar"
    document.write("<br>" + Y);
}
document.write("<br>" + Y);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color +this.make +this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();