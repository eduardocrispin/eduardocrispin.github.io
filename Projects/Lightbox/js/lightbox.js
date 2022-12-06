//Variables for lightbox elements
let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//Function to open lightbox.
function openLightbox() {
    //Turn on display class (from display:none to display:flex)
    lightboxContainer.classList.add('display');
    //Display image src inside lightbox
    lightbox.src = this.src;
}

let modelImage1 = document.getElementById('modelImage1');
let modelImage2 = document.getElementById('modelImage2');
let modelImage3 = document.getElementById('modelImage3');
let modelImage4 = document.getElementById('modelImage4');
//When you click image, run openLightBox
modelImage1.onclick = openLightbox;
modelImage2.onclick = openLightbox;
modelImage3.onclick = openLightbox;
modelImage4.onclick = openLightbox;

//Make Function to make closer clickable 
function closeLightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "" ;
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;