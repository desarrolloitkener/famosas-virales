import { metodosPago } from "@/data/content";

export default function PaymentMethods() {
  return (
    <section id="pago" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">Métodos de pago</h2>
          <p className="section-subtitle mx-auto mt-3">
            Aceptamos múltiples formas de pago para tu comodidad, tanto en
            México como internacionalmente.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metodosPago.map((metodo) => (
            <div
              key={metodo.id}
              className="flex flex-col items-center rounded-2xl border border-of-border bg-of-bg p-6 text-center transition hover:border-of-blue/40 hover:shadow-sm"
            >
              <span className="text-4xl">{metodo.icon}</span>
              <h3 className="mt-4 text-base font-bold text-of-text">
                {metodo.nombre}
              </h3>
              <p className="mt-2 text-sm text-of-text-muted">
                {metodo.descripcion}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-of-blue to-[#0091ea] p-8 text-center text-white sm:p-10">
          <h3 className="text-2xl font-bold">¿Listo para acceder?</h3>
          <p className="mx-auto mt-3 max-w-lg text-white/90">
            Realiza tu pago con el método de tu preferencia y contáctanos para
            recibir el acceso inmediato a tu grupo.
          </p>
          <a
            href="#precios"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-of-blue transition hover:bg-of-blue-light"
          >
            Ver planes de acceso
          </a>
        </div>
      </div>
    </section>
  );
}
