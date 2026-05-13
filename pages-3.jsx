// Tinyhouse Atelier — pages 3 (Quote, Trade, Compare, Trust, Gallery, About, FAQ, Contact)

// ============ QUOTE REQUEST ============
function Quote() {
  const [submitted, setSubmitted] = useStateP(false);
  const [form, setForm] = useStateP({ kind: 'tiny-house', region: 'UK', name: '', co: '', email: '', phone: '', vat: '', model: '', qty: 1, dest: '', date: '', notes: '' });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) {
    return (
      <div className="container" style={{padding:'120px 0', textAlign:'center'}}>
        <div className="fig" style={{marginBottom:20}}>Fig. E.01 · Acknowledged</div>
        <h1 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:72, color:'var(--ink-bright)', fontWeight:400, marginBottom:24, lineHeight:1}}>Quote received.</h1>
        <p style={{color:'var(--ink-mute)', fontSize:16, maxWidth:'48ch', margin:'0 auto 40px'}}>Reference <span style={{color:'var(--ink-bright)', fontFamily:'var(--font-mono)'}}>QT-2026-{Math.floor(Math.random()*9000+1000)}</span>. A drafted quote with mill certificates and DDP logistics will reach you within 24 working hours.</p>
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
              <div style={{display:'flex', gap:8, marginBottom:24, flexWrap:'wrap'}}>
                {[['tiny-house','Tiny House'],['kit','Frame-only Kit'],['mixed','Mixed / Bespoke']].map(([v,l]) => (
                  <button type="button" key={v} className={`chip ${form.kind === v ? 'active' : ''}`} onClick={() => upd('kind', v)}>{l}</button>
                ))}
              </div>
              <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                {['UK','EU','Other'].map(r => (
                  <button type="button" key={r} className={`chip ${form.region === r ? 'active' : ''}`} onClick={() => upd('region', r)}>Ship to {r}</button>
                ))}
              </div>
            </div>

            <div>
              <div className="fig" style={{marginBottom:16}}>02 · Specification</div>
              <div className="form-grid">
                <div className="field"><label>Model / Spec</label><input value={form.model} onChange={(e) => upd('model', e.target.value)} placeholder="e.g. Serenity, Aurora A-Frame, bespoke" /></div>
                <div className="field"><label>Quantity</label><input type="number" value={form.qty} onChange={(e) => upd('qty', e.target.value)} /></div>
                <div className="field full"><label>Destination postcode / city</label><input value={form.dest} onChange={(e) => upd('dest', e.target.value)} placeholder="SW1A 1AA · Rotterdam · etc." /></div>
                <div className="field"><label>Required by</label><input type="date" value={form.date} onChange={(e) => upd('date', e.target.value)} /></div>
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

          <aside style={{padding:'40px 36px', background:'var(--paper-tint)', border:'1px solid var(--line)', height:'fit-content', position:'sticky', top:96}}>
            <div className="fig" style={{marginBottom:20}}>What you receive</div>
            <ul style={{listStyle:'none', display:'flex', flexDirection:'column', gap:18}}>
              {[
                ['24 hr','Drafted quote, ex VAT, all-in DDP'],
                ['48 hr','Mill certs sample · prior heat numbers'],
                ['72 hr','Engineered drawings (if applicable)'],
                ['7 days','Production slot held, no obligation'],
              ].map(([t, l]) => (
                <li key={t} style={{display:'grid', gridTemplateColumns:'70px 1fr', gap:16}}>
                  <span style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:22, color:'var(--ink-bright)', lineHeight:1}}>{t}</span>
                  <span style={{color:'var(--ink-mute)', fontSize:13, lineHeight:1.5}}>{l}</span>
                </li>
              ))}
            </ul>
            <div style={{marginTop:32, paddingTop:24, borderTop:'1px solid var(--line)'}}>
              <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-mute)', marginBottom:12}}>Direct line</div>
              <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:26, color:'var(--ink-bright)', marginBottom:4}}><a href="tel:01628362197">01628 362 197</a></div>
              <div style={{fontSize:13, color:'var(--ink-mute)'}}><a href="mailto:info@tinyhouseatelier.com">info@tinyhouseatelier.com</a></div>
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
          <div style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--ink-mute)', marginBottom:16}}>Trade · {mode === 'login' ? 'Sign in' : 'Apply for an account'}</div>
          <h2>{mode === 'login' ? 'Welcome back.' : 'Open an account.'}</h2>
          <p>{mode === 'login' ? 'Net-30 terms · VAT-free export · Trade pricing' : 'Verified accounts unlock trade pricing & DDP logistics'}</p>
          {mode === 'login' ? (
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field"><label>Email</label><input type="email" placeholder="trade@yourcompany.co.uk" /></div>
              <div className="field"><label>Password</label><input type="password" placeholder="••••••••" /></div>
              <button type="submit" className="btn btn-primary btn-arrow" style={{width:'100%', justifyContent:'center', marginTop:12}}>Sign In</button>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:24, fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase'}}>
                <a href="#" style={{color:'var(--ink-mute)'}}>Forgot password</a>
                <button type="button" onClick={() => setMode('apply')} style={{color:'var(--ink-bright)'}}>Apply →</button>
              </div>
            </form>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setMode('login'); }}>
              <div className="field"><label>Company name</label><input /></div>
              <div className="field"><label>VAT / EORI</label><input placeholder="GB123456789" /></div>
              <div className="field"><label>Annual project value</label><select><option>£0–100k</option><option>£100k–500k</option><option>£500k–2m</option><option>£2m+</option></select></div>
              <div className="field"><label>Email</label><input type="email" /></div>
              <button type="submit" className="btn btn-primary btn-arrow" style={{width:'100%', justifyContent:'center', marginTop:12}}>Submit Application</button>
              <div style={{textAlign:'center', marginTop:24}}>
                <button type="button" onClick={() => setMode('login')} style={{color:'var(--ink-mute)', fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.2em', textTransform:'uppercase'}}>← Back to sign in</button>
              </div>
            </form>
          )}
        </div>
        <div className="container" style={{padding:'48px 0 96px', maxWidth:680, margin:'0 auto'}}>
          <div className="grid-3" style={{gridTemplateColumns:'1fr 1fr 1fr'}}>
            {[['Net-30','Terms after 3rd order'],['VAT-free','For UK & EU export'],['DDP','Door-to-door logistics']].map(([t,l]) => (
              <div key={t} style={{padding:'28px 24px', textAlign:'center', background:'var(--paper)'}}>
                <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:30, color:'var(--ink-bright)', lineHeight:1, marginBottom:8}}>{t}</div>
                <div style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-mute)'}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ============ COMPARE vs UK — technical only, no prices ============
