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

new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".spin_bar",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
  
});

/////////스위퍼 - 메인 슬라이드///////

var menu = ['HILTON', 'STAY', 'DINE','LIFE']
new Swiper(".mySwiper1", {
  spaceBetween: 0,
  centeredSlides: true,
  observer: true,
  observeParents: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  pagination: {
    el: ".main_pagination",
    clickable: true,
    renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (menu[index]) + '</span>';
  },
},
  scrollbar: {
    el: ".swiper-scrollbar",
  },
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
/////////////////프로모션 페이지/////////////////////

$(function(){
  $(window).resize(function () {
      var width = $(window).width();
      if (width>901) {
        $(document).ready(function(){
          $("#promo_navALL").click(function(){
            $(".promo_content").hide(0),
            $(".promo_PrALL").show(0),
            $(".promo_navli").css("color", "#B0AFAF"),
            $("#promo_navALL").css("color", "#494949");
          });
          $("#promo_navLOG").click(function(){
            $(".promo_content").hide(0),
            $('.promo_PriL').show(0),
            $(".promo_navli").css("color", "#B0AFAF"),
            $("#promo_navLOG").css("color", "#494949");
          });
          $("#promo_navDIN").click(function(){
            $(".promo_content").hide(0),
            $('.promo_PriD').show(0),
            $(".promo_navli").css("color", "#B0AFAF"),
            $("#promo_navDIN").css("color", "#494949");
          });
        });
      } else if (width>=1 && width<900) {
        $(document).ready(function(){
          $("#promo_navALL").click(function(){
            $(".promo_content").hide(0),
            $(".promo_PrALL:gt(0)").show(0),
            $(".promo_navli").css("color", "#B0AFAF"),
            $("#promo_navALL").css("color", "#494949");
          });
          $("#promo_navLOG").click(function(){
            $(".promo_content").hide(0),
            $('.promo_PriL:gt(0)').show(0),
            $(".promo_navli").css("color", "#B0AFAF"),
            $("#promo_navLOG").css("color", "#494949");
          });
          $("#promo_navDIN").click(function(){
            $(".promo_content").hide(0),
            $('.promo_PriD:gt(0)').show(0),
            $(".promo_navli").css("color", "#B0AFAF"),
            $("#promo_navDIN").css("color", "#494949");
          });
          $('.board_content:gt(9)').css("display", "none");
        });
      }
  });
  $(window).trigger("resize"); //강제로 호출하는 함수
});
//////////////////오퍼M//////////////////////
let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
  let i;
  let slides2 = document.getElementsByClassName("main_offerMLI");
  let dotss = document.getElementsByClassName("offdot");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dotss.length; i++) {
    dotss[i].className = dotss[i].className.replace(" spin_barMdotB", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dotss[slideIndex2-1].className += " spin_barMdotB";  
}
let slides2 = document.getElementsByClassName("main_offerMLI");

// //////////////////오퍼M//////////////////////
let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
  let i;
  let slides3 = document.getElementsByClassName("main_roomtypeLI");
  let dotsss = document.getElementsByClassName("roodot");
  if (n > slides3.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = slides3.length}
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < dotsss.length; i++) {
    dotsss[i].className = dotsss[i].className.replace(" spin_barMdotB", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dotsss[slideIndex3-1].className += " spin_barMdotB";  
}
let slides3 = document.getElementsByClassName("main_roomtypeLI");

