// Tinyhouse Atelier — pages 3 (Quote, Trade, Compare, Trust, Gallery)

// ============ QUOTE REQUEST ============
function Quote() {
  const { currency } = useApp();
  const [submitted, setSubmitted] = useStateP(false);
  const [form, setForm] = useStateP({ kind: 'tiny-house', region: 'UK', name: '', co: '', email: '', phone: '', vat: '', model: '', qty: 1, dest: '', date: '', notes: '' });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="container" style={{padding:'120px 0', textAlign:'center'}}>
        <div className="fig" style={{marginBottom:20}}>Fig. E.01 · Acknowledged</div>
        <h1 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:72, color:'var(--silver-bright)', fontWeight:400, marginBottom:24, lineHeight:1}}>Quote received.</h1>
        <p style={{color:'var(--silver-mute)', fontSize:16, maxWidth:'48ch', margin:'0 auto 40px'}}>Reference <span style={{color:'var(--silver-bright)', fontFamily:'var(--font-mono)'}}>QT-2026-{Math.floor(Math.random()*9000+1000)}</span>. A drafted quote with mill certificates and DDP logistics will reach you within 24 working hours.</p>
        <a href="#/" className="btn btn-arrow">Back to atelier</a>
      </div>
    );
  }

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Request a Quote'}]} />
      <div className="container">
        <SectionHead fig="E.01" title="Request a quote." meta="Reply within 24 working hours" />
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:64, paddingBottom:96}}>
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{display:'flex', flexDirection:'column', gap:32}}>
            <div>
              <div className="fig" style={{marginBottom:16}}>01 · What you need</div>
              <div style={{display:'flex', gap:8, marginBottom:24}}>
                {[['tiny-house','Tiny House'],['steel','Structural Steel'],['kit','Frame-only Kit'],['mixed','Mixed']].map(([v,l]) => (
                  <button type="button" key={v} className={`chip ${form.kind === v ? 'active' : ''}`} onClick={() => upd('kind', v)}>{l}</button>
                ))}
              </div>
              <div style={{display:'flex', gap:8}}>
                {['UK','EU','Other'].map(r => (
                  <button type="button" key={r} className={`chip ${form.region === r ? 'active' : ''}`} onClick={() => upd('region', r)}>Ship to {r}</button>
                ))}
              </div>
            </div>

            <div>
              <div className="fig" style={{marginBottom:16}}>02 · Specification</div>
              <div className="form-grid">
                <div className="field"><label>Model / Spec</label><input value={form.model} onChange={(e) => upd('model', e.target.value)} placeholder="e.g. Serenity, Aurora A-Frame, or LGSF C140 × 6m" /></div>
                <div className="field"><label>Quantity</label><input type="number" value={form.qty} onChange={(e) => upd('qty', e.target.value)} /></div>
                <div className="field full"><label>Destination postcode / city</label><input value={form.dest} onChange={(e) => upd('dest', e.target.value)} placeholder="SW1A 1AA · Rotterdam · etc." /></div>
                <div className="field"><label>Required by</label><input type="date" value={form.date} onChange={(e) => upd('date', e.target.value)} /></div>
                <div className="field"><label>Currency</label><select defaultValue={currency}><option>GBP</option><option>EUR</option></select></div>
                <div className="field full"><label>Notes / drawings</label><textarea value={form.notes} onChange={(e) => upd('notes', e.target.value)} placeholder="Anything we should know — site access, crane availability, surface treatment, etc." /></div>
              </div>
            </div>

            <div>
              <div className="fig" style={{marginBottom:16}}>03 · You</div>
              <div className="form-grid">
                <div className="field"><label>Name</label><input required value={form.name} onChange={(e) => upd('name', e.target.value)} /></div>
                <div className="field"><label>Company</label><input value={form.co} onChange={(e) => upd('co', e.target.value)} /></div>
                <div className="field"><label>Email</label><input required type="email" value={form.email} onChange={(e) => upd('email', e.target.value)} /></div>
                <div className="field"><label>Phone</label><input value={form.phone} onChange={(e) => upd('phone', e.target.value)} /></div>
                <div className="field full"><label>VAT / EORI number (for export)</label><input value={form.vat} onChange={(e) => upd('vat', e.target.value)} placeholder="GB123456789 · Optional but speeds clearance" /></div>
              </div>
            </div>

            <div style={{display:'flex', gap:14, paddingTop:24, borderTop:'1px solid var(--line)'}}>
              <button type="submit" className="btn btn-primary btn-arrow">Submit Quote Request</button>
              <button type="reset" className="btn btn-ghost" onClick={() => setForm({ kind:'tiny-house', region:'UK', name:'', co:'', email:'', phone:'', vat:'', model:'', qty:1, dest:'', date:'', notes:'' })}>Reset</button>
            </div>
          </form>

          <aside style={{padding:'40px 36px', background:'var(--panel)', border:'1px solid var(--line)', height:'fit-content', position:'sticky', top:96}}>
            <div className="fig" style={{marginBottom:20}}>What you receive</div>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:18}}>
              {[
                ['24 hr','Drafted quote, ex VAT, all-in DDP'],
                ['48 hr','Mill certs sample · prior heat numbers'],
                ['72 hr','Engineered drawings (if applicable)'],
                ['7 days','Production slot held, no obligation'],
              ].map(([t, l]) => (
                <li key={t} style={{display:'grid', gridTemplateColumns:'70px 1fr', gap:16}}>
                  <span style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, color:'var(--silver-bright)', lineHeight:1}}>{t}</span>
                  <span style={{color:'var(--silver-mute)', fontSize:13, lineHeight:1.5}}>{l}</span>
                </li>
              ))}
            </ul>
            <div style={{marginTop:32, paddingTop:24, borderTop:'1px solid var(--line)'}}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:12}}>Direct line</div>
              <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:24, color:'var(--silver-bright)', marginBottom:4}}>+44 20 1234 5678</div>
              <div style={{fontSize:13, color:'var(--silver-mute)'}}>quotes@tinyhouseatelier.co</div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

