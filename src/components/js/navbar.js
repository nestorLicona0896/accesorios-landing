// this function allows to display the navbar on mobile
export function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  if (navLinks) {
    navLinks.classList.toggle('active');

    // animation of menu icon
    if (navLinks.className === "nav-links active") {
      menuIcon.firstElementChild.style = "transform: rotate(45deg) translate(13px, 5px)";
      menuIcon.lastElementChild.style = "transform: rotate(-45deg) translate(13px, -5px);";
      menuIcon.children[1].style = "opacity:0;";
    } else {
      menuIcon.firstElementChild.style = "transform: rotate(0deg) translate(0px, 0px)";
      menuIcon.lastElementChild.style = "transform: rotate(0deg) translate(0px, 0px);";
      menuIcon.children[1].style = "opacity:1;";
    }
  }
}

// this function allows to hide the responsive nabvar when a link is clicked
export function toggleMenu2() {
  const navLinks = document.querySelector('.nav-links.active');
  const menuIcon = document.querySelector('.menu-icon');

  if (menuIcon && navLinks) {
    // animation of menu icon
    menuIcon.firstElementChild.style = "transform: rotate(0deg) translate(0px, 0px)";
    menuIcon.lastElementChild.style = "transform: rotate(0deg) translate(0px, 0px);";
    menuIcon.children[1].style = "opacity:1;";
    navLinks.classList.toggle('active');
  }
}