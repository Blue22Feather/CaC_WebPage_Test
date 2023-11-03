let slideNumber = 0;
zoomSlide_manu(slideNumber)
zoomSlide_auto();

function currentImag(n) {zoomSlide_manu(slideNumber = n);}

function zoomSlide_manu (n) {
    let i;
    let slides = document.getElementsByClassName("slideImag");
    let imageDescription = document.getElementsByClassName("infoImag__text");
    if (n > slides.length) {slideNumber = 1}
    if (n < 1) {slideNumber = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" activeImag", "");
        imageDescription[i].style.display = "none";
    }
    slides[slideNumber-1].className += " activeImag";
    imageDescription[slideNumber-1].style.display = "flex";
}

function zoomSlide_auto() {
    let i;
    let slides = document.getElementsByClassName("slideImag");
    let imageDescription = document.getElementsByClassName("infoImag__text");
    slideNumber++;
    if (slideNumber > slides.length) {slideNumber = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" activeImag", "");
        imageDescription[i].style.display = "none";
    }
    slides[slideNumber-1].className += " activeImag";
    imageDescription[slideNumber-1].style.display = "flex";
    setTimeout(zoomSlide_auto, 5000);
}
