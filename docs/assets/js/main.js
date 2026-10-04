// Mobile menu toggle and footer year.
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      // The links precede the toggle in the DOM, so move focus into the opened menu.
      if (open) { var first = links.querySelector('a'); if (first) first.focus(); }
    });
  }
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
