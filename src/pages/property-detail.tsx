const PROPERTIES: Record<string, any> = {
  'artist-108': {
    name: 'Artist 108',
    location: 'Artist Square Lofts · Downtown Atlanta, GA',
    beds: 2, baths: 2, guests: 6,
    price: 165,
    rating: 4.97, reviews: 84,
    badge: 'Featured',
    desc: `Artist 108 is a beautifully appointed loft-style apartment at Artist Square in the heart of Downtown Atlanta. With an open-concept floor plan, soaring ceilings, and contemporary furnishings, this space perfectly captures the spirit of modern Atlanta living.\n\nEvery detail has been thoughtfully considered — from the quality bedding and fully stocked kitchen to the curated art and clean, welcoming aesthetic. Whether you're here for a weekend event, a business trip, or an extended relocation, Artist 108 makes it easy to feel right at home.`,
    imgs: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80&auto=format&fit=crop',
    ],
    amenities: ['WiFi (High-Speed)', 'Full Kitchen', 'In-Unit Washer/Dryer', 'Smart TV', 'Parking (1 spot)', 'Air Conditioning', 'Heating', 'Coffee Maker', 'Dishwasher', 'Microwave', 'Iron & Board', 'Shampoo & Soap'],
    goodFor: ['Corporate travelers', 'Business stays', 'Weekend visitors', 'Couples', 'Event guests', 'Extended stays'],
    highlights: ['Steps from CNN Center', 'Close to Mercedes-Benz Stadium', 'MARTA accessible', 'Walking distance to restaurants & cafes'],
    airbnb: '#',
    vrbo: '#',
  },
  'artist-216': {
    name: 'Artist 216',
    location: 'Artist Square Lofts · Downtown Atlanta, GA',
    beds: 2, baths: 2, guests: 6,
    price: 155,
    rating: 4.95, reviews: 67,
    badge: 'Popular',
    desc: `Artist 216 is an upper-floor contemporary unit at Artist Square that brings together natural light, clean design, and comfortable modern living. This bright, airy apartment is ideal for those who want the energy of Downtown Atlanta without sacrificing peace and comfort.\n\nFeaturing two full bedrooms, two bathrooms, a fully equipped kitchen, and in-unit laundry, Artist 216 is built for stays of any length — whether you're visiting for leisure or settling in for a work project.`,
    imgs: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop',
    ],
    amenities: ['WiFi (High-Speed)', 'Full Kitchen', 'In-Unit Washer/Dryer', 'Smart TV', 'Air Conditioning', 'Coffee Maker', 'Dishwasher', 'Dedicated Workspace', 'Iron & Board', 'Toiletries', 'City Views', 'Keyless Entry'],
    goodFor: ['Corporate travelers', 'Families', 'Weekend visitors', 'Extended stays', 'Relocations', 'Traveling nurses'],
    highlights: ['Upper-floor unit with city views', 'Quiet & bright', 'Walkable to Downtown core', 'Close to State Farm Arena'],
    airbnb: '#',
    vrbo: '#',
  },
  'midtown-2br': {
    name: 'Midtown 2BR Apartment',
    location: 'Midtown Atlanta, GA',
    beds: 2, baths: 2, guests: 5,
    price: 145,
    rating: 4.92, reviews: 51,
    badge: null,
    desc: `Located in the vibrant heart of Midtown Atlanta, this stylish 2-bedroom apartment puts you steps from the city's most celebrated dining, arts venues, and the iconic Piedmont Park. Clean, modern, and move-in ready.\n\nWhether you're attending an event at the Fox Theatre, exploring the BeltLine, or working from one of Midtown's tech offices, this apartment is your ideal base.`,
    imgs: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop',
    ],
    amenities: ['WiFi (High-Speed)', 'Full Kitchen', 'Washer/Dryer', 'Smart TV', 'Air Conditioning', 'Coffee Maker', 'Dishwasher', 'Iron & Board', 'City Views', 'Keyless Entry', 'Toiletries', 'Dedicated Workspace'],
    goodFor: ['Couples', 'Corporate travelers', 'Weekend visitors', 'Event guests', 'Families', 'Extended stays'],
    highlights: ['Walk to Piedmont Park', 'Steps from Fox Theatre', 'MARTA Yellow Line access', 'Vibrant dining & nightlife'],
    airbnb: '#',
    vrbo: '#',
  },
  'studio-suite': {
    name: '1-Bedroom Executive Suite',
    location: 'Downtown / Old Fourth Ward, Atlanta GA',
    beds: 1, baths: 1, guests: 2,
    price: 99,
    rating: 4.91, reviews: 38,
    badge: null,
    desc: `The perfect solo stay. Our 1-Bedroom Executive Suite is designed for the focused professional or discerning solo traveler who wants quality without excess. Clean lines, thoughtful details, and all the necessities — nothing more, nothing less.\n\nWith a dedicated workspace, fast WiFi, and a fully equipped kitchen, this suite makes working from Atlanta as seamless as staying in your own home.`,
    imgs: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop',
    ],
    amenities: ['WiFi (High-Speed)', 'Full Kitchen', 'Smart TV', 'Dedicated Workspace', 'Air Conditioning', 'Coffee Maker', 'Keyless Entry', 'Toiletries', 'Iron & Board', 'Washer/Dryer Access'],
    goodFor: ['Solo travelers', 'Business professionals', 'Traveling nurses', 'Consultants', 'Short weekend stays', 'Executives'],
    highlights: ['Quiet, focused environment', 'BeltLine access nearby', 'Fast public transit', 'Great local coffee & dining'],
    airbnb: '#',
    vrbo: '#',
  },
  'family-home': {
    name: '4-Bedroom Family Home',
    location: 'Atlanta Metro Area, GA',
    beds: 4, baths: 3, guests: 10,
    price: 280,
    rating: 4.98, reviews: 29,
    badge: 'Best for Groups',
    desc: `Our largest property — a spacious, fully furnished home designed for families, teams, and group travel. Four private bedrooms, three full bathrooms, a generous living room, full kitchen, private yard, and driveway parking for multiple vehicles.\n\nWhether you're housing a project team, relocating a family, accommodating a film crew, or gathering for a major Atlanta event — this home provides the space and comfort everyone deserves.`,
    imgs: [
      'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80&auto=format&fit=crop',
    ],
    amenities: ['WiFi (High-Speed)', 'Full Kitchen', 'In-Unit Washer/Dryer', 'Multiple Smart TVs', 'Driveway Parking (3 cars)', 'Private Yard', 'Air Conditioning / Heat', 'BBQ Grill', 'Dishwasher', 'Coffee Maker', 'Full Bedding & Linens', 'Keyless Entry'],
    goodFor: ['Families', 'Film / production crews', 'Corporate teams', 'Insurance displacement', 'Event groups', 'Long-term relocations'],
    highlights: ['Private yard & outdoor space', 'Ample parking', 'Great for groups of 8–10', 'Longer-stay discounts available'],
    airbnb: '#',
    vrbo: '#',
  },
}

