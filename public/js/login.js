// 로그인 컬러 변경 

$("#member").click(function(){ // 이건 회원 li 
    $(".login_content").hide(); // 다 숨길 div임 
    $(".tab_wrapper").show(); // 이건 보여줄 첫번째 div 
    $(this).css("color","#fff"); // 글짜색 흰색 
    $(this).css("background-color","#19344D;"); // 배경 남색 
    $(".nonCcolor").css("background-color","#fff"); // css가 더 강력해서 이름 추가
    // 비회원인 경우 백그라운드 컬러 흰색으로 뜨게함 
    $(".nonCcolor").css("color","#494949");
    // 컬러는 검정색 

  });
  $("#nonmem").click(function(){ // 이건 비회원 li 
    $(".login_content").hide(); // 숨길 div임 
    $(".tab_wrapper2").show();
    $(this).css("color", "#fff");
    $(this).css("background-color", "#19344D;");
    $(".Ccolor").css("background-color","#fff");
    $(".Ccolor").css("color","#494949");
  });

  