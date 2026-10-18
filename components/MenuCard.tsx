"use client";

import Image from "next/image";
import { useState } from "react";

type MenuCardProps = {
  image: string;
  width: number;
  height: number;
  name: string;
  description: string;
  price: string;
};

export default function MenuCard({
  image,
  width,
  height,
  name,
  description,
  price,
}: MenuCardProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);
  const [pop, setPop] = useState(false);
  const [countVisible, setCountVisible] = useState(true);


  function handleLike() {
    const next = liked ? Math.max(0, count - 1) : count + 1;

    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
      setPop(true);
      setTimeout(() => setPop(false), 250);
    }

    setCountVisible(false);
    setTimeout(() => {
      setCount(next);
      setCountVisible(true);
    }, 100);
  }

  return (
    <article className="menu-card">
      <Image
        src={image}
        alt={name}
        width={width}
        height={height}
        sizes="(min-width: 992px) 25vw, (min-width: 576px) 50vw, 100vw"
        className="menu-img"
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">{price}</span>
      <div className="menu-footer">
        <span className="price">{price}</span>
        <div className="like-widget">
          <button
            className={`like-btn${liked ? " liked" : ""}${pop ? " like-pop" : ""}`}
            type="button"
            aria-label="Suka menu ini"
            onClick={handleLike}
          >
            <span className="like-icon">&#9825;</span>
          </button>
          <span
            className="like-count"
            style={{
              opacity: countVisible ? 1 : 0,
              transition: countVisible ? "opacity 150ms" : "opacity 100ms",
            }}
          >
            {count}
          </span>
        </div>
      </div>
    </article>
  );
}
