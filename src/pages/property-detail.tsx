const PROPERTIES: Record<string, any> = {
  'artist-108': {
    name: 'Artist 108', location: 'Artist Square Lofts · Downtown Atlanta, GA',
    beds: 2, baths: 2, guests: 6, price: 165, rating: 4.97, reviews: 84, badge: 'Featured',
    desc: `Artist 108 is a beautifully appointed loft-style apartment at Artist Square in the heart of Downtown Atlanta. With an open-concept floor plan, soaring ceilings, and contemporary furnishings, this space captures the spirit of modern Atlanta living.\n\nEvery detail has been thoughtfully considered — from the quality bedding and fully stocked kitchen to the curated finishes and clean, welcoming aesthetic. Whether you're here for a weekend event, a business trip, or an extended relocation, Artist 108 makes it easy to feel right at home.`,
    imgs: ['https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85&auto=format&fit=crop','https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80&auto=format&fit=crop'],
    amenities: ['High-Speed WiFi','Full Kitchen','In-Unit Washer/Dryer','Smart TV','Parking (1 spot)','Air Conditioning','Coffee Maker','Dishwasher','Microwave','Iron & Board','Premium Linens','Keyless Entry'],
    goodFor: ['Corporate travelers','Business stays','Weekend visitors','Couples','Event guests','Extended stays'],
    highlights: ['Steps from CNN Center','Close to Mercedes-Benz Stadium','MARTA accessible','Walking distance to dining & cafes'],
    airbnb: '#', vrbo: '#',
  },
  'artist-216': {
    name: 'Artist 216', location: 'Artist Square Lofts · Downtown Atlanta, GA',
    beds: 2, baths: 2, guests: 6, price: 155, rating: 4.95, reviews: 67, badge: 'Popular',
    desc: `Artist 216 is an upper-floor contemporary unit at Artist Square that brings together natural light, clean design, and comfortable modern living. This bright, airy apartment is ideal for those who want the energy of Downtown Atlanta without sacrificing peace and comfort.\n\nFeaturing two full bedrooms, two bathrooms, a fully equipped kitchen, and in-unit laundry, Artist 216 is built for stays of any length — whether you're visiting for leisure or settling in for a work project.`,
    imgs: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85&auto=format&fit=crop','https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop'],
    amenities: ['High-Speed WiFi','Full Kitchen','In-Unit Washer/Dryer','Smart TV','Air Conditioning','Coffee Maker','Dishwasher','Dedicated Workspace','Iron & Board','Toiletries','City Views','Keyless Entry'],
    goodFor: ['Corporate travelers','Families','Weekend visitors','Extended stays','Relocations','Traveling nurses'],
    highlights: ['Upper-floor unit with city views','Quiet & bright','Walkable to Downtown core','Close to State Farm Arena'],
    airbnb: '#', vrbo: '#',
  },
  'midtown-2br': {
    name: 'Midtown 2BR Apartment', location: 'Midtown Atlanta, GA',
    beds: 2, baths: 2, guests: 5, price: 145, rating: 4.92, reviews: 51, badge: null,
    desc: `Located in vibrant Midtown Atlanta, this stylish 2-bedroom apartment puts you steps from the city's most celebrated dining, arts venues, and Piedmont Park. Clean, modern, and move-in ready.\n\nWhether you're attending an event at the Fox Theatre, exploring the BeltLine, or working from one of Midtown's tech offices, this apartment is your ideal base.`,
    imgs: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85&auto=format&fit=crop','https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop'],
    amenities: ['High-Speed WiFi','Full Kitchen','Washer/Dryer','Smart TV','Air Conditioning','Coffee Maker','Dishwasher','Iron & Board','City Views','Keyless Entry','Toiletries','Dedicated Workspace'],
    goodFor: ['Couples','Corporate travelers','Weekend visitors','Event guests','Families','Extended stays'],
    highlights: ['Walk to Piedmont Park','Steps from Fox Theatre','MARTA Yellow Line access','Vibrant dining & nightlife'],
    airbnb: '#', vrbo: '#',
  },
  'studio-suite': {
    name: '1-Bedroom Executive Suite', location: 'Downtown / Old Fourth Ward, Atlanta GA',
    beds: 1, baths: 1, guests: 2, price: 99, rating: 4.91, reviews: 38, badge: null,
    desc: `The perfect solo stay. Our 1-Bedroom Executive Suite is designed for the focused professional or discerning solo traveler who wants quality without excess. Clean lines, thoughtful details, and all the necessities.\n\nWith a dedicated workspace, fast WiFi, and a fully equipped kitchen, this suite makes working from Atlanta as seamless as staying in your own home.`,
    imgs: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200&q=85&auto=format&fit=crop','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop'],
    amenities: ['High-Speed WiFi','Full Kitchen','Smart TV','Dedicated Workspace','Air Conditioning','Coffee Maker','Keyless Entry','Toiletries','Iron & Board','Washer/Dryer Access'],
    goodFor: ['Solo travelers','Business professionals','Traveling nurses','Consultants','Short weekend stays','Executives'],
    highlights: ['Quiet, focused environment','BeltLine access nearby','Fast public transit','Great local coffee & dining'],
    airbnb: '#', vrbo: '#',
  },
  'family-home': {
    name: '4-Bedroom Family Home', location: 'Atlanta Metro Area, GA',
    beds: 4, baths: 3, guests: 10, price: 280, rating: 4.98, reviews: 29, badge: 'Groups',
    desc: `Our largest property — a spacious, fully furnished home designed for families, teams, and group travel. Four private bedrooms, three full bathrooms, a generous living room, full kitchen, private yard, and driveway parking.\n\nWhether you're housing a project team, relocating a family, accommodating a film crew, or gathering for a major Atlanta event — this home provides the space and comfort everyone deserves.`,
    imgs: ['https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1200&q=85&auto=format&fit=crop','https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=700&q=80&auto=format&fit=crop','https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80&auto=format&fit=crop'],
    amenities: ['High-Speed WiFi','Full Kitchen','In-Unit Washer/Dryer','Multiple Smart TVs','Driveway Parking (3 cars)','Private Yard','Air Conditioning / Heat','BBQ Grill','Dishwasher','Coffee Maker','Premium Linens','Keyless Entry'],
    goodFor: ['Families','Film / production crews','Corporate teams','Insurance displacement','Event groups','Long-term relocations'],
    highlights: ['Private yard & outdoor space','Ample parking for 3+ vehicles','Ideal for groups of 8–10','Extended-stay discounts available'],
    airbnb: '#', vrbo: '#',
  },
}

