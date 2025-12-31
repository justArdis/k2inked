"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import { Button } from "@/components/Button/Button";
import { cn } from "@/utils";
import { path } from "@/routes";

export const Form = () => {
  const [state, handleSubmit] = useForm("mandbapn");

  const hasError = (field: string) =>
    Array.isArray(state.errors) && state.errors.some((e) => e.field === field);

  const cls =
    "mt-2 w-full rounded-md border border-light bg-cream p-2 text-dark font-normal";

  if (state.succeeded) {
    return (
      <div className="tablet:w-[60%] my-40 flex flex-col items-center">
        <p
          role="status"
          aria-live="polite"
          className="tablet:text-lg mb-20 px-6 text-center text-base leading-7.5 font-light tracking-[0.12em]"
        >
          Dziękujemy za kontakt. Postaramy się odpowiedzieć tak szybko, jak to
          możliwe.
        </p>
        <Button
          variant="light"
          as="a"
          className="w-fit text-sm"
          ariaLabel="Powrót do strony głównej"
          href={path.HOME}
        >
          WRÓĆ NA STRONĘ GŁÓWNĄ
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="tablet:w-[60%] desktop:px-8 flex w-[90%] flex-col gap-6 px-2 py-8"
    >
      <div aria-live="polite" className="sr-only">
        {state.submitting ? "Wysyłanie…" : null}
      </div>

      <label htmlFor="name" className="mb-4 font-bold">
        IMIĘ:
        <input
          id="name"
          type="text"
          name="name"
          placeholder="IMIĘ"
          required
          autoComplete="name"
          aria-invalid={hasError("name") || undefined}
          className={cls}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </label>

      <label htmlFor="email" className="mb-4 font-bold">
        E-MAIL:
        <input
          id="email"
          type="email"
          name="email"
          placeholder="MAIL"
          required
          autoComplete="email"
          inputMode="email"
          aria-invalid={hasError("email") || undefined}
          className={cls}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </label>

      <label htmlFor="message" className="mb-4 font-bold">
        WIADOMOŚĆ:
        <textarea
          id="message"
          name="message"
          placeholder="TU WPISZ SWOJĄ WIADOMOŚĆ"
          required
          autoComplete="off"
          aria-invalid={hasError("message") || undefined}
          className={cn(cls, "h-50 resize-none")}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </label>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="mb-6 flex flex-row gap-3 text-sm font-light">
        <div>
          <input
            aria-describedby="dpa-consent-description"
            id="dpa-consent"
            name="dpa-consent"
            required
            type="checkbox"
            value="consent"
          />
        </div>
        <div>
          <label className="text-base font-normal" htmlFor="dpa-consent">
            ZGODA NA PRZETWARZANIE DANYCH OSOBOWYCH
          </label>
          <p id="dpa-consent-description">
            Zapoznałem/-am się z{" "}
            <Link
              href={path.REGULATIONS}
              className="hover:text-light/80 underline transition duration-300"
            >
              Regulaminem i Polityką Prywatności
            </Link>{" "}
            i rozumiem, że moje dane zostaną przetworzone w celu obsługi zapytania i udzielenia odpowiedzi.
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        ariaLabel="Prześlij wiadomość"
        variant="light"
        className="w-fit self-center text-sm"
      >
        {state.submitting ? "Wysyłanie…" : "WYŚLIJ WIADOMOŚĆ"}
      </Button>
    </form>
  );
};
