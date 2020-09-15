function Toppings_Function() {
    var Toppings_Output;
    var Toppings = document.getElementById("Toppings_Input").value;
    var Toppings_String = " is the best pizza topping!";
    switch(Toppings) {
        case "Pepperoni":
            Toppings_Output = "Pepperoni" + Toppings_String;
        break;
        case "Sausage":
            Toppings_Output = "Sausage" + Toppings_String;
        break;
        case "Bacon":
            Toppings_Output = "Bacon" + Toppings_String;
        break;
        case "Ham":
            Toppings_Output = "Ham" + Toppings_String;
        break;
        case "Green Pepper":
            Toppings_Output = "Green Pepper" + Toppings_String;
        break;
        case "Mushroom":
            Toppings_Output = "Mushroom" + Toppings_String;
        break;
        case "Onion":
            Toppings_Output = "Onion" + Toppings_String;
        break;
        case "Black Olive":
            Toppings_Output = "Black Olive" + Toppings_String;
        break;
        default:
        Toppings_Output = "Dude, you have to write it exactly how it's written in the list.";
    }
    document.getElementById("Output").innerHTML = Toppings_Output;
}

function class_function(_) {
    var X = document.getElementsByClassName("Change");
    X[1].innerHTML = "Told ya so!";
}

function my_canvas() {
    var c = document.getElementById("my_canvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("hollowpoint");
    ctx.drawImage(img, 10, 10);
}

var d = document.getElementById("newcanvas");
var dtx = d.getContext("2d");

var grd = dtx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

dtx.fillStyle = grd;
dtx.fillRect(20,20,150,100);