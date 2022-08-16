
//인원수 체크 스크립트

function countAdult(type)  {
    const resultElement = document.getElementById('adultResult');

    let number = resultElement.innerText;

    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus' && number>0)  {
      number = parseInt(number) - 1;
    }
    resultElement.innerText = number;
  }

  function countChild(type)  {
    const resultElement = document.getElementById('childResult');
    
    let number = resultElement.innerText;

    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus' && number>0)  {
      number = parseInt(number) - 1;
    }

    resultElement.innerText = number;
  }


 //달력 스크립트 

    $.datepicker.setDefaults({
      dateFormat: 'yy-mm-dd',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      showMonthAfterYear: true,
      yearSuffix: '년'
    });

    $("#sDate").datepicker({
    minDate:0,
    onSelect: function(selected) {
    $("#eDate").datepicker("option","minDate", selected)}
    });

    $("#eDate").datepicker({
    onSelect: function(selected) {
    $("#sDate").datepicker("option","maxDate", selected)}
    });



/*

$(function() {

  $('#sDate').daterangepicker({

    locale : {
      "format": "YYYY-MM-DD",
      "separator": " ~ ",
      "applyLabel": "확인",
      "cancelLabel": "취소",
      "fromLabel": "From",
      "toLabel": "To",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
      "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
  },
    singleDatePicker: true,
    showDropdowns: true,
    startDate:new Date(), 
    minDate: new Date(),
    autoApply: true
})

//시작일 이후 날짜로 선택가능하도록 해야함
  $('#eDate').daterangepicker({
    locale: {
        "format": "YYYY-MM-DD",
        "separator": " ~ ",
        "applyLabel": "확인",
        "cancelLabel": "취소",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": ["일", "월", "화", "수", "목", "금", "토"],
        "monthNames": ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    },
      singleDatePicker: true,
      showDropdowns: true,
      autoApply: true,
  }) 
});*/