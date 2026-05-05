// Tinyhouse Atelier — pages 2 (PDP, materials, etc.)

// ============ TINY HOUSE PDP ============
function TinyHousePDP({ id }) {
  const { currency, addToCart } = useApp();
  const t = DATA.tinyHouses.find(x => x.id === id) || DATA.tinyHouses[0];
  const [thumb, setThumb] = useStateP(0);
  const [qty, setQty] = useStateP(1);
  const images = t.images || [t.hero];
  const captions = t.thumbCaptions || images.map((_, i) => `View ${i+1}`);

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Tiny Houses', href:'#/tiny-houses'}, {label:t.name}]} />
      <div className="container">
        <div className="pdp">
          <div>
            <div className="pdp-gallery">
              <div className="pdp-thumbs">
                {images.map((src, i) => (
                  <div key={i} className={`pdp-thumb ${i === thumb ? 'active' : ''}`} onClick={() => setThumb(i)}>
                    <img src={src} alt={captions[i] || ''} loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="pdp-main-img">
                <img src={images[thumb]} alt={`${t.name} — ${captions[thumb] || ''}`} />
                <span className="pdp-main-img-label">{t.name.toUpperCase()} · {captions[thumb]}</span>
              </div>
            </div>
            {t.pdf && (
              <a href={t.pdf} target="_blank" rel="noopener" className="pdf-download">
                <div className="pdf-icon">PDF</div>
                <div className="pdf-meta">
                  <span className="label">Download · spec book</span>
                  <span className="name">{t.pdfLabel || `${t.name} model book`}</span>
                </div>
                <span className="pdf-cta">Open ↗</span>
              </a>
            )}
            <div style={{marginTop:48}}>
              <div className="fig" style={{marginBottom:16}}>Fig. B.01 · Specification</div>
              <table className="spec-table">
                <tbody>
                  <tr><td>Overall length</td><td>{t.length}</td></tr>
                  <tr><td>Overall width</td><td>{t.width}</td></tr>
                  <tr><td>Overall height</td><td>{t.height}</td></tr>
                  <tr><td>Internal area</td><td>{t.area}</td></tr>
                  <tr><td>Sleeping capacity</td><td>{t.sleeps}</td></tr>
                  <tr><td>Total weight (dry)</td><td>{t.weight}</td></tr>
                  <tr><td>Frame</td><td>{t.frame}</td></tr>
                  <tr><td>Insulation</td><td>{t.insulation}</td></tr>
                  <tr><td>External cladding</td><td>{t.cladding}</td></tr>
                  <tr><td>Roofing</td><td>{t.roof}</td></tr>
                  <tr><td>Glazing</td><td>Double, U=1.1 W/m²K · argon-filled (triple optional)</td></tr>
                  <tr><td>Heating</td><td>Inverter split A/C · 9,000 BTU</td></tr>
                  <tr><td>Electrical</td><td>UK 230 V or EU CEE · 32 A inlet</td></tr>
                  <tr><td>Lead time</td><td>9–14 weeks</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="pdp-info">
            <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:14}}>Atelier Collection · 2026</div>
            <h1>{t.name}</h1>
            <p style={{color:'var(--silver-mute)', fontSize:15, lineHeight:1.6, marginBottom:24}}>{t.sub}</p>
            <div className="sku">
              <span>SKU · {t.id.toUpperCase()}</span>
              <span>{t.frame.split(' ').slice(0, 2).join(' ')}</span>
              <span>EN 1090 / EN 1993-1-3</span>
            </div>
            <div className="pdp-price">
              <span className="num">{fmtPrice(currency === 'GBP' ? t.priceGBP : t.priceEUR, currency)}</span>
              <span className="unit">From · ex VAT · DDP UK</span>
            </div>
            <div className="pdp-desc">
              {t.story}
            </div>

            <div className="pdp-buy">
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty-1))}>−</button>
                <input type="text" value={qty} readOnly />
                <button onClick={() => setQty(qty+1)}>+</button>
              </div>
              <button className="btn btn-primary btn-arrow" style={{flex:1, justifyContent:'center'}} onClick={() => addToCart({ ...t, qty })}>Add to Basket</button>
              <a href="#/quote" className="btn btn-ghost">Quote</a>
            </div>

            <div style={{marginTop:24}}>
              <div className="fig" style={{marginBottom:14}}>Fig. B.02 · Volume pricing</div>
              <div className="bulk">
                <div className="bulk-head">
                  <span>Quantity</span><span>Unit price</span><span>You save</span><span>Total</span>
                </div>
                {[
                  [1, 1, 0],
                  [2, 0.96, 0.04],
                  [3, 0.92, 0.08],
                  [5, 0.87, 0.13],
                ].map(([q, mult, save]) => {
                  const unit = Math.round((currency === 'GBP' ? t.priceGBP : t.priceEUR) * mult);
                  return (
                    <div key={q} className="bulk-row">
                      <span>{q} unit{q>1?'s':''}</span>
                      <span>{fmtPrice(unit, currency)}</span>
                      <span className="save">{save ? `−${Math.round(save*100)}%` : '—'}</span>
                      <span>{fmtPrice(unit*q, currency)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{marginTop:32}}>
              <div className="fig" style={{marginBottom:14}}>Fig. B.03 · Delivery</div>
              <div className="delivery-info">
                <div>
                  <h4>UK</h4>
                  <ul>
                    <li><span>Lead time</span><span>9–11 weeks</span></li>
                    <li><span>Port</span><span>Felixstowe / Tilbury</span></li>
                    <li><span>Onward</span><span>Crane + tilt-bed lorry</span></li>
                    <li><span>Customs</span><span>UKCA · DDP available</span></li>
                  </ul>
                </div>
                <div>
                  <h4>EU</h4>
                  <ul>
                    <li><span>Lead time</span><span>8–10 weeks</span></li>
                    <li><span>Port</span><span>Rotterdam · Hamburg · Genoa</span></li>
                    <li><span>Onward</span><span>Direct to plot, EU-wide</span></li>
                    <li><span>Customs</span><span>CE · AEO-cleared</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section" style={{borderBottom:'none'}}>
          <SectionHead fig="B.04" title="Insulation, in detail." meta="Wall section · annotated by our atelier" />
          <div className="grid-2">
            <div className="video-embed">
              <img src="public/media/photos/img-002.jpg" alt="Wall section diagram — 140 mm LGSF, 130 mm Rockwool, Guardex, decorative plaster" />
              <div className="video-embed-label">WALL · 140 LGSF / 130 ROCKWOOL / 12 GUARDEX</div>
            </div>
            <div className="video-embed">
              <img src="public/media/photos/img-001.jpg" alt="Cut-section physical wall sample" />
              <div className="video-embed-label">SAMPLE · ALU FOIL + PLASTER FINISH</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ============ MATERIALS CATEGORY (left sidebar) ============
function MaterialsList() {
  const { currency, addToCart } = useApp();
  const [filters, setFilters] = useStateP({ types: [], grades: [], avail: [] });
  const toggle = (key, val) => setFilters(f => ({ ...f, [key]: f[key].includes(val) ? f[key].filter(x => x !== val) : [...f[key], val] }));
  const items = DATA.steel; // filters are demo-only

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Frame Systems'}]} />
      <div className="container">
        <SectionHead fig="C.01" title="Frame Systems." meta={`${items.length} products · ex-stock İstanbul / Manchester`} />
        <div className="with-sidebar">
          <aside className="sidebar">
            <h4>Product Type</h4>
            <ul className="filter-list">
              {['LGSF C-Section', 'LGSF Truss', 'Trailer Chassis', 'Insulation', 'Roofing', 'Cladding', 'BIM / Design'].map((m, i) => (
                <li key={m}><label><input type="checkbox" checked={filters.types.includes(m)} onChange={() => toggle('types', m)} />{m}<span className="count">{[2,1,1,1,1,2,1][i]}</span></label></li>
              ))}
            </ul>
            <h4>Grade / Standard</h4>
            <ul className="filter-list">
              {['S350GD+Z275', 'S280GD+AZ150', 'EN 1090 EXC2', 'EN 13162 (Rockwool)', 'EN 1993-1-3'].map(g => (
                <li key={g}><label><input type="checkbox" checked={filters.grades.includes(g)} onChange={() => toggle('grades', g)} />{g}</label></li>
              ))}
            </ul>
            <h4>Availability</h4>
            <ul className="filter-list">
              {['In stock', 'Roll-to-order (2 wk)', 'On request'].map(a => (
                <li key={a}><label><input type="checkbox" checked={filters.avail.includes(a)} onChange={() => toggle('avail', a)} />{a}</label></li>
              ))}
            </ul>
            <h4>Length / Size</h4>
            <div className="range-row"><input placeholder="min" /><span>—</span><input placeholder="max" /></div>
            <h4>Price (per unit)</h4>
            <div className="range-row"><input placeholder="£10" /><span>—</span><input placeholder="£500" /></div>
            <button className="btn btn-ghost" style={{width:'100%', justifyContent:'center', marginTop:24}}>Apply Filters</button>
          </aside>

          <div>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:24, paddingBottom:18, borderBottom:'1px solid var(--line)'}}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)'}}>{items.length} results · sorted by stock</div>
              <div style={{display:'flex', gap:8}}>
                <button className="chip active">Grid</button>
                <button className="chip">Table</button>
              </div>
            </div>
            <div className="grid-2" style={{gridTemplateColumns:'repeat(2, 1fr)'}}>
              {items.map(s => (
                <div key={s.id} className="card">
                  <a href={`#/materials/${s.id}`} className="card-img" style={{display:'block'}}>
                    <img src={s.hero} alt={s.name} loading="lazy" />
                    <span className="card-img-label">{s.spec}</span>
                  </a>
                  <div className="card-body">
                    <div className="card-meta">
                      <span>{s.grade.split(' /')[0]}</span>
                      <span style={{color:'var(--warning)'}}>● {s.stock.split('·')[0].trim()}</span>
                    </div>
                    <a href={`#/materials/${s.id}`}><div className="card-title" style={{fontSize:24}}>{s.name}</div></a>
                    <table className="spec-table" style={{margin:'12px 0'}}>
                      <tbody>
                        <tr><td>Yield</td><td>{s.yield}</td></tr>
                        <tr><td>Tensile</td><td>{s.tensile}</td></tr>
                        <tr><td>Length</td><td>{s.length}</td></tr>
                        <tr><td>Weight</td><td>{s.weight}</td></tr>
                      </tbody>
                    </table>
                    <div className="card-foot">
                      <div className="card-price">{fmtPrice(currency === 'GBP' ? s.priceGBP : s.priceEUR, currency)} <small>{s.unit}</small></div>
                      <button className="card-cta" onClick={() => addToCart({ ...s, qty: 1 })}>+ Basket</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ============ MATERIAL PDP ============
function MaterialPDP({ id }) {
  const { currency, addToCart } = useApp();
  const s = DATA.steel.find(x => x.id === id) || DATA.steel[0];
  const [qty, setQty] = useStateP(10);

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Frame Systems', href:'#/materials'}, {label:s.name}]} />
      <div className="container">
        <div className="pdp">
          <div>
            <div className="pdp-main-img">
              <img src={s.hero} alt={`${s.name} — ${s.spec}`} />
              <span className="pdp-main-img-label">{s.name.toUpperCase()} · {s.spec}</span>
            </div>
            {s.images && s.images.length > 1 && (
              <div className="thumb-row">
                {s.images.slice(0, 4).map((src, i) => (
                  <div key={i}><img src={src} alt={`${s.name} view ${i+1}`} loading="lazy" /></div>
                ))}
              </div>
            )}
            <div style={{marginTop:32}}>
              <div className="fig" style={{marginBottom:14}}>Fig. D.01 · Mechanical properties</div>
              <table className="spec-table">
                <tbody>
                  <tr><td>Designation</td><td>{s.spec}</td></tr>
                  <tr><td>Grade</td><td>{s.grade}</td></tr>
                  <tr><td>Yield strength (R<sub>eH</sub>)</td><td>{s.yield}</td></tr>
                  <tr><td>Tensile strength (R<sub>m</sub>)</td><td>{s.tensile}</td></tr>
                  <tr><td>Elongation A<sub>5</sub></td><td>≥ 22 %</td></tr>
                  <tr><td>Length options</td><td>{s.length}</td></tr>
                  <tr><td>Unit weight</td><td>{s.weight}</td></tr>
                  <tr><td>Surface finish</td><td>Mill / Galvanised / Primed</td></tr>
                  <tr><td>Standard</td><td>{s.grade.split(' / ')[1] || s.grade}</td></tr>
                  <tr><td>Mill certificate</td><td>EN 10204 · 3.1</td></tr>
                </tbody>
              </table>
            </div>
            <div style={{marginTop:32}}>
              <div className="fig" style={{marginBottom:14}}>Fig. D.02 · Application notes</div>
              <p style={{color:'var(--silver-bright)', lineHeight:1.7, fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:18}}>
                {s.story}
              </p>
            </div>
          </div>

          <div className="pdp-info">
            <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:14}}>Structural · Hot-rolled</div>
            <h1 style={{fontSize:48}}>{s.name}</h1>
            <p style={{color:'var(--silver-mute)', fontSize:14, marginBottom:24}}>{s.spec} · {s.grade}</p>
            <div className="sku">
              <span>SKU · {s.id.toUpperCase()}</span>
              <span style={{color:'var(--warning)'}}>● {s.stock}</span>
            </div>
            <div className="pdp-price">
              <span className="num">{fmtPrice(currency === 'GBP' ? s.priceGBP : s.priceEUR, currency)}</span>
              <span className="unit">{s.unit} · ex VAT</span>
            </div>

            <div className="pdp-buy">
              <div className="qty">
                <button onClick={() => setQty(Math.max(1, qty-1))}>−</button>
                <input type="text" value={qty} readOnly />
                <button onClick={() => setQty(qty+1)}>+</button>
              </div>
              <button className="btn btn-primary btn-arrow" style={{flex:1, justifyContent:'center'}} onClick={() => addToCart({ ...s, qty })}>Add to Basket</button>
              <a href="#/quote" className="btn btn-ghost">Quote</a>
            </div>

            <div style={{marginTop:8}}>
              <div className="fig" style={{marginBottom:14}}>Fig. D.03 · Volume pricing</div>
              <div className="bulk">
                <div className="bulk-head"><span>From</span><span>Unit</span><span>Save</span><span>Total</span></div>
                {[
                  [1, 1, 0], [10, 0.95, 0.05], [50, 0.88, 0.12], [100, 0.82, 0.18],
                ].map(([q, mult, save]) => {
                  const unit = Math.round((currency === 'GBP' ? s.priceGBP : s.priceEUR) * mult);
                  return (
                    <div key={q} className="bulk-row">
                      <span>{q}+</span><span>{fmtPrice(unit, currency)}</span>
                      <span className="save">{save ? `−${Math.round(save*100)}%` : '—'}</span>
                      <span>{fmtPrice(unit*q, currency)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{marginTop:32}}>
              <div className="fig" style={{marginBottom:14}}>Fig. D.04 · Delivery & weight</div>
              <div className="delivery-info">
                <div>
                  <h4>UK</h4>
                  <ul>
                    <li><span>Lead time</span><span>5–10 working days</span></li>
                    <li><span>Min order</span><span>£500 ex VAT</span></li>
                    <li><span>Carrier</span><span>Pallet / Hiab</span></li>
                  </ul>
                </div>
                <div>
                  <h4>EU</h4>
                  <ul>
                    <li><span>Lead time</span><span>3–7 working days</span></li>
                    <li><span>Min order</span><span>€500 ex VAT</span></li>
                    <li><span>Customs</span><span>EUR.1 · DDP</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { TinyHousePDP, MaterialsList, MaterialPDP });
