"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TarotCardsData } from "./data";

export const StudioCarousel = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1280);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isDesktop) setActiveCardId(null);
  }, [isDesktop]);

  const tarotCards = TarotCardsData.map((card) => {
    const isActive = !isDesktop && activeCardId === card.id;

    return (
      <div
        key={card.id}
        onClick={() => {
          if (!isDesktop) {
            setActiveCardId((prev) => (prev === card.id ? null : card.id));
          }
        }}
        className="group tablet:h-178 tablet:w-118 relative h-118 w-78 cursor-pointer overflow-hidden rounded-2xl backdrop-blur-sm"
        role={!isDesktop ? "button" : undefined}
        tabIndex={!isDesktop ? 0 : undefined}
        onKeyDown={(e) => {
          if (!isDesktop && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setActiveCardId((prev) => (prev === card.id ? null : card.id));
          }
        }}
      >
        <Image
          src={card.src}
          alt={card.alt}
          className="object-cover"
          sizes="(min-width:1280px) 30vw, 60vw"
          fill
        />

        <div
          className={[
            "absolute inset-0 flex p-4 opacity-0 transition-opacity duration-500",
            isDesktop ? "group-hover:opacity-100" : "",
            isActive ? "opacity-100" : "",
          ].join(" ")}
        >
          <p className="font-marcellus-sc text-light desktop:mx-5 desktop:p-20 desktop:text-xl text-md z-30 self-center bg-black/60 text-center p-10">
            {card.content}
          </p>

          <Image
            src={card.flippedSrc}
            alt={card.flippedAlt}
            className="z-20 object-cover"
            sizes="(min-width:1280px) 30vw, 60vw"
            fill
          />
        </div>
      </div>
    );
  });

  if (isDesktop) {
    return (
      <div className="mb-10 grid w-full max-w-5xl grid-cols-2 grid-rows-2 gap-8 px-6 pt-6 pb-12">
        {tarotCards}
      </div>
    );
  }

  return (
    <div className="mb-10 w-full max-w-5xl flex flex-col items-center gap-8 px-6 pt-6 pb-12">
  
      {tarotCards}
      
    </div>
  );
};
