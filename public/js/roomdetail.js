// ------amenities tap-------------클릭시 해당 내용 보기
function openTap(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Top 버튼 누를 시 화면위로 + 스크롤 다운시 사이드메뉴 보이게
var sidebar = document.getElementById("side_bar");
window.onscroll = function () {
  scrollFunction();
};

sidebar.style.display = "none";

function scrollFunction() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//공유 모달창
var modal = document.getElementById("Modal_Share");
var btn = document.getElementById("side_share");
var ubtn = document.getElementById("share");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
ubtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//아이콘 공유 링크 구현

function shareTwitter() {
  var sendText = "방 리스트"; // 전달할 텍스트
  var sendUrl = "room"; // 전달할 URL
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl
  );
}
function shareFacebook() {
  var sendUrl = "room"; // 전달할 URL
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
}
function shareKakao() {
  // 사용할 앱의 JavaScript 키 설정
  Kakao.init("88e2b5f9218db5b4bc69eba32f59cb45");

  // 카카오링크 버튼 생성
  Kakao.Link.createDefaultButton({
    container: "#btnKakao", // 카카오공유버튼ID
    objectType: "feed",
    content: {
      title: "Rooms", // 보여질 제목
      description: "호텔 방 소개", // 보여질 설명
      imageUrl: "/", // 콘텐츠 URL
      link: {
        mobileWebUrl: "/",
        webUrl: "/",
      },
    },
  });
}

//URL주소만 복사
function clip() {
  var dummy = document.createElement("input");
  var text = location.href;

  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);

  alert("URL이 복사되었습니다.");
}
