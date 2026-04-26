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
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css">
  <link rel="stylesheet" href="/static/style.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='12' fill='%231A1A1A'/%3E%3Ctext y='.9em' font-size='80' x='10' fill='%23C8B99A'%3EK%3C/text%3E%3C/svg%3E">
</head>
<body>

  <!-- Navigation -->
  <nav class="nav" id="mainNav">
    <div class="nav__inner">
      <a href="/" class="nav__logo">
        <span class="nav__logo-name">KinCo Legacy Group</span>
        <span class="nav__logo-tagline">Atlanta Furnished Rentals</span>
      </a>
      <ul class="nav__links">
        <li><a href="/properties">Properties</a></li>
        <li><a href="/corporate">Corporate</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/contact" class="nav__cta">Book a Stay</a></li>
      </ul>
      <button class="nav__hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav__mobile" id="mobileMenu">
      <a href="/properties">Properties</a>
      <a href="/corporate">Corporate Housing</a>
      <a href="/about">About Us</a>
      <a href="/contact">Contact</a>
      <a href="/contact" style="color: var(--color-tan); font-weight: 700;">Book a Stay →</a>
    </div>
  </nav>

  ${body}

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <span class="footer__logo-name">KinCo Legacy Group</span>
          <span class="footer__logo-tagline">Atlanta Furnished Rentals</span>
          <p>Family-owned hospitality focused on comfortable, dependable stays with a contemporary touch.</p>
          <div class="footer__socials">
            <a href="#" class="footer__social" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="footer__social" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="footer__social" aria-label="Airbnb"><i class="fas fa-home"></i></a>
            <a href="#" class="footer__social" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer__col">
          <h5>Properties</h5>
          <ul class="footer__links">
            <li><a href="/properties">All Listings</a></li>
            <li><a href="/properties/artist-108">Artist 108 — 2BR Loft</a></li>
            <li><a href="/properties/artist-216">Artist 216 — 2BR Suite</a></li>
            <li><a href="/properties/midtown-2br">Midtown 2BR Apartment</a></li>
            <li><a href="/properties/studio-suite">1BR Executive Suite</a></li>
            <li><a href="/properties/family-home">4BR Family Home</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h5>Company</h5>
          <ul class="footer__links">
            <li><a href="/about">About KinCo</a></li>
            <li><a href="/corporate">Corporate Housing</a></li>
            <li><a href="/contact">Availability Inquiry</a></li>
            <li><a href="/contact">Partner With Us</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h5>Contact</h5>
          <ul class="footer__links">
            <li><a href="mailto:hello@kincolegacy.com">hello@kincolegacy.com</a></li>
            <li><a href="tel:+14045550100">(404) 555-0100</a></li>
            <li style="color: rgba(255,255,255,0.4); font-size: 0.85rem; line-height: 1.5;">Atlanta, Georgia<br>Serving Downtown, Midtown,<br>Old Fourth Ward & Beyond</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© 2025 KinCo Legacy Group. All rights reserved. Family-owned & operated in Atlanta, GA.</p>
        <ul class="footer__bottom-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">House Rules</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <script>
    // Nav scroll effect
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu toggle
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
        btn.textContent = 'Sending...';
        btn.disabled = true;
        await new Promise(r => setTimeout(r, 1000));
        const successMsg = document.getElementById('formSuccess');
        if (successMsg) {
          successMsg.style.display = 'block';
          form.reset();
        }
        btn.textContent = 'Send Message';
        btn.disabled = false;
      });
    }
  </script>
</body>
</html>`
}
