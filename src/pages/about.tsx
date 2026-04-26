export function aboutPage(): string {
  const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`

  const iconFamily = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  const iconShield = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`
  const iconCity = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="10" width="6" height="13"/><rect x="9" y="4" width="6" height="19"/><rect x="17" y="7" width="6" height="16"/><line x1="1" y1="23" x2="23" y2="23"/></svg>`
  const iconLayout = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`
  const iconLock = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
  const iconGrowth = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`

  return `
  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero__eyebrow"><div class="eyebrow" style="justify-content:center;">Our Story</div></div>
    <h1>Built on Legacy.<br>Focused on Hospitality.</h1>
    <p>A family-owned, multi-generational company rooted in trust, service, and long-term impact.</p>
  </div>

  <!-- STORY SECTION -->
  <section style="background: var(--black);">
    <div class="container">
      <div class="about__story">
        <div>
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=85&auto=format&fit=crop"
            alt="KinCo Legacy Group apartment interior"
            class="about__story-img"
          />
        </div>
        <div>
          <div class="eyebrow" style="margin-bottom:20px;">Who We Are</div>
          <h2 style="margin-bottom:24px;">A Family Business with a Hospitality Heart</h2>
          <p style="margin-bottom: 20px;">KinCo Legacy Group is a family-owned, multi-generational company rooted in trust, service, and long-term impact. We build and operate businesses that support individuals, families, and organizations at every stage of life and growth.</p>
          <p style="margin-bottom: 20px;">At our core, we believe that every experience — whether housing, service, or partnership — should feel intentional, reliable, and human-centered. Our name reflects that commitment: "Kin" represents family, and "Co" represents company — a reminder that everything we build carries personal accountability and care. This is not just business. It is legacy work.</p>
          <p style="margin-bottom: 32px;">Our portfolio spans multiple service areas, including premium temporary housing, transportation solutions, and strategic consulting. Each offering is thoughtfully designed to combine operational excellence with a personalized experience, ensuring we deliver both quality and consistency at scale.</p>
          <div style="display: flex; gap: 32px; padding: 24px 0; border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold); margin-bottom: 36px; flex-wrap: wrap;">
            <div style="text-align: center; min-width: 64px;">
              <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 6px;">5+</div>
              <div style="font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.12em; text-transform: uppercase;">Properties</div>
            </div>
            <div style="text-align: center; min-width: 64px;">
              <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 6px;">4.9</div>
              <div style="font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.12em; text-transform: uppercase;">Guest Rating</div>
            </div>
            <div style="text-align: center; min-width: 64px;">
              <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 6px;">100%</div>
              <div style="font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.12em; text-transform: uppercase;">Family-Owned</div>
            </div>
            <div style="text-align: center; min-width: 64px;">
              <div style="font-family: var(--font-serif); font-size: 2rem; font-weight: 700; color: var(--text-primary); line-height: 1; margin-bottom: 6px;">ATL</div>
              <div style="font-size: 0.65rem; color: var(--text-dim); letter-spacing: 0.12em; text-transform: uppercase;">Based &amp; Operated</div>
            </div>
          </div>
          <a href="/contact" class="btn btn--gold btn--lg">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES SECTION -->
  <section style="background: var(--black-panel); border-top: 1px solid var(--border-gold); border-bottom: 1px solid var(--border-gold);">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Our Values</div>
        <h2>What We Stand For</h2>
        <p>These aren't just words on a page — they're the standards we hold ourselves to with every guest, every property, every day.</p>
      </div>
      <div class="about__values observe">
        <div class="about__value">
          <div class="about__value-icon">${iconFamily}</div>
          <h4>Human-Centered</h4>
          <p>Every experience should feel intentional, reliable, and deeply personal. We design around people, not transactions.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">${iconShield}</div>
          <h4>Quality &amp; Consistency</h4>
          <p>We maintain high standards across every property — inspected, stocked, and ready before you arrive, every time.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">${iconCity}</div>
          <h4>Community Rooted</h4>
          <p>We invest in the neighborhoods we operate in and stay accountable to the communities that support our growth.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">${iconLayout}</div>
          <h4>Intentional Design</h4>
          <p>We curate spaces with purpose — clean design, premium furnishings, and functional amenities that make every stay seamless.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">${iconLock}</div>
          <h4>Personal Accountability</h4>
          <p>Our name is on everything we do. Honest pricing, clear communication, no surprises — we stand behind our word.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">${iconGrowth}</div>
          <h4>Multi-Generational Thinking</h4>
          <p>We build for the long term — growing purposefully and choosing quality before quantity at every stage.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION STATEMENT -->
  <section style="background: var(--black); padding: 100px 32px;">
    <div class="container container--narrow" style="text-align: center;">
      <div class="eyebrow" style="justify-content:center;margin-bottom:32px;">Our Guiding Principle</div>
      <blockquote style="font-family: var(--font-serif); font-size: clamp(1.5rem, 3vw, 2.4rem); color: var(--text-primary); font-style: italic; line-height: 1.45; margin-bottom: 28px; letter-spacing: -0.01em;">
        "Build with purpose. Operate with integrity. Create lasting value."
      </blockquote>
      <p style="color: var(--gold); font-size: 0.65rem; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 700;">— KinCo Legacy Group</p>
    </div>
  </section>

  <!-- HOSPITALITY PILLAR -->
  <section style="background: var(--black-panel); border-top: 1px solid var(--border-gold);">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;" class="observe">
        <div>
          <div class="eyebrow" style="margin-bottom:20px;">Atlanta Proud</div>
          <h2 style="margin-bottom:24px;">Deeply Rooted in the City We Love</h2>
          <p style="margin-bottom: 20px;">Our hospitality offerings serve as a foundational pillar of our portfolio, translating our family-centered values into consistent, high-quality living experiences defined by comfort and reliability.</p>
          <p style="margin-bottom: 28px;">Every space is thoughtfully curated with clean design, premium furnishings, and functional amenities — ensuring that even a brief visit feels seamless, elevated, and deeply welcoming. Whether a guest stays for three nights or three months, our goal is the same: comfort, reliability, and a genuine sense of belonging.</p>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div class="amenity-item">${checkSvg} Strategic locations across Atlanta's best neighborhoods</div>
            <div class="amenity-item">${checkSvg} Close to major hospitals, stadiums, and airports</div>
            <div class="amenity-item">${checkSvg} Local knowledge — we help you navigate the city</div>
            <div class="amenity-item">${checkSvg} Personalized recommendations for every neighborhood</div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop"
            style="width: 100%; height: 420px; object-fit: cover; border-radius: var(--radius-lg); border: 1px solid var(--border-gold);"
            alt="Downtown Atlanta cityscape"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- HOW WE OPERATE -->
  <section style="background: var(--black); border-top: 1px solid var(--border-gold);">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">How We Operate</div>
        <h2>What Sets KinCo Apart</h2>
        <p>Four principles that define every interaction, every property, and every partnership.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;" class="observe">
        <div style="background: var(--black-card); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 32px 28px; transition: border-color var(--duration), box-shadow var(--duration);" onmouseover="this.style.borderColor='var(--gold)';this.style.boxShadow='var(--shadow-gold)'" onmouseout="this.style.borderColor='var(--border-gold)';this.style.boxShadow='none'">
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px;">01</div>
          <h4 style="color: var(--text-primary); margin-bottom: 10px; font-family: var(--font-sans); font-size: 0.9rem; letter-spacing: 0.04em;">Responsive by Default</h4>
          <p style="font-size: 0.82rem; color: var(--text-dim); line-height: 1.7;">We respond to every inquiry within 24 hours — often sooner. Urgent? Call us directly. We are always available to our guests and partners.</p>
        </div>
        <div style="background: var(--black-card); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 32px 28px; transition: border-color var(--duration), box-shadow var(--duration);" onmouseover="this.style.borderColor='var(--gold)';this.style.boxShadow='var(--shadow-gold)'" onmouseout="this.style.borderColor='var(--border-gold)';this.style.boxShadow='none'">
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px;">02</div>
          <h4 style="color: var(--text-primary); margin-bottom: 10px; font-family: var(--font-sans); font-size: 0.9rem; letter-spacing: 0.04em;">Uncompromising Standards</h4>
          <p style="font-size: 0.82rem; color: var(--text-dim); line-height: 1.7;">Every property is inspected before every stay. Every detail — linens, kitchen, WiFi, lighting — is set up and tested. We do not cut corners.</p>
        </div>
        <div style="background: var(--black-card); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 32px 28px; transition: border-color var(--duration), box-shadow var(--duration);" onmouseover="this.style.borderColor='var(--gold)';this.style.boxShadow='var(--shadow-gold)'" onmouseout="this.style.borderColor='var(--border-gold)';this.style.boxShadow='none'">
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px;">03</div>
          <h4 style="color: var(--text-primary); margin-bottom: 10px; font-family: var(--font-sans); font-size: 0.9rem; letter-spacing: 0.04em;">Community Investment</h4>
          <p style="font-size: 0.82rem; color: var(--text-dim); line-height: 1.7;">We don't just operate in Atlanta — we are part of it. Every property we maintain is a contribution to the neighborhoods and communities we call home.</p>
        </div>
        <div style="background: var(--black-card); border: 1px solid var(--border-gold); border-radius: var(--radius-md); padding: 32px 28px; transition: border-color var(--duration), box-shadow var(--duration);" onmouseover="this.style.borderColor='var(--gold)';this.style.boxShadow='var(--shadow-gold)'" onmouseout="this.style.borderColor='var(--border-gold)';this.style.boxShadow='none'">
          <div style="font-size: 0.62rem; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px;">04</div>
          <h4 style="color: var(--text-primary); margin-bottom: 10px; font-family: var(--font-sans); font-size: 0.9rem; letter-spacing: 0.04em;">Design with Intention</h4>
          <p style="font-size: 0.82rem; color: var(--text-dim); line-height: 1.7;">Thoughtful space planning, curated furnishings, and quality materials aren't extras — they are the baseline. Every KinCo property reflects that commitment.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <div class="container container--narrow observe">
      <div class="eyebrow" style="justify-content:center;margin-bottom:20px;">Stay With Us</div>
      <h2>Ready to Experience KinCo?</h2>
      <p>Browse our available properties or reach out directly — we'd love to host you in Atlanta.</p>
      <div class="cta-banner__actions">
        <a href="/properties" class="btn btn--gold btn--lg">View Properties</a>
        <a href="/contact" class="btn btn--outline-gold btn--lg">Contact Us</a>
      </div>
    </div>
  </section>
`
}
