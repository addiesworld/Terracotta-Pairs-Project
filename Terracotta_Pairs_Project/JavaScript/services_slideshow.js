// Wedding
// Birthday 
// Corporate
// BBQ
$('.services_slideshow').slick({
    autoplay: true,
    autplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false
    // dots: true
})

const imagepathURL = [
    "../Images/Services_Images/Wedding_Food.jpg",
    "../Images/Services_Images/Birthday_Food.jpg",
    "../Images/Services_Images/Corporate_Food.jpeg"
]

const slides = document.getElementsByClassName("image_slide")
// console.log(slides)
document.addEventListener("DOMContentLoaded", function(){
    for (var i = 0; i< imagepathURL.length; i++) {
        slides[i].src = imageValid(imagepathURL[i])
    }
})

let imageValid = function(imageURL) {
    let image = new Image()
    let urlImage = imageURL
    image.src= urlImage
    if (image.width == 0) 
        return "../Images/Services_Images/Placeholder_Image.jpg"
    else 
        return imageURL
}