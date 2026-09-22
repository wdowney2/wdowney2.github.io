// Maple & Rye Bakehouse -- main.js
// Handles the mobile nav toggle and a simple "order" button state.

var toggle = document.querySelector('.nav-toggle');
var nav = document.querySelector('nav');

if (toggle) {
  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
}

var orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Update just the leading text node so the SVG arrow icon stays put.
    btn.childNodes[0].textContent = 'Added to order ';
    btn.disabled = true;
  });
});
