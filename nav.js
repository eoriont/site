document.addEventListener("DOMContentLoaded", () => {
  var navbar = document.getElementById("navbar");
  var navbarOffset = navbar.offsetTop;
  window.onscroll = () => {
    if (window.pageYOffset >= navbarOffset) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  window.addEventListener("resize", () => {
    navbarOffset = navbar.offsetTop;
  })

  document.getElementById("responsivebutton").addEventListener("click", responsiveNav);
  function responsiveNav() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
})
