export default function Header() {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a href="#beranda" className="brand">
          Kopi Nusantara
        </a>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <label htmlFor="nav-toggle" className="nav-burger" aria-label="Buka menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <nav className="main-nav">
          <a href="#beranda">Beranda</a>
          <a href="#menu">Menu</a>
          <a href="#tentang">Tentang</a>
          <a href="#faq">FAQ</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </div>
    </header>
  );
}
