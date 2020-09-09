function My_First_Function() {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function combineFunction() {
    var sentence = "I am combining";
    sentence += " two different strings!";
    document.getElementById("combine").innerHTML = sentence;
}