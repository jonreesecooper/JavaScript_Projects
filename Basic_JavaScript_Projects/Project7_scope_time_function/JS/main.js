var X = 25;
function Subtract_numbers_1() {
    console.group(50 - X);
    document.write(50 - X + "<br>");
}
function Subtract_numbers_2() {
    console.log(125 - X);
    document.write(125 - X + "<br>");
}
Subtract_numbers_1();
Subtract_numbers_2();

function Multiply_numbers_1() {
    var Y = 50;
    console.log(Y * 2);
    document.write(Y * 2 + "<br>");
}
function Multiply_numbers_2() {
    console.log(Y * 3);
    document.write(Y * 3);
}
Multiply_numbers_1();
Multiply_numbers_2();
function morning_function() {
    if (new Date().getHours() < 12) {
        document.getElementById("morning").innerHTML = "Good morning!";
    }
}