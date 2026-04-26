export function propertiesPage(): string {
  return `
  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero__eyebrow">Our Listings</div>
    <h1>Atlanta Furnished Rentals</h1>
    <p>Hand-picked properties across Atlanta — each one clean, comfortable, and ready for your arrival.</p>
  </div>

  <!-- FILTER BAR -->
  <section class="section--sm" style="background: var(--color-white); border-bottom: 1px solid var(--color-border);">
    <div class="container">
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <span style="font-size: 0.8rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-steel); white-space: nowrap;">Filter by:</span>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button onclick="filterProps('all')" class="filter-btn active" data-filter="all">All Properties</button>
          <button onclick="filterProps('short')" class="filter-btn" data-filter="short">Short Stays</button>
          <button onclick="filterProps('corporate')" class="filter-btn" data-filter="corporate">Corporate</button>
          <button onclick="filterProps('group')" class="filter-btn" data-filter="group">Group / Family</button>
          <button onclick="filterProps('solo')" class="filter-btn" data-filter="solo">Solo / Business</button>
        </div>
      </div>
    </div>
  </section>

  <style>
    .filter-btn {
      padding: 8px 18px;
      border: 1px solid var(--color-border);
      border-radius: 100px;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-charcoal-light);
      background: transparent;
      cursor: pointer;
      transition: all 0.2s;
      font-family: var(--font-body);
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--color-black);
      color: white;
      border-color: var(--color-black);
    }
  </style>

  <!-- PROPERTIES GRID -->
  <section style="background: var(--color-warm-white); padding: 64px 0 96px;">
    <div class="container">
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 28px;" id="propertiesGrid">

        <!-- Artist 108 -->
        <div class="property-card" data-category="short corporate">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop"
              alt="Artist 108 loft interior Atlanta"
              class="property-card__img"
              loading="lazy"
            />
            <span class="property-card__badge property-card__badge--new">Featured</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">
              <i class="fas fa-map-marker-alt" style="margin-right: 4px;"></i> Artist Square · Downtown Atlanta
            </div>
            <h3 class="property-card__title">Artist 108</h3>
            <p class="property-card__desc">Modern comfortable loft near downtown. Open-concept layout with high ceilings, exposed elements, and contemporary furnishings that make every stay feel special.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 2 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 2 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 6</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-utensils"></i> Full Kitchen</span>
              <span class="amenity-tag"><i class="fas fa-parking"></i> Parking</span>
              <span class="amenity-tag"><i class="fas fa-tv"></i> Smart TV</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $165 <span>/ night</span></div>
              <a href="/properties/artist-108" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <!-- Artist 216 -->
        <div class="property-card" data-category="short corporate">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop"
              alt="Artist 216 bright contemporary Atlanta apartment"
              class="property-card__img"
              loading="lazy"
            />
            <span class="property-card__badge">Popular</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">
              <i class="fas fa-map-marker-alt" style="margin-right: 4px;"></i> Artist Square · Downtown Atlanta
            </div>
            <h3 class="property-card__title">Artist 216</h3>
            <p class="property-card__desc">Bright contemporary stay for work or leisure. Upper-floor unit flooded with natural light, clean modern finishes, and a fully equipped kitchen.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 2 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 2 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 6</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-utensils"></i> Full Kitchen</span>
              <span class="amenity-tag"><i class="fas fa-tv"></i> Smart TV</span>
              <span class="amenity-tag"><i class="fas fa-shirt"></i> W/D In-Unit</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $155 <span>/ night</span></div>
              <a href="/properties/artist-216" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <!-- Midtown 2BR -->
        <div class="property-card" data-category="short corporate">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop"
              alt="Midtown furnished apartment Atlanta"
              class="property-card__img"
              loading="lazy"
            />
          </div>
          <div class="property-card__body">
            <div class="property-card__location">
              <i class="fas fa-map-marker-alt" style="margin-right: 4px;"></i> Midtown Atlanta
            </div>
            <h3 class="property-card__title">Midtown 2BR Apartment</h3>
            <p class="property-card__desc">Stylish furnished apartment with city convenience. Steps from dining, arts venues, and Piedmont Park. Ideal for work or play in the heart of Atlanta.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 2 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 2 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 5</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-utensils"></i> Kitchen</span>
              <span class="amenity-tag"><i class="fas fa-building"></i> City Views</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $145 <span>/ night</span></div>
              <a href="/properties/midtown-2br" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <!-- 1BR Executive Suite -->
        <div class="property-card" data-category="solo corporate short">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80&auto=format&fit=crop"
              alt="1 Bedroom executive suite Atlanta"
              class="property-card__img"
              loading="lazy"
            />
          </div>
          <div class="property-card__body">
            <div class="property-card__location">
              <i class="fas fa-map-marker-alt" style="margin-right: 4px;"></i> Downtown / Old Fourth Ward
            </div>
            <h3 class="property-card__title">1-Bedroom Executive Suite</h3>
            <p class="property-card__desc">Ideal for solo travelers, professionals, or visiting executives. Clean, efficient, and elegantly appointed with everything you need for a focused, comfortable stay.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 1 Bed</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 1 Bath</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 2</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-briefcase"></i> Desk</span>
              <span class="amenity-tag"><i class="fas fa-utensils"></i> Kitchen</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $99 <span>/ night</span></div>
              <a href="/properties/studio-suite" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <!-- 4BR Family Home -->
        <div class="property-card" data-category="group">
          <div class="property-card__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=700&q=80&auto=format&fit=crop"
              alt="4 Bedroom family home Atlanta short term rental"
              class="property-card__img"
              loading="lazy"
            />
            <span class="property-card__badge">Best for Groups</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">
              <i class="fas fa-map-marker-alt" style="margin-right: 4px;"></i> Atlanta Metro Area
            </div>
            <h3 class="property-card__title">4-Bedroom Family Home</h3>
            <p class="property-card__desc">Perfect for families, film crews, relocation groups, or traveling teams. Generous living space, a full kitchen, private yard, and driveway parking for multiple vehicles.</p>
            <div class="property-card__meta">
              <span class="property-card__meta-item"><i class="fas fa-bed"></i> 4 Beds</span>
              <span class="property-card__meta-item"><i class="fas fa-bath"></i> 3 Baths</span>
              <span class="property-card__meta-item"><i class="fas fa-users"></i> Sleeps 10</span>
            </div>
            <div class="amenities-list">
              <span class="amenity-tag"><i class="fas fa-wifi"></i> WiFi</span>
              <span class="amenity-tag"><i class="fas fa-car"></i> Driveway</span>
              <span class="amenity-tag"><i class="fas fa-leaf"></i> Private Yard</span>
              <span class="amenity-tag"><i class="fas fa-shirt"></i> W/D</span>
            </div>
            <div class="property-card__footer">
              <div class="property-card__price">From $280 <span>/ night</span></div>
              <a href="/properties/family-home" class="btn btn--primary btn--sm">View Details</a>
            </div>
          </div>
        </div>

        <!-- Additional Listing Placeholder -->
        <div class="property-card" data-category="short corporate group" style="border: 2px dashed var(--color-border); background: var(--color-warm-white);">
          <div class="property-card__img-wrap" style="background: var(--color-off-white); display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 12px;">
            <span style="font-size: 2.5rem;">🏗️</span>
            <span style="font-size: 0.78rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-steel);">Coming Soon</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">Atlanta, GA</div>
            <h3 class="property-card__title">New Property — 2026</h3>
            <p class="property-card__desc">We're always adding to our portfolio. Join our mailing list or contact us to be notified when new properties become available.</p>
            <div class="property-card__footer" style="margin-top: auto; padding-top: 16px; border-top: 1px solid var(--color-border);">
              <span style="font-size: 0.8rem; color: var(--color-steel);">Be the first to know</span>
              <a href="/contact" class="btn btn--outline btn--sm">Notify Me</a>
            </div>
          </div>
        </div>

      </div>

      <!-- NO RESULTS MESSAGE -->
      <div id="noResults" style="display: none; text-align: center; padding: 64px 0;">
        <div style="font-size: 2rem; margin-bottom: 16px;">🔍</div>
        <h3>No properties match that filter</h3>
        <p style="margin-bottom: 24px;">Try a different category or contact us for custom requests.</p>
        <a href="/contact" class="btn btn--primary">Contact Us</a>
      </div>
    </div>
  </section>

  <!-- INQUIRY STRIP -->
  <section style="background: var(--color-off-white); padding: 48px 0; border-top: 1px solid var(--color-border);">
    <div class="container">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;">
        <div>
          <h3 style="margin-bottom: 8px;">Don't see exactly what you need?</h3>
          <p>We have additional properties and can source housing tailored to your requirements.</p>
        </div>
        <a href="/contact" class="btn btn--primary btn--lg" style="white-space: nowrap;">
          <i class="fas fa-envelope"></i> Reach Out to Us
        </a>
      </div>
    </div>
  </section>

  <script>
    function filterProps(category) {
      // Update active button
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
      });
      
      const cards = document.querySelectorAll('#propertiesGrid .property-card');
      let visible = 0;
      
      cards.forEach(card => {
        const cats = card.dataset.category || '';
        const match = category === 'all' || cats.includes(category);
        card.style.display = match ? 'flex' : 'none';
        if (match) visible++;
      });
      
      document.getElementById('noResults').style.display = visible === 0 ? 'block' : 'none';
    }
  </script>
`
}
