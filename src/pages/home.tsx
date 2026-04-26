// SVG icon helpers — thin line, monochrome gold style
const Icon = {
  people: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  city: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="10" width="6" height="13"/><rect x="9" y="4" width="6" height="19"/><rect x="17" y="7" width="6" height="16"/><line x1="1" y1="23" x2="23" y2="23"/></svg>`,
  chair: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v7"/><path d="M18 3v7"/><path d="M3 10h18"/><path d="M5 14h14v7"/><path d="M5 21l-1 0"/><path d="M19 21l1 0"/><path d="M5 17h14"/></svg>`,
  lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/></svg>`,
  trend: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  bed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M22 4v16"/><path d="M2 8h20"/><path d="M2 16h20"/><rect x="6" y="8" width="4" height="8" rx="1"/><rect x="14" y="8" width="4" height="8" rx="1"/></svg>`,
  bath: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 L9 2 a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/><path d="M4 6h16v6a8 8 0 0 1-8 8h0a8 8 0 0 1-8-8z"/><line x1="4" y1="6" x2="20" y2="6"/></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  home2: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  map: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
}

function propCard(opts: {
  id: string, badge?: string, location: string, title: string,
  beds: number, baths: number, sleeps: number, price: number,
  img: string, wide?: boolean
}) {
  return `
  <div class="property-card${opts.wide ? ' property-card--wide' : ''}">
    <div class="property-card__img-wrap">
      <img src="${opts.img}" alt="${opts.title}" class="property-card__img" loading="lazy" />
      ${opts.badge ? `<span class="property-card__badge">${opts.badge}</span>` : ''}
    </div>
    <div class="property-card__body">
      <div class="property-card__location">
        <span style="display:inline-flex;align-items:center;gap:4px;color:var(--gold-dark);">
          <svg style="width:11px;height:11px;stroke:var(--gold-dark);fill:none;stroke-width:2;" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${opts.location}
        </span>
      </div>
      <h3 class="property-card__title">${opts.title}</h3>
      <div class="property-card__meta">
        <span class="property-card__meta-item">
          ${Icon.bed} ${opts.beds} Bed${opts.beds !== 1 ? 's' : ''}
        </span>
        <span class="property-card__meta-item">
          ${Icon.bath} ${opts.baths} Bath${opts.baths !== 1 ? 's' : ''}
        </span>
        <span class="property-card__meta-item">
          ${Icon.users} Sleeps ${opts.sleeps}
        </span>
      </div>
      <div class="property-card__divider"></div>
      <div class="property-card__footer">
        <div class="property-card__price">
          $${opts.price} <span>/ night</span>
        </div>
        <a href="/properties/${opts.id}" class="btn btn--dark-gold btn--sm">
          View Details
        </a>
      </div>
    </div>
  </div>`
}

