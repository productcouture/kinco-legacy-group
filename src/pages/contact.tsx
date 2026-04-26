export function contactPage(): string {
  const iconEmail = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  const iconPhone = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.1 6.1l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`
  const iconPin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  const iconClock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
  const iconInsta = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`
  const iconFB = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`
  const iconLinkedIn = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`
  const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`

  return `
  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero__eyebrow"><div class="eyebrow" style="justify-content:center;">Get In Touch</div></div>
    <h1>Let's Find Your<br>Perfect Stay</h1>
    <p>Whether you're booking a weekend, arranging corporate housing, or just have questions — we're here and we respond quickly.</p>
  </div>

  <!-- CONTACT MAIN -->
  <section class="contact">
    <div class="container">
      <div class="contact__inner">

        <!-- Contact Info -->
        <div class="contact__info">
          <div class="eyebrow" style="margin-bottom:20px;">Reach Us</div>
          <h2 style="margin-bottom:20px;">We'd Love to Hear From You</h2>
          <p style="margin-bottom:36px;">KinCo Legacy Group is family-owned and operated. That means when you contact us, you're talking to people who genuinely care about your experience — not a call center.</p>
          <div class="contact__details">
            <div class="contact__detail">
              <div class="contact__detail-icon">${iconEmail}</div>
              <div class="contact__detail-info">
                <strong>Email</strong>
                <span><a href="mailto:hello@kincolegacy.com">hello@kincolegacy.com</a></span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon">${iconPhone}</div>
              <div class="contact__detail-info">
                <strong>Phone / Text</strong>
                <span><a href="tel:+14045550100">(404) 555-0100</a></span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon">${iconPin}</div>
              <div class="contact__detail-info">
                <strong>Location</strong>
                <span>Atlanta, Georgia<br>All properties within ATL metro</span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon">${iconClock}</div>
              <div class="contact__detail-info">
                <strong>Response Time</strong>
                <span>Within 24 hours, guaranteed.<br>Urgent? Call or text us directly.</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div style="margin-top: 40px; padding-top: 32px; border-top: 1px solid var(--border-gold);">
            <p style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 18px;">Follow Us</p>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <a href="#" class="contact-social-btn">
                <span style="color:var(--gold);display:flex;align-items:center;">${iconInsta}</span>
                <span>Instagram</span>
              </a>
              <a href="#" class="contact-social-btn">
                <span style="color:var(--gold);display:flex;align-items:center;">${iconFB}</span>
                <span>Facebook</span>
              </a>
              <a href="#" class="contact-social-btn">
                <span style="color:var(--gold);display:flex;align-items:center;">${iconLinkedIn}</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Inquiry Form -->
        <div>
          <div class="form">
            <div class="form__title">Availability Inquiry</div>
            <div class="form__subtitle">Fill out the form and we'll get back to you with availability, pricing, and anything else you need.</div>
            <form id="inquiryForm" novalidate>
              <div class="form__row">
                <div class="form__group">
                  <label class="form__label">First Name *</label>
                  <input type="text" class="form__input" placeholder="Your first name" required>
                </div>
                <div class="form__group">
                  <label class="form__label">Last Name *</label>
                  <input type="text" class="form__input" placeholder="Your last name" required>
                </div>
              </div>
              <div class="form__row">
                <div class="form__group">
                  <label class="form__label">Email Address *</label>
                  <input type="email" class="form__input" placeholder="you@email.com" required>
                </div>
                <div class="form__group">
                  <label class="form__label">Phone Number</label>
                  <input type="tel" class="form__input" placeholder="(404) 000-0000">
                </div>
              </div>
              <div class="form__group">
                <label class="form__label">Stay Type *</label>
                <select class="form__select" required>
                  <option value="">Select stay type...</option>
                  <option>Short Stay (3–29 nights)</option>
                  <option>Monthly / Extended Stay</option>
                  <option>Corporate / Business Travel</option>
                  <option>Executive Relocation</option>
                  <option>Traveling Nurse / Medical</option>
                  <option>Film / Production Crew</option>
                  <option>Insurance Displacement</option>
                  <option>Family Visit</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form__row">
                <div class="form__group">
                  <label class="form__label">Check-In Date</label>
                  <input type="date" class="form__input">
                </div>
                <div class="form__group">
                  <label class="form__label">Check-Out Date</label>
                  <input type="date" class="form__input">
                </div>
              </div>
              <div class="form__row">
                <div class="form__group">
                  <label class="form__label">Number of Guests</label>
                  <select class="form__select">
                    <option value="">Select...</option>
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5–6 Guests</option>
                    <option>7–10 Guests</option>
                    <option>10+ Guests</option>
                  </select>
                </div>
                <div class="form__group">
                  <label class="form__label">Interested In</label>
                  <select class="form__select">
                    <option value="">Any property</option>
                    <option>Artist 108 (2BR Loft)</option>
                    <option>Artist 216 (2BR Suite)</option>
                    <option>Midtown 2BR Apartment</option>
                    <option>1BR Executive Suite</option>
                    <option>4BR Family Home</option>
                    <option>Let us recommend</option>
                  </select>
                </div>
              </div>
              <div class="form__group">
                <label class="form__label">Additional Details</label>
                <textarea class="form__textarea" placeholder="Tell us about your stay, special requirements, corporate billing needs, or any questions you have..."></textarea>
              </div>
              <button type="submit" class="btn btn--gold btn--lg" style="width: 100%; justify-content: center;">
                Send Inquiry
              </button>
              <div id="formSuccess" class="form__success">
                Thank you! We'll be in touch within 24 hours.
              </div>
              <p style="font-size: 0.72rem; color: var(--text-dim); text-align: center; margin-top: 14px; line-height: 1.6;">
                By submitting, you agree to our privacy policy. We never share your information.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- AREA INFO -->
  <section style="background: var(--black-panel); border-top: 1px solid var(--border-gold); padding: 72px 0;">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Our Area</div>
        <h2>Atlanta, Georgia</h2>
        <p>All of our properties are located within Atlanta's most connected and vibrant neighborhoods.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;" class="observe">
        <div style="text-align: center; padding: 28px 16px; background: var(--black-card); border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
          <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--gold); margin-bottom: 10px;">DT</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary); margin-bottom: 6px;">Downtown</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">Artist 108, Artist 216</div>
        </div>
        <div style="text-align: center; padding: 28px 16px; background: var(--black-card); border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
          <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--gold); margin-bottom: 10px;">MT</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary); margin-bottom: 6px;">Midtown</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">Midtown 2BR Apt</div>
        </div>
        <div style="text-align: center; padding: 28px 16px; background: var(--black-card); border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
          <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--gold); margin-bottom: 10px;">O4W</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary); margin-bottom: 6px;">Old Fourth Ward</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">1BR Executive Suite</div>
        </div>
        <div style="text-align: center; padding: 28px 16px; background: var(--black-card); border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
          <div style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 700; color: var(--gold); margin-bottom: 10px;">ATL</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary); margin-bottom: 6px;">Metro Area</div>
          <div style="font-size: 0.72rem; color: var(--text-dim);">4BR Family Home</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ MINI -->
  <section style="background: var(--black); border-top: 1px solid var(--border-gold); padding: 72px 0;">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Quick Answers</div>
        <h2>Common Booking Questions</h2>
      </div>
      <div class="faq__list observe">
        <div class="faq__item">
          <div class="faq__question">How quickly do you respond? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">We guarantee a response within 24 hours on all inquiries. For urgent or same-day requests, please call or text us directly at (404) 555-0100.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">Can I book directly without Airbnb? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Yes — we welcome direct bookings, especially for extended and corporate stays. Direct bookings often allow more flexibility on pricing and terms. Use the inquiry form above.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">Do you work with relocation companies? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Absolutely. We work with corporate relocation firms, HR departments, and travel management companies. Contact us to set up a corporate account.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">What is your cancellation policy? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Cancellation policies vary by booking platform and stay type. For direct bookings, we offer flexible terms — contact us to discuss your specific needs.</div>
        </div>
      </div>
    </div>
  </section>

  <style>
    .contact-social-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-muted);
      padding: 10px 18px;
      border: 1px solid var(--border-gold);
      border-radius: var(--radius-sm);
      transition: all var(--duration);
    }
    .contact-social-btn svg { width: 14px; height: 14px; }
    .contact-social-btn:hover {
      border-color: var(--gold);
      color: var(--gold);
      background: var(--gold-muted);
    }
  </style>
`
}
