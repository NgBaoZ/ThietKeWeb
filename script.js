/* Slider Button Function */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("banner-slider-img");
    if (n > x.length) {
        slideIndex = 1;
    }
    else if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display="block";
}
