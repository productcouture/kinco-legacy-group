export function contactPage(): string {
  return `
  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero__eyebrow">Get In Touch</div>
    <h1>Let's Find Your<br>Perfect Stay</h1>
    <p>Whether you're booking a weekend, arranging corporate housing, or just have questions — we're here and we respond quickly.</p>
  </div>

  <!-- CONTACT MAIN -->
  <section class="contact">
    <div class="container">
      <div class="contact__inner">
        <!-- Contact Info -->
        <div class="contact__info">
          <div class="eyebrow">Reach Us</div>
          <h2>We'd Love to Hear From You</h2>
          <p>KinCo Legacy Group is family-owned and operated. That means when you contact us, you're talking to people who genuinely care about your experience — not a call center.</p>
          <div class="contact__details">
            <div class="contact__detail">
              <div class="contact__detail-icon"><i class="fas fa-envelope"></i></div>
              <div class="contact__detail-info">
                <strong>Email</strong>
                <span><a href="mailto:hello@kincolegacy.com" style="color: var(--color-tan);">hello@kincolegacy.com</a></span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon"><i class="fas fa-phone"></i></div>
              <div class="contact__detail-info">
                <strong>Phone / Text</strong>
                <span><a href="tel:+14045550100" style="color: var(--color-tan);">(404) 555-0100</a></span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon"><i class="fas fa-map-marker-alt"></i></div>
              <div class="contact__detail-info">
                <strong>Location</strong>
                <span>Atlanta, Georgia<br>All properties within ATL metro</span>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon"><i class="fas fa-clock"></i></div>
              <div class="contact__detail-info">
                <strong>Response Time</strong>
                <span>Within 24 hours, guaranteed.<br>Urgent? Call or text us directly.</span>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div style="margin-top: 36px; padding-top: 32px; border-top: 1px solid var(--color-border);">
            <p style="font-size: 0.78rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--color-charcoal-light); margin-bottom: 16px;">Follow Us</p>
            <div style="display: flex; gap: 12px;">
              <a href="#" style="display: flex; align-items: center; gap: 8px; font-size: 0.875rem; font-weight: 500; color: var(--color-charcoal); padding: 10px 16px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); transition: all 0.2s;" class="social-link">
                <i class="fab fa-instagram" style="color: #E4405F;"></i> Instagram
              </a>
              <a href="#" style="display: flex; align-items: center; gap: 8px; font-size: 0.875rem; font-weight: 500; color: var(--color-charcoal); padding: 10px 16px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); transition: all 0.2s;" class="social-link">
                <i class="fab fa-facebook-f" style="color: #1877F2;"></i> Facebook
              </a>
              <a href="#" style="display: flex; align-items: center; gap: 8px; font-size: 0.875rem; font-weight: 500; color: var(--color-charcoal); padding: 10px 16px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); transition: all 0.2s;" class="social-link">
                <i class="fab fa-airbnb" style="color: #FF5A5F;"></i> Airbnb
              </a>
            </div>
          </div>
        </div>

        <!-- Inquiry Form -->
        <div>
          <div class="form">
            <div style="margin-bottom: 28px;">
              <h3 style="margin-bottom: 8px;">Availability Inquiry</h3>
              <p style="font-size: 0.875rem; color: var(--color-steel);">Fill out the form and we'll get back to you with availability, pricing, and anything else you need.</p>
            </div>
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
                  <label class="form__label">Guests</label>
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
              <button type="submit" class="btn btn--primary btn--lg" style="width: 100%; justify-content: center;">
                <i class="fas fa-paper-plane"></i> Send Inquiry
              </button>
              <div id="formSuccess" class="form__success">
                <i class="fas fa-check-circle" style="margin-right: 8px;"></i>
                Thank you! We'll be in touch within 24 hours.
              </div>
              <p style="font-size: 0.75rem; color: var(--color-steel); text-align: center; margin-top: 12px;">
                By submitting, you agree to our privacy policy. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MAP / AREA INFO -->
  <section style="background: var(--color-warm-white); padding: 64px 0;">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Our Area</div>
        <h2>Atlanta, Georgia</h2>
        <p>All of our properties are located within Atlanta's most connected and vibrant neighborhoods.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;">
        <div style="text-align: center; padding: 24px 16px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <div style="font-size: 1.5rem; margin-bottom: 8px;">🏙️</div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--color-black); margin-bottom: 4px;">Downtown</div>
          <div style="font-size: 0.75rem; color: var(--color-steel);">Artist 108, Artist 216</div>
        </div>
        <div style="text-align: center; padding: 24px 16px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <div style="font-size: 1.5rem; margin-bottom: 8px;">🌳</div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--color-black); margin-bottom: 4px;">Midtown</div>
          <div style="font-size: 0.75rem; color: var(--color-steel);">Midtown 2BR Apt</div>
        </div>
        <div style="text-align: center; padding: 24px 16px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <div style="font-size: 1.5rem; margin-bottom: 8px;">🎨</div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--color-black); margin-bottom: 4px;">Old Fourth Ward</div>
          <div style="font-size: 0.75rem; color: var(--color-steel);">1BR Executive Suite</div>
        </div>
        <div style="text-align: center; padding: 24px 16px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
          <div style="font-size: 1.5rem; margin-bottom: 8px;">🏡</div>
          <div style="font-weight: 700; font-size: 0.875rem; color: var(--color-black); margin-bottom: 4px;">Metro Area</div>
          <div style="font-size: 0.75rem; color: var(--color-steel);">4BR Family Home</div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ MINI -->
  <section style="background: var(--color-white); padding: 64px 0;">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Quick Answers</div>
        <h2>Common Booking Questions</h2>
      </div>
      <div class="faq__list" style="max-width: 700px;">
        <div class="faq__item">
          <div class="faq__question">
            How quickly do you respond?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            We guarantee a response within 24 hours on all inquiries. For urgent or same-day requests, please call or text us directly at (404) 555-0100.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            Can I book directly without Airbnb?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Yes! We welcome direct bookings, especially for extended and corporate stays. Direct bookings often allow more flexibility on pricing and terms. Use the inquiry form above.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            Do you work with relocation companies?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Absolutely. We work with corporate relocation firms, HR departments, and travel management companies. Contact us to set up a corporate account.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            What is your cancellation policy?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Cancellation policies vary by booking platform and stay type. For direct bookings, we offer flexible terms — contact us to discuss your specific needs.
          </div>
        </div>
      </div>
    </div>
  </section>

  <style>
    .social-link:hover {
      border-color: var(--color-tan) !important;
      background: var(--color-off-white);
    }
  </style>
`
}
