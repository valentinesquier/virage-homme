import { getProduct } from "@/lib/products";
import { HeroProduct } from "@/components/product/hero-product";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { BreadcrumbJsonLd } from "@/components/shared/breadcrumb-jsonld";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protocole 12 Semaines — Retrouver sa vitalité après 40 ans",
  description:
    "Mon programme en 4 piliers pour reprendre le contrôle. 75 pages, 27 €. Sommeil, alimentation, force, gestion du stress.",
};

export default function ProtocolePage() {
  const product = getProduct("protocole-12-semaines");

  if (!product) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="font-serif text-2xl text-virage-anthracite">Produit non trouvé</h1>
      </div>
    );
  }

  const breadcrumbs = [
    { label: "Accueil", href: "/" },
    { label: "Protocole 12 Semaines", href: "/protocole-12-semaines" },
  ];

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.title,
        description: product.description,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          seller: { "@type": "Organization", name: "esq.group" },
        },
      }} />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <div className="container mx-auto max-w-6xl px-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <HeroProduct product={product} />

      <section className="py-16 bg-virage-anthracite/3">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl font-semibold text-center text-virage-anthracite mb-10">
            Questions fréquentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Ce protocole remplace-t-il un traitement hormonal (TRT) ?",
                a: "Non. Le TRT est une décision médicale entre vous et votre urologue ou endocrinologue. Ce protocole raconte ce que j'ai fait sans hormones. Si vous envisagez un TRT, parlez-en à votre médecin.",
              },
              {
                q: "Faut-il être déjà sportif ?",
                a: "Non. Le programme commence avec des exercices au poids du corps et des haltères modérés. Il est conçu pour un homme de 40+ ans qui n'a jamais fait de musculation, ou qui en a fait il y a longtemps.",
              },
              {
                q: "Combien de temps par semaine ?",
                a: "3 séances de sport de 45 min, 10 min de préparation alimentaire par jour, et des ajustements sur le sommeil. Rien d'extrême.",
              },
              {
                q: "Et si ça ne marche pas pour moi ?",
                a: "14 jours pour demander un remboursement intégral, sans justificatif. J'ai testé ce protocole sur moi-même pendant 24 mois — mais chaque corps est différent.",
              },
            ].map((faq, i) => (
              <details key={i} className="group bg-virage-creme border border-virage-anthracite/10 rounded-lg">
                <summary className="font-sans font-medium text-virage-anthracite p-5 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-virage-bleu text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-5 font-sans text-sm text-meta-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
