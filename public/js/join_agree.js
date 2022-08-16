//유효성 검사 

var agreeBtn = document.querySelector('#agreeBtn');
agreeBtn.addEventListener('click', agreeForm);

function agreeForm() {

     var agreeFirst = document.querySelector("#agreeFirst");
     var agreeSecond = document.querySelector("#agreeSecond");

     if(agreeFirst.checked != true){

         alert("사이트 이용 약관에 동의해 주세요.");
         return false;

     } else if(agreeSecond.checked != true){

        alert("개인정보 수집에 동의해 주세요.");
        return false;
    } else {
        location.href='join'
     }
 };

 
 $(document).ready(function () {

//사이트 이용동의
$(".agree_wrap").on("click", "#agreeAll", function () {
    $(this).parents(".agree_wrap").find('input').prop("checked", $(this).is(":checked"));
});

$(".agree_wrap").on("click", ".normal_check", function() {
    var is_checked = true;

    $(".agree_wrap .normal_check").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#agreeAll").prop("checked", is_checked);
});


//마케팅활용동의

$(".advgroup_check").on("click", "#adv_all", function () {
    $(this).parents(".advgroup_check").find('input').prop("checked", $(this).is(":checked"));
});

$(".advgroup_check").on("click", ".adv_check", function() {
    var is_checked = true;

    $(".advgroup_check .adv_check").each(function(){
        is_checked = is_checked && $(this).is(":checked");
    });

    $("#adv_all").prop("checked", is_checked);
});

});


