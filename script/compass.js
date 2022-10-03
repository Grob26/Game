window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("compass");
  image.style.transform = "rotate(" + window.pageYOffset / 100 + "deg)";
}
