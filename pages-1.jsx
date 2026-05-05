// Tinyhouse Atelier — pages
const { useState: useStateP, useEffect: useEffectP, useMemo: useMemoP } = React;

// ============ HOMEPAGE ============
function Home() {
  const { currency } = useApp();
  return (
    <>
      <ExportBanner />
      <section className="hero">
        <div className="hero-video">
          <img src="public/media/photos/img-041.jpg" alt="Voyager tiny houses on plot, foothills behind" />
          <div className="hero-placeholder-mark">FIELD · VOYAGER PAIR · MUĞLA</div>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">Folio 26 · Atelier collection</div>
          <h1 className="hero-title">Steel-framed <em>dwellings</em>, drawn to the millimetre.</h1>
          <div className="hero-bottom">
            <div className="hero-stat">
              <span className="hero-stat-num">6</span>
              <span className="hero-stat-label">Production Models</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">140 mm</span>
              <span className="hero-stat-label">LGSF + 130 mm Rockwool</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">9 wks</span>
              <span className="hero-stat-label">Drawing → Delivery</span>
            </div>
            <div style={{display:'flex', gap:12}}>
              <a href="#/tiny-houses" className="btn btn-primary btn-arrow">Browse Models</a>
              <a href="#/quote" className="btn btn-arrow">Request Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="01" title="Construction, in motion." meta="Atelier process · LGSF roll-formed in Türkoğlu" />
          <div className="grid-2">
            <div className="video-embed" style={{aspectRatio:'4/3', border:'none'}}>
              <video src="public/media/videos/video-01.mp4" autoPlay muted loop playsInline poster="public/media/photos/img-037.jpg"></video>
              <div className="video-embed-label">STOCK · S350GD+Z PROFILES · 0:19</div>
            </div>
            <div style={{padding:'56px 48px', display:'flex', flexDirection:'column', gap:24, justifyContent:'center'}}>
              <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:32, lineHeight:1.25, color:'var(--silver-bright)', textWrap:'pretty'}}>
                Every dwelling begins as a 1.5 mm steel coil and ends as a structure that will outlast its certificate.
              </p>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, paddingTop:24, borderTop:'1px solid var(--line)'}}>
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:8}}>Frame Steel</div>
                  <div style={{color:'var(--silver-bright)'}}>140 mm light-gauge steel frame in S350GD+Z275 strip. Roll-formed, hot-dip galvanised in the same coil.</div>
                </div>
                <div>
                  <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:8}}>Wall build-up</div>
                  <div style={{color:'var(--silver-bright)'}}>130 mm Rockwool · 12 mm Guardex × 2 · vapour membrane · aluminium-foil cladding · decorative plaster.</div>
                </div>
              </div>
              <a href="#/trust" className="btn btn-arrow" style={{alignSelf:'flex-start'}}>See the wall section</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="02" title="The collection." meta={`${DATA.tinyHouses.length} models · build slots from Q3`} />
          <div className="grid-3">
            {DATA.tinyHouses.map(t => (
              <a key={t.id} href={`#/tiny-houses/${t.id}`} className="card">
                <div className="card-img">
                  <img src={t.hero} alt={`${t.name} — ${t.sub}`} loading="lazy" />
                  <span className="card-img-label">{t.name.toUpperCase()}</span>
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span>{t.length} × {t.width}</span>
                    <span>Sleeps {t.sleeps}</span>
                  </div>
                  <div className="card-title">{t.name}</div>
                  <div className="card-sub">{t.sub}</div>
                  <div className="card-foot">
                    <div className="card-price">{fmtPrice(currency === 'GBP' ? t.priceGBP : t.priceEUR, currency)} <small>FROM · EX VAT</small></div>
                    <div className="card-cta">View →</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--panel)'}}>
        <div className="container">
          <SectionHead fig="03" title="Frame systems, ex-stock." meta="LGSF · Rockwool · Chassis · Cladding" />
          <div className="grid-4">
            {DATA.steel.slice(0, 4).map(s => (
              <a key={s.id} href={`#/materials/${s.id}`} className="card">
                <div className="card-img">
                  <img src={s.hero} alt={s.name} loading="lazy" />
                  <span className="card-img-label">{s.spec}</span>
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span>{s.grade.split(' /')[0]}</span>
                    <span>{s.stock.split('·')[0].trim()}</span>
                  </div>
                  <div className="card-title" style={{fontSize:22}}>{s.name}</div>
                  <div className="card-foot">
                    <div className="card-price">{fmtPrice(currency === 'GBP' ? s.priceGBP : s.priceEUR, currency)} <small>{s.unit}</small></div>
                    <div className="card-cta">→</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div style={{textAlign:'center', marginTop:48}}>
            <a href="#/materials" className="btn btn-arrow">All Frame Systems</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="04" title="Why the atelier." meta="Trust · proof · provenance" />
          <div className="grid-3">
            {[
              ['LGSF, end to end', 'Every frame is roll-formed in our atelier from S350GD+Z275 strip, hot-dip galvanised in the same coil. No subcontracted welding.'],
              ['Mill certificates', 'EN 10204 3.1 inspection certificates supplied per heat number, on every order. Rockwool slabs ship with their EN 13162 batch.'],
              ['DDP to your site', 'Full customs clearance for UK and EU plots. Manchester or Rotterdam handovers in 9–14 days from order, including crane day.'],
              ['Engineered drawings', 'BIM model in Tekla or Revit on request. Snow- and seismic-loaded for the destination postcode. Calc sheets included.'],
              ['12-year warranty', 'On the steel frame, the galvanising and the chassis welds. Transferable to subsequent owners.'],
              ['Trade pricing', 'Volume discounts from the third unit. Net-30 terms for verified construction accounts.'],
            ].map(([h, b], i) => (
              <div key={i} className="card" style={{padding:'40px 36px'}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:16}}>{String(i+1).padStart(2,'0')}</div>
                <h4 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:26, color:'var(--silver-bright)', fontWeight:400, marginBottom:12}}>{h}</h4>
                <p style={{color:'var(--silver-mute)', lineHeight:1.6}}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead fig="05" title="From the field." meta="Customer reviews · verified" />
          <div className="grid-2" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
            {DATA.reviews.map((r, i) => (
              <div key={i} className="review">
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <div className="review-text">"{r.text}"</div>
                <div className="review-author">
                  <span className="name">{r.name}</span>
                  <span className="meta">{r.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--panel)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <div className="fig" style={{marginBottom:24}}>Fig. 06 · Closing</div>
          <h2 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:80, color:'var(--silver-bright)', fontWeight:400, lineHeight:1, maxWidth:'14ch', margin:'0 auto 32px', textWrap:'balance'}}>
            Send us the brief. We'll send you a structure.
          </h2>
          <div style={{display:'flex', gap:16, justifyContent:'center'}}>
            <a href="#/quote" className="btn btn-primary btn-arrow">Request Quote</a>
            <a href="#/trade" className="btn btn-arrow">Open Trade Account</a>
          </div>
        </div>
      </section>
    </>
  );
}

// ============ TINY HOUSES LISTING ============
function TinyHousesList() {
  const { currency } = useApp();
  const [sort, setSort] = useStateP('default');
  const items = useMemoP(() => {
    const arr = [...DATA.tinyHouses];
    if (sort === 'price-asc') arr.sort((a,b) => a.priceGBP - b.priceGBP);
    if (sort === 'price-desc') arr.sort((a,b) => b.priceGBP - a.priceGBP);
    if (sort === 'size') arr.sort((a,b) => parseFloat(b.length) - parseFloat(a.length));
    return arr;
  }, [sort]);

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Tiny Houses'}]} />
      <section style={{padding:'64px 0 0'}}>
        <div className="container">
          <SectionHead fig="A.01" title="Tiny Houses." meta={`${items.length} models · all in production`} />
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:48, paddingBottom:24, borderBottom:'1px solid var(--line)'}}>
            <div style={{display:'flex', gap:8}}>
              {['All', 'Towable', 'Permanent', 'A-Frame', 'Custom'].map((c, i) => (
                <button key={c} className={`chip ${i===0?'active':''}`}>{c}</button>
              ))}
            </div>
            <div style={{display:'flex', alignItems:'center', gap:16}}>
              <span style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)'}}>Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} style={{background:'var(--panel)', border:'1px solid var(--line)', color:'var(--silver-bright)', padding:'8px 12px', fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase'}}>
                <option value="default">Default</option>
                <option value="price-asc">Price · Low → High</option>
                <option value="price-desc">Price · High → Low</option>
                <option value="size">Size · Largest first</option>
              </select>
            </div>
          </div>
          <div>
            {items.map((t) => (
              <div key={t.id} className="model-row">
                <a href={`#/tiny-houses/${t.id}`} className="img">
                  <img src={t.hero} alt={`${t.name} — ${t.sub}`} loading="lazy" />
                  <span className="img-cap">{t.name.toUpperCase()} · {t.length} × {t.width}</span>
                </a>
                <div className="info">
                  <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)'}}>Model {t.id.replace('th-','').toUpperCase()}</div>
                  <h3>{t.name}</h3>
                  <p style={{color:'var(--silver-mute)', maxWidth:'52ch'}}>{t.sub} · {t.cladding} over {t.frame}, insulated with {t.insulation}.</p>
                  <dl className="specs">
                    <div><dt>Length</dt><dd>{t.length}</dd></div>
                    <div><dt>Width</dt><dd>{t.width}</dd></div>
                    <div><dt>Sleeps</dt><dd>{t.sleeps}</dd></div>
                    <div><dt>Area</dt><dd>{t.area}</dd></div>
                  </dl>
                  <div className="actions">
                    <div className="price" style={{flex:1, alignSelf:'center'}}>{fmtPrice(currency === 'GBP' ? t.priceGBP : t.priceEUR, currency)} <small>FROM · EX VAT</small></div>
                    <a href={`#/tiny-houses/${t.id}`} className="btn btn-ghost btn-arrow">Specs</a>
                    <a href={`#/tiny-houses/${t.id}`} className="btn btn-arrow">Configure</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { Home, TinyHousesList });
