export function propertiesPage(): string {
  const iconBed = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M2 4v16"/><path d="M22 4v16"/><path d="M2 8h20"/><path d="M2 16h20"/></svg>`
  const iconBath = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M4 12h16v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-5z"/><line x1="4" y1="12" x2="20" y2="12"/><path d="M6 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2"/></svg>`
  const iconUsers = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="width:13px;height:13px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`

  function card(id: string, badge: string|null, location: string, title: string, beds: number, baths: number, sleeps: number, price: number, img: string, cats: string) {
    return `
    <div class="property-card" data-category="${cats}">
      <div class="property-card__img-wrap">
        <img src="${img}" alt="${title}" class="property-card__img" loading="lazy" />
        ${badge ? `<span class="property-card__badge">${badge}</span>` : ''}
      </div>
      <div class="property-card__body">
        <div class="property-card__location" style="display:flex;align-items:center;gap:4px;">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--gold-dark)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:11px;height:11px;flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${location}
        </div>
        <h3 class="property-card__title">${title}</h3>
        <div class="property-card__meta">
          <span class="property-card__meta-item">${iconBed} ${beds} Bed${beds !== 1 ? 's' : ''}</span>
          <span class="property-card__meta-item">${iconBath} ${baths} Bath${baths !== 1 ? 's' : ''}</span>
          <span class="property-card__meta-item">${iconUsers} Sleeps ${sleeps}</span>
        </div>
        <div class="property-card__divider"></div>
        <div class="property-card__footer">
          <div class="property-card__price">$${price} <span>/ night</span></div>
          <a href="/properties/${id}" class="btn btn--dark-gold btn--sm">View Details</a>
        </div>
      </div>
    </div>`
  }

  return `
  <!-- PAGE HERO -->
  <div class="page-hero">
    <div class="page-hero__eyebrow"><div class="eyebrow" style="justify-content:center;">Our Listings</div></div>
    <h1>Atlanta Furnished Rentals</h1>
    <p>Hand-picked properties across Atlanta — each one clean, contemporary, and ready for your arrival.</p>
  </div>

  <!-- FILTER BAR -->
  <div style="background:var(--black-panel);border-bottom:1px solid var(--border-gold);padding:20px 0;">
    <div class="container">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <span style="font-size:0.62rem;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-dim);white-space:nowrap;">Filter:</span>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button onclick="filterProps('all')" class="filter-btn active" data-filter="all">All</button>
          <button onclick="filterProps('short')" class="filter-btn" data-filter="short">Short Stays</button>
          <button onclick="filterProps('corporate')" class="filter-btn" data-filter="corporate">Corporate</button>
          <button onclick="filterProps('group')" class="filter-btn" data-filter="group">Group / Family</button>
          <button onclick="filterProps('solo')" class="filter-btn" data-filter="solo">Solo / Executive</button>
        </div>
      </div>
    </div>
  </div>

  <style>
    .filter-btn {
      padding: 8px 20px;
      border: 1px solid var(--border-gold);
      border-radius: 2px;
      font-size: 0.65rem;
      font-weight: 800;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--text-dim);
      background: transparent;
      cursor: pointer;
      transition: all 0.25s;
      font-family: var(--font-sans);
    }
    .filter-btn:hover, .filter-btn.active {
      background: var(--gold);
      color: var(--black);
      border-color: var(--gold);
    }
  </style>

  <!-- PROPERTIES GRID -->
  <section style="background:var(--beige-light);padding:72px 0 100px;">
    <div class="container">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:24px;" id="propertiesGrid">

        ${card('artist-108','Featured','Artist Square · Downtown','Artist 108',2,2,6,165,
          'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=700&q=80&auto=format&fit=crop',
          'short corporate')}

        ${card('artist-216','Popular','Artist Square · Downtown','Artist 216',2,2,6,155,
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&auto=format&fit=crop',
          'short corporate')}

        ${card('midtown-2br',null,'Midtown Atlanta','Midtown 2BR Apartment',2,2,5,145,
          'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80&auto=format&fit=crop',
          'short corporate')}

        ${card('studio-suite',null,'Downtown / Old Fourth Ward','1-Bedroom Executive Suite',1,1,2,99,
          'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80&auto=format&fit=crop',
          'solo corporate short')}

        ${card('family-home','Groups','Atlanta Metro Area','4-Bedroom Family Home',4,3,10,280,
          'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=700&q=80&auto=format&fit=crop',
          'group')}

        <!-- Coming Soon -->
        <div class="property-card" data-category="all" style="border:1px dashed rgba(201,168,106,0.4);background:var(--white);">
          <div class="property-card__img-wrap" style="background:#F0EBE3;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <span style="font-size:0.6rem;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;color:var(--text-dim);">Coming Soon</span>
          </div>
          <div class="property-card__body">
            <div class="property-card__location">Atlanta, GA</div>
            <h3 class="property-card__title">New Property — 2026</h3>
            <p style="font-size:0.8rem;color:var(--text-dim);margin-bottom:16px;">We're always expanding our portfolio. Contact us to be notified when new properties become available.</p>
            <div class="property-card__divider"></div>
            <div class="property-card__footer">
              <span style="font-size:0.72rem;color:var(--text-dim);">Be the first to know</span>
              <a href="/contact" class="btn btn--outline-gold btn--sm">Notify Me</a>
            </div>
          </div>
        </div>
      </div>

      <div id="noResults" style="display:none;text-align:center;padding:80px 0;">
        <div style="color:var(--gold);margin-bottom:16px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
        <h3>No properties match that filter</h3>
        <p style="margin-bottom:24px;">Try a different category or contact us directly.</p>
        <a href="/contact" class="btn btn--gold">Contact Us</a>
      </div>
    </div>
  </section>

  <!-- INQUIRY STRIP -->
  <div style="background:var(--black-panel);border-top:1px solid var(--border-gold);padding:52px 0;">
    <div class="container">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:32px;flex-wrap:wrap;">
        <div>
          <h3 style="margin-bottom:8px;">Don't see exactly what you need?</h3>
          <p style="font-size:0.875rem;">We have additional properties and can source housing tailored to your requirements.</p>
        </div>
        <a href="/contact" class="btn btn--gold btn--lg" style="white-space:nowrap;">
          Reach Out to Us
        </a>
      </div>
    </div>
  </div>

  <script>
    function filterProps(category) {
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
