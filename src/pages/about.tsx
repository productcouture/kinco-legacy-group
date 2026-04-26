export function aboutPage(): string {
  return `
  <!-- PAGE HERO -->
  <div class="page-hero" style="padding-bottom: 96px;">
    <div class="page-hero__eyebrow">Our Story</div>
    <h1>Built on Legacy.<br>Focused on Hospitality.</h1>
    <p>A family-owned, multi-generational company rooted in trust, service, and long-term impact.</p>
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
          <p style="margin-bottom: 20px;">KinCo Legacy Group is a family-owned, multi-generational company rooted in trust, service, and long-term impact. We build and operate businesses that support individuals, families, and organizations at every stage of life and growth.</p>
          <p style="margin-bottom: 20px;">At our core, we believe that every experience, whether housing, service, or partnership, should feel intentional, reliable, and human-centered. Our name reflects that commitment: "Kin" represents family, and "Co" represents company — a reminder that everything we build carries personal accountability and care. This is not just business. It is legacy work.</p>
          <p style="margin-bottom: 32px;">Our portfolio spans multiple service areas, including premium temporary housing, transportation solutions, and strategic consulting. Each offering is thoughtfully designed to combine operational excellence with a personalized experience, ensuring we deliver both quality and consistency at scale.</p>
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
          <p>Every guest is treated like they are entering our own home — with responsiveness, care, and attention to detail.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">✨</div>
          <h4>Quality & Consistency</h4>
          <p>We maintain high standards across every property, ensuring consistency without cutting corners.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🌆</div>
          <h4>Community Rooted</h4>
          <p>We stay rooted in the communities we serve, investing in the neighborhoods that support our growth.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">📐</div>
          <h4>Thoughtful Design</h4>
          <p>We design spaces with intention, focusing on how people actually live, work, and recharge.</p>
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
        "Build with purpose. Operate with integrity. Create lasting value."
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
          <p style="margin-bottom: 20px;">Our hospitality offerings serve as a foundational pillar of our portfolio, translating our family-centered values into consistent, high-quality living experiences defined by comfort and reliability. Across our Atlanta properties — ranging from short-term rentals and furnished stays to corporate housing — we strive to create environments that feel like genuine homes rather than transactional units.</p>
          <p style="margin-bottom: 32px;">Every space is thoughtfully curated with clean design, premium furnishings, and functional amenities, ensuring that even a brief visit feels seamless, elevated, and deeply welcoming. Whether a guest stays for three nights or three months, our goal is the same: to provide comfort, reliability, and a sense of belonging.</p>
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
