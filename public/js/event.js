
$(window).on('load', function () { //첫 화면에 불러올 개체 수 설정
  load('#js-load', '6');
  $("#js-btn-wrap").on("click", function () { //더보기 클릭 시 불러올 개체 수 설정
    load('#js-load', '6', '#js-btn-wrap');
  })
});
function load(id, cnt) { //cnt = count, 여기서부턴 정확한 풀이X
  var item_list = id + " .js-load:not(.active)"; //.active 클래스를 부여하여 개체를 활성화하는 개념
  var item_length = $(item_list).length; //전체 리스트 개체 수를 파악하는 것 같음
  var item_total_cnt; //맨 아랫줄을 위해 만드는 변수 박스같음
  if (cnt < item_length) { //출력한 개체 수가 전체 개체 수보다 적을 때
    item_total_cnt = cnt;
  } else { //출력한 개체 수가 전체 개체 수보다 많거나 같을 때
    item_total_cnt = item_length;
    $('#js-btn-wrap').hide() //더보기 버튼을 숨김
  }
  $(item_list + ":lt(" + item_total_cnt + ")").addClass("active"); /*.active 클래스를 부여하여 개체를 활성화하는 것 같음
  자세히는 알 수 없음*/
}


// top button 

var eventSidebar = document.getElementById("event_side");
window.onscroll = function () {
  scrollFunction();
};

eventSidebar.style.display = "none";

function scrollFunction() {

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    eventSidebar.style.display = "flex";
  } else {
    eventSidebar.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}