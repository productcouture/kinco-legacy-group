export function layout(title: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="KinCo Legacy Group — Family-owned short-term rentals, furnished apartments, and corporate housing in Atlanta, GA. Contemporary stays for business travel, relocations, and extended stays.">
  <meta name="keywords" content="Atlanta short term rentals, furnished apartments Atlanta, corporate housing Atlanta, temporary housing Atlanta, family owned rentals Atlanta, monthly furnished stays Atlanta">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="Contemporary furnished apartments and homes in Atlanta for short stays, business travel, and relocations.">
  <meta property="og:type" content="website">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Inter:wght@300;400;500;600;700;800&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/static/style.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='8' fill='%23050505'/%3E%3Ctext y='.88em' font-size='72' x='12' fill='%23C9A86A' font-family='serif' font-weight='700'%3EK%3C/text%3E%3C/svg%3E">
</head>
<body>

  <!-- ===== NAVIGATION ===== -->
  <nav class="nav" id="mainNav">
    <div class="nav__inner">

      <!-- Logo -->
      <a href="/" class="nav__logo">
        <span class="nav__logo-name">KinCo Legacy Group</span>
        <span class="nav__logo-sub">Atlanta</span>
      </a>

      <!-- Center Links -->
      <ul class="nav__links">
        <li><a href="/properties">Properties</a></li>
        <li><a href="/corporate">Corporate</a></li>
        <li><a href="/about">About</a></li>
        <li>
          <a href="/owner-portal" style="display:flex;align-items:center;gap:6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Owner Portal
          </a>
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      <!-- Right CTA -->
      <div class="nav__cta">
        <a href="/contact" class="btn-nav">Book a Stay</a>
      </div>

      <!-- Hamburger -->
      <button class="nav__hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="nav__mobile" id="mobileMenu">
      <a href="/properties">Properties</a>
      <a href="/corporate">Corporate Housing</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/contact" style="color: var(--gold); margin-top: 8px;">Book a Stay →</a>
    </div>
  </nav>

  ${body}

  <!-- ===== FOOTER ===== -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <span class="footer__logo-name">KinCo Legacy Group</span>
          <span class="footer__logo-sub">Atlanta Furnished Rentals</span>
          <p>Family-owned hospitality committed to comfortable, dependable stays with a contemporary touch — serving guests, professionals, and partners across Atlanta.</p>
          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" class="footer__social" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" class="footer__social" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" class="footer__social" aria-label="Airbnb">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h5>Explore</h5>
          <ul class="footer__links">
            <li><a href="/properties">Our Properties</a></li>
            <li><a href="/corporate">Corporate Housing</a></li>
            <li><a href="/about">About KinCo</a></li>
            <li><a href="/contact">Availability Inquiry</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <h5>Owners</h5>
          <ul class="footer__links">
            <li><a href="/owner-portal" style="display:flex;align-items:center;gap:7px;"><svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='11' width='18' height='11' rx='2'/><path d='M7 11V7a5 5 0 0 1 10 0v4'/></svg> Owner Portal</a></li>
            <li><a href="/contact">Partner With Us</a></li>
          </ul>
        </div>

        <div class="footer__col">
          <h5>Contact</h5>
          <ul class="footer__links">
            <li><a href="mailto:hello@kincolegacy.com">hello@kincolegacy.com</a></li>
            <li><a href="tel:+14045550100">(404) 555-0100</a></li>
            <li style="color: var(--text-dim); font-size: 0.82rem; line-height: 1.7;">Atlanta, Georgia<br>Serving Downtown, Midtown,<br>Old Fourth Ward & Beyond</li>
          </ul>
        </div>
      </div>

      <div class="footer__bottom">
        <p>© 2025 KinCo Legacy Group. All rights reserved. Family-owned &amp; operated in Atlanta, GA.</p>
        <ul class="footer__bottom-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">House Rules</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <script>
    // Nav scroll shadow
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // FAQ accordion
    document.querySelectorAll('.faq__question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.closest('.faq__item');
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq__item').forEach(i => i.classList.remove('open'));
        if (!wasOpen) item.classList.add('open');
      });
    });

    // Contact form
    const form = document.getElementById('inquiryForm');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const btn = form.querySelector('[type=submit]');
        const orig = btn.textContent;
        btn.textContent = 'Sending…';
        btn.disabled = true;
        await new Promise(r => setTimeout(r, 1000));
        const msg = document.getElementById('formSuccess');
        if (msg) { msg.style.display = 'block'; form.reset(); }
        btn.textContent = orig;
        btn.disabled = false;
      });
    }

    // Hero image subtle pan
    const heroImg = document.querySelector('.hero__img');
    if (heroImg) {
      heroImg.style.transform = 'scale(1.04)';
      setTimeout(() => {
        heroImg.style.transition = 'transform 12s ease';
        heroImg.style.transform = 'scale(1)';
      }, 100);
    }

    // Intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.observe').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      observer.observe(el);
    });
  </script>
</body>
</html>`
}
