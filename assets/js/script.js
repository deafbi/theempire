

const hamburger = document.querySelector(".hamburger"),
  nav = document.querySelector("nav"),
  body = document.body;
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active"),
    nav.classList.contains("active")
      ? (body.style.overflow = "hidden")
      : (body.style.overflowY = "auto");
});

document.addEventListener("DOMContentLoaded", function() {
  var overlay = document.getElementById("overlay");

  // Check if overlay exists
  if (overlay) {
      // Check if the URL is exactly '/'
      if (window.location.pathname === "/" && !window.location.hash) {
          // Smoothly transition opacity to 0 over 1s
          overlay.style.transition = "opacity 1s";
          overlay.style.opacity = 0;

          // After the transition ends, remove the overlay from the DOM
          overlay.addEventListener("transitionend", function() {
              overlay.remove();
          }, { once: true }); // { once: true } ensures the event listener is fired only once
      } else {
        window.location.href = "/";
      }
  }
});



