// Tinyhouse Atelier — shared components
const { useState, useEffect, useMemo, useRef, useContext, createContext } = React;

// ----- App context -----
const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);

// ----- Currency -----
function fmtPrice(n, cur) {
  if (cur === 'GBP') return '£' + n.toLocaleString('en-GB');
  return '€' + n.toLocaleString('de-DE');
}

// ----- Frame (viewport hairline + corner marks) -----
function ViewportFrame() {
  return (
    <>
      <div className="frame"><i></i><b></b></div>
      <div className="frame-mark tl">TINYHOUSE ATELIER · ROLL-FORMED LGSF</div>
      <div className="frame-mark tr">CE / UKCA · UK &amp; EU EXPORT</div>
      <div className="frame-mark bl">FOLIO 26 · ED. I</div>
      <div className="frame-mark br">PAPER · INK · STEEL</div>
    </>
  );
}

// ----- Brand mark (SVG) -----
function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="miter" strokeLinecap="square">
        {/* pitched-roof tiny house silhouette */}
        <path d="M2 13 L12 4 L22 13" />
        <path d="M4 12.2 V21 H20 V12.2" />
        <path d="M10 21 V14 H14 V21" />
        <path d="M6 14 H8.5 V16.4 H6 Z" />
      </svg>
    </span>
  );
}

