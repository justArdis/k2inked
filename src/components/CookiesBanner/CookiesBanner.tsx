"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hasCookiesConsent, setCookiesConsent } from "./cookiesConsent";
import { STATIC_ROUTES } from "@/routes";
import { Button } from "../Button/Button";

export const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!hasCookiesConsent());
  }, []);

  const onAccept = () => {
    setCookiesConsent();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto w-full max-w-5xl px-4 pb-4">
        <div className="border-light/10 bg-darker/80 rounded-2xl border p-4 shadow-lg backdrop-blur-md">
          <div className="tablet:flex-row tablet:items-center tablet:justify-between flex flex-col gap-8 px-3 py-3">
            <p className="text-light text-sm leading-6 font-light tracking-[0.06em]">
              Używamy plików cookies niezbędnych do działania strony oraz do
              zapamiętania Twoich ustawień. Klikając „Akceptuję”, potwierdzasz
              zapoznanie się z zasadami opisanymi w{" "}
              <Link
                href={STATIC_ROUTES.COOKIES_POLICY}
                className="link-hover underline underline-offset-4"
              >
                Polityce cookies
              </Link>
              .
            </p>

            <div className="tablet:flex-row flex flex-col gap-2">
              <Button
                ariaLabel="Przejdź do podstrony Polityka cookies"
                variant="light"
                onClick={onAccept}
              >
                Akceptuję
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
