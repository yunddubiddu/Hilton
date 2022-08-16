window.onload = function(){

        // 이메일 선택시 input에 입력
        $('#joinmail').change(function(){
            $("#joinmail option:selected").each(function () {
                 
                 if($(this).val()== '1'){ 
                      $("#userEmail").val('');                        
                      $("#userEmail").attr("disabled",false); 
                 }else{
                      $("#userEmail").val($(this).text());      
                      $("#userEmail").attr("disabled",true); 
                 }
            });
         });
};

//년도 생성
var now = new Date();
var year = now.getFullYear();
var adult = year - 19;

const birthYearEl = document.querySelector('#year')
isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1940; i <= adult; i++) {
      const YearOption = document.createElement('option')
      YearOption.setAttribute('value', i)
      YearOption.innerText = i + "년"
      this.appendChild(YearOption);
    }
  }
});

//월 생성
const birthmonthEl = document.querySelector('#month')
isMonthOptionExisted = false;
birthmonthEl.addEventListener('focus', function () {
  if(!isMonthOptionExisted) {
    isMonthOptionExisted = true
    for(var i = 1; i <= 12; i++) {
      const monthOption = document.createElement('option')
      monthOption.setAttribute('value', i)
      monthOption.innerText = i + "월"
      this.appendChild(monthOption);
    }
  }
});

//일 생성
const birthdayEl = document.querySelector('#day')
isDayOptionExisted = false;
birthdayEl.addEventListener('focus', function () {
  if(!isDayOptionExisted) {
    isDayOptionExisted = true
    for(var i = 1; i <= 31; i++) {
      const dayOption = document.createElement('option')
      dayOption.setAttribute('value', i)
      dayOption.innerText = i + "일"
      // birthYearEl의 자식 요소로 추가
      this.appendChild(dayOption);
    }
  }
});


var joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', joinCheck);

     //회원가입 유효성 검사 
function joinCheck(){ 
    var RegExp = /^[a-zA-Z0-9]{4,12}$/;
    var uid = document.getElementById("uid");
    var pwd = document.getElementById("pwd");
    var repwd = document.getElementById("pwdCheck");
    var email_id = document.getElementById("email_id");
    var uMail = document.getElementById("userEmail");
    var eNameF = document.getElementById("eNameF");
    var eNameL = document.getElementById("eNameL");
    var kName = document.getElementById("uname");
    var gender = document.getElementById("joingender");
    var mobile = document.getElementById("mobile");
    var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    var reg = /^[0-9]+/g; 
    var birthYear = document.getElementById("year");
    var birthMonth = document.getElementById("month");
    var birthDay = document.getElementById("day");

    // 아이디 유효성 검사 
    if(uid.value==''){
        alert("ID를 입력해주세요.");
        return false;}
    else if(!RegExp.test(uid.value)){
        alert("ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.");
        return false;}
    
    //비밀번호 유효성 검사 

    else if (pwd.value == "") {
        alert("비밀번호를 입력하세요.");
        return false;
      }
    
      //비밀번호 영문자+숫자+특수조합(8~25자리 입력) 정규식
    
    else if (!pwdCheck.test(pwd.value)) {
        alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야 합니다.");
        return false;
      }
    
    else if (repwd.value !== pwd.value) {
        alert("비밀번호가 일치하지 않습니다.");
        return false;
      }

    // 이메일 유효성 검사 
    
    else if (email_id.value == "") {
        alert("이메일 주소를 입력하세요.");
        return false;
      }

    else if (uMail.value == "") {
        alert("이메일 주소를 입력하세요.");
        return false;
        }
    
    // 이름 유효성 검사
      
    else if (eNameF.value == "") {
        alert("영문명(이름)을 입력하세요.");
        return false;
        }

    else if (eNameL.value == "") {
        alert("영문명(성)을 입력하세요.");
        return false;
        }

    else if (kName.value == "") {
        alert("성명(한글)을 입력하세요.");
        return false;
        }

    // 생년월일 유효성 검사 적용 해야함

    else if (birthYear.value == ""){
        alert("출생년도를 선택하세요.");
        return false;
    }

    else if (birthMonth.value == ""){
        alert("출생월을 선택하세요.");
        return false;
    }

    else if (birthDay.value == ""){
        alert("출생일을 선택하세요.");
        return false;
    }

    // 성별 유효성 검사 
    else if (gender.value == ""){
        alert("성별을 선택하세요.");
        return false;
    }

    // 연락처 유효성 검사 

    else if (!reg.test(mobile.value)) {
      alert("전화번호는 숫자만 입력할 수 있습니다.");
      return false;
    }

    else if (mobile.value.length != 11){
        alert("전화번호는 11자리로 입력해주세요.");
        return false;
    } 
     else {
     document.getElementById("joinpost").submit();
    }


}