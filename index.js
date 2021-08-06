function menuClick() {
  const nav = document.getElementById("nav-links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

window.onclick = function(event) {
  if (!(event.target.matches("#nav-links") || event.target.matches(".nav-hamburger"))) {
    document.getElementById("nav-links").style.display = "none";
  }
}