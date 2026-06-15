import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import ModelsList from "@/components/ModelsList";
import PricingSection from "@/components/PricingSection";
import PaymentMethods from "@/components/PaymentMethods";
import FAQSection from "@/components/FAQSection";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import {
  pruebaContenidoSlides,
  referenciasSlides,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <CoverflowCarousel
          id="referencias"
          title="Referencias"
          subtitle="Mira ejemplos reales del tipo de contenido y calidad que encontrarás en nuestros grupos."
          slides={referenciasSlides}
        />

        <div className="bg-white">
          <CoverflowCarousel
            id="prueba"
            title="Prueba de contenido"
            subtitle="Vista previa del material exclusivo disponible para suscriptores."
            slides={pruebaContenidoSlides}
          />
        </div>

        <ModelsList />
        <PricingSection />
        <FAQSection />
        <PaymentMethods />
      </main>

      <footer className="border-t border-of-border bg-of-bg py-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold text-of-text">
            <span className="text-of-blue">Famosas</span>Virales
          </p>
          <p className="mt-2 text-xs text-of-text-muted">
            © {new Date().getFullYear()} FamosasVirales. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
      <FloatingTelegramButton />
    </>
  );
}
