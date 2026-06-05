import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

const breadcrumbs = [
  { label: "Accueil", href: "/" },
  { label: "Confidentialité", href: "/legal/confidentialite" },
];

export default function ConfidentialitePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-serif text-4xl font-semibold text-virage-homme-anthracite mt-6 mb-8">
        Politique de confidentialité
      </h1>
      <div className="prose-virage-homme">
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
          Informatique et Libertés, cette page détaille notre politique de confidentialité.
        </p>
        <h2>Données collectées</h2>
        <p>
          Nous collectons uniquement les données que vous nous fournissez volontairement :
          adresse email lors de l&apos;inscription à la newsletter ou du téléchargement du
          guide gratuit, et données de paiement lors d&apos;un achat (traitées par Stripe,
          notre prestataire de paiement sécurisé).
        </p>
        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise pas de cookies publicitaires. Nous utilisons Plausible
          Analytics, un outil d&apos;analyse d&apos;audience respectueux de la vie privée,
          qui n&apos;utilise pas de cookies et ne collecte pas de données personnelles.
        </p>
        <h2>Vos droits</h2>
        <p>
          Vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et
          d&apos;opposition concernant vos données. Pour l&apos;exercer, écrivez à
          bonjour@virage-homme.com.
        </p>
        <h2>Destinataires des données</h2>
        <p>
          Vos données sont transmises à Brevo (emailing) et Stripe (paiement), nos
          sous-traitants. Elles ne sont jamais revendues à des tiers.
        </p>
      </div>
    </div>
  );
}
