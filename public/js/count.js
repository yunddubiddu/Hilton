//룸타입 디폴트
document.getElementById("Gueststyle").click();
//룸타입 선택
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    tablinks[i].className = tablinks[i].className.replace(" main_roomtype_G", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.className += " main_roomtype_G";
}

/////////스위퍼 - 오퍼 슬라이드///////

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".spin_bar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//////////////메인 슬라이드///////////////
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
  slides[slideIndex-1].style.display = "block";  
}
/////////////메인 슬라이드 클릭시///////////
$(document).ready(function(){
  $(".dot1").click(function(){
    $("#banW").css({ left: '0%'});
  });
  $(".dot2").click(function(){
    $("#banW").css({ left: '27%'});
  });
  $(".dot3").click(function(){
    $("#banW").css({ left: '51.5%'});
  });
  $(".dot4").click(function(){
    $("#banW").css({ left: '74.9%'});
  });
});

//////////////////인원카운트//////////////////////

function countAdult(type)  {
  const resultElement = document.querySelector('.AdultNum');

  let number = resultElement.innerText;

  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }
  resultElement.innerText = number;
}

function countChild(type)  {
  const resultElement = document.querySelector('.childNum');
  
  let number = resultElement.innerText;

  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }

  resultElement.innerText = number;
}