// ----- Nav -----
function Nav() {
  const { route, currency, setCurrency, cart, openCart } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Primary nav per Cenk's spec (13 May 2026)
  const items = [
    ['Tiny Houses', '#/tiny-houses'],
    ['Brochure', 'public/media/tinyhouse-atelier-brochure.pdf', { external: true }],
    ['About Us', '#/about'],
    ['FAQs', '#/faq'],
    ['Contact Us', '#/contact'],
    ['Trade', '#/trade'],
  ];
  const isActive = (h) => h.startsWith('#') && route.startsWith(h.slice(1));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  useEffect(() => { setMobileOpen(false); }, [route]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a href="#/" className="logo" aria-label="Tinyhouse Atelier — Home">
            <LogoMark />
            <span className="logo-text">
              <span>Tinyhouse Atelier</span>
              <small>FRAMES · STEEL · KITS</small>
            </span>
          </a>
          <nav className="nav-links">
            {items.map(([label, href, opts]) => (
              opts && opts.external ? (
                <a key={label} href={href} target="_blank" rel="noopener">{label}</a>
              ) : (
                <a key={label} href={href} className={isActive(href) ? 'active' : ''}>{label}</a>
              )
            ))}
          </nav>
          <div className="nav-utility">
            <div className="currency-toggle">
              <button className={currency === 'GBP' ? 'active' : ''} onClick={() => setCurrency('GBP')}>GBP</button>
              <button className={currency === 'EUR' ? 'active' : ''} onClick={() => setCurrency('EUR')}>EUR</button>
            </div>
            <button onClick={openCart}>
              Basket <span className="cart-badge">{cartCount}</span>
            </button>
            <button
              className="nav-mobile-toggle"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                {mobileOpen ? <><line x1="2" y1="2" x2="16" y2="12" /><line x1="2" y1="12" x2="16" y2="2" /></>
                            : <><line x1="1" y1="3" x2="17" y2="3" /><line x1="1" y1="7" x2="17" y2="7" /><line x1="1" y1="11" x2="17" y2="11" /></>}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`}>
          {items.map(([label, href, opts]) => (
            opts && opts.external ? (
              <a key={label} href={href} target="_blank" rel="noopener">{label}<small>PDF · open</small></a>
            ) : (
              <a key={label} href={href}>{label}</a>
            )
          ))}
        </div>
      )}
    </>
  );
}

// ----- Banner -----
function ExportBanner() {
  return (
    <div className="banner">
      <span className="pulse"></span>
      <span>VAT-free export to UK &amp; EU · CE / UKCA · LGSF kits in 9–14 weeks · Door-to-door logistics</span>
      <a href="#/contact">Talk to us →</a>
    </div>
  );
}

// ----- Footer -----
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo" style={{marginBottom:16}}>
              <LogoMark />
              <span className="logo-text">
                <span>Tinyhouse Atelier</span>
                <small>FRAMES · STEEL · KITS</small>
              </span>
            </div>
            <p style={{fontSize:13, color:'var(--ink-mute)', maxWidth:300, lineHeight:1.7}}>
              Light-gauge steel-framed tiny houses and engineered LGSF kits. Designed and engineered in our atelier and exported to the UK and EU under EN 1090 / CE / UKCA.
            </p>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#/tiny-houses">Tiny Houses</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/faq">FAQs</a></li>
              <li><a href="public/media/tinyhouse-atelier-brochure.pdf" target="_blank" rel="noopener">Brochure (PDF)</a></li>
            </ul>
          </div>
          <div>
            <h5>Trade</h5>
            <ul>
              <li><a href="#/trade">Account Login</a></li>
              <li><a href="#/quote">Quote Request</a></li>
              <li><a href="#/trust">Mill Certificates</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:info@tinyhouseatelier.com">info@tinyhouseatelier.com</a></li>
              <li><a href="tel:01628362197">01628 362 197</a></li>
              <li style={{color:'var(--ink-mute)', fontSize:13, lineHeight:1.65}}>
                35a Station Parade<br />
                Cookham, Berkshire<br />
                SL6 9BR
              </li>
            </ul>
          </div>
          <div>
            <h5>Visit</h5>
            <ul>
              <li><a href="#/contact">Plan a visit</a></li>
              <li><a href="#/gallery">Project Gallery</a></li>
              <li><a href="#/trust">Certifications</a></li>
              <li><a href="#/quote">Request Quote</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 TINYHOUSE ATELIER · ALL RIGHTS RESERVED</span>
          <span>EN 1090-1 · ISO 9001 · CE / UKCA</span>
        </div>
      </div>
    </footer>
  );
}

// ----- Cart drawer -----
function CartDrawer() {
  const { cartOpen, closeCart, cart, removeFromCart, currency } = useApp();
  if (!cartOpen) return null;
  const total = cart.reduce((s, i) => s + i.qty * (currency === 'GBP' ? i.priceGBP : i.priceEUR), 0);

  return (
    <>
      <div className="cart-drawer-bg" onClick={closeCart}></div>
      <aside className="cart-drawer">
        <div className="cart-drawer-head">
          <h3>Basket <span style={{fontFamily:'var(--font-mono)', fontStyle:'normal', fontSize:11, letterSpacing:'0.2em', color:'var(--ink-mute)', marginLeft:8}}>{cart.length} ITEMS</span></h3>
          <button onClick={closeCart} style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.2em', color:'var(--ink-mute)'}}>CLOSE ✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 && <div className="empty-cart">— Basket is empty —</div>}
          {cart.map((it, idx) => (
            <div key={idx} className="cart-item">
              <div className="cart-item-img">{it.hero && <img src={it.hero} alt={it.name} />}</div>
              <div>
                <div className="cart-item-name">{it.name}</div>
                <div className="cart-item-meta">{it.spec || it.sub} · QTY {it.qty}</div>
                <button onClick={() => removeFromCart(idx)} style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.2em', color:'var(--ink-dim)', marginTop:8, textTransform:'uppercase'}}>Remove</button>
              </div>
              <div className="cart-item-price">{fmtPrice(it.qty * (currency === 'GBP' ? it.priceGBP : it.priceEUR), currency)}</div>
            </div>
          ))}
        </div>
        <div className="cart-foot">
          <div className="cart-total">
            <span className="label">Subtotal · ex. VAT</span>
            <span className="num">{fmtPrice(total, currency)}</span>
          </div>
          <button className="btn btn-primary btn-arrow" style={{width:'100%', justifyContent:'center'}}>Proceed to Quote</button>
          <p style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--ink-dim)', textAlign:'center', marginTop:14}}>VAT-free for UK/EU export · DDP available</p>
        </div>
      </aside>
    </>
  );
}

// ----- Toast -----
function Toast({ msg }) { return msg ? <div className="toast">{msg}</div> : null; }

// ----- Section head -----
function SectionHead({ fig, title, meta }) {
  return (
    <div className="section-head">
      <div className="fig">Fig. {fig}</div>
      <h2 className="section-title">{title}</h2>
      {meta && <div className="section-meta">{meta}</div>}
    </div>
  );
}

// ----- Crumb -----
function Crumb({ items }) {
  return (
    <div className="container">
      <div className="crumb">
        {items.map((it, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="sep">/</span>}
            {it.href ? <a href={it.href}>{it.label}</a> : <span style={{color:'var(--ink-bright)'}}>{it.label}</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AppCtx, useApp, fmtPrice, ViewportFrame, ExportBanner, Nav, Footer, CartDrawer, Toast, SectionHead, Crumb, LogoMark });
