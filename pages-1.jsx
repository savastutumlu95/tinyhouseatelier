// Tinyhouse Atelier — pages
const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;

// ============ HOMEPAGE ============
function Home() {
  return (
    <>
      <ExportBanner />
      <section className="hero">
        <div className="hero-video">
          <img src="public/media/photos/img-041.jpg" alt="Two Tinyhouse Atelier lodges on plot, foothills behind" />
          <div className="hero-placeholder-mark">FOLIO 26 · TINYHOUSE ATELIER</div>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">Folio 26 · Atelier collection</div>
          <h1 className="hero-title">Steel-framed <em>dwellings</em>, drawn to the millimetre.</h1>
          <div className="hero-bottom">
            <div className="hero-stat">
              <span className="hero-stat-num">7</span>
              <span className="hero-stat-label">Production Models</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">9 wks</span>
              <span className="hero-stat-label">Drawing → Delivery</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">12 yr</span>
              <span className="hero-stat-label">Structural warranty</span>
            </div>
            <div style={{display:'flex', gap:12}}>
              <a href="#/tiny-houses" className="btn btn-primary btn-arrow">Browse Models</a>
              <a href="#/contact" className="btn btn-arrow">Talk to us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="01" title="Drawn for a long life." meta="Atelier · UK + EU delivery" />
          <div className="grid-2">
            <div style={{padding:'8px 0 0 0'}}>
              <div className="th-tile" style={{cursor:'default'}}>
                <div className="img">
                  <img src="public/media/photos/img-007.jpg" alt="Family Lodge on stone base" />
                </div>
              </div>
            </div>
            <div style={{padding:'24px 0 0 32px', display:'flex', flexDirection:'column', gap:24, justifyContent:'center'}}>
              <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:34, lineHeight:1.25, color:'var(--ink-bright)', textWrap:'pretty', fontWeight:400}}>
                Every dwelling is engineered, fabricated and finished by the same team. One studio, one drawing set, one signature.
              </p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, paddingTop:24, borderTop:'1px solid var(--line)'}}>
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-mute)', marginBottom:8}}>Built once</div>
                  <div style={{color:'var(--ink)'}}>Engineered against EN 1993-1-3, snow- and seismic-loaded for the destination postcode.</div>
                </div>
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-mute)', marginBottom:8}}>Built for years</div>
                  <div style={{color:'var(--ink)'}}>Twelve-year structural warranty, transferable. Mill certificates with every shipment.</div>
                </div>
              </div>
              <a href="#/tiny-houses" className="btn btn-arrow" style={{alignSelf:'flex-start'}}>See the models</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="02" title="Why the atelier." meta="Trust · proof · provenance" />
          <div className="grid-3">
            {[
              ['One studio, end to end', 'Drawing, engineering and finish handled by the same team. No subcontracted hand-offs that lose detail along the way.'],
              ['Mill certificates', 'EN 10204 3.1 inspection certificates supplied per heat number, on every order. Insulation slabs ship with their EN 13162 batch.'],
              ['DDP to your site', 'Full customs clearance for UK and EU plots. Door-to-door handover in 9–14 weeks from order, including crane day.'],
              ['Engineered drawings', 'BIM model in Tekla or Revit on request. Snow- and seismic-loaded for the destination postcode. Calc sheets included.'],
              ['12-year warranty', 'On the structural frame, the galvanising and the chassis welds. Transferable to subsequent owners.'],
              ['Private pricing', 'We quote against your brief, your plot and your timeline. Talk to us and we will draw something that fits.'],
            ].map(([h, b], i) => (
              <div key={i} className="card" style={{padding:'40px 36px'}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-mute)', marginBottom:16}}>{String(i+1).padStart(2,'0')}</div>
                <h4 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:26, color:'var(--ink-bright)', fontWeight:400, marginBottom:12}}>{h}</h4>
                <p style={{color:'var(--ink-mute)', lineHeight:1.7}}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="03" title="From the field." meta="Customer reviews · verified" />
          <div className="grid-2" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
            {DATA.reviews.map((r, i) => (
              <div key={i} className="review">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <div className="review-text">“{r.text}”</div>
                <div className="review-author">
                  <span className="name">{r.name}</span>
                  <span className="meta">{r.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--paper-tint)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <div className="fig" style={{marginBottom:24}}>Fig. 04 · Closing</div>
          <h2 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'clamp(48px, 7vw, 84px)', color:'var(--ink-bright)', fontWeight:400, lineHeight:1, maxWidth:'14ch', margin:'0 auto 32px', textWrap:'balance'}}>
            Send us the brief. We&rsquo;ll send you a structure.
          </h2>
          <div style={{display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap'}}>
            <a href="#/contact" className="btn btn-primary btn-arrow">Contact the studio</a>
            <a href="public/media/tinyhouse-atelier-brochure.pdf" target="_blank" rel="noopener" className="btn btn-arrow">Download Brochure</a>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ TINY HOUSES LISTING — clean image + name grid ============
function TinyHousesList() {
  const items = DATA.tinyHouses;

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Tiny Houses'}]} />
      <section style={{padding:'48px 0 0'}}>
        <div className="container">
          <SectionHead fig="A.01" title="Tiny Houses." meta={`${items.length} models · in production`} />
          <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:24, lineHeight:1.5, color:'var(--ink-mute)', maxWidth:'56ch', marginBottom:48}}>
            Seven dwellings, drawn over the same wall section. Choose the silhouette — we will quote against your plot, your plan and your timeline.
          </p>
          <div className="th-grid">
            {items.map((t) => (
              <a key={t.id} href={`#/tiny-houses/${t.id}`} className="th-tile">
                <div className="img">
                  <img src={t.hero} alt={t.name} loading="lazy" />
                </div>
                <div className="name">
                  <h3>{t.name}</h3>
                  <span className="cta">View →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Home, TinyHousesList });
