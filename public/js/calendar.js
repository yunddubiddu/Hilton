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
  
    //메인모바일 달력

    $("#MsDate").datepicker({
        minDate:0,
        onSelect: function(selected) {
        $("#MeDate").datepicker("option","minDate", selected)}
    });
  
    $("#MeDate").datepicker({
      onSelect: function(selected) {
      $("#MsDate").datepicker("option","maxDate", selected)}
    });
  
    //이벤트 페이지 달력

    $("#e_date_start").datepicker({
        onSelect: function(selected) {
        $("#e_date_end").datepicker("option","minDate", selected)}
    });
      
    $("#e_date_end").datepicker({
        onSelect: function(selected) {
        $("#e_date_start").datepicker("option","maxDate", selected)}
    });

    //예약 페이지 달력
    $("#ResCheakIn").datepicker({
        minDate:0,
        onSelect: function(selected) {
        $("#ResCheakOut").datepicker("option","minDate", selected)}
    });
      
    $("#ResCheakOut").datepicker({
        onSelect: function(selected) {
        $("#ResCheakIn").datepicker("option","maxDate", selected)}
    });
    //예약 모바일 페이지 달력

    $("#ResCheakInM").datepicker({
        minDate:0,
        onSelect: function(selected) {
        $("#ResCheakOutM").datepicker("option","minDate", selected)}
    });
      
    $("#ResCheakOutM").datepicker({
        onSelect: function(selected) {
        $("#ResCheakInM").datepicker("option","maxDate", selected)}
    });

    //메인 페이지 달력
    $("#MainCheakIn").datepicker({
        minDate:0,
      onSelect: function(selected) {
      $("#MainCheakOut").datepicker("option","minDate", selected)}
      });
      
      $("#MainCheakOut").datepicker({
      onSelect: function(selected) {
      $("#ResCheakIn").datepicker("option","maxDate", selected)}
      });
    