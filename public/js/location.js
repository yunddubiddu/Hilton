
  $(window).resize(function(){ 
    if (window.innerWidth > 768) { 
      
      $(".locationMap").hide();
      $(".locationMap:first").show();

      $(".location_tab>ul>li").click(function () {
          $(".locationMap").hide();
          var activeTab = $(this).attr("rel");
          $("#" + activeTab).fadeIn();
      });

  } else{

      $('#btn1').click(function(){
        var offset = $('#map').offset();
              
      $('html').animate({scrollTop : offset.top}, 400);});
  
      $('#btn2').click(function(){
        var offset = $('#train').offset();
            
      $('html').animate({scrollTop : offset.top}, 400);});
  
      $('#btn3').click(function(){
        var offset = $('#taxi').offset();
            
      $('html').animate({scrollTop : offset.top}, 400);});
  
      $('#btn4').click(function(){
        var offset = $('#walk').offset();
            
      $('html').animate({scrollTop : offset.top}, 400);});
  
    };
}).resize()



var locationSidebar = document.getElementById("location_side");
window.onscroll = function () {
  scrollFunction();
};

locationSidebar.style.display = "none";

function scrollFunction() {

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    locationSidebar.style.display = "flex";
  } else {
    locationSidebar.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
