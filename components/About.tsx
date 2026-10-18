export default function About() {
  return (
    <section id="tentang" className="about-section">
      <div className="about-flex">
        <div className="about-text">
          <h2>Cerita Kami</h2>
          <p>
            Kopi Nusantara dimulai dari dapur rumah kecil dengan satu mesin
            seduh manual. Kami percaya kopi terbaik datang dari biji yang jujur
            dan proses yang sabar. Setiap cangkir yang kami sajikan membawa
            cerita petani kopi dari berbagai daerah di Indonesia.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <strong>7+</strong>
            <span>Daerah Asal Kopi</span>
          </div>
          <div className="stat">
            <strong>50+</strong>
            <span>Menu Racikan</span>
          </div>
          <div className="stat">
            <strong>3</strong>
            <span>Tahun Beroperasi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
