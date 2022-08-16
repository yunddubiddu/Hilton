$(document).ready(function () {
  $("#tab_all").click(function () {
    $("#tab1").show();
    $("#tab2").show();
    $("#tab3").show();
  });
  $("#tab_guest").click(function () {
    $("#tab1").show();
    $("#tab2").hide();
    $("#tab3").hide();
  });
  $("#tab_suites").click(function () {
    $("#tab1").hide();
    $("#tab2").show();
    $("#tab3").hide();
  });
  $("#tab_execu").click(function () {
    $("#tab1").hide();
    $("#tab2").hide();
    $("#tab3").show();
  });
});

$(document).ready(function () {
  $("#select").change(function () {
    var result = $("#select option:selected").val();
    if (result == "all") {
      $("#tab1").show();
      $("#tab2").show();
      $("#tab3").show();
    }
    if (result == "guest") {
      $("#tab1").show();
      $("#tab2").hide();
      $("#tab3").hide();
    }
    if (result == "suite") {
      $("#tab1").hide();
      $("#tab2").show();
      $("#tab3").hide();
    }
    if (result == "execu") {
      $("#tab1").hide();
      $("#tab2").hide();
      $("#tab3").show();
    }
  });
});

var sidebar = document.getElementById("side_bar");
window.onscroll = function () {
  scrollFunction();
};

sidebar.style.display = "none";

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
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


// function openRoom(evt, tabName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
