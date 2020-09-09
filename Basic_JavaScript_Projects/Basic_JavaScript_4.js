function pet_Dictionary() { //This function begins a dictionary
    var Finn = {
        Species:"Doggo", //These are the Key Value Pairs (KVP)
        Color:"White",
        Breed:"Chiggy",
        Age:3.5,
        Sound:"Whine",
    };
    delete Finn.Breed; //This deletes the KVP Breed:"Chiggy" from our dictionary
    document.getElementById("Dictionary").innerHTML = Finn.Breed; //This will result in an answer of "undefined" as we have deleted the KVP being called upon
}