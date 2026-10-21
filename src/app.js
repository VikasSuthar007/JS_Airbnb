const nav_scroll = document.getElementById("top_scroll_nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nav_scroll.classList.remove("hidden");
    nav_scroll.classList.add("fixed");
  } else {
    nav_scroll.classList.add("hidden");
    nav_scroll.classList.remove("fixed");
  }
});