const DEFAULT_PROPERTY = {
  name: 'Property Not Found',
  location: 'Atlanta, GA',
  beds: 0, baths: 0, guests: 0, price: 0, rating: 0, reviews: 0, badge: null,
  desc: 'We couldn\'t find that property. Browse our available listings.',
  imgs: ['https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85&auto=format&fit=crop'],
  amenities: [], goodFor: [], highlights: [],
  airbnb: '#', vrbo: '#',
}

export function propertyDetailPage(id: string): string {
  const p = PROPERTIES[id] || DEFAULT_PROPERTY
  const mainImg = p.imgs[0] || ''
  const thumb1 = p.imgs[1] || p.imgs[0]
  const thumb2 = p.imgs[2] || p.imgs[0]

  return `
  <div class="property-detail">
    <div class="container" style="padding-top: 100px;">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <a href="/">Home</a>
        <i class="fas fa-chevron-right"></i>
        <a href="/properties">Properties</a>
        <i class="fas fa-chevron-right"></i>
        <span>${p.name}</span>
      </div>

      <!-- Gallery -->
      <div class="property-gallery">
        <img src="${mainImg}" alt="${p.name}" class="property-gallery__main" />
        <img src="${thumb1}" alt="${p.name} view 2" class="property-gallery__thumb" loading="lazy" />
        <img src="${thumb2}" alt="${p.name} view 3" class="property-gallery__thumb" loading="lazy" />
      </div>

      <!-- Detail Content -->
      <div class="property-detail__inner" style="padding-bottom: 80px;">
        <div class="property-detail__content">
          ${p.badge ? `<div class="badge badge--sand" style="margin-bottom: 12px;">${p.badge}</div>` : ''}
          <div class="property-detail__location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
          <h1 class="property-detail__title">${p.name}</h1>

          <div class="property-detail__meta">
            <div class="property-detail__meta-item"><i class="fas fa-bed"></i> ${p.beds} Bedroom${p.beds !== 1 ? 's' : ''}</div>
            <div class="property-detail__meta-item"><i class="fas fa-bath"></i> ${p.baths} Bathroom${p.baths !== 1 ? 's' : ''}</div>
            <div class="property-detail__meta-item"><i class="fas fa-users"></i> Sleeps ${p.guests}</div>
            ${p.rating ? `<div class="property-detail__meta-item"><i class="fas fa-star" style="color: #D4A853;"></i> ${p.rating} (${p.reviews} reviews)</div>` : ''}
          </div>

          <!-- Description -->
          <div class="property-detail__desc">
            <h3>About This Space</h3>
            ${p.desc.split('\n\n').map((para: string) => `<p>${para}</p>`).join('')}
          </div>

          <!-- Highlights -->
          ${p.highlights && p.highlights.length ? `
          <div style="margin-bottom: 32px;">
            <h3 style="margin-bottom: 16px;">Location Highlights</h3>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${p.highlights.map((h: string) => `
              <div style="display: flex; align-items: center; gap: 12px; font-size: 0.9rem; color: var(--color-charcoal-light);">
                <i class="fas fa-check" style="color: var(--color-tan); font-size: 0.75rem;"></i>
                ${h}
              </div>`).join('')}
            </div>
          </div>` : ''}

          <!-- Amenities -->
          <div class="property-detail__amenities">
            <h3>What's Included</h3>
            <div class="property-detail__amenities-grid">
              ${p.amenities.map((a: string) => `
              <div class="amenity-item">
                <i class="fas fa-check-circle"></i>
                ${a}
              </div>`).join('')}
            </div>
          </div>

          <!-- Good For -->
          <div class="property-detail__good-for">
            <h3>Perfect For</h3>
            <div class="good-for-grid">
              ${p.goodFor.map((g: string) => `
              <div class="good-for-item">
                <i class="fas fa-check"></i>
                ${g}
              </div>`).join('')}
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <div>
          <div class="booking-sidebar">
            <div class="booking-sidebar__price">$${p.price} <span>/ night</span></div>
            ${p.rating ? `
            <div class="booking-sidebar__rating">
              <i class="fas fa-star"></i>
              <strong>${p.rating}</strong>
              <span>· ${p.reviews} reviews</span>
            </div>` : ''}

            <hr class="booking-sidebar__divider">

            <div class="form__group">
              <label class="form__label">Check-In</label>
              <input type="date" class="form__input" placeholder="Check-In Date">
            </div>
            <div class="form__group">
              <label class="form__label">Check-Out</label>
              <input type="date" class="form__input" placeholder="Check-Out Date">
            </div>
            <div class="form__group">
              <label class="form__label">Guests</label>
              <select class="form__select">
                ${Array.from({length: p.guests || 2}, (_, i) => `<option value="${i+1}">${i+1} Guest${i > 0 ? 's' : ''}</option>`).join('')}
              </select>
            </div>

            <a href="/contact?property=${encodeURIComponent(p.name)}" class="btn btn--primary" style="width: 100%; justify-content: center; font-size: 0.9rem; padding: 16px;">
              Reserve Your Stay
            </a>

            <div class="booking-sidebar__note">
              No charge yet — we'll confirm availability and details.
            </div>

            <hr class="booking-sidebar__divider">
            <p style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--color-charcoal-light); margin-bottom: 12px;">Also Available On</p>
            <div class="booking-sidebar__links">
              <a href="${p.airbnb}" class="booking-link" target="_blank" rel="noopener">
                <span><i class="fab fa-airbnb" style="margin-right: 8px; color: #FF5A5F;"></i> Book on Airbnb</span>
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a href="${p.vrbo}" class="booking-link" target="_blank" rel="noopener">
                <span><i class="fas fa-home" style="margin-right: 8px;"></i> Book on VRBO</span>
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>

            <hr class="booking-sidebar__divider">
            <div style="text-align: center;">
              <a href="/contact" style="font-size: 0.82rem; color: var(--color-tan); font-weight: 600; text-decoration: underline;">
                Have questions? Contact us directly
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Properties -->
      <div style="border-top: 1px solid var(--color-border); padding: 64px 0;">
        <div class="section-header" style="text-align: left; margin-bottom: 36px;">
          <div class="eyebrow">Browse More</div>
          <h2>Other Properties You May Like</h2>
        </div>
        <div class="properties-grid" style="grid-template-columns: repeat(3, 1fr);">
          <div class="property-card">
            <div class="property-card__img-wrap">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=70&auto=format&fit=crop" alt="Artist 108" class="property-card__img" loading="lazy" />
            </div>
            <div class="property-card__body">
              <div class="property-card__location">Artist Square · Downtown</div>
              <h3 class="property-card__title">Artist 108</h3>
              <div class="property-card__footer">
                <div class="property-card__price">From $165 <span>/ night</span></div>
                <a href="/properties/artist-108" class="btn btn--primary btn--sm">View</a>
              </div>
            </div>
          </div>
          <div class="property-card">
            <div class="property-card__img-wrap">
              <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=70&auto=format&fit=crop" alt="Artist 216" class="property-card__img" loading="lazy" />
            </div>
            <div class="property-card__body">
              <div class="property-card__location">Artist Square · Downtown</div>
              <h3 class="property-card__title">Artist 216</h3>
              <div class="property-card__footer">
                <div class="property-card__price">From $155 <span>/ night</span></div>
                <a href="/properties/artist-216" class="btn btn--primary btn--sm">View</a>
              </div>
            </div>
          </div>
          <div class="property-card">
            <div class="property-card__img-wrap">
              <img src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500&q=70&auto=format&fit=crop" alt="4BR Home" class="property-card__img" loading="lazy" />
            </div>
            <div class="property-card__body">
              <div class="property-card__location">Atlanta Metro</div>
              <h3 class="property-card__title">4-Bedroom Family Home</h3>
              <div class="property-card__footer">
                <div class="property-card__price">From $280 <span>/ night</span></div>
                <a href="/properties/family-home" class="btn btn--primary btn--sm">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
}
