function countdown () { //This creates a variable to be called by the HTML for our coundown clock
    var seconds = document.getElementById("seconds").value;

    function tick() { //This function causes the variable of timer.innerHTML to display a seconds variable -1 until the seconds variable is equal to -1, at which point a pop up window shows up displaying "times up"
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}


var slideIndex = 1; //this starts us off with a base value of 1 for the variable "slideIndex"
showSlides(slideIndex);

//Next/previous controls - when this is called it adds the resulting variable to the show slides index, allowing a different slide to be shown
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls - when this is called it will show the slideIndex (n) as indicated by the current thumbnail image
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) { //This function calls the side to be show, including the next/prev buttons and "dots"
    var i; //this variable is used to indicate which slide in the mySlides class will be shown
    var slides = document.getElementsByClassName("mySlides"); //this variable is the actual calling of the slide to the HTML
    var dots = document.getElementsByClassName("dot"); //this calls the "dot"
    if (n > slides.length) {slideIndex = 1} //this indivates that if a variable is less than the number assigned to slides (length function) then our side index is equal to one
    if (n < 1) {slideIndex = slides.length} //this indivates that if a variable (n) is less than one, then you change the slideIndex to equal the number of assigned slides (slide.length)
    for (i = 0; i < slides.length; i++) {  //this indivates that if our i variable is equal to zero but also less than the total slides, you increase the variable by 1
        slides[i].style.display = "none"; //this is how the variable assigned to i calls and displays the according slide
    }
    for (i = 0; i < dots.length; i++) { //this function indicates that if the value of i is less than the length of the indicated dot, you increase the value and replace with the according slide
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; //this indicates that the style of display for a slideIndex minus a value of one will be in block format
    dots[slideIndex-1].className += " active"; //this is how the replaced slide based off of dot selection is set as the active slide
}