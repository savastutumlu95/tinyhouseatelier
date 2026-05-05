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

// ----- Frame -----
function ViewportFrame() {
  return (
    <>
      <div className="frame"><i></i><b></b></div>
      <div className="frame-mark tl">TINYHOUSE ATELIER · ROLL-FORMED LGSF</div>
      <div className="frame-mark tr">CE / UKCA · UK & EU EXPORT</div>
      <div className="frame-mark bl">FOLIO 26 · ED. I</div>
      <div className="frame-mark br">TÜRKOĞLU · MANCHESTER · ROTTERDAM</div>
    </>
  );
}

// ----- Banner -----
function ExportBanner() {
  return (
    <div className="banner">
      <span className="pulse"></span>
      <span>VAT-free export to UK & EU · CE / UKCA · LGSF kits in 9-14 weeks · Door-to-door logistics</span>
      <a href="#/quote" style={{color:'var(--silver-bright)'}}>REQUEST QUOTE →</a>
    </div>
  );
}

// ----- Nav -----
function Nav() {
  const { route, currency, setCurrency, cart, openCart } = useApp();
  const items = [
    ['Tiny Houses', '#/tiny-houses'],
    ['Frame Systems', '#/materials'],
    ['Compare', '#/compare'],
    ['Gallery', '#/gallery'],
    ['Trust', '#/trust'],
    ['Quote', '#/quote'],
  ];
  const isActive = (h) => route.startsWith(h.slice(1));
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#/" className="logo">
          Tinyhouse Atelier
          <small>FRAMES · STEEL · KITS</small>
        </a>
        <nav className="nav-links">
          {items.map(([label, href]) => (
            <a key={href} href={href} className={isActive(href) ? 'active' : ''}>{label}</a>
          ))}
        </nav>
        <div className="nav-utility">
          <div className="currency-toggle">
            <button className={currency === 'GBP' ? 'active' : ''} onClick={() => setCurrency('GBP')}>GBP</button>
            <button className={currency === 'EUR' ? 'active' : ''} onClick={() => setCurrency('EUR')}>EUR</button>
          </div>
          <a href="#/trade">Trade</a>
          <button onClick={openCart}>
            Basket <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
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
              Tinyhouse Atelier
              <small>FRAMES · STEEL · KITS</small>
            </div>
            <p style={{fontSize:13, color:'var(--silver-mute)', maxWidth:280, lineHeight:1.6}}>
              Light-gauge steel-framed tiny houses and engineered LGSF kits. Roll-formed, welded and finished in our Türkoğlu atelier, exported to the UK and EU under EN 1090 / CE / UKCA.
            </p>
          </div>
          <div>
            <h5>Tiny Houses</h5>
            <ul>
              <li><a href="#/tiny-houses">All Models</a></li>
              <li><a href="#/tiny-houses/th-serenity">Serenity</a></li>
              <li><a href="#/tiny-houses/th-aurora">Aurora A-Frame</a></li>
              <li><a href="#/tiny-houses/th-voyager">Voyager</a></li>
              <li><a href="#/compare">Compare vs UK</a></li>
            </ul>
          </div>
          <div>
            <h5>Frame Systems</h5>
            <ul>
              <li><a href="#/materials">Catalogue</a></li>
              <li><a href="#/materials/lgsf-c140">LGSF C-Section</a></li>
              <li><a href="#/materials/rockwool-130">Rockwool Wall Pack</a></li>
              <li><a href="#/materials/chassis-tandem">Tandem Chassis</a></li>
              <li><a href="#/materials/bim-package">BIM Package</a></li>
            </ul>
          </div>
          <div>
            <h5>Trade</h5>
            <ul>
              <li><a href="#/trade">Account Login</a></li>
              <li><a href="#/quote">Quote Request</a></li>
              <li><a href="#/trade">VAT-free Export</a></li>
              <li><a href="#/trust">Mill Certificates</a></li>
            </ul>
          </div>
          <div>
            <h5>Studio</h5>
            <ul>
              <li><a href="#/trust">Certifications</a></li>
              <li><a href="#/gallery">Project Gallery</a></li>
              <li><a href="mailto:hello@tinyhouseatelier.co">hello@tinyhouseatelier.co</a></li>
              <li><a href="tel:+442012345678">+44 20 1234 5678</a></li>
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
          <h3>Basket <span style={{fontFamily:'var(--font-mono)', fontStyle:'normal', fontSize:11, letterSpacing:'0.2em', color:'var(--silver-mute)', marginLeft:8}}>{cart.length} ITEMS</span></h3>
          <button onClick={closeCart} style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.2em', color:'var(--silver-mute)'}}>CLOSE ✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 && <div className="empty-cart">— Basket is empty —</div>}
          {cart.map((it, idx) => (
            <div key={idx} className="cart-item">
              <div className="cart-item-img">{it.hero && <img src={it.hero} alt={it.name} />}</div>
              <div>
                <div className="cart-item-name">{it.name}</div>
                <div className="cart-item-meta">{it.spec || it.sub} · QTY {it.qty}</div>
                <button onClick={() => removeFromCart(idx)} style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.2em', color:'var(--silver-dim)', marginTop:8, textTransform:'uppercase'}}>Remove</button>
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
          <p style={{fontFamily:'var(--font-mono)', fontSize:9, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--silver-dim)', textAlign:'center', marginTop:14}}>VAT-free for UK/EU export · DDP available</p>
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
            {it.href ? <a href={it.href}>{it.label}</a> : <span style={{color:'var(--silver-bright)'}}>{it.label}</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { AppCtx, useApp, fmtPrice, ViewportFrame, ExportBanner, Nav, Footer, CartDrawer, Toast, SectionHead, Crumb });
