////인원 띄우기
function openCloseToc1() {
  if (document.getElementById("reservation_1_men").style.display === "block") {
    document.getElementById("reservation_1_men").style.display = "none";
  } else {
    document.getElementById("reservation_1_men").style.display = "block";
  }
}
////객실선택 띄우기
function openCloseToc() {
  if (document.getElementById("rooms_content").style.display === "block") {
    document.getElementById("rooms_content").style.display = "none";
  } else {
    document.getElementById("rooms_content").style.display = "block";
  }
}
//요금 띄우기
function openCloseToc3() {
  if (document.getElementById("option").style.display === "block") {
    document.getElementById("option").style.display = "none";
  } else {
    document.getElementById("option").style.display = "block";
  }
}

////체크박스 하나만
function clickCheck(target) {
  document
    .querySelectorAll(`input[type=checkbox]`)
    .forEach((el) => (el.checked = false));
  target.checked = true;
}

//동의 아코디언
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.onload = function () {
  // 이메일 선택시 input에 입력
  $(".mail_select").change(function () {
    $(".mail_select option:selected").each(function () {
      if ($(this).val() == "1") {
        $(".email_adr").val("");
        $(".email_adr").attr("disabled", false);
      } else {
        $(".email_adr").val($(this).text());
        $(".email_adr").attr("disabled", true);
      }
    });
  });
};

//년도 생성
var now = new Date();
var year = now.getFullYear();
var adult = year - 19;

const birthYearEl = document.querySelector("#birthyear");
isYearOptionExisted = false;
birthYearEl.addEventListener("focus", function () {
  if (!isYearOptionExisted) {
    isYearOptionExisted = true;
    for (var i = 1940; i <= adult; i++) {
      const YearOption = document.createElement("option");
      YearOption.setAttribute("value", i);
      YearOption.innerText = i + "년";
      this.appendChild(YearOption);
    }
  }
});

//월 생성
const birthmonthEl = document.querySelector("#birthmonth");
isMonthOptionExisted = false;
birthmonthEl.addEventListener("focus", function () {
  if (!isMonthOptionExisted) {
    isMonthOptionExisted = true;
    for (var i = 1; i <= 12; i++) {
      const monthOption = document.createElement("option");
      monthOption.setAttribute("value", i);
      monthOption.innerText = i + "월";
      this.appendChild(monthOption);
    }
  }
});

//일 생성
const birthdayEl = document.querySelector("#birthday");
isDayOptionExisted = false;
birthdayEl.addEventListener("focus", function () {
  if (!isDayOptionExisted) {
    isDayOptionExisted = true;
    for (var i = 1; i <= 31; i++) {
      const dayOption = document.createElement("option");
      dayOption.setAttribute("value", i);
      dayOption.innerText = i + "일";
      // birthYearEl의 자식 요소로 추가
      this.appendChild(dayOption);
    }
  }
});

//예약확인 버튼
var ResBtn = document.querySelector("#ResBtn");
ResBtn.addEventListener("click", ResChk);

//유효성 검사
function ResChk() {
  var email_id = document.getElementById("email_id");
  var uMail = document.getElementById("userEmail");
  var eNameF = document.getElementById("eNameF");
  var eNameL = document.getElementById("eNameL");
  var reg = /^[0-9]+/g;
  var mobile = document.getElementById("mobile");
  var birthYear = document.getElementById("birthyear");
  var birthMonth = document.getElementById("birthmonth");
  var birthDay = document.getElementById("birthday");
  var cardSelect = document.getElementById("cardselect");
  var cardNum1 = document.getElementById("cardnum1");
  var cardNum2 = document.getElementById("cardnum2");
  var cardNum3 = document.getElementById("cardnum3");
  var cardNum4 = document.getElementById("cardnum4");
  var cardCVC = document.getElementById("cardcvc");
  var selmonth = document.getElementById("selmonth");
  var selyear = document.getElementById("selyears");

  // 유효성 검사 항목
  if (eNameF.value == "") {
    alert("영문명(이름)을 입력하세요.");
    return false;
  } else if (eNameL.value == "") {
    alert("영문명(성)을 입력하세요.");
    return false;
  } else if (birthYear.value == "") {
    alert("출생년도를 선택하세요.");
    return false;
  } else if (birthMonth.value == "") {
    alert("출생월을 선택하세요.");
    return false;
  } else if (birthDay.value == "") {
    alert("출생일을 선택하세요.");
    return false;
  } else if (!reg.test(mobile.value)) {
    alert("전화번호는 숫자만 입력할 수 있습니다.");
    return false;
  } else if (mobile.value.length != 10) {
    alert("전화번호는 10자리로 입력해주세요.");
    return false;
  } else if (email_id.value == "") {
    alert("이메일 주소를 입력하세요.");
    return false;
  } else if (uMail.value == "") {
    alert("이메일 주소를 입력하세요.");
    return false;
  } else if (cardSelect.value == "") {
    alert("카드를 선택하세요.");
    return false;
  } else if (cardNum1.value.length !== 4) {
    alert("카드번호를 입력하세요.");
    return false;
  } else if (cardNum2.value.length !== 4) {
    alert("카드번호를 입력하세요.");
    return false;
  } else if (cardNum3.value == "") {
    alert("카드번호를 입력하세요.");
    return false;
  } else if (cardNum4.value.length !== 4) {
    alert("카드번호를 입력하세요.");
    return false;
  } else if (cardCVC.value.length !== 3) {
    alert("CVC(뒤 3자리)를 입력하세요.");
    return false;
  } else if (selmonth.value == "") {
    alert("카드 월일을 선택하세요.");
    return false;
  } else if (selyear.value == "") {
    alert("카드 년도를 선택하세요.");
    return false;
  } else {
    "click", ResForm();
  }
}

// 개인정보 동의 유효성
function ResForm() {
  var ResFirst = document.querySelector("#chk02");
  var ResSecond = document.querySelector("#chk03");

  if (ResFirst.checked != true) {
    alert("개인정보 수집에 동의해 주세요.");
    return false;
  } else if (ResSecond.checked != true) {
    alert("결제취소 규정에 동의해 주세요.");
    return false;
  } else {
    (location.href = "/reservation3"), submit();
  }
}

// 동의 모두선택 / 해제
$(document).ready(function () {
  $("#chk01").click(function () {
    if ($("#chk01").is(":checked"))
      $("input[name=cagree]").prop("checked", true);
    else $("input[name=cagree]").prop("checked", false);
  });

  $("input[name=cagree]").click(function () {
    var total = $("input[name=cagree]").length;
    var checked = $("input[name=cagree]:checked").length;

    if (total != checked) $("#chk01").prop("checked", false);
    else $("#chk01").prop("checked", true);
  });
});

////TOP JS//////////
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
