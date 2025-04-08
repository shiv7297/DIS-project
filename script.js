document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const dropdownMenu = document.getElementById("dropdown-menu");

  hamburger.addEventListener("click", () => {
    dropdownMenu.style.display = 
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Optional: Click outside to close
  document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});
