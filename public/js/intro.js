var introSidebar = document.getElementById("intro_side");
window.onscroll = function () {
  scrollFunction();
};

introSidebar.style.display = "none";

function scrollFunction() {

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    introSidebar.style.display = "flex";
  } else {
    introSidebar.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}