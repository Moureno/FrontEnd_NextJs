"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Apakah kopi yang digunakan asli dari petani lokal?",
    answer:
      "Ya, seluruh biji kopi yang kami gunakan berasal dari petani di berbagai daerah di Indonesia dan diseleksi langsung oleh tim kami.",
  },
  {
    question: "Apakah tersedia layanan pesan antar?",
    answer:
      "Tersedia. Kamu bisa memesan melalui WhatsApp di 0812-3456-7890 dan pesanan akan diantar ke area sekitar kedai.",
  },
  {
    question: "Bisakah tingkat kemanisan atau gula diatur sesuai selera?",
    answer:
      "Tentu. Kamu bisa meminta tingkat gula lebih sedikit, normal, atau lebih banyak saat memesan, baik langsung maupun via WhatsApp.",
  },
  {
    question: "Apakah ada menu kopi tanpa kafein atau non-kopi?",
    answer:
      "Saat ini fokus menu kami adalah racikan kopi. Untuk pilihan rendah kafein, kamu bisa memilih Kopi Susu Gula Aren dengan porsi espresso lebih sedikit — cukup sampaikan saat memesan.",
  },
  {
    question: "Apakah kedai buka setiap hari termasuk hari libur?",
    answer:
      "Kedai kami buka setiap hari, termasuk akhir pekan dan sebagian besar hari libur nasional, pukul 08.00 - 21.00 WIB.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <h2>Pertanyaan yang Sering Diajukan</h2>
      <p className="section-lead">
        Masih ada yang ingin ditanyakan? Klik pertanyaan di bawah untuk melihat
        jawabannya.
      </p>

      <div className="faq-list">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div className="faq-item" key={item.question}>
              <div
                className={`faq-question${isOpen ? " active" : ""}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {item.question}
                <span className="faq-icon">+</span>
              </div>
              <div className={`faq-answer${isOpen ? " open" : ""}`}>
                <div className="faq-answer-inner">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
