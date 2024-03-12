// navbar toggle
let navBar = document.querySelector('.navLink');
let menuBar = document.querySelector('#menuBtn');
menuBar.onclick = () => {
    navBar.classList.toggle('active');
}
// ==== scroll section and sticky navbar ===
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}

//==== swiper js ====
var swiper = new Swiper(".myHome", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //counter section start
  let valueDisplay = document.querySelectorAll('.num');
  let interval = 1000;

  valueDisplay.forEach((valueDisplay) =>{
    
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));

    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
      startValue +=1;
      valueDisplay.textContent = startValue;
      if(startValue == endValue){
        clearInterval(counter);
      }
    },duration);
  });

// client section swiper 
var swiper = new Swiper(".myClient", {
  slidePerView:1,
  spaceBetween: 10,
  centeredSlides: true,
  loop:true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints:{
    640:{
      slidesPerView:1,
      spaceBetween:20,
    },
    768:{
      slidesPerView:2,
      spaceBetween:40,
    },
    1024:{
      slidesPerView:3,
      spaceBetween:50,
    },
  }
});

var slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
