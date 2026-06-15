import { getTelegramUrl, planes } from "@/data/content";

export default function PricingSection() {
  return (
    <section id="precios" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">Costo de acceso</h2>
          <p className="section-subtitle mx-auto mt-3">
            Elige el plan que mejor se adapte a ti. Precios en pesos mexicanos y
            dólares americanos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${
                plan.destacado
                  ? "border-of-blue ring-2 ring-of-blue/20"
                  : "border-of-border"
              }`}
            >
              {plan.destacado && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-of-blue px-4 py-1 text-xs font-semibold text-white">
                  Más popular
                </span>
              )}

              <h3 className="text-lg font-bold text-of-text">{plan.nombre}</h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-of-blue">
                  ${plan.mxn}
                </span>
                <span className="text-sm text-of-text-muted">MXN</span>
              </div>

              <p className="mt-1 text-sm text-of-text-muted">
                o{" "}
                <span className="font-semibold text-of-text">${plan.usd} USD</span>
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.beneficios.map((beneficio) => (
                  <li
                    key={beneficio}
                    className="flex items-start gap-2 text-sm text-of-text-muted"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-of-blue"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {beneficio}
                  </li>
                ))}
              </ul>

              <a
                href={getTelegramUrl(plan.telegramMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block py-3 text-center text-sm font-semibold transition ${
                  plan.destacado
                    ? "of-btn-primary"
                    : "of-btn-outline hover:border-of-blue hover:text-of-blue"
                }`}
              >
                Obtener acceso
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
