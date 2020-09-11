function my_sentence() { //this calls the concat method and makes a super dated reference
    var first = "Would you ";
    var second = "like to ";
    var third = "be a ";
    var fourth = "pepper too?";
    var whole_shabang = first.concat(second, third, fourth);
    document.getElementById("dated_reference").innerHTML = whole_shabang;
}

function pun_function() { //This calls the slice method and makes a bad joke
    var phrase = "I'm going to take you out.";
    var pun = phrase.slice(18,22);
    document.getElementById("lame_pun").innerHTML = pun;
}

function case_function() { //This calls the toUpperCase method to make letters, well, uppercase
    var lower = "this phrase is written in uppercase";
    var fix = lower.toUpperCase();
    document.getElementById("correction").innerHTML = fix;
}

function num_string() { //This calls the toString method and changes 138 to "138"
    var Y = 138;
    document.getElementById("redundant").innerHTML = Y.toString();
}

function precision_seven() { //This calls the toPrecision method and if you're old enough puts a song in your head
    var J = .86753088172481372;
    document.getElementById("seven").innerHTML = J.toPrecision(7);
}

function fixed_pun() { //This calls the toFixed method and makes another bad joke
    var harhar = 2.0801324;
    var h = harhar.toFixed(2);
    document.getElementById("number_pun").innerHTML = h;
}