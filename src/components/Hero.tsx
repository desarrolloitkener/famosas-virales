export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-of-blue-light via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-of-blue/20 bg-of-blue-light px-4 py-1.5 text-sm font-medium text-of-blue">
            <span className="h-2 w-2 rounded-full bg-of-blue" />
            Contenido exclusivo disponible
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-of-text sm:text-5xl lg:text-6xl">
            Bienvenido a{" "}
            <span className="text-of-blue">FamosasVirales</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-of-text-muted sm:text-xl">
            La plataforma con el mejor contenido digital de creadoras
            exclusivas. Accede a grupos premium con material actualizado
            constantemente.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#precios" className="of-btn-primary px-8 py-3.5 text-base">
              Ver precios de acceso
            </a>
            <a
              href="#referencias"
              className="of-btn-outline px-8 py-3.5 text-base"
            >
              Ver referencias
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-of-text-muted">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-of-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              +33 modelos
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-of-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Actualizaciones cada semana
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-of-blue"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Pago seguro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
