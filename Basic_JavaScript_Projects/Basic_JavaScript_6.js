function vote_function() { //This function utlizes a ternary operation
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You're too young to vote.":"You're old enough to vote!";
    document.getElementById("voter_age").innerHTML = Can_vote;
}

function Guitar(Style, Brand, Year, Color) { //This is a constructor function that utilizes the "this" keyword
    this.Guitar_Style = Style;
    this.Guitar_Brand = Brand;
    this.Guitar_Year = Year;
    this.Guitar_Color = Color;
}

var Bass = new Guitar("BTB", "Ibanez", 2018, "Purple"); //These variables utilize the "new" keyword
var Electric = new Guitar("EC-256", "Ltd", 2019, "Black");

function my_guitar() { //This function displays the result of the constructor function above
    document.getElementById("New_and_This").innerHTML = 
    "Jon plays a " + Bass.Guitar_Color + " colored " + Bass.Guitar_Brand +
    " manufactured in " + Bass.Guitar_Year; 
}

function decrease_Function() { 
    document.getElementById("Nested_Function").innerHTML = Count_down();
    function Count_down() { //This is a nested function within our decrease_Function function
        var Starting_point = 9;
        function Minus_one() {Starting_point -= 1;}
        Minus_one();
        return Starting_point;  
    }   
}

