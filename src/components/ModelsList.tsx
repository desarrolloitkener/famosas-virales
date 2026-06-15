import { modelos } from "@/data/content";

export default function ModelsList() {
  return (
    <section id="modelos" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">Modelos disponibles</h2>
          <p className="section-subtitle mx-auto mt-3">
            Más de {modelos.length} creadoras con contenido exclusivo en nuestros
            grupos premium.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {modelos.map((modelo) => (
            <div
              key={modelo}
              className="group flex items-center gap-3 rounded-xl border border-of-border bg-of-bg p-3 transition hover:border-of-blue/40 hover:bg-of-blue-light/50 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-of-blue to-[#0091ea] text-sm font-bold text-white">
                {modelo.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-of-text">
                  @{modelo.replace(/\s+/g, "")}
                </p>
                <p className="text-xs text-of-text-muted">Disponible</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
