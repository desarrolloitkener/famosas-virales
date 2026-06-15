"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle mx-auto mt-3">
            Resolvemos las dudas más comunes sobre nuestros grupos y acceso.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-of-border bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-of-bg"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-of-text">
                    {faq.pregunta}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-of-blue transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-of-border px-5 py-4">
                    <p className="text-sm leading-relaxed text-of-text-muted">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
