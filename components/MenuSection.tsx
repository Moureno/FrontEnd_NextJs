import MenuCard from "./MenuCard";

const menuItems = [
  {
    image: "/images/kopi-susu-gula-aren.jpeg",
    width: 736,
    height: 981,
    name: "Kopi Susu Gula Aren",
    description:
      "Espresso robusta lokal dipadukan susu segar dan gula aren asli.",
    price: "Rp 25.000",
  },
  {
    image: "/images/kopi-tubruk.jpeg",
    width: 736,
    height: 1104,
    name: "Kopi Tubruk Nusantara",
    description:
      "Kopi hitam tradisional, diseduh kasar khas warung kopi rumahan.",
    price: "Rp 27.000",
  },
  {
    image: "/images/cappucino.jpeg",
    width: 736,
    height: 736,
    name: "Cappuccino",
    description:
      "Minuman kopi khas Italia yang dibuat dari perbandingan seimbang antara espreso, susu panas, dan busa susu.",
    price: "Rp 24.000",
  },
  {
    image: "/images/americano.jpeg",
    width: 736,
    height: 1104,
    name: "Americano",
    description:
      "Minuman kopi hitam yang dibuat dengan mencampurkan satu atau dua shot espresso dengan air panas",
    price: "Rp 22.000",
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="menu-section">
      <h2>Menu Favorit Kami</h2>
      <p className="section-lead">
        Dipilih dari biji kopi pilihan berbagai daerah di Indonesia.
      </p>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuCard key={item.name} {...item} />
        ))}
      </div>
    </section>
  );
}