function Compare() {
  const rows = [
    { feature: 'Lead time', label: 'Drawing → on-site', us: '9–14 wks', uk: '24–32 wks' },
    { feature: 'Frame', label: 'Structural specification', us: '140 mm LGSF · S350GD+Z275', uk: 'Often timber stud · 89 mm' },
    { feature: 'Insulation', label: 'Wall thickness', us: '130 mm mineral · A1 fire', uk: '80 mm PIR / mineral typical' },
    { feature: 'Glazing', label: 'U-value', us: '1.1 W/m²K standard · 0.8 optional', uk: '1.4 W/m²K (double)' },
    { feature: 'Mill certificates', label: 'EN 10204', us: '3.1 included', uk: '2.2 typical, 3.1 +£' },
    { feature: 'Customs', label: 'Logistics', us: 'DDP · door-to-door', uk: 'N/A (domestic)' },
    { feature: 'Warranty', label: 'On structural frame', us: '12 years · transferable', uk: '5–10 years typical' },
  ];

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Compare'}]} />
      <div className="container">
        <SectionHead fig="F.01" title="Atelier vs UK builders." meta="Like-for-like specification · 2026" />
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
              {rows.map((r, i) => (
                <tr key={i}>
                  <td>
                    <div style={{color:'var(--ink-bright)', marginBottom:4}}>{r.feature}</div>
                    <div className="label">{r.label}</div>
                  </td>
                  <td className="ours">{r.us}</td>
                  <td>{r.uk}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{marginTop:48, padding:'40px 48px', background:'var(--paper-tint)', border:'1px solid var(--line)', display:'grid', gridTemplateColumns:'2fr 1fr', gap:48, alignItems:'center'}}>
            <div>
              <div className="fig" style={{marginBottom:14}}>Why the gap</div>
              <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:24, color:'var(--ink-bright)', lineHeight:1.4, textWrap:'pretty'}}>
                We engineer, fabricate and finish under one roof. No subcontracted hand-offs, no margin stacking. The saving lands with you, not the supply chain.
              </p>
            </div>
            <a href="#/contact" className="btn btn-primary btn-arrow" style={{justifyContent:'center'}}>Quote like-for-like</a>
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
                <div style={{fontSize:9, fontFamily:'var(--font-mono)', color:'var(--ink-dim)', letterSpacing:'0.18em'}}>CERT N° {String(i+1).padStart(4,'0')}/26</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHead fig="G.02" title="Long-form reviews." meta="Verified clients · trade and private" />
          <div className="grid-2">
            {DATA.reviews.map((r, i) => (
              <div key={i} className="review" style={{padding:'40px 44px'}}>
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <div className="review-text" style={{fontSize:24}}>“{r.text}”</div>
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
const GAL_CAPTIONS = {
  3: 'PROJECT · TWO-STOREY · ON PLOT',
  4: 'PROJECT · LANDSCAPE · DAYLIGHT',
  6: 'INTERIOR · DRYWALL STAGE',
  7: 'FAMILY LODGE · STONE BASE',
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
  64: 'AERIAL · CLOSE',
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
  78: 'VORTEX VAN · DUSK · FIELD',
  79: 'GALLEY · GREEN ACCENT',
  80: 'HALL · BEDROOM SIDE',
  81: 'HALL · ENTRANCE',
  82: 'BEDROOM · ALT',
  83: 'DOOR · INTERIOR',
  84: 'BATH · WASHING MACHINE',
  85: 'EMPTY · INTERIOR',
  86: 'DOOR · ENTRANCE · OAK',
  87: 'GALLEY · RED · ACCENT',
  88: 'DETAIL · VESSEL SINK',
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
  101: 'BATH · WHITE · WIDE',
  102: 'EXTERIOR · CABIN · YARD',
  105: 'BATH · DETAIL',
  106: 'BATH · TILED · WIDE',
  107: 'HALL · SOFT LIGHT',
  116: 'PAVILION · A-FRAME RETREAT',
  117: 'PAVILION · POOL · COMMISSION',
  118: 'PAVILION · GARDEN SIDE',
  119: 'PAVILION · STEPS · APPROACH',
  120: 'PAVILION · DUSK',
};
// Excluded: bare-frame photos that would reveal manufacturing process.
const GAL_EXCLUDE = new Set([1,2,5,8,9,10,11,12,13,37,99,100,103,104,108,109,110,111,112,113,114,115,121]);
const galCap = (n) => GAL_CAPTIONS[n] || `ATELIER · ${String(n).padStart(3,'0')}`;
const GAL_FEATURE = { 7: 'wide tall', 26: 'tall', 41: 'wide', 63: 'wide', 78: 'tall', 117: 'wide', 120: 'wide', 27: 'tall', 49: 'tall', 66: 'wide', 18: 'tall', 21: 'tall', 53: 'tall', 16: 'tall', 38: 'wide', 35: 'tall', 79: 'wide' };
function Gallery() {
  const photos = [];
  for (let n = 1; n <= 121; n++) {
    if (GAL_EXCLUDE.has(n)) continue;
    photos.push({ n, img: `public/media/photos/img-${String(n).padStart(3, '0')}.jpg`, cap: galCap(n), c: GAL_FEATURE[n] || '' });
  }
  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Gallery'}]} />
      <div className="container">
        <SectionHead fig="H.01" title="Project gallery." meta={`${photos.length} frames · 7 models · UK + EU delivery`} />
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

// ============ ABOUT US ============
function About() {
  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'About Us'}]} />
      <div className="container">
        <SectionHead fig="I.01" title="About the atelier." meta="Studio · craft · standards" />
        <div className="about-grid">
          <div>
            <p className="lede">Tinyhouse Atelier is a small studio drawing, engineering and building steel-framed dwellings for clients in the UK and continental Europe.</p>
          </div>
          <div>
            <p>We started out drawing for other people’s projects — terraces, mezzanines, mid-rise frames — and grew tired of seeing good drawings handed off to teams who didn’t finish them with the same care. So we stopped sub-contracting.</p>
            <p>Today, every model in our folio is engineered, fabricated and finished by the same team. The drawing you receive is the drawing we build to. The number on the mill certificate is the steel under your floor.</p>
            <p>The work is small by intention. We deliver roughly thirty dwellings a year — enough to keep the standards close, not so many that the names blur. A handful are private commissions; the rest are repeat models in our collection.</p>
          </div>
        </div>

        <div className="about-figs">
          <div className="f"><img src="public/media/photos/img-007.jpg" alt="Family Lodge on stone base" /><div className="f-label">FAMILY LODGE · STONE BASE</div></div>
          <div className="f"><img src="public/media/photos/img-041.jpg" alt="Two Voyager lodges on plot" /><div className="f-label">VOYAGER PAIR · AERIAL</div></div>
        </div>

        <section className="section" style={{borderTop:'1px solid var(--line)', borderBottom:'none'}}>
          <SectionHead fig="I.02" title="Standards." meta="What we sign our name to" />
          <div className="grid-3">
            {[
              ['EN 1090-1 EXC2', 'Welded steel construction, execution class 2 — our default. The certificate ships with every order.'],
              ['EN 1993-1-3', 'Light-gauge steel framing engineered to Eurocode. Snow, wind and seismic loads tuned to the destination postcode.'],
              ['EN 13162 · A1', 'Mineral insulation, non-combustible. No PIR shortcuts. The slabs in your wall are batch-traceable.'],
              ['EN 10204 · 3.1', 'Mill inspection certificates per heat number — for every coil, every truss, every chassis.'],
              ['CE / UKCA', 'Marked for sale and use in the EU and UK. We register and clear customs on your behalf.'],
              ['ISO 9001', 'Quality management — drawings, NCRs and welder qualifications maintained against an audited system.'],
            ].map(([t, b], i) => (
              <div key={i} className="card" style={{padding:'36px 32px'}}>
                <div style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.22em', color:'var(--ink-bright)', marginBottom:14, textTransform:'uppercase'}}>{t}</div>
                <p style={{color:'var(--ink-mute)', lineHeight:1.7, fontSize:14}}>{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" style={{borderBottom:'none'}}>
          <div style={{textAlign:'center', padding:'24px 0 0'}}>
            <h2 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:'clamp(40px, 6vw, 64px)', color:'var(--ink-bright)', fontWeight:400, lineHeight:1.05, maxWidth:'18ch', margin:'0 auto 28px', textWrap:'balance'}}>
              Drawn quietly. Built once. Built to last.
            </h2>
            <div style={{display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap'}}>
              <a href="#/contact" className="btn btn-primary btn-arrow">Contact the studio</a>
              <a href="#/tiny-houses" className="btn btn-arrow">See the collection</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// ============ FAQ ============
function FAQ() {
  const items = [
    {
      q: 'How private is the pricing — and why?',
      a: <>
        <p>We quote against your plot, plan and timeline rather than a public sticker price. Two clients ordering the same model can have very different specifications — towing route, foundation, glazing pack, interior fit — and we&rsquo;d rather give you a single number that reflects what you actually want than a starting price you have to second-guess.</p>
        <p>Send us a brief through the <a href="#/contact" style={{color:'var(--ink-bright)', borderBottom:'1px solid var(--ink-mute)'}}>contact page</a> and a quote will reach you within 24 working hours.</p>
      </>
    },
    {
      q: 'How long does a build take, from first call to keys in hand?',
      a: <>
        <p>Most of our standard models are 9–14 weeks from the day we sign drawings to the day we hand them over on plot. Custom commissions add 4–8 weeks for design iteration.</p>
        <p>Lead time is steel-then-build: the structural shell is roughly 4 weeks, fit-out is 4–6, logistics and customs another 1–2.</p>
      </>
    },
    {
      q: 'Where do you deliver?',
      a: <>
        <p>Anywhere in the United Kingdom and the European Union, door-to-door. We act as the importer of record, clear customs on your behalf and arrange the crane day. Our standard UK ports are Felixstowe and Tilbury; in the EU we route via Rotterdam, Hamburg or Genoa depending on your postcode.</p>
        <p>For destinations outside the UK and EU, we still quote — talk to us about your destination first.</p>
      </>
    },
    {
      q: 'Do I need planning permission?',
      a: <>
        <p>It depends on the model and where you put it. Our towable models fall under caravan legislation in most UK jurisdictions and many EU member states — meaning planning permission is often not required if the dwelling stays mobile. Our permanent lodges sit on a slab and typically require permission.</p>
        <p>We&rsquo;re not planning consultants — but we&rsquo;ll happily share the certificates, drawings and engineering letters your local authority is likely to ask for.</p>
      </>
    },
    {
      q: 'What guarantees do I get?',
      a: <>
        <p>Twelve years on the structural steel frame, the galvanising and the chassis welds — transferable to subsequent owners. Two years on all fit-out, fittings and finishes. Glazing and mechanical equipment carry the manufacturer&rsquo;s own warranty (typically 5–10 years).</p>
        <p>Every order ships with EN 10204 3.1 mill certificates, weld inspection records and a calculation pack against the snow and seismic loads of your destination.</p>
      </>
    },
    {
      q: 'Can I visit the studio?',
      a: <>
        <p>Yes. Our UK office is at 35a Station Parade in Cookham, Berkshire, and we keep a rotating sample of finishes and a wall cut-section for clients to walk through. Visits are by appointment — please <a href="#/contact" style={{color:'var(--ink-bright)', borderBottom:'1px solid var(--ink-mute)'}}>get in touch</a> a few days ahead.</p>
      </>
    },
    {
      q: 'Are the dwellings off-grid capable?',
      a: <>
        <p>Most can be specified for off-grid use: rooftop PV with battery storage, rainwater capture and a composting WC are options on every model in our folio. Wood-burning stoves are available subject to local regulations.</p>
        <p>If you want to live full-time off-grid, please tell us at brief stage — it changes the insulation pack and the glazing U-value we recommend.</p>
      </>
    },
    {
      q: 'How do I pay — and can I stage payments?',
      a: <>
        <p>Standard payment is 30% on order, 40% on structural sign-off, 30% on delivery. Trade accounts with three completed orders get net-30 terms thereafter.</p>
        <p>We accept GBP and EUR by bank transfer; payment in either currency is offset against UK and EU VAT depending on your destination and registration.</p>
      </>
    },
  ];

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'FAQs'}]} />
      <div className="container">
        <SectionHead fig="J.01" title="Frequently asked." meta="Studio · process · standards" />
        <div style={{display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:64, paddingBottom:96, alignItems:'start'}}>
          <aside style={{position:'sticky', top:96}}>
            <p style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:26, lineHeight:1.4, color:'var(--ink-bright)', marginBottom:24}}>
              Everything we’re asked, with the kind of answers we’d want.
            </p>
            <p style={{color:'var(--ink-mute)', fontSize:14, lineHeight:1.7, marginBottom:32}}>
              Anything missing? Email <a href="mailto:info@tinyhouseatelier.com" style={{color:'var(--ink-bright)', borderBottom:'1px solid var(--ink-mute)'}}>info@tinyhouseatelier.com</a> and we&rsquo;ll answer in writing — and add it here for the next person.
            </p>
            <a href="#/contact" className="btn btn-arrow">Ask the studio</a>
          </aside>
          <div className="faq-list">
            {items.map((it, i) => (
              <details key={i} className="faq-item" open={i === 0}>
                <summary>
                  <h3>{it.q}</h3>
                  <span className="toggle"></span>
                </summary>
                <div className="body">{it.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ============ CONTACT ============
function Contact() {
  const [submitted, setSubmitted] = useStateP(false);
  const [form, setForm] = useStateP({ name: '', email: '', phone: '', interest: 'tiny-house', message: '' });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <>
      <Crumb items={[{label:'Atelier', href:'#/'}, {label:'Contact Us'}]} />
      <div className="container">
        <SectionHead fig="K.01" title="Contact the studio." meta="Reply within 24 working hours" />
        <div className="contact-grid">
          <div className="contact-block">
            <div className="row">
              <span className="label">Email</span>
              <div className="value"><a href="mailto:info@tinyhouseatelier.com">info@tinyhouseatelier.com</a></div>
              <span className="meta">Best for briefs, drawings and quote requests. Replies within one working day.</span>
            </div>
            <div className="row">
              <span className="label">Telephone</span>
              <div className="value"><a href="tel:01628362197">01628 362 197</a></div>
              <span className="meta">Mon–Fri · 09:00–17:30 UK · Voicemail outside hours.</span>
            </div>
            <div className="row">
              <span className="label">Studio address</span>
              <div className="value" style={{fontSize:24, lineHeight:1.3}}>
                35a Station Parade<br/>
                Cookham<br/>
                Berkshire SL6 9BR
              </div>
              <span className="meta">Visits by appointment. Sample wall cut-section and finishes on display.</span>
            </div>
            <div className="row">
              <span className="label">Brochure</span>
              <div className="value" style={{fontSize:22}}><a href="public/media/tinyhouse-atelier-brochure.pdf" target="_blank" rel="noopener">Download the folio →</a></div>
              <span className="meta">PDF · 41 pages · spec book and project plates.</span>
            </div>
          </div>

          <aside style={{padding:'40px 36px', background:'var(--paper-tint)', border:'1px solid var(--line)'}}>
            {submitted ? (
              <div style={{textAlign:'center', padding:'48px 0'}}>
                <div className="fig" style={{marginBottom:14}}>Acknowledged</div>
                <h3 style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:36, color:'var(--ink-bright)', fontWeight:400, marginBottom:14, lineHeight:1.1}}>Thank you.</h3>
                <p style={{color:'var(--ink-mute)', fontSize:14, lineHeight:1.7, maxWidth:'34ch', margin:'0 auto 24px'}}>Your note is in the studio inbox. A reply will reach you within one working day.</p>
                <button className="btn btn-arrow" onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', interest:'tiny-house', message:'' }); }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{display:'flex', flexDirection:'column', gap:18}}>
                <div className="fig" style={{marginBottom:4}}>Write to us</div>
                <div className="field"><label>Name</label><input required value={form.name} onChange={(e) => upd('name', e.target.value)} /></div>
                <div className="field"><label>Email</label><input required type="email" value={form.email} onChange={(e) => upd('email', e.target.value)} /></div>
                <div className="field"><label>Phone (optional)</label><input value={form.phone} onChange={(e) => upd('phone', e.target.value)} /></div>
                <div className="field"><label>Interested in</label>
                  <select value={form.interest} onChange={(e) => upd('interest', e.target.value)}>
                    <option value="tiny-house">A tiny house from the folio</option>
                    <option value="custom">A bespoke commission</option>
                    <option value="kit">A frame-only kit for our own builder</option>
                    <option value="trade">Opening a trade account</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="field"><label>Your note</label><textarea value={form.message} onChange={(e) => upd('message', e.target.value)} placeholder="Tell us about your plot, your timeline and your favourite model — anything helps." required /></div>
                <button type="submit" className="btn btn-primary btn-arrow" style={{justifyContent:'center'}}>Send to the studio</button>
                <p style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--ink-dim)', textAlign:'center', marginTop:6}}>We respect your privacy · no marketing list</p>
              </form>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}

Object.assign(window, { Quote, TradeLogin, Compare, Trust, Gallery, About, FAQ, Contact });