const DEFAULT: any = {
  name: 'Property', location: 'Atlanta, GA', beds: 0, baths: 0, guests: 0,
  price: 0, rating: 0, reviews: 0, badge: null,
  desc: 'Please browse our available listings.',
  imgs: ['https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=85&auto=format&fit=crop'],
  amenities: [], goodFor: [], highlights: [], airbnb: '#', vrbo: '#',
}

const iconCheck = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:14px;height:14px;color:var(--gold);flex-shrink:0;"><polyline points="20 6 9 17 4 12"/></svg>`
const iconStar = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--gold)" style="width:12px;height:12px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
const iconPin = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
const iconBed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;"><path d="M2 4v16"/><path d="M22 4v16"/><path d="M2 8h20"/><path d="M2 16h20"/></svg>`
const iconBath = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;"><path d="M4 12h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5z"/><line x1="4" y1="12" x2="20" y2="12"/></svg>`
const iconUsers = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
const iconExt = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:12px;height:12px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
const iconChev = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:10px;height:10px;"><polyline points="9 18 15 12 9 6"/></svg>`

export function propertyDetailPage(id: string): string {
  const p = PROPERTIES[id] || DEFAULT
  const mainImg = p.imgs[0] || ''
  const thumb1 = p.imgs[1] || p.imgs[0]
  const thumb2 = p.imgs[2] || p.imgs[0]

  return `
  <div class="property-detail">
    <div class="container">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <a href="/">Home</a>
        <span>${iconChev}</span>
        <a href="/properties">Properties</a>
        <span>${iconChev}</span>
        <span style="color:var(--text-muted);">${p.name}</span>
      </div>

      <!-- Gallery -->
      <div class="property-gallery">
        <img src="${mainImg}" alt="${p.name}" class="property-gallery__main" />
        <img src="${thumb1}" alt="${p.name} view 2" class="property-gallery__thumb" loading="lazy" />
        <img src="${thumb2}" alt="${p.name} view 3" class="property-gallery__thumb" loading="lazy" />
      </div>

      <!-- Content + Sidebar -->
      <div class="property-detail__inner">
        <div class="property-detail__content">
          ${p.badge ? `<div style="display:inline-block;background:var(--gold-muted);border:1px solid var(--border-gold);border-radius:2px;padding:4px 14px;font-size:0.6rem;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;color:var(--gold);margin-bottom:12px;">${p.badge}</div>` : ''}
          <div class="property-detail__location">${iconPin} ${p.location}</div>
          <h1 class="property-detail__title">${p.name}</h1>

          <div class="property-detail__meta">
            <div class="property-detail__meta-item">${iconBed} ${p.beds} Bedroom${p.beds !== 1 ? 's' : ''}</div>
            <div class="property-detail__meta-item">${iconBath} ${p.baths} Bathroom${p.baths !== 1 ? 's' : ''}</div>
            <div class="property-detail__meta-item">${iconUsers} Sleeps ${p.guests}</div>
            ${p.rating ? `<div class="property-detail__meta-item">${iconStar} ${p.rating} &nbsp;(${p.reviews} reviews)</div>` : ''}
          </div>

          <div class="property-detail__desc">
            <h3>About This Space</h3>
            ${p.desc.split('\n\n').map((para: string) => `<p>${para}</p>`).join('')}
          </div>

          ${p.highlights?.length ? `
          <div style="margin:32px 0;">
            <h3 style="margin-bottom:16px;">Location Highlights</h3>
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${p.highlights.map((h: string) => `<div style="display:flex;align-items:center;gap:10px;font-size:0.85rem;color:var(--text-muted);">${iconCheck} ${h}</div>`).join('')}
            </div>
          </div>` : ''}

          <div class="property-detail__amenities">
            <h3>What's Included</h3>
            <div class="property-detail__amenities-grid">
              ${p.amenities.map((a: string) => `<div class="amenity-item">${iconCheck} ${a}</div>`).join('')}
            </div>
          </div>

          <div class="property-detail__good-for">
            <h3 style="margin-bottom:16px;">Perfect For</h3>
            <div class="good-for-grid">
              ${p.goodFor.map((g: string) => `<div class="good-for-item">${iconCheck} ${g}</div>`).join('')}
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div>
          <div class="booking-sidebar">
            <div class="booking-sidebar__price">$${p.price} <span>/ night</span></div>
            ${p.rating ? `<div class="booking-sidebar__rating">${iconStar} <strong style="color:var(--text-primary);">${p.rating}</strong> &nbsp;·&nbsp; ${p.reviews} reviews</div>` : ''}
            <hr class="booking-sidebar__divider">

            <div class="form__group">
              <label class="form__label">Check-In</label>
              <input type="date" class="form__input" />
            </div>
            <div class="form__group">
              <label class="form__label">Check-Out</label>
              <input type="date" class="form__input" />
            </div>
            <div class="form__group">
              <label class="form__label">Guests</label>
              <select class="form__select">
                ${Array.from({length: p.guests || 2}, (_: any, i: number) => `<option>${i+1} Guest${i > 0 ? 's' : ''}</option>`).join('')}
              </select>
            </div>

            <a href="/contact?property=${encodeURIComponent(p.name)}" class="btn btn--gold" style="width:100%;justify-content:center;padding:16px;">
              Reserve Your Stay
            </a>
            <div class="booking-sidebar__note">No charge yet — we'll confirm availability first.</div>

            <hr class="booking-sidebar__divider">
            <div style="font-size:0.6rem;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-dim);margin-bottom:12px;">Also Available On</div>
            <a href="${p.airbnb}" class="booking-link" target="_blank" rel="noopener">
              <span style="display:flex;align-items:center;gap:8px;">
                <svg style="width:14px;height:14px;fill:none;stroke:#FF5A5F;stroke-width:1.5;" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                Book on Airbnb
              </span>
              ${iconExt}
            </a>
            <a href="${p.vrbo}" class="booking-link" target="_blank" rel="noopener">
              <span style="display:flex;align-items:center;gap:8px;">
                <svg style="width:14px;height:14px;fill:none;stroke:var(--gold);stroke-width:1.5;" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Book on VRBO
              </span>
              ${iconExt}
            </a>

            <hr class="booking-sidebar__divider">
            <div style="text-align:center;">
              <a href="/contact" style="font-size:0.75rem;color:var(--gold);font-weight:600;text-decoration:underline;text-underline-offset:3px;">
                Have questions? Contact us directly
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Similar Properties -->
      <div style="border-top:1px solid var(--border-gold);padding:64px 0;">
        <div style="text-align:left;margin-bottom:36px;">
          <div class="eyebrow" style="margin-bottom:16px;">Browse More</div>
          <h2>Other Properties You May Like</h2>
        </div>
        <div class="properties__grid">
          <div class="property-card"><div class="property-card__img-wrap"><img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&q=70&auto=format&fit=crop" alt="Artist 108" class="property-card__img" loading="lazy"/></div><div class="property-card__body"><div class="property-card__location">Artist Square · Downtown</div><h3 class="property-card__title">Artist 108</h3><div class="property-card__divider"></div><div class="property-card__footer"><div class="property-card__price">$165 <span>/ night</span></div><a href="/properties/artist-108" class="btn btn--dark-gold btn--sm">View</a></div></div></div>
          <div class="property-card"><div class="property-card__img-wrap"><img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=70&auto=format&fit=crop" alt="Artist 216" class="property-card__img" loading="lazy"/></div><div class="property-card__body"><div class="property-card__location">Artist Square · Downtown</div><h3 class="property-card__title">Artist 216</h3><div class="property-card__divider"></div><div class="property-card__footer"><div class="property-card__price">$155 <span>/ night</span></div><a href="/properties/artist-216" class="btn btn--dark-gold btn--sm">View</a></div></div></div>
          <div class="property-card"><div class="property-card__img-wrap"><img src="https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=500&q=70&auto=format&fit=crop" alt="4BR Home" class="property-card__img" loading="lazy"/></div><div class="property-card__body"><div class="property-card__location">Atlanta Metro</div><h3 class="property-card__title">4-Bedroom Family Home</h3><div class="property-card__divider"></div><div class="property-card__footer"><div class="property-card__price">$280 <span>/ night</span></div><a href="/properties/family-home" class="btn btn--dark-gold btn--sm">View</a></div></div></div>
        </div>
      </div>
    </div>
  </div>
`
}
