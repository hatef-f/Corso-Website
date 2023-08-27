const navbar = document.querySelector(".navbar");

const userScroll = function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar--scrolled");
    } else {
      navbar.classList.remove("navbar--scrolled");
    }
  });
};
document.addEventListener("DOMContentLoaded", userScroll);