// ============ TRADE LOGIN ============
function TradeLogin() {
  const [mode, setMode] = useStateP('login');
  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Trade'}]} />
      <div className="container">
        <div className="auth">
          <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--silver-mute)', marginBottom:16}}>Trade · {mode === 'login' ? 'Sign in' : 'Apply for an account'}</div>
          <h2>{mode === 'login' ? 'Welcome back.' : 'Open an account.'}</h2>
          <p>{mode === 'login' ? 'Net-30 terms · VAT-free export · Volume pricing' : 'Verified accounts unlock trade pricing & DDP logistics'}</p>
          {mode === 'login' ? (
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field"><label>Email</label><input type="email" placeholder="trade@yourcompany.co.uk" /></div>
              <div className="field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
              <button type="submit" className="btn btn-primary btn-arrow" style={{width:'100%', justifyContent:'center', marginTop:12}}>Sign In</button>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:24, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase'}}>
                <a href="#" style={{color:'var(--silver-mute)'}}>Forgot password</a>
                <button type="button" onClick={() => setMode('apply')} style={{color:'var(--silver-bright)'}}>Apply →</button>
              </div>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setMode('login'); }}>
              <div className="field"><label>Company name</label><input /></div>
              <div className="field"><label>VAT / EORI</label><input placeholder="GB123456789" /></div>
              <div className="field"><label>Annual steel spend</label><select><option>£0–25k</option><option>£25k–100k</option><option>£100k–500k</option><option>£500k+</option></select></div>
              <div className="field"><label>Email</label><input type="email" /></div>
              <button type="submit" className="btn btn-primary btn-arrow" style={{width:'100%', justifyContent:'center', marginTop:12}}>Submit Application</button>
              <div style={{textAlign:'center', marginTop:24}}>
                <button type="button" onClick={() => setMode('login')} style={{color:'var(--silver-mute)', fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase'}}>← Back to sign in</button>
              </div>
            </form>
          )}
        </div>
        <div className="container" style={{padding:'48px 0 96px', maxWidth:680, margin:'0 auto'}}>
          <div className="grid-3" style={{gridTemplateColumns:'1fr 1fr 1fr'}}>
            {[['Net-30','Terms after 3rd order'],['VAT-free','For UK & EU export'],['DDP','Door-to-door logistics']].map(([t,l]) => (
              <div key={t} style={{padding:'28px 24px', textAlign:'center', background:'var(--void)'}}>
                <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:30, color:'var(--silver-bright)', lineHeight:1, marginBottom:8}}>{t}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--silver-mute)'}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ============ COMPARE vs UK ============
