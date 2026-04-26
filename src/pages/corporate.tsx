export function corporatePage(): string {
  const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`

  const iconPlane = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
  const iconHeart = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
  const iconFilm = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/><line x1="17" y1="17" x2="22" y2="17"/></svg>`
  const iconBriefcase = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  const iconHome = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
  const iconTool = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`

  const iconLightning = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`
  const iconCalendar = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  const iconCheck2 = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`
  const iconDoc = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`

  return `
  <!-- PAGE HERO -->
  <div class="page-hero" style="padding-bottom:100px;">
    <div class="page-hero__eyebrow"><div class="eyebrow" style="justify-content:center;">Corporate Housing · Atlanta, GA</div></div>
    <h1>Reliable Housing for<br><em style="color: var(--gold); font-style: italic;">Professionals &amp; Teams</em></h1>
    <p>Flexible furnished stays built for business. Clean, ready, and professionally managed — so you can focus on the work.</p>
    <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-top: 36px;">
      <a href="/contact" class="btn btn--gold btn--lg">Request Availability</a>
      <a href="/properties" class="btn btn--outline-gold btn--lg">Browse Properties</a>
    </div>
  </div>

  <!-- WHO WE SERVE -->
  <section style="background: var(--black-panel); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold);">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Who We Serve</div>
        <h2>Built for Today's Mobile Professional</h2>
        <p>From the solo nurse on a 13-week contract to an entire project team — we have flexible, furnished housing solutions for every scenario.</p>
      </div>
      <div class="corporate-page__features observe">
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">${iconPlane}</div>
          <h4>Corporate Travel</h4>
          <p>Business travelers and executives who need a comfortable, productive base during projects, meetings, or training periods.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">${iconHeart}</div>
          <h4>Traveling Nurses &amp; Medical</h4>
          <p>Healthcare professionals on 13-week contracts who need reliable, comfortable housing close to major Atlanta hospitals.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">${iconFilm}</div>
          <h4>Film &amp; Production Crews</h4>
          <p>Atlanta's booming film industry needs flexible housing. We accommodate crews of all sizes with private and shared spaces.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">${iconBriefcase}</div>
          <h4>Executive Relocation</h4>
          <p>Executives and professionals in transition who need a quality furnished home while searching for permanent housing in Atlanta.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">${iconHome}</div>
          <h4>Insurance Displacement Housing</h4>
          <p>Families and individuals temporarily displaced from their homes. We work directly with insurance adjusters for seamless placement.</p>
        </div>
        <div class="corporate-page__feature">
          <div class="corporate-page__feature-icon">${iconTool}</div>
          <h4>Long-Term Projects</h4>
          <p>Consultants, contractors, and project-based teams who need dependable month-to-month housing for the duration of their engagement.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY KINCO CORPORATE -->
  <section style="background: var(--black);">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;" class="observe">
        <div>
          <div class="eyebrow" style="margin-bottom:20px;">Why Choose KinCo</div>
          <h2 style="margin-bottom:24px;">Corporate Housing Done Differently</h2>
          <p style="margin-bottom: 28px;">We're not a large impersonal property management company. We're a family-owned business that takes every placement personally. That means faster responses, more flexibility, and housing that actually feels like a home.</p>
          <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 32px;">
            <div style="display: flex; gap: 18px; align-items: flex-start;">
              <div style="width: 42px; height: 42px; border: 1px solid var(--border-gold); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${iconLightning}</div>
              <div>
                <strong style="display: block; margin-bottom: 6px; font-size: 0.875rem; color: var(--text-primary); font-weight: 700;">24-Hour Response Guarantee</strong>
                <p style="font-size: 0.82rem; margin: 0; color: var(--text-muted);">We respond to corporate inquiries within 24 hours, guaranteed. Urgent placement? Call us directly.</p>
              </div>
            </div>
            <div style="display: flex; gap: 18px; align-items: flex-start;">
              <div style="width: 42px; height: 42px; border: 1px solid var(--border-gold); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${iconCalendar}</div>
              <div>
                <strong style="display: block; margin-bottom: 6px; font-size: 0.875rem; color: var(--text-primary); font-weight: 700;">Flexible Lease Terms</strong>
                <p style="font-size: 0.82rem; margin: 0; color: var(--text-muted);">30-day, month-to-month, and extended arrangements. We adapt to your timeline, not the other way around.</p>
              </div>
            </div>
            <div style="display: flex; gap: 18px; align-items: flex-start;">
              <div style="width: 42px; height: 42px; border: 1px solid var(--border-gold); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${iconCheck2}</div>
              <div>
                <strong style="display: block; margin-bottom: 6px; font-size: 0.875rem; color: var(--text-primary); font-weight: 700;">Move-In Ready, Always</strong>
                <p style="font-size: 0.82rem; margin: 0; color: var(--text-muted);">Every unit is inspected, stocked, and ready before arrival — linens, kitchen supplies, toiletries, WiFi set up.</p>
              </div>
            </div>
            <div style="display: flex; gap: 18px; align-items: flex-start;">
              <div style="width: 42px; height: 42px; border: 1px solid var(--border-gold); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">${iconDoc}</div>
              <div>
                <strong style="display: block; margin-bottom: 6px; font-size: 0.875rem; color: var(--text-primary); font-weight: 700;">Invoice-Based Billing</strong>
                <p style="font-size: 0.82rem; margin: 0; color: var(--text-muted);">We work directly with corporate accounts, HR departments, and relocation management companies for streamlined billing.</p>
              </div>
            </div>
          </div>
        </div>
        <div style="position: relative;">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop"
            style="width: 100%; height: 480px; object-fit: cover; border-radius: var(--radius-lg); border: 1px solid var(--border-gold);"
            alt="Modern corporate housing Atlanta"
          />
          <div style="position: absolute; bottom: -16px; right: -16px; background: var(--black-panel); border: 1px solid var(--gold); border-radius: var(--radius-md); padding: 20px 24px; text-align: center;">
            <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; line-height: 1; color: var(--gold); margin-bottom: 4px;">4.9</div>
            <div style="font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-dim); margin-top: 4px;">Corporate Rating</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS STEPS -->
  <section style="background: var(--black-panel); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold);">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">How It Works</div>
        <h2>Simple from Start to Stay</h2>
        <p>Getting your team or professional housed in Atlanta takes just four steps.</p>
      </div>
      <div class="corporate-page__process observe">
        <div class="process-step">
          <div class="process-step__num">1</div>
          <h4>Submit Your Request</h4>
          <p>Tell us your arrival dates, guest count, location preferences, and budget through our inquiry form.</p>
        </div>
        <div class="process-step">
          <div class="process-step__num">2</div>
          <h4>We Match You</h4>
          <p>Within 24 hours, we'll confirm availability and send matching property options with photos and pricing.</p>
        </div>
        <div class="process-step">
          <div class="process-step__num">3</div>
          <h4>Confirm &amp; Arrange</h4>
          <p>Review, confirm, and complete the simple booking or corporate agreement. We handle the rest.</p>
        </div>
        <div class="process-step">
          <div class="process-step__num">4</div>
          <h4>Arrive &amp; Settle In</h4>
          <p>Your property is inspected, stocked, and ready. Keys are waiting. Your team arrives to a real home.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PRICING -->
  <section style="background: var(--black);">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Pricing</div>
        <h2>Flexible Rates for Every Need</h2>
        <p>Competitive rates with monthly discounts for extended stays. Contact us for custom corporate pricing.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 960px; margin: 0 auto;" class="observe">

        <div style="border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 36px 28px; text-align: center; background: var(--black-card); transition: border-color var(--duration), box-shadow var(--duration);" onmouseover="this.style.borderColor='var(--gold)';this.style.boxShadow='var(--shadow-gold)'" onmouseout="this.style.borderColor='var(--border-gold)';this.style.boxShadow='none'">
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px;">Short Stay</div>
          <div style="font-family: var(--font-serif); font-size: 2.6rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 4px;">$99<span style="font-size: 1rem; font-weight: 400; color: var(--text-dim);">+</span></div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 24px;">Per night</div>
          <div style="border-top: 1px solid var(--border-soft); padding-top: 20px; text-align: left; display: flex; flex-direction: column; gap: 12px;">
            <div class="amenity-item">${checkSvg} 3–29 night stays</div>
            <div class="amenity-item">${checkSvg} Fully furnished</div>
            <div class="amenity-item">${checkSvg} All utilities included</div>
            <div class="amenity-item">${checkSvg} WiFi &amp; smart TV</div>
          </div>
        </div>

        <div style="border: 1px solid var(--gold); border-radius: var(--radius-md); padding: 36px 28px; text-align: center; position: relative; background: var(--black-soft);">
          <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--gold); color: var(--black); font-size: 0.62rem; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; padding: 5px 16px; border-radius: 100px; white-space: nowrap;">Most Popular</div>
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px;">Monthly</div>
          <div style="font-family: var(--font-serif); font-size: 2.6rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 4px;">10–20%<span style="font-size: 1rem; font-weight: 400; color: var(--text-dim);"> off</span></div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 24px;">Nightly rate discount</div>
          <div style="border-top: 1px solid var(--border-soft); padding-top: 20px; text-align: left; display: flex; flex-direction: column; gap: 12px;">
            <div class="amenity-item">${checkSvg} 30+ night stays</div>
            <div class="amenity-item">${checkSvg} Housekeeping available</div>
            <div class="amenity-item">${checkSvg} Invoice billing option</div>
            <div class="amenity-item">${checkSvg} Priority support</div>
          </div>
        </div>

        <div style="border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 36px 28px; text-align: center; background: var(--black-card); transition: border-color var(--duration), box-shadow var(--duration);" onmouseover="this.style.borderColor='var(--gold)';this.style.boxShadow='var(--shadow-gold)'" onmouseout="this.style.borderColor='var(--border-gold)';this.style.boxShadow='none'">
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px;">Corporate Account</div>
          <div style="font-family: var(--font-serif); font-size: 2.6rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 4px;">Custom</div>
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 24px;">Volume pricing</div>
          <div style="border-top: 1px solid var(--border-soft); padding-top: 20px; text-align: left; display: flex; flex-direction: column; gap: 12px;">
            <div class="amenity-item">${checkSvg} Multi-unit bookings</div>
            <div class="amenity-item">${checkSvg} Custom lease terms</div>
            <div class="amenity-item">${checkSvg} Net-30 invoicing</div>
            <div class="amenity-item">${checkSvg} Dedicated manager</div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <div class="container container--narrow observe">
      <div class="eyebrow" style="justify-content:center;margin-bottom:20px;">Corporate Inquiry</div>
      <h2>Let's Find Housing for Your Team</h2>
      <p>Submit your requirements and we'll respond within 24 hours with matching availability, photos, and pricing.</p>
      <div class="cta-banner__actions">
        <a href="/contact" class="btn btn--gold btn--lg">Request Availability</a>
        <a href="/properties" class="btn btn--outline-gold btn--lg">Browse Properties</a>
      </div>
    </div>
  </section>
`
}
