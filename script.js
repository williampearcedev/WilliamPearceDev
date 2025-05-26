// Infinite scrolling
document.addEventListener('DOMContentLoaded', () => {
  const scrollContent = document.querySelector('#scroll-section .scroll-content');

  // Duplicate items to create seamless scrolling
  scrollContent.innerHTML += scrollContent.innerHTML;

  // Set the width of the scroll-content to fit all items (ensures no gaps)
  const scrollItems = document.querySelectorAll('#scroll-section .scroll-item');
  const totalWidth = Array.from(scrollItems).reduce((sum, item) => {
      return sum + item.offsetWidth + parseInt(window.getComputedStyle(item).marginRight || 0);
  }, 0);
  scrollContent.style.width = `${totalWidth}px`;
});

function toggleNavbar() {
  var x = document.getElementById("navbarList");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}