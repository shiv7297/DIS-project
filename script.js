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



document.addEventListener("DOMContentLoaded", () => {
  // Login dropdown toggle
  const loginBtn = document.getElementById("loginDropdownBtn");
  const loginMenu = document.getElementById("loginDropdownMenu");

  loginBtn.addEventListener("click", () => {
    loginMenu.style.display =
      loginMenu.style.display === "block" ? "none" : "block";
  });

  // Sign Up dropdown toggle
  const signupBtn = document.getElementById("signupDropdownBtn");
  const signupMenu = document.getElementById("signupDropdownMenu");

  signupBtn.addEventListener("click", () => {
    signupMenu.style.display =
      signupMenu.style.display === "block" ? "none" : "block";
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!loginBtn.contains(e.target) && !loginMenu.contains(e.target)) {
      loginMenu.style.display = "none";
    }
    if (!signupBtn.contains(e.target) && !signupMenu.contains(e.target)) {
      signupMenu.style.display = "none";
    }
  });
});
