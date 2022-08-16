var lastScrollTop = 0, delta = 15;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop()
    if(Math.abs(lastScrollTop - scrollTop) <= delta)
    return; 
    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
        $(".web_h").css("top","-100px");
    } else {
        $(".web_h").css("top","0px");
        $(".web_h").css("background-color","white");
    }
    lastScrollTop = scrollTop;
});


// 햄버거 버튼 
$(document).ready(function () {

  $('.h_ham').on('click', function () {
    $('.h_mobbox').css("display", "block");
  });
  $(".closeBtn").click(function(){
    $(".h_mobbox").css("display", "none");
  });


//달력 버튼 

  $('.c_btn').on('click', function () {
    $('.m_reserve_wrap').css("display", "block");
  });
  $(".close_reserve").click(function(){
    $(".m_reserve_wrap").css("display", "none");
  });


// 아코디언 
  function slideMenu() {
      var activeState = $("#menu-container .menu-list").hasClass("active");
      $("#menu-container .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
  }
  $("#menu-wrapper").click(function(event) {
      event.stopPropagation();
      $("#hamburger-menu").toggleClass("open");
      $("#menu-container .menu-list").toggleClass("active");
      slideMenu();

      $("body").toggleClass("overflow-hidden");
  });

  $(".menu-list").find(".accordion-toggle").click(function() {
      $(this).next().toggleClass("open").slideToggle("fast");
      $(this).toggleClass("active-tab").find(".menu-link").toggleClass("active");

      $(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
      $(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
  });


});
  



  //인원수 체크 스크립트

function mReserveA(type)  {
  const resultElement = document.querySelector('#adultResult');

  let number = resultElement.innerText;

  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }
  resultElement.innerText = number;
}

function mReserveC(type)  {
  const resultElement = document.querySelector('#childResult');
  
  let number = resultElement.innerText;

  if(type === 'plus') {
    number = parseInt(number) + 1;
  }else if(type === 'minus' && number>0)  {
    number = parseInt(number) - 1;
  }

  resultElement.innerText = number;
}