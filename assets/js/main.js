// ==========================================================================
// KARVIN FERNANDO — site scripts: nav toggle, active link, carousels
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  /* mobile nav toggle */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  /* active nav link based on current file */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  /* footer year */
  var yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* carousels */
  document.querySelectorAll('.carousel').forEach(function (carousel) {
    var slides = carousel.querySelectorAll('.carousel-slide');
    var dotsWrap = carousel.querySelector('.carousel-dots');
    var prev = carousel.querySelector('[data-prev]');
    var next = carousel.querySelector('[data-next]');
    var current = 0;

    if (!slides.length) return;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      if (dotsWrap) dotsWrap.appendChild(dot);
    });

    function goTo(i) {
      slides[current].classList.remove('active');
      if (dotsWrap) dotsWrap.children[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      if (dotsWrap) dotsWrap.children[current].classList.add('active');
    }

    if (prev) prev.addEventListener('click', function () { goTo(current - 1); });
    if (next) next.addEventListener('click', function () { goTo(current + 1); });

    var autoplay = setInterval(function () { goTo(current + 1); }, 6000);
    carousel.addEventListener('mouseenter', function () { clearInterval(autoplay); });
  });

  /* placeholder video play button -> visual only, no real video attached yet */
  document.querySelectorAll('[data-video-placeholder]').forEach(function (el) {
    el.addEventListener('click', function () {
      el.querySelector('.ph-label').textContent = 'Video placeholder — attach final file to activate playback';
    });
  });

  /* contact form -> Formspree (AJAX submit, no page redirect) */
  var form = document.querySelector('.contact-form');
  if (form) {
    var note = form.querySelector('[data-form-note]');
    var submitBtn = form.querySelector('button[type="submit"]');
    var endpoint = form.getAttribute('data-endpoint') || form.getAttribute('action') || '';
    var configured = endpoint && endpoint.indexOf('FORMSPREE_ID') === -1;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!configured) {
        if (note) note.textContent = 'Form not connected yet — set your Formspree form ID in contact.html before launch.';
        return;
      }

      var data = new FormData(form);
      if (note) note.textContent = 'Sending…';
      if (submitBtn) submitBtn.disabled = true;

      fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (note) note.textContent = 'Thanks — the message is through. Karvin will get back to you.';
        } else {
          return res.json().then(function (body) {
            var msg = (body && body.errors && body.errors.map(function (x) { return x.message; }).join(', ')) ||
                      'Something went wrong. Please email directly instead.';
            if (note) note.textContent = msg;
          });
        }
      }).catch(function () {
        if (note) note.textContent = 'Network error — please try again, or email directly.';
      }).then(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }
});
