export function corporatePage(): string {
  return `
  <!-- PAGE HERO -->
  <div style="background: var(--color-black); padding: 160px 24px 96px; text-align: center; position: relative; overflow: hidden;">
    <div style="position: absolute; inset: 0; opacity: 0.12;">
      <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80&auto=format&fit=crop"
        style="width: 100%; height: 100%; object-fit: cover;" alt="Modern corporate apartment" />
    </div>
    <div style="position: relative; z-index: 1; max-width: 700px; margin: 0 auto;">
      <div class="eyebrow" style="color: var(--color-sand); justify-content: center; margin-bottom: 16px;">
        <span style="display: block; width: 24px; height: 1px; background: var(--color-sand);"></span>
        Corporate Housing · Atlanta, GA
      </div>
      <h1 style="color: white; margin-bottom: 16px;">Reliable Housing for<br><em style="color: var(--color-sand); font-style: italic;">Professionals & Teams</em></h1>
      <p style="color: rgba(255,255,255,0.7); font-size: 1.1rem; margin-bottom: 36px;">Flexible furnished stays built for business. Clean, ready, and professionally managed — so you can focus on the work.</p>
      <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
        <a href="/contact" class="btn btn--white btn--lg">Request Availability</a>
        <a href="/properties" class="btn btn--outline btn--lg" style="border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.85);">Browse Properties</a>
      </div>
    </div>
  </div>

  <!-- WHO WE SERVE -->
  <section style="background: var(--color-warm-white);">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Who We Serve</div>
        <h2>Built for Today's Mobile Professional</h2>
        <p>From the solo nurse on a 13-week contract to an entire project team — we have flexible, furnished housing solutions for every scenario.</p>
      </div>
      <div class="corporate-page__features">
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">✈️</div>
          <h4>Corporate Travel</h4>
          <p>Business travelers and executives who need a comfortable, productive base during projects, meetings, or training periods.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">🏥</div>
          <h4>Traveling Nurses & Medical</h4>
          <p>Healthcare professionals on 13-week contracts and travel assignments who need reliable, comfortable housing close to major Atlanta hospitals.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">🎬</div>
          <h4>Film & Production Crews</h4>
          <p>Atlanta's booming film industry needs flexible housing. We accommodate crews of all sizes with private rooms, shared spaces, and group homes.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">📦</div>
          <h4>Executive Relocation</h4>
          <p>Executives and professionals in transition who need a quality furnished home while searching for permanent housing in Atlanta.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">🏠</div>
          <h4>Insurance Displacement Housing</h4>
          <p>Families and individuals temporarily displaced from their homes. We work with insurance adjusters and claims professionals for seamless placement.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">🔧</div>
          <h4>Long-Term Projects</h4>
          <p>Consultants, contractors, and project-based teams who need dependable month-to-month housing for the duration of their engagement.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY KINCO CORPORATE -->
  <section style="background: var(--color-white);">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
        <div>
          <div class="eyebrow">Why Choose KinCo</div>
          <h2>Corporate Housing Done Differently</h2>
          <p style="margin-bottom: 24px;">We're not a large impersonal property management company. We're a family-owned business that takes every placement personally. That means faster responses, more flexibility, and housing that actually feels like a home.</p>
          <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 32px;">
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; background: var(--color-off-white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">⚡</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">24-Hour Response Guarantee</strong>
                <p style="font-size: 0.875rem; margin: 0;">We respond to corporate inquiries within 24 hours, guaranteed. Urgent placement? Call us directly.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; background: var(--color-off-white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">📋</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Flexible Lease Terms</strong>
                <p style="font-size: 0.875rem; margin: 0;">30-day, month-to-month, and extended arrangements. We adapt to your timeline, not the other way around.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; background: var(--color-off-white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">🧹</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Move-In Ready, Always</strong>
                <p style="font-size: 0.875rem; margin: 0;">Every unit is inspected, stocked, and ready before arrival — linens, kitchen supplies, toiletries, WiFi set up.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <div style="width: 40px; height: 40px; background: var(--color-off-white); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0;">💼</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem;">Invoice-Based Billing</strong>
                <p style="font-size: 0.875rem; margin: 0;">We work directly with corporate accounts, HR departments, and relocation management companies for streamlined billing.</p>
              </div>
            </div>
          </div>
        </div>
        <div style="position: relative;">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop"
            style="width: 100%; height: 480px; object-fit: cover; border-radius: var(--radius-lg);"
            alt="Modern corporate housing Atlanta"
          />
          <div style="position: absolute; bottom: -16px; right: -16px; background: var(--color-black); color: white; border-radius: var(--radius-md); padding: 20px 24px; text-align: center;">
            <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; line-height: 1; color: var(--color-sand);">★ 4.9</div>
            <div style="font-size: 0.72rem; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-top: 4px;">Corporate Rating</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS STEPS -->
  <section style="background: var(--color-warm-white);">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">How It Works</div>
        <h2>Simple from Start to Stay</h2>
        <p>Getting your team or professional housed in Atlanta takes just four steps.</p>
      </div>
      <div class="corporate-page__process">
        <div class="process-step">
          <div class="process-step__num">1</div>
          <h4>Submit Your Request</h4>
          <p>Tell us your arrival dates, guest count, location preferences, and budget through our inquiry form.</p>
        </div>
        <div class="process-step">
          <div class="process-step__num">2</div>
          <h4>We Match You</h4>
          <p>Within 24 hours, we'll confirm availability and send you matching property options with photos and pricing.</p>
        </div>
        <div class="process-step">
          <div class="process-step__num">3</div>
          <h4>Confirm & Arrange</h4>
          <p>Review, confirm, and complete the simple booking or corporate agreement. We handle the rest.</p>
        </div>
        <div class="process-step">
          <div class="process-step__num">4</div>
          <h4>Arrive & Settle In</h4>
          <p>Your property is inspected, stocked, and ready. Keys are waiting. Your team arrives to a real home.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING / RATES -->
  <section style="background: var(--color-white);">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Pricing</div>
        <h2>Flexible Rates for Every Need</h2>
        <p>We offer competitive rates with monthly discounts for extended stays. Contact us for custom corporate pricing.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 960px; margin: 0 auto;">
        <div style="border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 28px; text-align: center;">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-tan); margin-bottom: 16px;">Short Stay</div>
          <div style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 700; color: var(--color-black); line-height: 1; margin-bottom: 4px;">$99<span style="font-size: 1rem; font-weight: 400; color: var(--color-steel);">+</span></div>
          <div style="font-size: 0.8rem; color: var(--color-steel); margin-bottom: 20px;">Per night</div>
          <div style="border-top: 1px solid var(--color-border); padding-top: 20px; text-align: left;">
            <div class="amenity-item" style="margin-bottom: 10px;"><i class="fas fa-check-circle"></i> 3–29 night stays</div>
            <div class="amenity-item" style="margin-bottom: 10px;"><i class="fas fa-check-circle"></i> Fully furnished</div>
            <div class="amenity-item" style="margin-bottom: 10px;"><i class="fas fa-check-circle"></i> All utilities included</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> WiFi & smart TV</div>
          </div>
        </div>
        <div style="border: 2px solid var(--color-black); border-radius: var(--radius-lg); padding: 32px 28px; text-align: center; position: relative; background: var(--color-black); color: white;">
          <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--color-sand); color: var(--color-black); font-size: 0.65rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 14px; border-radius: 100px;">Most Popular</div>
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-sand); margin-bottom: 16px;">Monthly</div>
          <div style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 700; color: white; line-height: 1; margin-bottom: 4px;">10–20%<span style="font-size: 1rem; font-weight: 400; color: rgba(255,255,255,0.6);"> off</span></div>
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.6); margin-bottom: 20px;">Nightly rate discount</div>
          <div style="border-top: 1px solid rgba(255,255,255,0.15); padding-top: 20px; text-align: left;">
            <div class="amenity-item" style="margin-bottom: 10px; color: rgba(255,255,255,0.8);"><i class="fas fa-check-circle" style="color: var(--color-sand);"></i> 30+ night stays</div>
            <div class="amenity-item" style="margin-bottom: 10px; color: rgba(255,255,255,0.8);"><i class="fas fa-check-circle" style="color: var(--color-sand);"></i> Housekeeping available</div>
            <div class="amenity-item" style="margin-bottom: 10px; color: rgba(255,255,255,0.8);"><i class="fas fa-check-circle" style="color: var(--color-sand);"></i> Invoice billing option</div>
            <div class="amenity-item" style="color: rgba(255,255,255,0.8);"><i class="fas fa-check-circle" style="color: var(--color-sand);"></i> Priority support</div>
          </div>
        </div>
        <div style="border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 28px; text-align: center;">
          <div style="font-size: 0.72rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-tan); margin-bottom: 16px;">Corporate Account</div>
          <div style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 700; color: var(--color-black); line-height: 1; margin-bottom: 4px;">Custom</div>
          <div style="font-size: 0.8rem; color: var(--color-steel); margin-bottom: 20px;">Volume pricing</div>
          <div style="border-top: 1px solid var(--color-border); padding-top: 20px; text-align: left;">
            <div class="amenity-item" style="margin-bottom: 10px;"><i class="fas fa-check-circle"></i> Multi-unit bookings</div>
            <div class="amenity-item" style="margin-bottom: 10px;"><i class="fas fa-check-circle"></i> Custom lease terms</div>
            <div class="amenity-item" style="margin-bottom: 10px;"><i class="fas fa-check-circle"></i> Net-30 invoicing</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Dedicated manager</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <div class="container container--narrow">
      <div class="eyebrow" style="color: var(--color-sand); justify-content: center; margin-bottom: 16px;">
        <span style="background: var(--color-sand); display: block; width: 24px; height: 1px;"></span>
        Corporate Inquiry
      </div>
      <h2>Let's Find Housing for Your Team</h2>
      <p>Submit your requirements and we'll respond within 24 hours with matching availability, photos, and pricing.</p>
      <div class="cta-banner__actions">
        <a href="/contact" class="btn btn--white btn--lg">
          <i class="fas fa-paper-plane"></i> Request Availability
        </a>
      </div>
    </div>
  </section>
`
}
