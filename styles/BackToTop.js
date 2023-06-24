
document.addEventListener('DOMContentLoaded', function() {


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



});

function toAnchor() {
  const anchor = document.getElementById('HomePage');
  if (anchor) {
    anchor.scrollIntoView();
  }
}