function Compare() {
  const { currency } = useApp();
  const rows = [
    { feature: 'Compact towable · 22 m²', label: 'Aurora A-Frame equivalent', us: 28900, uk: 46500, units: 'GBP' },
    { feature: 'Family lodge · 78 m²', label: 'Family Lodge equivalent', us: 78000, uk: 125000, units: 'GBP' },
    { feature: 'Lead time', label: 'Drawing → on-site', us: '9–14 wks', uk: '24–32 wks' },
    { feature: 'Frame', label: 'Structural specification', us: '140 mm LGSF · S350GD+Z275', uk: 'Often timber stud · 89 mm' },
    { feature: 'Insulation', label: 'Wall thickness', us: '130 mm Rockwool · A1 fire', uk: '80 mm PIR / mineral typical' },
    { feature: 'Glazing', label: 'U-value', us: '1.1 W/m²K standard · 0.8 optional', uk: '1.4 W/m²K (double)' },
    { feature: 'Mill certificates', label: 'EN 10204', us: '3.1 included', uk: '2.2 typical, 3.1 +£' },
    { feature: 'Customs', label: 'Logistics', us: 'DDP · door-to-door', uk: 'N/A (domestic)' },
    { feature: 'Warranty', label: 'On structural frame', us: '12 years · transferable', uk: '5–10 years typical' },
  ];

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Compare'}]} />
      <div className="container">
        <SectionHead fig="F.01" title="Atelier vs UK builders." meta="Like-for-like specification · 2026 prices" />
        <div style={{paddingBottom:96}}>
          <table className="compare">
            <thead>
              <tr>
                <th style={{width:'34%'}}>Feature</th>
                <th style={{width:'33%'}} className="ours">Tinyhouse Atelier</th>
                <th style={{width:'33%'}}>UK average · 2026</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const isPrice = typeof r.us === 'number';
                const save = isPrice ? Math.round((1 - r.us / r.uk) * 100) : null;
                return (
                  <tr key={i}>
                    <td>
                      <div style={{color:'var(--silver-bright)', marginBottom:4}}>{r.feature}</div>
                      <div className="label">{r.label}</div>
                    </td>
                    <td className="ours">
                      {isPrice ? fmtPrice(currency === 'GBP' ? r.us : Math.round(r.us * 1.17), currency) : r.us}
                      {save && <span className="save" style={{marginLeft:12, fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase'}}>−{save}%</span>}
                    </td>
                    <td>{isPrice ? fmtPrice(currency === 'GBP' ? r.uk : Math.round(r.uk * 1.17), currency) : r.uk}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div style={{marginTop:48, padding:'40px 48px', background:'var(--panel)', border:'1px solid var(--line)', display:'grid', gridTemplateColumns:'2fr 1fr', gap:48, alignItems:'center'}}>
            <div>
              <div className="fig" style={{marginBottom:14}}>Why the gap</div>
              <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:24, color:'var(--silver-bright)', lineHeight:1.4, textWrap:'pretty'}}>
                We mill, weld and finish in one atelier. No subcontracted frame, no margin stacking. The saving lands with you, not the supply chain.
              </p>
            </div>
            <a href="#/quote" className="btn btn-primary btn-arrow" style={{justifyContent:'center'}}>Quote like-for-like</a>
          </div>
        </div>
      </div>
    </>
  );
}

// ============ TRUST · reviews / certs / before-after ============
function Trust() {
  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Trust & Provenance'}]} />
      <div className="container">
        <SectionHead fig="G.01" title="Why trust us." meta="Certs · proof · long-form reviews" />

        <section style={{paddingBottom:80}}>
          <div className="cert-grid">
            {DATA.certs.map((c, i) => (
              <div key={c} className="cert">
                <div className="cert-mark">{c.split(' ')[0].slice(0,2)}</div>
                <div className="cert-label">{c}</div>
                <div style={{fontSize:9, fontFamily:'var(--font-mono)', color:'var(--silver-dim)', letterSpacing:'0.18em'}}>CERT N° {String(i+1).padStart(4,'0')}/26</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead fig="G.02" title="Frame, then dwelling." meta="LGSF chassis raised in days, finished in weeks" />
          <div className="beforeafter">
            <div className="ba-img ba-before" style={{backgroundImage: "url('public/media/photos/img-037.jpg')"}}></div>
            <div className="ba-img ba-after" style={{backgroundImage: "url('public/media/photos/img-104.jpg')"}}></div>
            <div className="ba-divider"></div>
            <div className="ba-label l">BARE FRAME · TANDEM CHASSIS</div>
            <div className="ba-label r">CLAD · VOYAGER ON LOCATION</div>
          </div>
        </section>

        <section className="section">
          <SectionHead fig="G.03" title="Wall section, in detail." meta="What goes between the steel and the plaster" />
          <div className="grid-2">
            <div className="video-embed" style={{aspectRatio:'4/3'}}>
              <img src="public/media/photos/img-002.jpg" alt="Wall section detail — labelled build-up" />
              <div className="video-embed-label">SECTION · 11 OSB / MEMBRANE / METAL TILE / 130 ROCKWOOL</div>
            </div>
            <div className="video-embed" style={{aspectRatio:'4/3'}}>
              <img src="public/media/photos/img-001.jpg" alt="Cut sample of finished wall" />
              <div className="video-embed-label">SAMPLE · ALU FOIL + DECORATIVE PLASTER</div>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHead fig="G.04" title="Engineering proof." meta="BIM model + UK construction drawings" />
          <div className="grid-2">
            <div className="video-embed" style={{aspectRatio:'4/3'}}>
              <img src="public/media/photos/img-009.jpg" alt="Tekla BIM model — colour-coded structural members" />
              <div className="video-embed-label">BIM · TEKLA · TWIN-GABLE LODGE</div>
            </div>
            <div className="video-embed" style={{aspectRatio:'4/3'}}>
              <img src="public/media/photos/img-011.jpg" alt="UK construction drawing — Keele Northbound, Matrix Construction" />
              <div className="video-embed-label">DRAWING · KEELE NORTHBOUND · 2022</div>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHead fig="G.05" title="Frames in motion." meta="Atelier stockyard + truss assembly · live clips" />
          <div className="grid-2">
            <div className="video-embed">
              <video src="public/media/videos/video-01.mp4" autoPlay muted loop playsInline poster="public/media/photos/img-099.jpg"></video>
              <div className="video-embed-label">STOCK · S350GD+Z PROFILES · 0:19</div>
            </div>
            <div className="video-embed">
              <video src="public/media/videos/video-02.mp4" autoPlay muted loop playsInline poster="public/media/photos/img-008.jpg"></video>
              <div className="video-embed-label">TRUSS · LAID FOR INSPECTION · 0:43</div>
            </div>
          </div>
        </section>

        <section className="section">
          <SectionHead fig="G.06" title="Long-form reviews." meta="Verified clients · trade and private" />
          <div className="grid-2">
            {DATA.reviews.map((r, i) => (
              <div key={i} className="review" style={{padding:'40px 44px'}}>
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <div className="review-text" style={{fontSize:24}}>"{r.text}"</div>
                <div className="review-author">
                  <span className="name">{r.name}</span>
                  <span className="meta">{r.meta}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

// ============ GALLERY ============
// Caption table for every photograph in the studio set. If a frame number is
// not in this table the gallery falls back to a generic "Atelier · NNN" cap so
// nothing ever appears uncaptioned.
const GAL_CAPTIONS = {
  1:  'WALL SAMPLE · ALU + PLASTER',
  2:  'WALL SECTION · 1:25 ANNOTATED',
  3:  'FRAME · TWO-STOREY · PLOT',
  4:  'FRAME · LANDSCAPE · DAYLIGHT',
  5:  'FRAME · OPEN AIR · TRUSSES',
  6:  'INTERIOR · DRYWALL STAGE',
  7:  'FAMILY LODGE · STONE BASE',
  8:  'TRUSS · CLOSE · GALVANISED',
  9:  'BIM · TEKLA · TWIN-GABLE',
  10: 'BIM · ROOF · COLOUR-CODED',
  11: 'DRAWING · KEELE · ROOF 1:50',
  12: 'DRAWING · KEELE · WALL DETAIL',
  13: 'DRAWING · KEELE · SECTION',
  14: 'BATH · COMPACT · WINDOW',
  15: 'HALL · WHITE · LONG VIEW',
  16: 'BEDROOM · LOFT · DOUBLE',
  17: 'GALLEY · STAINLESS · LOFT',
  18: 'LOFT · FAMILY BERTH',
  19: 'LOFT · ROOF · NIGHT WINDOW',
  20: 'GLAZING · WALL · WIDE',
  21: 'STAIR · LED INSET',
  22: 'HALL · EMPTY · LIGHT',
  23: 'BATH · GLASS SHOWER',
  24: 'STAIR · STORAGE DRAWERS',
  25: 'GALLEY · KITCHEN · WHITE',
  26: 'VOYAGER · NIGHT · STAND',
  27: 'GALLEY · INDUCTION · LOFT',
  28: 'KITCHEN · ALT VIEW',
  29: 'STAIR · LIGHT · PINE',
  30: 'STAIR DETAIL',
  31: 'WORKTOP · ISLAND · WIDE',
  32: 'LIVING · GREY · LOFT ABOVE',
  33: 'KNOB · BRASS · DOOR DETAIL',
  34: 'WORKTOP · DARK · SINK',
  35: 'BATH · INDUSTRIAL · DOOR OPEN',
  36: 'LIVING · LOFT VIEW',
  37: 'FRAME · ON CHASSIS · YARD',
  38: 'GALLEY · LOFT · LONG',
  39: 'EXTERIOR · LANDSCAPE',
  40: 'EXTERIOR · DARK · SKY',
  41: 'AERIAL · VOYAGER PAIR',
  42: 'SIDE · PROFILE · GROUND',
  43: 'HALL · DARK · DOOR',
  44: 'STAIR · LOFT · LIGHT',
  45: 'LOFT · SLEEPING',
  46: 'HALL · LIGHT · WIDE',
  47: 'GALLEY · LIGHT BOX',
  48: 'HALL · WINDOW · BEDROOM',
  49: 'BATH · INDUSTRIAL GLASS',
  50: 'HALL · CORRIDOR',
  51: 'BATH · INDUSTRIAL · WC',
  52: 'STAIR · LIGHT · OPEN',
  53: 'CLADDING · WOOD-LOOK · CLOSE',
  54: 'TRAILER · GREEN · DARK',
  55: 'GALLEY · BLACK SINK',
  56: 'DOOR · INTERNAL · CLOSED',
  57: 'LIVING · DAYLIGHT · WIDE',
  58: 'WORKTOP · DETAIL',
  59: 'GLAZING · DOOR · GLASS',
  60: 'HALL · LONG · LIGHT',
  61: 'PENTAGON WINDOW · INTERIOR',
  62: 'STAIR · UPWARD · OAK',
  63: 'AERIAL · TRIO · MOUNTAINS',
  64: 'AERIAL · CLOSE · CHASSIS',
  65: 'EXTERIOR · DAYLIGHT',
  66: 'LIVING · GREY · CARAVAN VIEW',
  67: 'LIVING · GREY · WIDE',
  68: 'STAIR · LIGHT · WOOD',
  69: 'LIVING · ALT · SECTIONAL',
  70: 'BATH · WIDE · WC',
  71: 'BATH · COUNTER',
  72: 'BATH · DARK FLOOR',
  73: 'STAIR · DRAWERS · LIGHT',
  74: 'BEDROOM · TV · NIGHT',
  75: 'GALLEY · STAINLESS · ISLAND',
  76: 'BEDROOM · LIGHT',
  77: 'BEDROOM · LONG · DUVET',
  78: 'VORTEXVAN · DUSK · FIELD',
  79: 'GALLEY · GREEN ACCENT',
  80: 'HALL · BEDROOM SIDE',
  81: 'HALL · ENTRANCE',
  82: 'BEDROOM · ALT',
  83: 'DOOR · INTERIOR',
  84: 'BATH · WASHING MACHINE',
  85: 'EMPTY · INTERIOR',
  86: 'DOOR · ENTRANCE · OAK',
  87: 'GALLEY · RED · ACCENT',
  88: 'DETAIL · ATLANTE SINK',
  89: 'GALLEY · COUNTER',
  90: 'GALLEY · BLACK BACKSPLASH',
  91: 'BATH · DARK · ALT',
  92: 'GALLEY · WORKTOP · LIGHT',
  93: 'LIVING · PENTAGON',
  94: 'GALLEY · RED · WIDE',
  95: 'EMPTY · LONG VIEW',
  96: 'GALLEY · INTERIOR · BRIGHT',
  97: 'BATH · COUNTER · ALT',
  98: 'GALLEY · DETAIL',
  99: 'STOCKYARD · MATERIALS',
  100: 'VORTEX VAN · WORKSHOP',
  101: 'BATH · WHITE · WIDE',
  102: 'EXTERIOR · CABIN · YARD',
  103: 'VORTEX VAN · SIGN CLOSE',
  104: 'KURTSAN · TWIN BUILD',
  105: 'BATH · DETAIL',
  106: 'BATH · TILED · WIDE',
  107: 'HALL · SOFT LIGHT',
  108: 'FRAME · OUTDOOR',
  109: 'FRAME · FIELD · LONG',
  110: 'FRAME · PLAN STAGE',
  111: 'FRAME · OUTDOOR · CLOSE',
  112: 'FRAME · OUTDOOR · WIDE',
  113: 'FRAME · DETAIL · CONNECTION',
  114: 'ATELIER · TÜRKOĞLU · AERIAL',
  115: 'FRAME · TWIN-GABLE LODGE',
  116: 'PAVILION · A-FRAME RETREAT',
  117: 'PAVILION · POOL · COMMISSION',
  118: 'PAVILION · GARDEN SIDE',
  119: 'PAVILION · STEPS · APPROACH',
  120: 'PAVILION · DUSK',
  121: 'FRAME · OUTDOOR · WIDE',
};
const galCap = (n) => GAL_CAPTIONS[n] || `ATELIER · ${String(n).padStart(3,'0')}`;
// "wide" is a 2-col span, "tall" a 2-row span, "wide tall" a feature tile.
// Sprinkle them across the masonry so the grid never looks gridded.
const GAL_FEATURE = { 7: 'wide tall', 26: 'tall', 41: 'wide', 63: 'wide', 78: 'tall', 100: 'wide', 104: 'wide tall', 115: 'wide', 117: 'wide', 120: 'wide', 9: 'tall', 27: 'tall', 49: 'tall', 66: 'wide', 18: 'tall', 21: 'tall', 53: 'tall', 88: 'tall', 114: 'wide', 16: 'tall', 38: 'wide', 35: 'tall', 79: 'wide', 99: 'wide', 11: 'wide' };
function Gallery() {
  const photos = [];
  for (let n = 1; n <= 121; n++) {
    photos.push({ n, img: `public/media/photos/img-${String(n).padStart(3, '0')}.jpg`, cap: galCap(n), c: GAL_FEATURE[n] || '' });
  }
  // append the rendered PDF pages so every PDF page is also visible
  for (let p = 1; p <= 10; p++) {
    photos.push({ n: 1000+p, img: `public/media/serenity/page-${String(p).padStart(2, '0')}.jpg`, cap: `SERENITY · BOOK PAGE ${p}`, c: '' });
  }
  for (let p = 1; p <= 12; p++) {
    photos.push({ n: 2000+p, img: `public/media/aframe/page-${String(p).padStart(2, '0')}.jpg`, cap: `AURORA · BOOK PAGE ${p}`, c: '' });
  }
  for (let p = 1; p <= 41; p++) {
    photos.push({ n: 3000+p, img: `public/media/callisto/page-${String(p).padStart(2, '0')}.jpg`, cap: `CALLISTO · PLATE ${p}`, c: p === 1 ? 'wide' : '' });
  }
  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Gallery'}]} />
      <div className="container">
        <SectionHead fig="H.01" title="Project gallery." meta={`${photos.length} frames · 6 models · UK + EU delivery`} />
        <div className="gallery" style={{paddingBottom:96}}>
          {photos.map((p) => (
            <div key={p.n} className={`gal ${p.c}`}>
              <img src={p.img} alt={p.cap} loading="lazy" />
              <span className="gal-cap">{p.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

Object.assign(window, { Quote, TradeLogin, Compare, Trust, Gallery });