export function homePage(): string {
  return `

  <!-- ===== HERO ===== -->
  <section class="hero">
    <div class="hero__left">
      <div class="hero__left-inner animate-up">
        <div class="eyebrow hero__eyebrow">Atlanta, Georgia &nbsp;&middot;&nbsp; Family-Owned</div>
        <h1 class="hero__headline">
          <span class="hero__headline-line1">Contemporary Stays.</span>
          <span class="hero__headline-line2">Family-Owned Hospitality.</span>
        </h1>
        <p class="hero__sub">
          Thoughtfully furnished apartments and homes across Atlanta — designed for professionals, families, and anyone who deserves more than a hotel room.
        </p>
        <div class="hero__actions">
          <a href="/properties" class="btn btn--gold btn--lg">View Properties</a>
          <a href="/corporate" class="btn btn--outline-gold btn--lg">Corporate Housing</a>
          <a href="/owner-portal" class="btn btn--outline-white btn--lg" style="display:inline-flex;align-items:center;gap:8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Owner Portal
          </a>
        </div>
        <div class="hero__divider"></div>
        <div class="hero__stats">
          <div class="hero__stat">
            <div class="hero__stat-num">5+</div>
            <div class="hero__stat-label">Properties</div>
          </div>
          <div class="hero__stat">
            <div class="hero__stat-num">4.9</div>
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
      <img
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=90&auto=format&fit=crop"
        alt="Contemporary furnished Atlanta apartment"
        class="hero__img"
      />
      <div class="hero__img-overlay"></div>
      <div class="hero__img-caption">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        <div class="hero__img-caption-text">
          <strong>Move-In Ready</strong>
          <span>Fully Furnished &amp; Equipped</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== WHY CHOOSE US ===== -->
  <section class="why">
    <div class="container">
      <div class="why__label">Why Choose KinCo Legacy Group</div>
      <div class="why__grid observe">
        <div class="why__item">
          <div class="why__icon">${Icon.people}</div>
          <h4>Family First</h4>
          <p>Every guest treated like they've entered our own home — personal, responsive, accountable.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">${Icon.shield}</div>
          <h4>Quality Assured</h4>
          <p>Consistent standards across every property. Inspected, stocked, and ready before you arrive.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">${Icon.city}</div>
          <h4>Prime Locations</h4>
          <p>Positioned in Atlanta's most connected neighborhoods — downtown, midtown, and beyond.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">${Icon.chair}</div>
          <h4>Thoughtful Design</h4>
          <p>Curated spaces that function beautifully — for work, rest, and everything in between.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">${Icon.lock}</div>
          <h4>Trust &amp; Integrity</h4>
          <p>Honest pricing, clear communication, no surprises. Our name is on everything we do.</p>
        </div>
        <div class="why__item">
          <div class="why__icon">${Icon.trend}</div>
          <h4>Built to Last</h4>
          <p>Multi-generational thinking. We grow purposefully, not just quickly.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== PROPERTIES ===== -->
  <section class="properties">
    <div class="container">
      <div class="properties__header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Our Properties</div>
        <h2>OUR PROPERTIES</h2>
        <p>Hand-selected properties across Atlanta — each one clean, comfortable, and ready the moment you arrive.</p>
      </div>

      <div class="properties__grid observe">
        ${propCard({
          id: 'artist-108', badge: 'Featured', location: 'Artist Square · Downtown',
          title: 'Artist 108', beds: 2, baths: 2, sleeps: 6, price: 165,
          img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop'
        })}
        ${propCard({
          id: 'artist-216', badge: 'Popular', location: 'Artist Square · Downtown',
          title: 'Artist 216', beds: 2, baths: 2, sleeps: 6, price: 155,
          img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop'
        })}
        ${propCard({
          id: 'midtown-2br', location: 'Midtown Atlanta',
          title: 'Midtown 2BR Apartment', beds: 2, baths: 2, sleeps: 5, price: 145,
          img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop'
        })}
      </div>

      <div class="properties__row2 observe">
        ${propCard({
          id: 'studio-suite', location: 'Downtown / Old Fourth Ward',
          title: '1-Bedroom Executive Suite', beds: 1, baths: 1, sleeps: 2, price: 99,
          img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80&auto=format&fit=crop'
        })}
        ${propCard({
          id: 'family-home', badge: 'Groups', location: 'Atlanta Metro',
          title: '4-Bedroom Family Home', beds: 4, baths: 3, sleeps: 10, price: 280,
          img: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=900&q=80&auto=format&fit=crop'
        })}
      </div>

      <div style="text-align:center;margin-top:52px;" class="observe">
        <a href="/properties" class="btn btn--black-outline btn--lg">
          View All Properties &nbsp;${Icon.arrow}
        </a>
      </div>
    </div>
  </section>

  <!-- ===== OWNER PORTAL CTA ===== -->
  <section class="owner-portal">
    <div class="container">
      <div class="owner-portal__inner">
        <div class="owner-portal__visual">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop"
            alt="Owner dashboard"
            class="owner-portal__img"
          />
          <div class="owner-portal__img-overlay"></div>
        </div>
        <div class="owner-portal__content observe">
          <div class="eyebrow">Property Owners</div>
          <h2>Owner Portal Access</h2>
          <p>Manage your property, track earnings, review guest activity, and access reporting — all from a secure, private dashboard designed for KinCo property owners.</p>
          <div class="owner-portal__features">
            <div class="owner-portal__feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;color:var(--gold);flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
              Real-time earnings &amp; booking overview
            </div>
            <div class="owner-portal__feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;color:var(--gold);flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
              Monthly statements &amp; financial reports
            </div>
            <div class="owner-portal__feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;color:var(--gold);flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
              Guest history &amp; stay summaries
            </div>
            <div class="owner-portal__feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;color:var(--gold);flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>
              Maintenance requests &amp; property notes
            </div>
          </div>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            <a href="/owner-portal" class="btn btn--gold btn--lg" style="display:inline-flex;align-items:center;gap:9px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Access Owner Portal
            </a>
            <a href="/contact" class="btn btn--outline-gold btn--lg">Partner With Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TESTIMONIALS ===== -->
  <section class="testimonials">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Guest Reviews</div>
        <h2>What Our Guests Say</h2>
        <p>Honest words from the people who've stayed with us.</p>
      </div>
      <div class="testimonials__grid observe">
        <div class="testimonial-card">
          <span class="testimonial-card__quote-mark">"</span>
          <div class="testimonial-card__stars">
            ${Icon.star}${Icon.star}${Icon.star}${Icon.star}${Icon.star}
          </div>
          <p class="testimonial-card__text">The space was immaculate, beautifully furnished, and felt completely personal — nothing like a generic rental. I've stayed in hotels that weren't this well thought out. Will absolutely be back.</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div class="testimonial-card__name">Marcus T.</div>
              <div class="testimonial-card__role">Corporate Traveler &middot; 3-week stay</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <span class="testimonial-card__quote-mark">"</span>
          <div class="testimonial-card__stars">
            ${Icon.star}${Icon.star}${Icon.star}${Icon.star}${Icon.star}
          </div>
          <p class="testimonial-card__text">We relocated for work and KinCo made the entire transition seamless. The apartment was fully stocked, the location was perfect, and communication was responsive throughout our entire two-month stay.</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div class="testimonial-card__name">Danielle &amp; Kwame R.</div>
              <div class="testimonial-card__role">Relocation Stay &middot; 2 months</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <span class="testimonial-card__quote-mark">"</span>
          <div class="testimonial-card__stars">
            ${Icon.star}${Icon.star}${Icon.star}${Icon.star}${Icon.star}
          </div>
          <p class="testimonial-card__text">Booked the loft for an extended nursing contract in Atlanta. It felt like home from day one — stylish, practical, well-located. The family behind KinCo genuinely cares, and that shows in every detail.</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div>
              <div class="testimonial-card__name">Priya S.</div>
              <div class="testimonial-card__role">Traveling Nurse &middot; 6-week stay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== NEIGHBORHOOD ===== -->
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
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop" alt="Midtown Atlanta" class="neighborhood__card-img" loading="lazy" />
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

  <!-- ===== FAQ ===== -->
  <section class="faq">
    <div class="container">
      <div class="section-header observe">
        <div class="eyebrow" style="justify-content:center;margin-bottom:16px;">Common Questions</div>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before booking with KinCo Legacy Group.</p>
      </div>
      <div class="faq__list observe">
        <div class="faq__item">
          <button class="faq__question">
            What is the minimum stay at KinCo properties?
            <div class="faq__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </button>
          <div class="faq__answer">We accommodate stays from 3 nights up to 6+ months. Our properties are designed for short-term guests, corporate travelers, and extended-stay residents alike.</div>
        </div>
        <div class="faq__item">
          <button class="faq__question">
            Are your properties available for corporate housing?
            <div class="faq__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </button>
          <div class="faq__answer">Yes. We specialize in furnished corporate housing for traveling professionals, insurance displacement, film crews, traveling nurses, and executive relocation. Contact us for availability and monthly pricing.</div>
        </div>
        <div class="faq__item">
          <button class="faq__question">
            What is included in every property?
            <div class="faq__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </button>
          <div class="faq__answer">Every property is fully furnished with premium bedding, a fully-equipped kitchen, high-speed Wi-Fi, smart TV, washer/dryer, and essential toiletries. Everything is ready from your first night.</div>
        </div>
        <div class="faq__item">
          <button class="faq__question">
            Can I book directly instead of through Airbnb?
            <div class="faq__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </button>
          <div class="faq__answer">Yes. For direct bookings, especially corporate and extended stays, please use our contact form or call us. Direct booking may offer more flexible pricing and terms for longer stays.</div>
        </div>
        <div class="faq__item">
          <button class="faq__question">
            Are your properties pet-friendly?
            <div class="faq__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            </div>
          </button>
          <div class="faq__answer">Pet policies vary by property. Please contact us before booking with a pet so we can confirm availability and any applicable pet fees.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== CTA BANNER ===== -->
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
  `
}
