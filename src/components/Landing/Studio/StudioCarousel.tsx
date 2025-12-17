"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TarotCardsData } from "./data";

export const StudioCarousel = () => {
 

  const tarotCards = TarotCardsData.map((card) => (
    <div
      key={card.id}
      className="h-178 w-118 overflow-hidden rounded-2xl backdrop-blur-sm relative"
    >
      <Image
        src={card.src}
        alt={card.alt}
        className="object-cover"
        sizes="(min-width:1280px) 30vw, 60vw absolute"
        fill

      />
      <div className="absolute opacity-0 flex p-4 h-full w-full  hover:opacity-100 transition-opacity duration-500">
        <p className="text-xl self-center  font-marcellus-sc z-30 bg-black/60 text-light text-center mx-5 p-20">{card.content}</p>
       <Image
        src={card.flippedSrc}
        alt={card.flippedAlt}
        className="object-cover "
        sizes="(min-width:1280px) 30vw, 60vw absolute z-20"
        fill

      />
      </div>
    </div>
  ));

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1280);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isDesktop) {
    return (
      <div className="mb-10 grid w-full max-w-5xl grid-cols-2 grid-rows-2 gap-8 px-6 pt-6 pb-12">
        {tarotCards}
      </div>
    );
  }

 
};
