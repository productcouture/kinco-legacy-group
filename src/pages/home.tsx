export function homePage(): string {
  const checkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
  const plusSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`

  return `

  <!-- HERO -->
  <section class="hero">
    <div class="hero__left">
      <div class="hero__left-inner animate-up">
        <div class="eyebrow" style="margin-bottom:28px;">Atlanta, Georgia &nbsp;·&nbsp; Family-Owned</div>
        <h1 class="hero__headline">
          <span class="hero__headline-line1">Contemporary Stays.</span>
          <span class="hero__headline-line2">Family-Owned Hospitality.</span>
        </h1>
        <p class="hero__sub">Thoughtfully furnished apartments and homes in Atlanta designed for short stays, business travel, relocations, and everyday comfort.</p>
        <div class="hero__actions">
          <a href="/properties" class="btn btn--gold btn--lg">View Properties</a>
          <a href="/corporate" class="btn btn--outline-gold btn--lg">Corporate Housing</a>

        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <div class="hero__stat-num">5+</div>
            <div class="hero__stat-label">Properties</div>
          </div>
          <div class="hero__stat">
            <div class="hero__stat-num">&#9733; 4.9</div>
            <div class="hero__stat-label">Guest Rating</div>
          </div>
          <div class="hero__stat">
            <div class="hero__stat-num">ATL</div>
            <div class="hero__stat-label">Prime Locations</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero__right">
      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=90&auto=format&fit=crop" alt="Contemporary furnished Atlanta apartment" class="hero__img" />
      <div class="hero__img-overlay"></div>
      <div class="hero__img-caption">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <div class="hero__img-caption-text">
          <strong>Move-In Ready</strong>
          <span>Fully Furnished &amp; Equipped</span>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY CHOOSE US -->
  <section class="why">
    <div class="container">
      <div class="why__label">Why Choose KinCo Legacy Group</div>
      <div class="why__grid observe">
        <div class="why__item">
          <div class="why__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <h4>Family First</h4>
          <p>Every guest treated like they've entered our own home — personal, responsive, accountable.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
          </div>
          <h4>Quality Assured</h4>
          <p>Consistent standards across every property. Inspected, stocked, and ready before you arrive.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="10" width="6" height="13"/><rect x="9" y="4" width="6" height="19"/><rect x="17" y="7" width="6" height="16"/><line x1="1" y1="23" x2="23" y2="23"/></svg>
          </div>
          <h4>Prime Locations</h4>
          <p>Positioned in Atlanta's most connected neighborhoods — downtown, midtown, and beyond.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </div>
          <h4>Thoughtful Design</h4>
          <p>Curated spaces that function beautifully — for work, rest, and everything in between.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/></svg>
          </div>
          <h4>Trust &amp; Integrity</h4>
          <p>Honest pricing, clear communication, no surprises. Our name is on everything we do.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
          </div>
          <h4>Built to Last</h4>
          <p>Multi-generational thinking. We grow purposefully — quality always before quantity.</p>
        </div>
      </div>
    </div>
  </section>



  <!-- NEIGHBORHOOD -->
  <section class="neighborhood">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Explore Atlanta</div>
        <h2>Neighborhoods We Call Home</h2>
        <p>All properties positioned for easy access to Atlanta's best districts, venues, and business corridors.</p>
      </div>
      <div class="neighborhood__grid observe">
        <div class="neighborhood__card">
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop" alt="Downtown Atlanta" class="neighborhood__card-img" loading="lazy" />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <div class="neighborhood__card-line"></div>
            <h4>Downtown Atlanta</h4>
            <p>Business hubs, Georgia Aquarium, Mercedes-Benz Stadium</p>
          </div>
        </div>
        <div class="neighborhood__card">
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop" alt="Midtown" class="neighborhood__card-img" loading="lazy" />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <div class="neighborhood__card-line"></div>
            <h4>Midtown</h4>
            <p>Arts scene, Piedmont Park, tech offices, Fox Theatre</p>
          </div>
        </div>
        <div class="neighborhood__card">
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop" alt="Old Fourth Ward" class="neighborhood__card-img" loading="lazy" />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <div class="neighborhood__card-line"></div>
            <h4>Old Fourth Ward</h4>
            <p>BeltLine access, vibrant dining, creative energy</p>
          </div>
        </div>
        <div class="neighborhood__card">
          <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=80&auto=format&fit=crop" alt="Buckhead" class="neighborhood__card-img" loading="lazy" />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <div class="neighborhood__card-line"></div>
            <h4>Buckhead &amp; Beyond</h4>
            <p>Executive corridor, upscale amenities, shopping</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner">
    <div class="container container--narrow observe">
      <div class="eyebrow" style="justify-content:center;margin-bottom:20px;">Ready to Book</div>
      <h2>Your Atlanta Stay Starts Here</h2>
      <p>Whether you're visiting for a weekend, relocating for months, or housing a team — we have a space and a plan for you.</p>
      <div class="cta-banner__actions">
        <a href="/properties" class="btn btn--gold btn--lg">Browse Properties</a>
        <a href="/contact" class="btn btn--outline-gold btn--lg">Get in Touch</a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="faq">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Common Questions</div>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before you book.</p>
      </div>
      <div class="faq__list observe">
        <div class="faq__item">
          <div class="faq__question">What is the minimum stay? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">We typically require a minimum of 3 nights for short stays. For corporate and relocation stays, we offer flexible terms starting from 30 days.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">Are the apartments fully furnished? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Yes — every property is fully furnished and equipped. Quality furniture, bedding and linens, full kitchen essentials, high-speed WiFi, and smart TVs. You bring a bag. Nothing else needed.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">Can I book for corporate or team housing? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Absolutely. We specialize in corporate housing for traveling professionals and teams. We work directly with HR departments, relocation firms, and travel management companies.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">Do you accommodate pets? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Pet policies vary by property. Please contact us to discuss your needs and we'll find the best fit. A pet deposit may be required.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">How do I check in? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">We offer self check-in via smart lock for seamless arrivals. You'll receive detailed instructions and an access code before your stay. Our team is always available throughout your visit.</div>
        </div>
        <div class="faq__item">
          <div class="faq__question">Do you offer extended or month-to-month stays? <div class="faq__icon">${plusSvg}</div></div>
          <div class="faq__answer">Yes — extended stays are one of our specialties. We offer discounted monthly rates for stays of 30+ days and can customize terms for relocation clients and project teams.</div>
        </div>
      </div>
    </div>
  </section>
`
}
