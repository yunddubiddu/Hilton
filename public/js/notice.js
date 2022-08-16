//게시물 리스트 열기 및 갈색바 움직이기.
$(document).ready(function () {
  var aAMENITIES = $(".noticeItem").text() == "AMENITIES";
  $("#ALL").click(function () {
    $(".tabcontent").show();
    $(".noti_graybar").css({ left: "0%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontAll").css("color", "#494949");
  });
  $("#AMENITIES").click(function () {
    $(".tabcontent").hide(), 
    $(".AMENITIES").show(0);
    $(".noti_graybar").css({ left: "12.3%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontAmenities").css("color", "#494949");
  });
  $("#SERVICE").click(function () {
    $(".tabcontent").hide();
    $(".SERVICE").show();
    $(".noti_graybar").css({ left: "26%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontService").css("color", "#494949");
  });
  $("#MEETING").click(function () {
    $(".tabcontent").hide();
    $(".MEETING").show();
    $(".noti_graybar").css({ left: "38.7%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontMeeting").css("color", "#494949");
  });
  $("#ROOMS").click(function () {
    $(".tabcontent").hide();
    $(".ROOMS").show();
    $(".noti_graybar").css({ left: "51.2%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontRooms").css("color", "#494949");
  });
  $("#DINING").click(function () {
    $(".tabcontent").hide();
    $(".DINING").show();
    $(".noti_graybar").css({ left: "63.5%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontDining").css("color", "#494949");
  });
  $("#EVENT").click(function () {
    $(".tabcontent").hide();
    $(".EVENT").show();
    $(".noti_graybar").css({ left: "75%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontEvent").css("color", "#494949");
  });
  $("#PARKIING").click(function () {
    $(".tabcontent").hide();
    $(".PARKIING").show();
    $(".noti_graybar").css({ left: "88%" });
    $(".grayfont").css("color", "#B0AFAF");
    $(".fontParking").css("color", "#494949");
  });
});
/// for문이랑 if else를 사용한 자바스크립트 구문 만들기!

//페이지네이션
function pagination() {
  var req_num_row = 8; //화면에 표시할 목록 개수
  var $tr = jQuery(".paging"); // paging 대상 class 명
  var total_num_row = $tr.length;
  var num_pages = 0;
  if (total_num_row % req_num_row == 0) {
    num_pages = total_num_row / req_num_row;
  }
  if (total_num_row % req_num_row >= 1) {
    num_pages = total_num_row / req_num_row;
    num_pages++;
    num_pages = Math.floor(num_pages++);
  }


  for (var i = 1; i <= num_pages; i++) {
    jQuery(".pagination").append(
      '<li class="page-item "><a class="page-link" href="#">' + i + "</a></li>"
    );
    jQuery(".pagination li:nth-child(2)").addClass("notice_colorr");
    jQuery(".pagination a").addClass("pagination-link");
  }

  $tr.each(function (i) {
    jQuery(this).hide();
    if (i + 1 <= req_num_row) {
      $tr.eq(i).show();
    }
  });

  jQuery(".pagination a").click(".pagination-link", function (e) {
    e.preventDefault();
    $tr.hide();
    var page = jQuery(this).text();
    var temp = page - 1;
    var start = temp * req_num_row;
    var current_link = temp;

    jQuery(".pagination li").removeClass("notice_colorr");
    jQuery(this).parent().addClass("notice_colorr");

    for (var i = 0; i < req_num_row; i++) {
      $tr.eq(start + i).show();
    }

    if (temp >= 1) {
      jQuery(".pagination li:first-child").removeClass("disabled");
    } else {
      jQuery(".pagination li:first-child").addClass("disabled");
    }
  });

  jQuery(".prev").click(function (e) {
    e.preventDefault();
    jQuery(".pagination li:first-child").removeClass("notice_colorr");
  });

  jQuery(".next").click(function (e) {
    e.preventDefault();
    jQuery(".pagination li:last-child").removeClass("notice_colorr");
  });
}

jQuery("document").ready(function () {
  pagination();

  jQuery(".pagination li:first-child").addClass("notice_colorr");
});
