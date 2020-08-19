$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("testimonial_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var txt = ['"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut lectus sem."',
'"Affogato viral shabby chic, iPhone af four loko trust fund sunt next level scenester tousled austin. Fam godard ethical slow-carb vape."',
'"Donec non felis feugiat felis gravida accumsan. Duis orci mauris, luctus sit amet lectus at, pellentesque aliquet tellus."'];

let texts = document.getElementsByClassName("testimonial_text");

document.addEventListener("DOMContentLoaded", function(){
  for (var x = 0; x < texts.length;x++) {
    addCharx5(texts[x], x);
  }
});

async function addCharx5(item, index) {
  for (var y = 0; y < txt[index].length; y++) {
    item.innerHTML += txt[index].charAt(y); 
    item.innerHTML += " |"
    await sleep(50)
    var stringTest = item.innerHTML.toString()
    var test = stringTest.substring(0, y+1)
    item.innerHTML = test
    await sleep(25)
  }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}