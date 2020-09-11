function vote_function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You're too young to vote.":"You're old enough to vote!";
    document.getElementById("voter_age").innerHTML = Can_vote;
}

function Guitar(Style, Brand, Year, Color) {
    this.Guitar_Style = Style;
    this.Guitar_Brand = Brand;
    this.Guitar_Year = Year;
    this.Guitar_Color = Color;
}

var Bass = new Guitar("BTB", "Ibanez", 2018, "Purple");
var Electric = new Guitar("EC-256", "Ltd", 2019, "Black");

function my_guitar() {
    document.getElementById("New_and_This").innerHTML = 
    "Jon plays a " + Bass.Guitar_Color + " colored " + Bass.Guitar_Brand +
    " manufactured in " + Bass.Guitar_Year; 
}

function decrease_Function() {
    document.getElementById("Nested_Function").innerHTML = Count_down();
    function Count_down() {
        var Starting_point = 9;
        function Minus_one() {Starting_point -= 1;}
        Minus_one();
        return Starting_point;  
    }   
}

