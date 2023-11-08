const navButton = document.querySelector(".nav_burger_button");
const navIcon = document.querySelector(".nav_icon");
const navMenu = document.querySelector("#nav_menu");

navButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu");

  navMenu.classList.toggle("menu_open");

  navButton.firstChild.nextElementSibling.classList.toggle("ri-menu-line");
  navButton.firstChild.nextElementSibling.classList.toggle(
    "ri-close-circle-line"
  );

  if (navMenu.classList.contains("menu_open")) {
    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !navButton.contains(event.target)
      ) {
        navMenu.classList.toggle("menu_open");
        if (!navMenu.classList.contains("nav_menu")) {
          navMenu.classList.toggle("nav_menu");
          navButton.firstChild.nextElementSibling.classList.toggle(
            "ri-menu-line"
          );
          navButton.firstChild.nextElementSibling.classList.toggle(
            "ri-close-circle-line"
          );
        }
      }
    });
  }
});
