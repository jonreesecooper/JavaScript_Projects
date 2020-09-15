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