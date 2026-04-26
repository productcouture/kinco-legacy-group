export function aboutPage(): string {
  return `
  <!-- PAGE HERO -->
  <div class="page-hero" style="padding-bottom: 96px;">
    <div class="page-hero__eyebrow">Our Story</div>
    <h1>Built on Legacy.<br>Focused on Hospitality.</h1>
    <p>We started KinCo Legacy Group because we believe great housing should feel welcoming, seamless, and well cared for.</p>
  </div>

  <!-- STORY SECTION -->
  <section style="background: var(--color-white);">
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
          <div class="eyebrow">Who We Are</div>
          <h2>A Family Business with a Hospitality Heart</h2>
          <p style="margin-bottom: 20px;">KinCo Legacy Group is a family-owned business committed to creating comfortable, dependable stays with a modern touch. We believe great housing should feel welcoming, seamless, and well cared for.</p>
          <p style="margin-bottom: 20px;">The name "KinCo" reflects our roots — family (kin) and company — a reminder that every property we manage carries our personal commitment. This isn't just a business to us. It's a legacy we're building with care.</p>
          <p style="margin-bottom: 32px;">We operate short-term rentals, furnished stays, and corporate housing across Atlanta, with a focus on properties that feel like real homes — not sterile hotel rooms or generic rental units. Think clean lines, quality furniture, stocked kitchens, and thoughtful touches that make even a 3-night stay feel like a genuine retreat.</p>
          <div style="display: flex; gap: 32px; padding: 24px 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); margin-bottom: 32px;">
            <div style="text-align: center;">
              <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--color-black);">5+</div>
              <div style="font-size: 0.75rem; color: var(--color-steel); letter-spacing: 0.05em;">Properties</div>
            </div>
            <div style="text-align: center;">
              <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--color-black);">★ 4.9</div>
              <div style="font-size: 0.75rem; color: var(--color-steel); letter-spacing: 0.05em;">Average Rating</div>
            </div>
            <div style="text-align: center;">
              <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--color-black);">100%</div>
              <div style="font-size: 0.75rem; color: var(--color-steel); letter-spacing: 0.05em;">Family-Owned</div>
            </div>
            <div style="text-align: center;">
              <div style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; color: var(--color-black);">ATL</div>
              <div style="font-size: 0.75rem; color: var(--color-steel); letter-spacing: 0.05em;">Based & Operated</div>
            </div>
          </div>
          <a href="/contact" class="btn btn--primary btn--lg">Get in Touch</a>
        </div>
      </div>
    </div>
  </section>

  <!-- VALUES SECTION -->
  <section style="background: var(--color-warm-white);">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Our Values</div>
        <h2>What We Stand For</h2>
        <p>These aren't just words on a page — they're the standards we hold ourselves to with every guest.</p>
      </div>
      <div class="about__values">
        <div class="about__value">
          <div class="about__value-icon">🤝</div>
          <h4>Family First</h4>
          <p>Every guest is treated like a guest in our own home — with genuine care, quick responses, and personal attention.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">✨</div>
          <h4>Quality & Consistency</h4>
          <p>Clean homes, quality furnishings, and reliable amenities — every time. We never cut corners on the basics.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🌆</div>
          <h4>Community Rooted</h4>
          <p>We're proud to be Atlanta-based and invested in the neighborhoods where we operate. The city's growth is our growth.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">📐</div>
          <h4>Thoughtful Design</h4>
          <p>Every unit is curated — not just furnished. We consider how spaces feel, function, and support the way people actually live.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🔒</div>
          <h4>Trust & Transparency</h4>
          <p>No hidden fees, no surprises. What you see is what you get — honest pricing, clear policies, and straightforward communication.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🌱</div>
          <h4>Growing With Purpose</h4>
          <p>We grow thoughtfully — adding properties we're proud of, not just inventory. Quality always over quantity.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION STATEMENT -->
  <section style="background: var(--color-black); padding: 96px 24px;">
    <div class="container container--narrow" style="text-align: center;">
      <div class="eyebrow" style="color: var(--color-sand); justify-content: center; margin-bottom: 24px;">
        <span style="background: var(--color-sand); display: block; width: 24px; height: 1px;"></span>
        Our Mission
      </div>
      <blockquote style="font-family: var(--font-heading); font-size: clamp(1.4rem, 3vw, 2.2rem); color: white; font-style: italic; line-height: 1.4; margin-bottom: 24px;">
        "To create spaces where every guest feels at home — comfortable, cared for, and confident in their stay, no matter how long or short."
      </blockquote>
      <p style="color: rgba(255,255,255,0.5); font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase;">— KinCo Legacy Group</p>
    </div>
  </section>

  <!-- ATLANTA COMMITMENT -->
  <section style="background: var(--color-white);">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
        <div>
          <div class="eyebrow">Atlanta Proud</div>
          <h2>Deeply Rooted in the City We Love</h2>
          <p style="margin-bottom: 20px;">Atlanta is one of the most dynamic cities in the country — and we're proud to be part of its story. From the energy of Old Fourth Ward to the business corridors of Midtown and the community of Downtown, our properties are positioned where Atlanta comes alive.</p>
          <p style="margin-bottom: 32px;">We're not just housing providers. We're neighbors, community members, and advocates for what makes Atlanta a great place to live, work, and visit. When guests stay with us, they experience the best of this city — and that's exactly how we like it.</p>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Strategic locations across Atlanta's best neighborhoods</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Close to major hospitals, stadiums, and airports</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Local knowledge — we can help you navigate the city</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Recommendations for the best spots in every neighborhood</div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop"
            style="width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius-lg);"
            alt="Downtown Atlanta cityscape"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <div class="container container--narrow">
      <div class="eyebrow" style="color: var(--color-sand); justify-content: center; margin-bottom: 16px;">
        <span style="background: var(--color-sand); display: block; width: 24px; height: 1px;"></span>
        Book Your Stay
      </div>
      <h2>Ready to Experience KinCo?</h2>
      <p>Browse our available properties or reach out directly — we'd love to host you in Atlanta.</p>
      <div class="cta-banner__actions">
        <a href="/properties" class="btn btn--white btn--lg">View Properties</a>
        <a href="/contact" class="btn btn--outline btn--lg" style="border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.85);">Contact Us</a>
      </div>
    </div>
  </section>
`
}
