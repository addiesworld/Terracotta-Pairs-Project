// Wedding
// Birthday 
// Corporate
// BBQ

const imagepathURL = [
    "../Images/Services_Images/Wedding_Food.jpg",
    "..Images/Services_Images/Birthday_Food.jpg",
    "../Images/Services_Images/Corporate_Food.jpg"
]

const slides = document.getElementsByClassName("image_slide")
console.log(slides)
document.addEventListener("DOMContentLoaded", function(){
    for (var i = 0; i< imagepathURL.length; i++) {
        console.log(slides[i])
        // slides[i].src = imagepathURL[i]
    }
})