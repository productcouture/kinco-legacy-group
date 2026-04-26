export function homePage(): string {
  return `
  <!-- HERO SECTION -->
  <section class="hero">
    <div class="hero__bg">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80&auto=format&fit=crop"
        alt="Modern Atlanta apartment interior"
        class="hero__bg-img"
      />
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__content">
      <div class="hero__text animate-up">
        <div class="hero__eyebrow">Atlanta, Georgia · Family-Owned</div>
        <h1 class="hero__headline">
          Contemporary Stays.<br>
          <em>Family-Owned</em><br>
          Hospitality.
        </h1>
        <p class="hero__sub">
          Thoughtfully furnished apartments and homes in Atlanta designed for short stays, business travel, relocations, and everyday comfort.
        </p>
        <div class="hero__actions">
          <a href="/properties" class="btn btn--primary btn--lg">
            <i class="fas fa-building"></i> View Properties
          </a>
          <a href="/contact" class="btn btn--outline btn--lg">
            <i class="fas fa-calendar-check"></i> Book a Stay
          </a>
          <a href="/corporate" class="btn btn--sand btn--lg">
            <i class="fas fa-briefcase"></i> Corporate Housing
          </a>
        </div>
        <div class="hero__stats">
          <div class="hero__stat">
            <div class="hero__stat-num">5+</div>
            <div class="hero__stat-label">Unique Properties</div>
          </div>
          <div class="hero__stat">
            <div class="hero__stat-num">ATL</div>
            <div class="hero__stat-label">Prime Locations</div>
          </div>
          <div class="hero__stat">
            <div class="hero__stat-num">★ 4.9</div>
            <div class="hero__stat-label">Guest Rating</div>
          </div>
        </div>
      </div>
      <div class="hero__visual animate-up animate-up--d2">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85&auto=format&fit=crop"
          alt="Bright contemporary furnished living space"
          class="hero__img-main"
        />
        <div class="hero__img-badge">
          <div class="hero__img-badge-icon">🏠</div>
          <div class="hero__img-badge-text">
            <strong>Move-In Ready</strong>
            <span>Fully furnished & equipped</span>
          </div>
        </div>
        <div class="hero__img-accent"></div>
      </div>
    </div>
  </section>

  <!-- TRUST / WHY US SECTION -->
  <section class="trust">
    <div class="container">
      <div class="section-header animate-up">
        <div class="eyebrow">Why KinCo Legacy Group</div>
        <h2>Hospitality You Can Count On</h2>
        <p>We combine the warmth of family ownership with the reliability and style that today's traveler expects.</p>
      </div>
      <div class="trust__grid">
        <div class="trust__card animate-up animate-up--d1">
          <div class="trust__icon">🤝</div>
          <h4>Family-Owned Service</h4>
          <p>We're not a faceless corporation. Every guest matters, every detail is personal, and every stay reflects our values.</p>
        </div>
        <div class="trust__card animate-up animate-up--d2">
          <div class="trust__icon">🛋️</div>
          <h4>Comfortable Furnished Spaces</h4>
          <p>Clean, stylish, move-in ready homes. We take pride in curating spaces that feel like home from day one.</p>
        </div>
        <div class="trust__card animate-up animate-up--d3">
          <div class="trust__icon">📍</div>
          <h4>Prime Atlanta Access</h4>
          <p>Convenient to downtown, major events, Hartsfield-Jackson Airport, and Atlanta's best business districts.</p>
        </div>
        <div class="trust__card animate-up animate-up--d3">
          <div class="trust__icon">📅</div>
          <h4>Flexible Stay Options</h4>
          <p>Weekend getaways, monthly extended stays, executive relocations — we tailor to your timeline and needs.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FEATURED PROPERTIES -->
  <section class="featured">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Our Properties</div>
        <h2>Find Your Perfect Atlanta Stay</h2>
        <p>Each property is hand-selected, thoughtfully furnished, and ready to welcome you.</p>
      </div>
      <div class="properties-grid">

        <div class="property-card">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop"
              alt="Artist 108 loft interior"
              class="property-card__img"
            />
            <span class="property-card__badge property-card__badge--new">Featured</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">Artist Square · Downtown Atlanta</div>
            <h3 class="property-card__title">Artist 108</h3>
            <p class="property-card__desc">Modern comfortable loft near downtown. Open-concept layout with high ceilings, contemporary finishes, and all the conveniences of home.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 2 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 2 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 6</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-utensils"></i> Kitchen</span>
              <span class="amenity-tag"><i class="fas fa-parking"></i> Parking</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $165 <span>/ night</span></div>
              <a href="/properties/artist-108" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <div class="property-card">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop"
              alt="Artist 216 bright contemporary space"
              class="property-card__img"
            />
            <span class="property-card__badge">Popular</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">Artist Square · Downtown Atlanta</div>
            <h3 class="property-card__title">Artist 216</h3>
            <p class="property-card__desc">Bright contemporary stay for work or leisure. Upper-floor unit with natural light, a full kitchen, and everything you need for a seamless stay.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 2 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 2 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 6</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-utensils"></i> Kitchen</span>
              <span class="amenity-tag"><i class="fas fa-tv"></i> Smart TV</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $155 <span>/ night</span></div>
              <a href="/properties/artist-216" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <div class="property-card">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=700&q=80&auto=format&fit=crop"
              alt="4 Bedroom Family Home"
              class="property-card__img"
            />
          </div>
          <div class="property-card__body">
            <div class="property-card__location">Atlanta Metro Area</div>
            <h3 class="property-card__title">4-Bedroom Family Home</h3>
            <p class="property-card__desc">Perfect for families, project teams, or group stays. Spacious layout with private bedrooms, full kitchen, living areas, and outdoor space.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 4 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 3 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 10</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-car"></i> Driveway</span>
              <span class="amenity-tag"><i class="fas fa-leaf"></i> Yard</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $280 <span>/ night</span></div>
              <a href="/properties/family-home" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

      </div>
      <div class="text-center mt-lg">
        <a href="/properties" class="btn btn--outline btn--lg">
          View All Properties <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>

  <!-- CORPORATE TEASER -->
  <section class="corporate">
    <div class="container">
      <div class="corporate__inner">
        <div>
          <div class="eyebrow">Corporate Housing</div>
          <h2>Reliable Housing for Professionals & Teams</h2>
          <p style="margin-bottom: 24px;">We partner with businesses, insurers, and relocation companies to provide dependable furnished housing in Atlanta. Clean, ready, and professionally managed.</p>
          <div class="corporate__features">
            <div class="corporate__feature">
              <div class="corporate__feature-icon">✈️</div>
              <p>Corporate Travel</p>
            </div>
            <div class="corporate__feature">
              <div class="corporate__feature-icon">🏥</div>
              <p>Traveling Nurses</p>
            </div>
            <div class="corporate__feature">
              <div class="corporate__feature-icon">🎬</div>
              <p>Film Crews</p>
            </div>
            <div class="corporate__feature">
              <div class="corporate__feature-icon">🔑</div>
              <p>Executive Relocation</p>
            </div>
            <div class="corporate__feature">
              <div class="corporate__feature-icon">🏠</div>
              <p>Insurance Housing</p>
            </div>
            <div class="corporate__feature">
              <div class="corporate__feature-icon">📋</div>
              <p>Long-Term Projects</p>
            </div>
          </div>
          <div style="margin-top: 36px; display: flex; gap: 16px; flex-wrap: wrap;">
            <a href="/corporate" class="btn btn--white btn--lg">Learn More</a>
            <a href="/contact" class="btn btn--outline" style="border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.8);">
              Request Availability
            </a>
          </div>
        </div>
        <div class="corporate__visual">
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80&auto=format&fit=crop"
            alt="Modern furnished corporate apartment"
            class="corporate__img"
          />
          <div class="corporate__badge">
            <div class="corporate__badge-num">24hr</div>
            <div class="corporate__badge-label">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Guest Reviews</div>
        <h2>What Our Guests Are Saying</h2>
        <p>Honest words from the people who've stayed with us.</p>
      </div>
      <div class="testimonials__grid">
        <div class="testimonial-card">
          <span class="testimonial-card__quote">"</span>
          <p class="testimonial-card__text">The space was beautiful, spotless, and exactly as described. Everything felt personal and intentional — not like a generic rental. Highly recommend for business travel.</p>
          <div class="testimonial-card__stars">★★★★★</div>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">👤</div>
            <div>
              <div class="testimonial-card__name">Marcus T.</div>
              <div class="testimonial-card__role">Corporate Traveler · 3-week stay</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <span class="testimonial-card__quote">"</span>
          <p class="testimonial-card__text">We relocated for work and KinCo made the transition seamless. The apartment was fully stocked, the location was perfect, and communication was excellent throughout.</p>
          <div class="testimonial-card__stars">★★★★★</div>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">👤</div>
            <div>
              <div class="testimonial-card__name">Danielle & Kwame R.</div>
              <div class="testimonial-card__role">Relocation Stay · 2 months</div>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <span class="testimonial-card__quote">"</span>
          <p class="testimonial-card__text">Booked the loft for an extended project in Atlanta. It felt like home — stylish without being pretentious, well-located, and the family that runs it truly cares.</p>
          <div class="testimonial-card__stars">★★★★★</div>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar">👤</div>
            <div>
              <div class="testimonial-card__name">Priya S.</div>
              <div class="testimonial-card__role">Traveling Nurse · 6-week stay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- NEIGHBORHOOD GUIDE -->
  <section class="neighborhood">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Explore Atlanta</div>
        <h2>Neighborhoods We Call Home</h2>
        <p>All our properties are positioned for easy access to Atlanta's best neighborhoods, business districts, and attractions.</p>
      </div>
      <div class="neighborhood__grid">
        <div class="neighborhood__card">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&auto=format&fit=crop"
            alt="Downtown Atlanta"
            class="neighborhood__card-img"
          />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <h4>Downtown Atlanta</h4>
            <p>Business hubs, Georgia Aquarium, sports venues</p>
          </div>
        </div>
        <div class="neighborhood__card">
          <img
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80&auto=format&fit=crop"
            alt="Midtown Atlanta"
            class="neighborhood__card-img"
          />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <h4>Midtown</h4>
            <p>Arts scene, dining, Piedmont Park, tech offices</p>
          </div>
        </div>
        <div class="neighborhood__card">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop"
            alt="Old Fourth Ward Atlanta"
            class="neighborhood__card-img"
          />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <h4>Old Fourth Ward</h4>
            <p>BeltLine access, vibrant dining, creative energy</p>
          </div>
        </div>
        <div class="neighborhood__card">
          <img
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&q=80&auto=format&fit=crop"
            alt="Buckhead Atlanta"
            class="neighborhood__card-img"
          />
          <div class="neighborhood__card-overlay"></div>
          <div class="neighborhood__card-content">
            <h4>Buckhead & Beyond</h4>
            <p>Executive corridor, upscale amenities, shopping</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner">
    <div class="container container--narrow">
      <div class="eyebrow" style="color: var(--color-sand); justify-content: center;">
        <span style="background: var(--color-sand); display: block; width: 24px; height: 1px;"></span>
        Ready to Book
      </div>
      <h2>Your Atlanta Stay Starts Here</h2>
      <p>Whether you're visiting for a weekend, relocating for months, or housing a team — we have a space and a plan for you.</p>
      <div class="cta-banner__actions">
        <a href="/properties" class="btn btn--white btn--lg">Browse Properties</a>
        <a href="/contact" class="btn btn--outline" style="border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.9);">
          Get in Touch
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="faq">
    <div class="container">
      <div class="section-header">
        <div class="eyebrow">Common Questions</div>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know before you book.</p>
      </div>
      <div class="faq__list">
        <div class="faq__item">
          <div class="faq__question">
            What is the minimum stay?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            We typically require a minimum stay of 3 nights for short stays, though many of our properties are available for weekly and monthly bookings. For corporate and relocation stays, we offer flexible terms starting from 30 days.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            Are the apartments fully furnished?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Yes — every property is fully furnished and equipped. This includes quality furniture, bedding and linens, kitchen essentials, cookware, small appliances, WiFi, and streaming-ready TVs. You arrive with a bag, nothing else needed.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            Do you accommodate pets?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Pet policies vary by property. Please contact us directly to discuss your needs and we'll find the best fit. A pet deposit may be required.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            Can I book for corporate or team housing?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Absolutely. We specialize in corporate housing arrangements for traveling professionals, teams, and companies. We work directly with HR departments, relocation companies, and travel managers. Contact us for custom pricing and availability.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            What neighborhoods are your properties in?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Our properties are located in and around Atlanta's most connected neighborhoods including Downtown, Midtown, Old Fourth Ward, and surrounding areas — all with easy access to I-285, I-75/85, and MARTA transit.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            How do I check in?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            We offer self check-in via smart lock for seamless arrivals. You'll receive detailed instructions and an access code ahead of your stay. Our team is always available by phone and message throughout your visit.
          </div>
        </div>
        <div class="faq__item">
          <div class="faq__question">
            Do you offer extended or month-to-month stays?
            <div class="faq__icon"><i class="fas fa-plus"></i></div>
          </div>
          <div class="faq__answer">
            Yes. Extended stays are one of our specialties. We offer discounted monthly rates for stays of 30+ days and can customize lease terms for relocation clients, medical professionals, and project teams.
          </div>
        </div>
      </div>
    </div>
  </section>
`
}
