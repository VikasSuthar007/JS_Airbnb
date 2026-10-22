const nav_scroll = document.getElementById("top_scroll_nav");

const reserve = document.getElementById("reserve");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nav_scroll.classList.remove("hidden");
    nav_scroll.classList.add("fixed");
  } else {
    nav_scroll.classList.add("hidden");
    nav_scroll.classList.remove("fixed");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1800) {
    reserve.classList.remove("hidden");
    reserve.classList.add("flex");

    console.log(window.scrollY);
  } else {
    reserve.classList.add("hidden");
    reserve.classList.remove("flex");
  }
});
