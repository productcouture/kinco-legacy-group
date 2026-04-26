export function aboutPage(): string {
  return `
  <!-- PAGE HERO -->
  <div class="page-hero" style="padding-bottom: 96px;">
    <div class="page-hero__eyebrow">Our Story</div>
    <h1>Built on Legacy.<br>Focused on Hospitality.</h1>
    <p>A family-owned, multi-generational company rooted in trust, service, and long-term impact.</p>
  </div>

  <!-- WHO WE ARE SECTION -->
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
          <h2>A Multi-Generational Company Built on Purpose</h2>
          <p style="margin-bottom: 20px;">KinCo Legacy Group is a family-owned, multi-generational company rooted in trust, service, and long-term impact. We build and operate businesses that support individuals, families, and organizations at every stage of life and growth.</p>
          <p style="margin-bottom: 20px;">At our core, we believe that every experience — whether housing, service, or partnership — should feel intentional, reliable, and human-centered. Our name reflects that commitment: <strong>"Kin" represents family</strong>, and <strong>"Co" represents company</strong> — a reminder that everything we build carries personal accountability and care.</p>
          <p style="margin-bottom: 32px; font-style: italic; color: var(--color-charcoal); font-size: 1.05rem; border-left: 3px solid var(--color-sand); padding-left: 20px;">This is not just business. It is legacy work.</p>
          <div style="display: flex; gap: 32px; padding: 24px 0; border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); margin-bottom: 32px; flex-wrap: wrap;">
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

  <!-- PORTFOLIO OVERVIEW -->
  <section style="background: var(--color-warm-white);">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
        <div>
          <div class="eyebrow">Our Portfolio</div>
          <h2>Multiple Service Areas. One Standard of Excellence.</h2>
          <p style="margin-bottom: 20px;">Our portfolio spans multiple service areas, including premium temporary housing, transportation solutions, and strategic consulting. Each offering is thoughtfully designed to combine operational excellence with a personalized experience — ensuring we deliver both quality and consistency at scale.</p>
          <p style="margin-bottom: 32px;">Our hospitality offerings serve as a foundational pillar of our portfolio, translating our family-centered values into consistent, high-quality living experiences defined by comfort and reliability.</p>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <div style="font-size: 1.3rem; flex-shrink: 0;">🏠</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem; color: var(--color-black);">Premium Temporary Housing</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--color-steel);">Short-term rentals, furnished stays, and corporate housing across Atlanta.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <div style="font-size: 1.3rem; flex-shrink: 0;">🚗</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem; color: var(--color-black);">Transportation Solutions</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--color-steel);">Reliable mobility services designed to support our clients' broader needs.</p>
              </div>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start; padding: 16px 20px; background: var(--color-white); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
              <div style="font-size: 1.3rem; flex-shrink: 0;">📊</div>
              <div>
                <strong style="display: block; margin-bottom: 4px; font-size: 0.9rem; color: var(--color-black);">Strategic Consulting</strong>
                <p style="font-size: 0.8rem; margin: 0; color: var(--color-steel);">Helping individuals and organizations navigate growth with clarity and confidence.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80&auto=format&fit=crop"
            style="width: 100%; height: 460px; object-fit: cover; border-radius: var(--radius-lg);"
            alt="KinCo Legacy Group furnished living space"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- HOSPITALITY PILLAR -->
  <section style="background: var(--color-white);">
    <div class="container container--narrow" style="text-align: center;">
      <div class="eyebrow" style="justify-content: center;">Our Hospitality Commitment</div>
      <h2>Where Family Values Meet <em style="font-style: italic; color: var(--color-tan);">Genuine Homes</em></h2>
      <p style="font-size: 1.05rem; margin-bottom: 40px;">Across our Atlanta properties — ranging from short-term rentals and furnished stays to corporate housing — we strive to create environments that feel like genuine homes rather than transactional units. Every space is thoughtfully curated with clean design, premium furnishings, and functional amenities, ensuring that even a brief visit feels seamless, elevated, and deeply welcoming.</p>
      <div style="background: var(--color-warm-white); border-radius: var(--radius-xl); padding: 40px 48px; border: 1px solid var(--color-border); text-align: left; margin-bottom: 40px;">
        <p style="font-family: var(--font-heading); font-size: 1.25rem; color: var(--color-black); line-height: 1.6; text-align: center; font-style: italic; margin: 0;">
          "Whether a guest stays for three nights or three months, our goal is the same: to provide comfort, reliability, and a sense of belonging."
        </p>
      </div>
    </div>
  </section>

  <!-- HOW WE OPERATE -->
  <section style="background: var(--color-warm-white);">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">How We Operate</div>
        <h2>What Sets KinCo Apart</h2>
        <p>Our operating standards aren't policies — they're principles we live by with every guest, every property, every day.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 900px; margin: 0 auto;">
        <div style="background: var(--color-white); border-radius: var(--radius-md); padding: 28px 28px 28px 24px; border: 1px solid var(--color-border); border-left: 4px solid var(--color-sand); display: flex; gap: 16px; align-items: flex-start;">
          <div style="font-size: 1.3rem; flex-shrink: 0; margin-top: 2px;">🏡</div>
          <div>
            <strong style="display: block; margin-bottom: 8px; color: var(--color-black); font-size: 0.95rem; line-height: 1.4;">We treat every guest like they are entering our own home — with responsiveness, care, and attention to detail.</strong>
          </div>
        </div>
        <div style="background: var(--color-white); border-radius: var(--radius-md); padding: 28px 28px 28px 24px; border: 1px solid var(--color-border); border-left: 4px solid var(--color-sand); display: flex; gap: 16px; align-items: flex-start;">
          <div style="font-size: 1.3rem; flex-shrink: 0; margin-top: 2px;">✅</div>
          <div>
            <strong style="display: block; margin-bottom: 8px; color: var(--color-black); font-size: 0.95rem; line-height: 1.4;">We maintain high standards across every property, ensuring consistency without cutting corners.</strong>
          </div>
        </div>
        <div style="background: var(--color-white); border-radius: var(--radius-md); padding: 28px 28px 28px 24px; border: 1px solid var(--color-border); border-left: 4px solid var(--color-sand); display: flex; gap: 16px; align-items: flex-start;">
          <div style="font-size: 1.3rem; flex-shrink: 0; margin-top: 2px;">🌆</div>
          <div>
            <strong style="display: block; margin-bottom: 8px; color: var(--color-black); font-size: 0.95rem; line-height: 1.4;">We stay rooted in the communities we serve, investing in the neighborhoods that support our growth.</strong>
          </div>
        </div>
        <div style="background: var(--color-white); border-radius: var(--radius-md); padding: 28px 28px 28px 24px; border: 1px solid var(--color-border); border-left: 4px solid var(--color-sand); display: flex; gap: 16px; align-items: flex-start;">
          <div style="font-size: 1.3rem; flex-shrink: 0; margin-top: 2px;">📐</div>
          <div>
            <strong style="display: block; margin-bottom: 8px; color: var(--color-black); font-size: 0.95rem; line-height: 1.4;">We design spaces with intention, focusing on how people actually live, work, and recharge.</strong>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION STATEMENT -->
  <section style="background: var(--color-black); padding: 96px 24px;">
    <div class="container container--narrow" style="text-align: center;">
      <div class="eyebrow" style="color: var(--color-sand); justify-content: center; margin-bottom: 24px;">
        <span style="background: var(--color-sand); display: block; width: 24px; height: 1px;"></span>
        Our Guiding Principle
      </div>
      <h2 style="color: white; margin-bottom: 32px;">As We Continue to Grow</h2>
      <p style="color: rgba(255,255,255,0.65); font-size: 1.05rem; margin-bottom: 48px; max-width: 600px; margin-left: auto; margin-right: auto;">
        As KinCo Legacy Group continues to grow, we are expanding into new industries and services — all guided by a single principle:
      </p>
      <div style="display: flex; justify-content: center; gap: 0; flex-wrap: wrap; max-width: 720px; margin: 0 auto;">
        <div style="flex: 1; min-width: 200px; padding: 32px 24px; border: 1px solid rgba(255,255,255,0.12); border-radius: var(--radius-md) 0 0 var(--radius-md);">
          <div style="font-size: 1.4rem; margin-bottom: 12px;">🎯</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--color-sand); margin-bottom: 8px; font-style: italic;">Build with purpose.</div>
        </div>
        <div style="flex: 1; min-width: 200px; padding: 32px 24px; border: 1px solid rgba(255,255,255,0.12); border-top: 1px solid rgba(255,255,255,0.12); border-left: none; border-right: none;">
          <div style="font-size: 1.4rem; margin-bottom: 12px;">⚖️</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--color-sand); margin-bottom: 8px; font-style: italic;">Operate with integrity.</div>
        </div>
        <div style="flex: 1; min-width: 200px; padding: 32px 24px; border: 1px solid rgba(255,255,255,0.12); border-radius: 0 var(--radius-md) var(--radius-md) 0;">
          <div style="font-size: 1.4rem; margin-bottom: 12px;">🌱</div>
          <div style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--color-sand); margin-bottom: 8px; font-style: italic;">Create lasting value.</div>
        </div>
      </div>
      <p style="color: rgba(255,255,255,0.35); font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 40px;">— KinCo Legacy Group</p>
    </div>
  </section>

  <!-- VALUES GRID -->
  <section style="background: var(--color-white);">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Our Values</div>
        <h2>What We Stand For</h2>
        <p>These aren't just words on a page — they're the standards we hold ourselves to with every guest, every partner, every day.</p>
      </div>
      <div class="about__values">
        <div class="about__value">
          <div class="about__value-icon">🤝</div>
          <h4>Human-Centered</h4>
          <p>Every experience — housing, service, or partnership — should feel intentional, reliable, and genuinely human.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">✨</div>
          <h4>Quality & Consistency</h4>
          <p>High standards across every property and service. Operational excellence without sacrificing the personal touch.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🌆</div>
          <h4>Community Rooted</h4>
          <p>We invest in the neighborhoods that support our growth — as neighbors, not just operators.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">📐</div>
          <h4>Intentional Design</h4>
          <p>Every space is curated around how people actually live, work, and recharge — not just how it looks in a photo.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🔒</div>
          <h4>Personal Accountability</h4>
          <p>The KinCo name is on everything we do. That means we own our commitments and show up fully — every time.</p>
        </div>
        <div class="about__value">
          <div class="about__value-icon">🌱</div>
          <h4>Multi-Generational Thinking</h4>
          <p>We build for the long term — decisions made today that create real, lasting value for tomorrow.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ATLANTA COMMITMENT -->
  <section style="background: var(--color-warm-white);">
    <div class="container">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;">
        <div>
          <div class="eyebrow">Atlanta Proud</div>
          <h2>Deeply Rooted in the City We Serve</h2>
          <p style="margin-bottom: 20px;">Atlanta is one of the most dynamic cities in the country — and we're proud to be part of its story. From the energy of Old Fourth Ward to the business corridors of Midtown and the community of Downtown, our properties are positioned where Atlanta comes alive.</p>
          <p style="margin-bottom: 32px;">We're not just housing providers. We're neighbors, community members, and advocates for what makes Atlanta a great place to live, work, and visit. When guests stay with us, they experience the best of this city — and that's exactly how we like it.</p>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Strategic locations across Atlanta's best neighborhoods</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Close to major hospitals, stadiums, and airports</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Local knowledge — we can help you navigate the city</div>
            <div class="amenity-item"><i class="fas fa-check-circle"></i> Invested in the communities that support our growth</div>
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
        Experience KinCo
      </div>
      <h2>Ready to Stay With Us?</h2>
      <p>Browse our available properties or reach out directly — we'd love to welcome you to Atlanta.</p>
      <div class="cta-banner__actions">
        <a href="/properties" class="btn btn--white btn--lg">View Properties</a>
        <a href="/contact" class="btn btn--outline btn--lg" style="border-color: rgba(255,255,255,0.35); color: rgba(255,255,255,0.85);">Contact Us</a>
      </div>
    </div>
  </section>
`
}
